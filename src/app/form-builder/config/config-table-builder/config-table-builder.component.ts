import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-config-table-builder',
	templateUrl: './config-table-builder.component.html',
	styleUrls: ['./config-table-builder.component.css']
})
export class ConfigTableBuilderComponent implements OnInit {
	@Input() content;
	@Input() parentFormGroup;
	keyFields: Array<string>;
	hadouken: number[];

	constructor() {
	}

	public verifyDuplicates(index, text){
		if (typeof text !== 'undefined'){
			let str = JSON.stringify(this.fields.value);

			str.replace(`${text}:`,`${index}:`);
			//this.fields.value = JSON.parse(str);
		}
	}

	public newField(index, key, newKey) {
		if (typeof newKey !== 'undefined' && newKey.trim() !== '') {
			var fields = this.fields.value;

			if (fields.length > 0) {
				for (var i = 0; i < fields.length; i++) {
					var field = fields[i];
					fields[i][newKey] = field[key];
					delete fields[i][key];
				}
				var keysArr = Object.keys(fields[0]);
				var lastItem = keysArr[keysArr.length - 1];
				keysArr.splice(index, 0, lastItem);

				this.fields.value = JSON.parse(JSON.stringify(fields, keysArr));
				//this.fields = this.getKeyFields();
			}
		}
	}

	ngOnInit() {
		this.keyFields = this.getKeyFields();
	}

	ngOnChanges() {
	}

	public getKeyFields() {
		if (this.fields.value.length > 0) {
			return Object.keys(this.fields.value[0]);
		}
		return [];
	}

	get html() {
		return this.parentFormGroup.controls.html;
	}

	get fields(){
		return this.html.get('fields');
	}
}
