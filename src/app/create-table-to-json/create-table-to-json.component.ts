import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CreateTableToJsonService } from '../_services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../_services/bootstrap-grid-system.service'
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class JoeysWorldTour{
	word: string;

	constructor(){

	}

	private rules = {
		plural: {
			'ns': 'm',
			'res': 'r',
			'zes': 'z',
			'ses': 's',
			'ais': 'al',
			'éis': 'el', 
			'óis': 'ol', 
			'uis': 'ul',
			'ões': 'ão',
			'x': 'x'
		},
		singular: {
			'm': 'ns',
			'r': 'es',
			'z': 'es',
			's': 'ses',
			'al': 'ais',
			'el': 'éis', 
			'ol': 'óis', 
			'ul': 'uis',
			'ão': 'ões',
			'x': 'x'
		}
	}

	private exceptionWords = {
		'lápis': 'lápis',
		'atlas': 'atlas',
		'pires': 'pires',
		'ônibus': 'ônibus',
		'vírus': 'vírus'
	}

	//plural to singular
	singularize(){
		if(!this.hasWordException()){
			for(let pluralKey in this.rules.plural){
				let singular = this.rules.plural[pluralKey];
				if(this.word.endsWith(pluralKey)){
					return this.word.replace(new RegExp(`${pluralKey}$`), singular);
				} else {
					let res = this.word.split("");
					res.pop();
					return res.join("");
				}
			}
		}
		return this.word;
	}

	//singular to plural
	pluralize(){
		if(!this.hasWordException()){
			for(let singularKey in this.rules.singular){
				let plural = this.rules.singular[singularKey];
				if(this.word.endsWith(singularKey)){
					return this.word.replace(new RegExp(`${singularKey}$`), plural);
				}
			}
		}
		return this.word;
	}

	hasWordException(){
		let hasWord = Object.keys(this.exceptionWords)
		.filter(word => word == this.word);

		return (hasWord.length > 0)? true : false;
	}

	setWord(word: string){
		this.word = word;
		return this;
	}
}

export class Silabalize {
	word: string;
	vogais: Array<string> = ['a', 'e', 'i', 'o', 'u'];
	rules: {
		separam: {
			hiatos: Array<string>,
			digrafos: Array<string>,
		},
		n_separam: {
			digrafos: Array< string>,
		}
	}
	
	constructor(){
		this.word = 'chuva';
		this.rules = {
			separam: {
				hiatos: this.hiatos(),
				digrafos: ['rr', 'ss', 'sc', 'sç', 'xc']
			},
			n_separam: {
				digrafos: ['ch', 'lh', 'nh', 'gu', 'qu']
			}
		}
		
	}

	hiatos(){
		let hiatos = [];
		this.vogais.forEach(v1 => {
			this.vogais.forEach(v2 => {
				hiatos.push(`${v1}${v2}`);
			});
		});
		return hiatos;
	}

	silabalize(){
		console.log(this.rules.separam.hiatos);
		let joeys = [];
		for(let separamKey in this.rules.separam){
			let separam = this.rules.separam[separamKey];
			let v = separam.map(w => {
				if(this.word.indexOf(w) != -1){
					return this.word.indexOf(w);
				}
				return null;
			})
			.filter(w => w);
			joeys.push(v);
		}
		joeys = Array.prototype.concat.apply([], joeys);
		var auxWord = this.word.split("");
		joeys.forEach(index => {
			auxWord.splice(index + 1, 0, "-");
		});
		var hue = auxWord.join("");
		console.log(hue);
	}

	setWord(word: string){
		this.word = word;
	}
}

@Component({
	selector: 'app-create-table-to-json',
	templateUrl: './create-table-to-json.component.html',
	styleUrls: ['./create-table-to-json.component.css']
})
export class CreateTableToJsonComponent implements OnInit {
	@Input() tableName: string;
	@Output() pageChange = new EventEmitter();
	@Output() tableNameChange = new EventEmitter();
	@ViewChild('popContent', {static: false}) popContent: ElementRef;
	
	gridModel: string;
	database: Array<{
		engine: string,
		logo: string
	}>;
	errors: Object = {};
	primaryKeys: any[];
	options = {
		database: <string> 'oracle',
		logo: <string> ''
	};
	string: string;
	tabNumber: number;

	constructor(
		private joeys: JoeysWorldTour
	) {
		this.tabNumber = 1;
		this.gridModel = '4 4 4';
		this.errors = {};
		this.database = [];
	}

	ngOnInit() {
		this.database = DatabaseEngine.getDatabaseEngines();
		this.database = [this.database[0]];
		this.options.database = 'oracle';
		this.setDatabaseEngineLogo(this.options.database);
		this.string = [
			'create table if not exists random_table_1 (',
			'supplier_id number(10) not null primary key,',
			'`cod_user` number(10) not null,',
			'`favorite_fruit` varchar2(10) default 10 not null,',
			'supplier_name varchar2(50) not null,',
			'status_supplier CHAR(1) default "Ok",',
			'address varchar2(50),',
			'city varchar2(50),',
			'state varchar2(25),',
			'dat_now date,',
			'zip_code number(10),price number(10.2),',
			'title VARCHAR(255) NOT NULL,',
			'start_date DATE,',
			'due_date DATE',
			');'
		].join("\n");
/*
		this.string = [
			`CREATE TABLE tasks (`,
			`id INT(11) NOT NULL AUTO_INCREMENT,`,
			`nickname VARCHAR(255) NOT NULL,`,
			`deleted_at TIMESTAMP NULL,`,
			`created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,`,
			`updated_at TIMESTAMP,`,
			`PRIMARY KEY (id)`,
			');'
		].join("\n");
*/
		let s = new Silabalize;
		s.silabalize();
	}

	public onSubmit() {

	}

	public objectLength(){
		return Object.keys(this.errors).length;
	}

	public setDatabaseEngineLogo(value: string){
		for(let i = 0; i < this.database.length; i++){
			if(this.database[i].engine == value){
				this.options.database = value;
				this.options.logo = this.database[i].logo;
				break;
			}
		}
	}

	public createTable() {
		let ct = new CreateTableToJsonService();
		ct.setSql(this.string);
		ct.setDataBase(this.options.database);
		ct.parse();
		this.errors = ct.getError();
		if (!ct.hasError()) {
			let schema = ct.getSchema();
			console.log(schema)
            let bootstrapGridSystem = new BootstrapGridSystemService(schema.data, `${this.gridModel}\n`);
			bootstrapGridSystem.convert();
			//let pages = bootstrapGridSystem.getPage();
			schema.pages = bootstrapGridSystem.getPage();
			//console.log('pgaes -> ', pages);
			this.tableNameChange.emit(
				ct.getTableName()
				//this.joeys.setWord(ct.getTableName()).singularize()
			);
			this.pageChange.emit(schema.pages);
		} 
	}
}
