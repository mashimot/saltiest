import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-config-table-builder',
  templateUrl: './config-table-builder.component.html',
  styleUrls: ['./config-table-builder.component.css']
})
export class ConfigTableBuilderComponent implements OnInit {
  @Input() content;
  fields: Array<any>;
  hadouken: number[];

  constructor() {
  }

  public newField(index, key, newKey) {
    //console.log(key);
    console.log(newKey);
    if (typeof newKey !== 'undefined' && newKey.trim() !== '') {
      var fields = this.content.html.fields;
      console.log(fields);

      if (fields.length > 0) {
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          fields[i][newKey] = field[key];
          delete fields[i][key];
        }
        var keysArr = Object.keys(fields[0]);
        var lastItem = keysArr[keysArr.length - 1];
        keysArr.splice(index, 0, lastItem);

        this.content.html.fields = JSON.parse(JSON.stringify(fields, keysArr));
        this.fields = this.getKeyFields();
      }
    }
  }
  ngOnInit() {
      this.fields = this.getKeyFields();
  }

  ngOnChanges() {
  }

  public getKeyFields() {
      if (this.content.html.fields.length > 0) {
          return Object.keys(this.content.html.fields[0]);
      }
      return [];
  }
}
