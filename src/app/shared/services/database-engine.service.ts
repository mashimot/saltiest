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
			logo: 'https://tulula.sfo2.cdn.digitaloceanspaces.com/prod/images/cf2cf79cde738047d3dfdc8a5287ee87c909c9035bb61f32857f7536e4622505.png',
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
			},
			ddl: DatabaseEngine.oracle()
		},
		MYSQL: {
			logo: 'http://webtr.net.tr/upload/referanslar/0dd7193f-e747-4a15-b797-818b9fac3656-mysql.png',
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
			},
			ddl: DatabaseEngine.mysql()
		}
	};
	
	public static getDatabaseEngines() {
		return Object.keys(this.engines).map(
			item => { 
				return {
					database: {
						engine: item.toLowerCase(), 
						logo: this.engines[item].logo
					},
					ddl: this.engines[item].ddl
				};
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



	static oracle(): string{
		return [
			'create table if not exists hadouken (',
			'state varchar2(25),',
			'supplier_id number(10) not null primary key,',
			'`cod_user` number(10) not null,',
			'`favorite_fruit` varchar2(10) default 10 not null,',
			'supplier_name varchar2(50) not null,',
			'status_supplier CHAR(1) default "Ok",',
			'address varchar2(50),',
			'city varchar2(50),',
			'state varchar2(25),',
			'dat_now date,',
			'zip_code number(10,2),price number(102),',
			'title VARCHAR(255) NOT NULL,',
			'start_date DATE,',
			'due_date DATE',
			');',
			`CREATE TABLE shoryuken (`,
			`ID NUMBER(11) NOT NULL,`,
			`your_column NUMBER(100) NOT NULL`,
			');'
		].join("\n");
	}	

	static mysql(): string{
		return [
			`CREATE TABLE tasks (`,
			//`id BIGINT(11) NOT NULL AUTO_INCREMENT,`,
			`ID int NOT NULL UNIQUE,`,
			`bigint_col bigint NOT NULL AUTO_INCREMENT,`,
			`int_col INT UNIQUE,`,
			`smallint_col SMALLINT,`,
			`tinyint_col tinyint,`,
			`nickname VARCHAR(255) NOT NULL,`,
			`CHAR CHAR(50),`,
			`teste SET('up', 'down', 'right', 'left'),`,
			`deleted_at TIMESTAMP NULL,`,
			`created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,`,
			`joeys_world_tour enum('hue', 'oie', 'hadouken'),`,
			`updated_at varchar(255) DEFAULT 'Sandnes',`,
			`MEDIUMINT  MEDIUMINT UNSIGNED,`,
			`your_column DECIMAL(10) NOT NULL,`,
			`PRIMARY KEY (id)`,
			');',
			`CREATE TABLE haoduken (`,
			//`id BIGINT(11) NOT NULL AUTO_INCREMENT,`,
			`ID int NOT NULL UNIQUE,`,
			`bigint_col bigint NOT NULL AUTO_INCREMENT,`,
			`your_column DECIMAL(10) NOT NULL,`,
			`PRIMARY KEY (id)`,
			`);`,
			`CREATE TABLE Orders (`,
			`OrderID int NOT NULL,`,
			`OrderNumber int NOT NULL,`,
			`PersonID int,`,
			`PRIMARY KEY (OrderID),`,
			`FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)`,
			`);`
		].join("\n");
	}	
}
