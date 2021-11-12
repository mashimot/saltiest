import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as oracle_grammar from './../_parser/create-table-oracle-to-json';
import { Content, Page } from "./../_core/model";


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
		primaryKey: Array<string>,
		foreignKeys?: Array<any>,
		uniqueKeys?: Array<any>,
		definitions?: Array<any>,
		pages?: Page
	}>;
	_rawSchema: any;

	_table_name: string;
    _customLabel: {
        [key: string]: string
    };	
	definition: Content;
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
		console.log(parser);

		if(parser.table){
			var s = parser.lexer.buffer;
			var i = s.lastIndexOf(" ", parser.current);
			var j = s.indexOf(" ", i + 1);
			console.log(s.substr(i, j-i));
			//var afterbang = s.substring(parser.current, s.indexOf(' ', parser.current));
			//console.log(afterbang);
			const lastColumnIndex = parser.table.length - 2;
			const lastColumn = parser.table[lastColumnIndex];
			const token = parser.lexer.buffer[parser.current];
	
			return {
				title: `You have an error in your SQL syntax.`,
				/*msg: this.setCharAt(					
					parser.lexer.buffer, 
					parser.current, 
					token
				)*/
				msg: this.replaceBetween(
					parser.lexer.buffer, 
					i,
					j,
					s.substr(i, j-i),
				)
			};
				
		}
		
		return {};
	}
	
	replaceBetween(str, start, end, what) {
		return {
			str: str,
			strBegin: str.substring(0, start),
			strMiddle: what,
			strEnd: str.substring(end),
			hue: str.substring(0, start) + what + str.substring(end)
		};
	}

	convertDataMysql(): void{
		if(this._rawSchema.length > 0){	
			this._schemas = this._rawSchema.map(schema => {
				let data = schema.columns.map(column => {
					return {
						html: {
							category: this.category,
							tag: column.definition || 'text',
							label: this.customLabelName(column.name)
						},
						definition: column
					};
				});
				
				let unique_keys = schema.uniqueKeys || [];
				let primary_key = schema.primaryKey || [];


				return {
					name: schema.name,
					data: data,
					//columns: schema.columns,
					primary_key: primary_key.columns.map(item => item.column),
					unique_keys: unique_keys
						.map(item => item.columns.map(d => d.column))
						.map(item => item[0]),
				};
			});
			console.log('schema', this._schemas);
			console.log('rawSchema', this._rawSchema);
		}

	}

	convertDataOracle(): void{

		if(Array.isArray(this._rawSchema) && this._rawSchema.length > 0){	
			this._rawSchema.forEach(schema => {
				let data = [];
				let definitions = [];
				let primaryKey = [];
				const create_table_statement = schema.create_table_statement;
				const create_definition = schema.create_definition;
				const last_create_definition = schema.last_create_definition;

				this._table_name = create_table_statement.table_name;
				create_definition.push(last_create_definition);
				create_definition.forEach(column => {
					const column_name = column.name;
					const data_type = column.data_type;
					const column_definition = column.column_definition;
					const is_primary_key = false;
					let options = {
						nullable: true
					};

					if(column_definition instanceof Array && column_definition.length > 0){
						column_definition.forEach(c => {
							if(typeof c.nullable != 'undefined'){
								options.nullable = c.nullable;
							}
							if(typeof c.values != 'undefined'){
								data_type.values = c.values;
							}
						});
					}
					if(is_primary_key){
						primaryKey.push({
							column: column_name
						});
					} 
					var content = {
						name: column_name,
						type: data_type,
						options: options,
						html: {
							category: this.category,
							tag: data_type.tag,
							label: this.customLabelName(column_name)
						}
					};
					data.push(content);
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
