import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as bracketexpr_grammar from './../_parser/create-table-oracle-to-json';
import { Content, Html, Table } from "./../_core/model";

@Injectable({
	providedIn: 'root'
})
export class CreateTableToJsonService {
	_string: string;
	_errors: Array<string> = [];
	_data: Array<any> = [];
	_rawData: Array<any>;
	_table_name: string;
    _customLabel: {
        [key: string]: string
    };	
	html: Html;
	table: Table;
	category: string = 'form';

	constructor() {
		this._customLabel = this.getCustomLabelName();
		this._rawData = [];
		this._data = [];
	}
	
	parse(): void{
		this._string = this._string.replace(/\s+/g, " ").toLowerCase();
		const parser = new nearley.Parser((bracketexpr_grammar));
		try {
			parser.feed(this._string);
			this._rawData = parser.results[0];
			this.convertData();
		} catch(error){
			this._errors.push(error);
		}
	}

	convertData(): void{
		if(this._rawData instanceof Array && this._rawData.length > 0){
			this._table_name = this._rawData[0].table_name;
			var rawData = this._rawData
			.filter(item => (item instanceof Array || item instanceof Object));
			let lastRawItem = rawData[2]; 
			console.log(lastRawItem);
			rawData[1].forEach(column => {
				var columnName = column[0].name;
				column.forEach(item => {
					this.convertToHtmlTable(item, columnName);
				});
			});
			this.convertToHtmlTable(lastRawItem, lastRawItem.name);
		} else {
			//this._errors.push();
		}
	}


	convertToHtmlTable(item, columnName){
		if(item instanceof Object && Object.keys(item).length > 0){						
			var data_type = item.data_type;
			var column_definition = item.column_definition;
			var nullable = false;
			var is_primary_key = false;
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
					label: this.customLabelName(columnName)
				},
				table: {
					isPrimaryKey: is_primary_key,
					columnName: columnName,
					type: data_type.type,
					size: data_type.size,
					nullable: nullable
				}
			});
		}
	}
	
    customLabelName(columnName: string): string {
		return columnName
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

	getRawData(): Array<any>{
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
