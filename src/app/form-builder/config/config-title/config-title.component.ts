import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-config-title',
	templateUrl: './config-title.component.html',
	styleUrls: ['./config-title.component.css']
})
export class ConfigTitleComponent implements OnInit {
	@Input() content;
	@Input() parentFormGroup: FormGroup;

	headingTypes: Array<string>;

	constructor() { }

	ngOnInit() {
		this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

		this.text.setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'text': this.content.html.text
		});
	}

	get html() {
		return this.parentFormGroup.controls.html;
	}

	get text() {
		return this.html.get('text');
	}
}
