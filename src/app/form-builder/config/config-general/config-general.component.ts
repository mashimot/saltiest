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
		this.html.get('label')
			.setValidators([
				Validators.required
			]);
		this.html
			.patchValue({
				'label': this.content.html.label,
			});
		this.options.get('nullable')
			.setValidators([
				Validators.required
			]);
		this.options
			.patchValue({
				'nullable': (this.content.definition.options && typeof this.content.definition.options.nullable != 'undefined')
					? this.content.definition.options.nullable
					: true	
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
		return this.parentFormGroup.get('definition.options.nullable');
	}

	get options() {
		return this.parentFormGroup.get('definition.options');
	}
}