import { Component, OnInit, Input } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';

@Component({
  selector: 'app-form-columns',
  templateUrl: './form-columns.component.html',
  styleUrls: ['./form-columns.component.css']
})
export class FormColumnsComponent implements OnInit {
  @Input() row;
  @Input() pageIndex;
  @Input() rowIndex;

  config: {
    previewMode: boolean
  };

  constructor(private formConfigService: FormConfigService) { }

  ngOnInit() {
    this.formConfigService.getConfig().subscribe(
      (data) => { this.config = data; }
    );
  }
 
  trackByFn(index, item){
      return index;
  }
 
  colNumber(columnIndex: number) {
      return parseInt(this.row.grid.trim().split(' ')[columnIndex]);
  }
}
