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

	public onFocusOut() {
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
	
	public newColumn(fieldIndex: number){
		if(this.keyFields.length > 0){
			let columnName = `column ${this.keyFields.length + 1}`;

			this.keyFields.splice(fieldIndex + 1, 0, { text: columnName });
			for(let i = 0; i < this.fields.value.length; i++){
				this.fields.value[i][columnName] = '';
			}
			this.fields.updateValueAndValidity({ onlySelf: false, emitEvent: true });
		}
	}

	public newLine(fieldIndex: number){
		if(this.fields.value.length > 0){
			var cloned = Object.assign({}, this.fields.value[0]);
			for (var key in cloned) {
				if (cloned.hasOwnProperty(key)) {
					cloned[key] = '';
				}
			}
			this.fields.value.splice(fieldIndex + 1, 0, cloned);
		}
	}

	public deleteColumn(keyName: string){
		if(this.fields.value.length > 0){
			this.fields.value.forEach(field => {
				if(typeof field[keyName] != 'undefined'){
					this.keyFields.map((item, index) => {	
						if(item.text == keyName){
							this.keyFields.splice(index, 1);
						}
					});
					delete field[keyName];
				}
			});
		}
	}

	public deleteLine(fieldIndex: number){
		if(this.fields.value.length > 0){
			this.fields.value.splice(fieldIndex, 1);
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
