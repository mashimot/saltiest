import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-config-general',
  templateUrl: './form-config-general.component.html',
  styleUrls: ['./form-config-general.component.css']
})
export class FormConfigGeneralComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
	@Input() content;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.label
			.setValidators([
				Validators.required
			]);
		this.nullable
			.setValidators([
				Validators.required
			]);
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
