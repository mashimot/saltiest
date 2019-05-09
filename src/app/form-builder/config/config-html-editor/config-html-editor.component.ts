import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-html-editor',
  templateUrl: './config-html-editor.component.html',
  styleUrls: ['./config-html-editor.component.css']
})
export class ConfigHtmlEditorComponent implements OnInit {
	@Input() parentFormGroup: FormGroup;
	@Input() content;

	constructor() { }

	ngOnInit() {
		this.data.setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'data': this.content.html.data
		});
	}

	get html(){
		return this.parentFormGroup.controls.html;
	}
	get data() {
		return this.html.get('data');
	}
}
