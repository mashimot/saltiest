import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-config-title',
  templateUrl: './form-config-title.component.html',
  styleUrls: ['./form-config-title.component.css']
})
export class FormConfigTitleComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  headingTypes: Array<string>;

  constructor() {}

  ngOnInit() {
    this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    this.text.setValidators([Validators.required]);
  }

  get html() {
    return this.parentFormGroup.get('html');
  }

  get text() {
    return this.html.get('text');
  }
}
