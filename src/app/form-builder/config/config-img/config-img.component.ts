import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-config-img',
  templateUrl: './config-img.component.html',
  styleUrls: ['./config-img.component.css']
})
export class ConfigImgComponent implements OnInit {
  @Input() parentFormGroup;

  constructor() { }

  ngOnInit() {
  }

  get src() {
      return this.html.get('src');
  }

  get html() {
      return this.parentFormGroup.controls.html;
  }
}
