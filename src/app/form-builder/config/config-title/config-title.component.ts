import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config-title',
  templateUrl: './config-title.component.html',
  styleUrls: ['./config-title.component.css']
})
export class ConfigTitleComponent implements OnInit {
  //@Input() content;
  @Input() parentFormGroup;
  @Output() parentFormGroupChange = new EventEmitter();

  headingTypes: Array<string>;

  constructor() { }

  ngOnInit() {
    this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  }

  get html() {
    return this.parentFormGroup.controls.html;
  }

  get text() {
    return this.html.get('text');
  }
}
