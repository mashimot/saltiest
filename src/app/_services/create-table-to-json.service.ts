import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as oracle_grammar from './../_parser/create-table-oracle-to-json';
//import * as Parser from './../_parser/lib/parser';
//const Parser = require('./../_parser/lib/parser');
import { Content, IHtml, IDefinition, Page } from "./../_core/model";


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
	_schemas: Array<{
		name: string,
		data: Array<any>,
		primaryKey: Array<any>,
		definitions?: Array<any>,
		pages?: Page
	}>;
	/*_rawSchema: {
		create_table_statement: {
			table_name: string
		},
		create_definition: Array<any>
	};*/
	_rawSchema: any;

	_table_name: string;
    _customLabel: {
        [key: string]: string
    };	
	html: IHtml;
	definition: IDefinition;
	category: string = 'form';
 
	constructor() {
		this._customLabel = this.getCustomLabelName();
		this._schemas = [];
	}

	setDataBase(database: string){
		this._database = database;
	}

	getDataBase(){
		return this._database;
	}

	parse(): void{
		this._sql = this._sql.replace(/\s+/g, " ").toLowerCase();
		let p = new nearley.Parser(oracle_grammar);
		/*if(this.getDataBase() == 'mysql'){
			p = new Parser('mysql');
		}*/
		try {
			const options = {};
			/*if(this.getDataBase() == 'mysql'){
				const options = {};
				p.feed(this._sql);
				const parsedJsonFormat = p.results;
				const compactJsonTablesArray = p.toCompactJson(parsedJsonFormat);
				this._rawSchema = compactJsonTablesArray;
				this.convertDataMysql();
			}*/
			if(this.getDataBase() == 'oracle'){
				const results = p.feed(this._sql.replaceAllDecimalCommaToDecimalDot()).results;
				this._rawSchema = results[0];
				this.convertDataOracle();
			}
		} catch(error){
			//this._errors.push(error);
			this._errors = this.reportError(error, p);
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
			strEnd: str.substr(index + 1)
		};
	}

	convertDataMysql(): void{
		if(this._rawSchema.length > 0){	
			this._rawSchema.forEach(schema => {
				var data = [];
				var primaryKey = schema.primaryKey;
				schema.columns.forEach(column => {
					var hasPk = false;
					if(typeof schema.primaryKey != 'undefined'){
						//console.log(column.name);
						schema.primaryKey.columns.forEach(pk => {
							if(pk.column == column.name){
								hasPk = true;
							}
						});
					}
					data.push({
						html: {
							category: this.category,
							tag: column.definition || 'text',
							label: this.customLabelName(column.name)
						},
						definition: column
						/*definition: {
							is_primary_key: hasPk,
							column_name: column.name,
							type: column.type.datatype.toLowerCase(),
							size:  column.type.length || '',
							nullable: column.options.nullable
						}*/
					});
					/*data.push({
						html: {
							category: this.category,
							tag: 'definition.tag' || 'text',
							label: this.customLabelName(column.name)
						},
						definition: {
							is_primary_key: hasPk,
							column_name: column.name,
							type: column.type.toLowerCase(),
							size: column.type.length || '',
							nullable: column.options.nullable
						}
					});		*/			
				});
				this._schemas.push({
					name: schema.name,
					data: data,
					primaryKey: primaryKey,
					definitions: schema.columns				
				});
			});
			console.log('schema', this._schemas);
		}
		
		/*if(Object.keys(this._rawSchema).length > 0){	
			console.log(this._rawSchema);
			let definitions = this._rawSchema.definitions;
			let required = this._rawSchema.required;
			this._schemas.$id = this._rawSchema.$id;
			this._table_name = this._rawSchema.$id;
			this._schemas.definitions = definitions;
			this._schemas.required = required;

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
					if(typeof definition.$comment != 'undefined'){
						if(definition.$comment == 'primary key'){
							is_primary_key = true;
						}
					}
					this._schemas.data.push({
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
		}*/
	}

	convertDataOracle(): void{
		console.log('raw', this._rawSchema);
		if(Array.isArray(this._rawSchema) && this._rawSchema.length > 0){	
			this._rawSchema.forEach(schema => {
				let data = [];
				let definitions = [];
				let primaryKey = [];
				let create_table_statement = schema.create_table_statement;
				let create_definition = schema.create_definition;
				let last_create_definition = schema.last_create_definition;

				this._table_name = create_table_statement.table_name;
				create_definition.push(last_create_definition);
				create_definition.forEach(column => {
					let column_name = column.name;
					let data_type = column.data_type;
					let column_definition = column.column_definition;
					let is_primary_key = false;
					let nullable = true;

					if(column_definition instanceof Array && column_definition.length > 0){
						column_definition.forEach(c => {
							if(typeof c.nullable != 'undefined'){
								nullable = c.nullable;
							}
							if(typeof c.is_primary_key != 'undefined'){
								is_primary_key = c.is_primary_key;
							}
						});
					}
					if(is_primary_key){
						primaryKey.push({
							column: column_name
						});
					} 
					var obj = {
						html: {
							category: this.category,
							tag: data_type.tag,
							label: this.customLabelName(column_name)
						},
						definition: {
							name: column_name,
							type: data_type,
							options: {
								nullable: nullable || false,
							}
						}
					};
					data.push(obj);
					definitions.push(obj);
				});

				this._schemas.push({
					name: this._table_name,
					data: data,
					primaryKey: primaryKey,
					definitions: definitions			
				});
			});
		}
		console.log(this._schemas);
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

	getSchemas(){
		return this._schemas;
	}

	getRawData(){
		return this._rawSchema;
	}

	getTableName(): string {
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
