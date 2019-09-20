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
		console.log(this.content.definition);
		this.html.get('label').setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'label': this.content.html.label,
		});
		this.definition.get('nullable').setValidators([
			Validators.required
		]);
		this.definition.patchValue({
			'nullable': this.content.definition.nullable? this.content.definition.nullable: false
		});
	}

	get html() {
		return this.parentFormGroup.get('html');
	}

	get definition() {
		return this.parentFormGroup.get('definition');
	}
	
	get label() {
		return this.parentFormGroup.get('html.label');
	}

	get nullable() {
		return this.parentFormGroup.get('definition.nullable');
	}
}