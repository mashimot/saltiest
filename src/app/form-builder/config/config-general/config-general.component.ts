import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-config-general',
  templateUrl: './config-general.component.html',
  styleUrls: ['./config-general.component.css']
})
export class ConfigGeneralComponent implements OnInit {
  	@Input() parentFormGroup;
	@Input() content;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		console.log(this.content.table);
		this.html.get('label').setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'label': this.content.html.label,
		});
		this.table.get('nullable').setValidators([
			Validators.required
		]);
		this.table.patchValue({
			'nullable': this.content.table.nullable? this.content.table.nullable: false
		});
	}

	get html() {
		return this.parentFormGroup.get('html');
	}

	get table() {
		return this.parentFormGroup.get('table');
	}
	
	get label() {
		return this.parentFormGroup.get('html.label');
	}

	get nullable() {
		return this.parentFormGroup.get('table.nullable');
	}
}