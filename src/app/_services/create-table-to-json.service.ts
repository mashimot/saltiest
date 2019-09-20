import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as oracle_grammar from './../_parser/create-table-oracle-to-json';
import { Content, Html, Definition } from "./../_core/model";
//import * as Parser from 'sql-ddl-to-json-schema';


declare global {
	interface String {
		replaceAllDecimalCommaToDecimalDot(): string;
	}
}

String.prototype.replaceAllDecimalCommaToDecimalDot = function(){
	let regex = {
		valueBtwParentheses: `\\(([^)]*)\\)`,
		onlyNumeric: `(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)`
	};

	return this.replace(/^\((.+)\)$/, '$1')
	.replace(new RegExp(regex.valueBtwParentheses, "g"), (currentString, first) => {
		let r = new RegExp(regex.onlyNumeric, 'g');
		if(r.test(first)){
			return "(" +  first.replace(/,/g, '.') + ")";
		}
		return currentString;
	});
}

@Injectable({
	providedIn: 'root'
})
export class CreateTableToJsonService{
	_sql: string;
	_database: string;
	_errors: Object = {};
	_data: Array<any> = [];
	/*_rawData: {
		create_table_statement: {
			table_name: string
		},
		create_definition: Array<any>
	};*/
	_rawData: any;

	_table_name: string;
    _customLabel: {
        [key: string]: string
    };	
	html: Html;
	definition: Definition;
	category: string = 'form';
 
	constructor() {
		this._customLabel = this.getCustomLabelName();
		this._data = [];
	}

	setDataBase(database: string){
		this._database = database;
	}

	getDataBase(){
		return this._database;
	}

	parse(): void{
		this._sql = this._sql.replace(/\s+/g, " ").toLowerCase();
		//const parser = new nearley.Parser(oracle_grammar);
		//let parser = Parser;
		let parser = new nearley.Parser(oracle_grammar);
		if(this.getDataBase() == 'mysql'){
			//parser = new Parser('mysql');
		}
		if(this.getDataBase() == 'oracle'){
			//parser = new nearley.Parser(oracle_grammar);
		}

		try {
			const options = {};
			if(this.getDataBase() == 'mysql'){
				const results = parser.feed(this._sql).toJsonSchemaArray(options);
				this._rawData = results[0];
				this.convertDataMysql();	
			}
			if(this.getDataBase() == 'oracle'){
				const results = parser.feed(this._sql.replaceAllDecimalCommaToDecimalDot()).results;
				this._rawData = results[0];
				this.convertDataOracle();
			}
		} catch(error){
			//this._errors.push(error);
			this._errors = this.reportError(error, parser);
		}
	}

	reportError(e, parser) {
		if(parser.table){
			const lastColumnIndex = parser.table.length - 2;
			const lastColumn = parser.table[lastColumnIndex];
			const token = parser.lexer.buffer[parser.current];
	
			return {
				title: `You have an error in your SQL syntax.`,
				msg: this.setCharAt(					
					parser.lexer.buffer, 
					parser.current, 
					token
				)
			};
				
		}
		return {};
		//console.log(parser.lexer.buffer);
		//console.log(`Instead of a ${JSON.stringify(token)}, I was expecting to see one of the following:`);
		//console.log(lastColumn.states);
	}

	setCharAt(str: string, index: number, chr: string) {
		if(index > str.length-1) {
			return {
				str: str,
				strBegin: '',
				char: chr,
				strEnd: ''
			};
		}
		
		//return str.substr(0, index) + chr + str.substr(index+1);
		return {
			str: str,
			strBegin: str.substr(0, index),
			char: chr,
			strEnd: str.substr(index+1)
		};
	}

	convertDataMysql(): void{
		if(Object.keys(this._rawData).length > 0){	
			let definitions = this._rawData.definitions;
			let required = this._rawData.required;

			for(let columnName in definitions){
				if (definitions.hasOwnProperty(columnName)) {
					let definition = definitions[columnName];
					let column_name = columnName;
					let is_primary_key = false;
					let nullable = false;
					if(required instanceof Array && required.length > 0){
						required.forEach(value => {
							if(value == columnName)
								nullable = true;
						});
					}
					this._data.push({
						html: {
							category: this.category,
							tag: definition.tag || 'text',
							label: this.customLabelName(column_name)
						},
						definition: {
							is_primary_key: is_primary_key || false,
							column_name: column_name,
							type: definition.type.toLowerCase(),
							size: definition.maxLength || '',
							nullable: nullable || false
						}
					});
				}
			};
		}
	}

	convertDataOracle(): void{
		if(this._rawData instanceof Object && Object.keys(this._rawData).length > 0){	
			let create_table_statement = this._rawData.create_table_statement;
			let create_definition = this._rawData.create_definition;
			this._table_name = create_table_statement.table_name;

			create_definition.forEach(column => {
				let column_name = column.name;
				let data_type = column.data_type;
				let column_definition = column.column_definition;
				let is_primary_key = false;
				let nullable = false;
				if(column_definition instanceof Array && column_definition.length > 0){
					column_definition.forEach(c => {
						if(typeof c.nullable != 'undefined')
							nullable = c.nullable;
						if(typeof c.is_primary_key != 'undefined')
							is_primary_key = c.is_primary_key;
					});
				}
				this._data.push({
					html: {
						category: this.category,
						tag: data_type.tag,
						label: this.customLabelName(column_name)
					},
					definition: {
						is_primary_key: is_primary_key,
						column_name: column_name,
						type: data_type.type.toLowerCase(),
						size: data_type.size,
						nullable: nullable
					}
				});
			});
		}
	}

	customLabelName(column_name: string): string {
		return column_name
		.split('_')
        .map(partialName => {
            let value = this._customLabel[partialName];
            if (typeof value !== 'undefined')
                partialName = value;

            return partialName.charAt(0).toUpperCase() + partialName.substr(1);
        })
        .join(' ')
        .trim();
    }

	hasError(): boolean{
		return Object.keys(this._errors).length > 0? true: false;
	}

	getError(): any{
		return this._errors;
	}

	setSql(sql: string){
		this._sql = sql;
	}

	getData(): Array<Content>{
		return this._data;
	}

	getRawData(){
		return this._rawData;
	}

	getTableName(): string{
		return this._table_name;
	}

    getCustomLabelName(): {
        [key: string]: string
    } {
        return {
            'dat': 'Data',
            'qtd': 'Quantidade',
            'cod': 'Código',
            'dsc': 'Descrição',
            'ind': '',
            'usu': 'Usuário',
            'tpo': 'Tipo',
            'nom': 'Nome',
            'est': 'Estado',
            'acao': 'Ação',
            'psv': 'Processo Seletivo',
            'per': 'Porcentagem',
            'abv': 'Abreviatura',
            'obs': 'Observação',
            'num': 'Número',
            'usuario': 'Usuário',
            'docto': 'Documento',
            'doc': 'Documento',
			'val': 'Valor',
			'valor': 'Valor',
            'sta': 'Status',
            'config': 'Configuração',
            'inicio': 'Ínicio',
            'termino': 'Término',
            'situacao': 'Situação',
            'nivel': 'Nível'
        };
    }	
}
