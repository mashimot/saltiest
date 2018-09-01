import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-config-html-editor',
  templateUrl: './config-html-editor.component.html',
  styleUrls: ['./config-html-editor.component.css']
})
export class ConfigHtmlEditorComponent implements OnInit {
  @Input() parentFormGroup;

  constructor() { }

  ngOnInit() {
  }

  get data() {
    return this.parentFormGroup.get('html.data');
  }
}
