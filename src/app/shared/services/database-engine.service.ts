import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class DatabaseEngine {
	public static type: string = 'ORACLE'; //Oracle as Default
	/*
	key = data_type. ex: type CHAR
	value = input type of html. ex. <input type="text" />
	| key         | type
	| CHAR        | <input type="text" />
	| NUMBER      | <input type="number" />
	| TIMESTAMP   | <input type="text" class="datepicker"/> //from datepicker plugin
	| VARCHAR2    | <textarea></textarea>
	*/	
	public static engines = {
		ORACLE:{
			logo: 'https://i.pinimg.com/originals/9f/40/17/9f4017db985f89ae182ba4b0db568677.jpg',
			types: {
				CHAR: 'text',
				NCHAR: 'text',
				VARCHAR2: 'textarea',
				VARCHAR: 'textarea',
				NVARCHAR2: 'textarea',
				INTEGER: 'number',
				CLOB: 'textarea',
				NCLOB: 'textarea',
				LONG: 'number',
				NUMBER: 'number',
				DATE: 'date',
				INTERVAL: 'text',
				TIMESTAMP: 'date'
			}
		},
		MYSQL: {
			logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
			types: {
				//integer
				INT: 'TEXT',
				SMALLINT: 'TEXT',
				TINYINT: 'TEXT',
				MEDIUMINT: 'TEXT',
				BIGINT: 'TEXT',
				//real
				FLOAT: 'NUMBER',
				DOUBLE: 'NUMBER',
				DECIMAL: 'NUMBER',
				//text
				CHAR: 'TEXT',
				VARCHAR: 'TEXT',
				TEXT: 'TEXT',
				MEDIUMTEXT: 'TEXT',
				LONGTEXT: 'TEXT',
				//binary
				BINARY: 'TEXT',
				//temporal
				DATE: 'TEXT',
				TIME: 'TEXT',
				DATETIME: 'TEXT',
				TIMESTAMP: 'TEXT'
			}
		}
	};

	public static getDatabaseEngines() {
		return Object.keys(this.engines).map(
			item => { 
				return {
					engine: item.toLowerCase(), 
					logo: this.engines[item].logo
				}
			}
		);
	}
	
	//Default is "ORACLE"
   	public static get(dbName: string = "ORACLE") { 
		let engineExists = Object.keys(this.engines).find((item) => {
			return item == dbName;
		});
		
		if(engineExists){
			var t = {};
			for(let key in this.engines[dbName].types){
				if(this.engines[dbName].types.hasOwnProperty(key)){
					t[key] = this.engines[dbName].types[key].toLowerCase();
				}
			}
			return t;
		}
		return {};
	}
}
