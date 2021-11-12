import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-config-general',
  templateUrl: './config-general.component.html',
  styleUrls: ['./config-general.component.css']
})
export class ConfigGeneralComponent implements OnInit {
  	@Input() parentFormGroup: FormGroup;
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
				'nullable': (this.content.options && typeof this.content.options.nullable != 'undefined')
					? this.content.options.nullable
					: true	
			});
	}

	get html() {
		return this.parentFormGroup.get('html');
	}
	
	get label() {
		return this.parentFormGroup.get('html.label');
	}

	get nullable() {
		return this.parentFormGroup.get('options.nullable');
	}

	get options() {
		return this.parentFormGroup.get('options');
	}
}