import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-config-html-editor',
  templateUrl: './form-config-html-editor.component.html',
  styleUrls: ['./form-config-html-editor.component.css'],
})
export class FormConfigHtmlEditorComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.data.setValidators([Validators.required]);
  }

  get html() {
    return this.parentFormGroup.get('html');
  }
  get data() {
    return this.html.get('data');
  }
}
