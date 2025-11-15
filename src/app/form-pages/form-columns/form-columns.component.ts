import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormConfigService } from './../../_services/form-config.service';

@Component({
  selector: 'app-form-columns',
  templateUrl: './form-columns.component.html',
  styleUrls: ['./form-columns.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormColumnsComponent implements OnInit {
  @Input() row;
  @Input() pageIndex: number;
  @Input() rowIndex: number;

  @Input() pageId: number;
  @Input() rowId: number;

  config: {
    previewMode: boolean;
  };

  constructor(
    private formConfigService: FormConfigService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.formConfigService.getConfig().subscribe(data => {
      this.config = data;
      this.cd.markForCheck();
    });
  }

  colNumber(columnIndex: number) {
    return parseInt(this.row.grid.trim().split(' ')[columnIndex]);
  }
}
