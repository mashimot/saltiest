import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as bracketexpr_grammar from './../_parser/create-table-oracle-to-json';
import { Content, Html, Table } from "./../_core/model";

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
	_string: string;
	_errors: Array<string> = [];
	_data: Array<any> = [];
	_rawData: {
		create_table_statement: {
			table_name: string
		},
		create_definition: Array<any>
	};
	_table_name: string;
    _customLabel: {
        [key: string]: string
    };	
	html: Html;
	table: Table;
	category: string = 'form';
 
	constructor() {
		this._customLabel = this.getCustomLabelName();
		this._data = [];
	}

	parse(): void{
		this._string = this._string.replace(/\s+/g, " ").toLowerCase();
		const parser = new nearley.Parser((bracketexpr_grammar));
		try {
			parser.feed(this._string.replaceAllDecimalCommaToDecimalDot());
			this._rawData = parser.results[0];
			this.convertData();
		} catch(error){
			this._errors.push(error);
		}
	}

	convertData(): void{
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
					table: {
						is_primary_key: is_primary_key,
						column_name: column_name,
						type: data_type.type.toLowerCase(),
						size: data_type.size,
						nullable: nullable
					}
				});
			});
		} else {
			//this._errors.push();
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
		return this._errors.length > 0? true: false;
	}

	getError(): Array<string>{
		return this._errors;
	}

	setString(string: string){
		this._string = string;
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
