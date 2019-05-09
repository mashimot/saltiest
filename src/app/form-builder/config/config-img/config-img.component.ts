import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-config-img',
	templateUrl: './config-img.component.html',
	styleUrls: ['./config-img.component.css']
})
export class ConfigImgComponent implements OnInit {
	@Input() parentFormGroup: FormGroup;
	@Input() content;

	constructor() { }

	ngOnInit() {
		this.tag.setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'tag': this.content.html.tag
		});		
		this.src.setValidators([
			Validators.required
		]);
		this.html.patchValue({
			'src': this.content.html.src
		});
	}

	get tag() {
		return this.html.get('tag');
	}

	get src() {
		return this.html.get('src');
	}

	get html() {
		return this.parentFormGroup.controls.html;
	}
}
