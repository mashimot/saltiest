import { Component, OnInit, Input } from '@angular/core';
import { Jsonp } from '@angular/http';

@Component({
	selector: 'app-config-table-builder',
	templateUrl: './config-table-builder.component.html',
	styleUrls: ['./config-table-builder.component.css']
})
export class ConfigTableBuilderComponent implements OnInit {
	@Input() content;
	@Input() parentFormGroup;
	keyFields: Array<{
		text: string
	}>;
	oldValue: string = '';
	newValue: string = '';

	constructor() {
	}

	public whileTyping(event){
		this.newValue = event.target.value;
	}

	public onFocusIn(oldValue){
		this.oldValue = oldValue;
	}

	public onFocusOut(fieldIndex) {
		console.log(this.oldValue);
		if(typeof this.newValue !== 'undefined' && this.newValue.trim() !== '' && this.oldValue !== '') {
			if(this.fields.value.length > 0 && this.oldValue != this.newValue) {
				var fields = this.fields.value;
				var newFields = JSON.parse(JSON.stringify(fields).replace(new RegExp(`"${this.oldValue}":`, "g"), `"${this.newValue}":`));
	
				for (var i = 0; i < fields.length; i++) {
					//cria um novo item
					//fields[i][this.newValue] = fields[i][this.oldValue];
					//deleta o item antigo
					//delete fields[i][this.oldValue];
				}
		
				this.fields.value = newFields;
				this.fields.updateValueAndValidity({ onlySelf: false, emitEvent: true });
				this.keyFields = Object.keys(newFields[0]).map(item => { 
					return { text: item }
				});
				this.oldValue = '';
				this.newValue = '';
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
			let fieldKeys = JSON.parse(JSON.stringify(this.fields.value[0]));
			return Object.keys(fieldKeys).map(item => {
				return { text: item };
			});
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
