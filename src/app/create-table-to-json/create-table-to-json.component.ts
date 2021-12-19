import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CreateTableToJsonService } from '../_services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../_services/bootstrap-grid-system.service'
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/CustomValidators';

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
	@Output() schemasChange = new EventEmitter();
	@ViewChild('popContent', {static: false}) popContent: ElementRef;
	form: FormGroup;
	errors: Object = {};
	primaryKeys: any[];
	options: {
		database: {
			engine: string,
			logo?: string,
		},
		ddl?: string
	};
	sql: Array<{
		database: {
			engine: string,
			logo?: string,
		},
		ddl?: string
	}>;	


	constructor(
		private formBuilder: FormBuilder
	) {
		this.errors = {};
	}


	ngOnInit() {
		let database = DatabaseEngine.getDatabaseEngines();
		this.sql = database;			
		let s = new Silabalize;
		s.silabalize();

		this.form = this.formBuilder.group({
			gridModel: ['4 4 4', [
				Validators.required,
				Validators.minLength(2),
				Validators.pattern(/^(\s*(0?[1-9]|[1-9][0-9])+\s*)+$/),
				CustomValidators.sumBeEqualsTo(12)
			]],
			options: this.formBuilder.group({
				ddl: ['', [
					Validators.required
				]],
				database: this.formBuilder.group({
					logo: [''],
					engine: ['oracle']
				})
			})
		});
		this.setDDL(this.form.get('options.database').value);
	}

	public setDDL(database){
		let index = this.sql.findIndex(item => {
			return item.database.engine == database.engine;
		});
		if(index != -1){
			this.form.get('options').patchValue(this.sql[index]);
		}
	}

	public onSubmit() {

	}

	public objectLength(){
		return Object.keys(this.errors).length;
	}

	public createTable() {
		let ct = new CreateTableToJsonService();
		ct.setDataBase(this.f.get('options.database.engine').value);
		ct.setSql(this.f.get('options.ddl').value);
		ct.parse();
		this.errors = ct.getError();
		if (!ct.hasError()) {
			let schemas = ct.getSchemas();
			schemas = schemas.map(schema => {
				let bootstrapGridSystem = new BootstrapGridSystemService(schema.data, `${this.gridModel.value}\n`);
				bootstrapGridSystem.convert();
				schema.pages = bootstrapGridSystem.getPage();

				return schema;
			});
			this.schemasChange.emit(schemas);
		}
	}

	get f(){
		return this.form;
	}

	get gridModel(): FormGroup{
		return this.form.get('gridModel') as FormGroup;
	}
}
