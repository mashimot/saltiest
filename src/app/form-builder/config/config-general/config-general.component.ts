import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-general',
  templateUrl: './config-general.component.html',
  styleUrls: ['./config-general.component.css']
})
export class ConfigGeneralComponent implements OnInit {
  @Input() parentFormGroup;

  constructor() { }

  ngOnInit() {
    
  }

  get html() {
    return this.parentFormGroup.controls.html;
  }

  get label() {
    return this.parentFormGroup.get('html.label');
  }

  get nullable() {
    return this.parentFormGroup.get('table.nullable');
  }
}
