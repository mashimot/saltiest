import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-config-img',
  templateUrl: './form-config-img.component.html',
  styleUrls: ['./form-config-img.component.css'],
})
export class FormConfigImgComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() content;

  constructor() {}

  ngOnInit() {
    this.tag.setValidators([Validators.required]);
    this.src.setValidators([Validators.required]);
  }

  get tag() {
    return this.html.get('tag');
  }

  get src() {
    return this.html.get('src');
  }

  get html() {
    return this.parentFormGroup.get('html');
  }
}
