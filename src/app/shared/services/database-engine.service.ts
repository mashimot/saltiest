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
		ORACLE: {
			CHAR: 'text',
			NCHAR: 'text',
			VARCHAR2: 'textarea',
			VARCHAR: 'textarea',
			NVARCHAR2: 'textarea',
			INTEGER: 'number',
			/*CLOB : true,
			NCLOB : true,*/
			LONG: 'number',
			NUMBER: 'number',
			DATE: 'date',
			INTERVAL: 'text',
			TIMESTAMP: 'date'
		}
	};

	public static getDatabaseEngines() {
		return Object.keys(this.engines).map(
			data => { return data.toLowerCase(); }
		);
	}

   public static get(type = "ORACLE") {
		let engineExists = Object.keys(this.engines).find((item) => {
			return item == type;
		});
		
		if(engineExists){
			return this.engines[type];
		}
		return {};
	}
}
