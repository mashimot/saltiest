import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
		this.label
			.setValidators([
				Validators.required
			]);
		/*this.html
			.patchValue({
				'label': this.content.html.label,
			});*/
		this.nullable
			.setValidators([
				Validators.required
			]);
		/*this.options
			.patchValue({
				'nullable': (this.content.options && typeof this.content.options.nullable != 'undefined')
					? this.content.options.nullable
					: true	
			});*/
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