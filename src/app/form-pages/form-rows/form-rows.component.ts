import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormConfigService } from "./../../_services/form-config.service";

@Component({
  selector: "app-form-rows",
  templateUrl: "./form-rows.component.html",
  styleUrls: ["./form-rows.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRowsComponent implements OnInit {
  @Input() page;
  //@Output() pageChange = new EventEmitter();
  @Input() pageIndex: number;
  @Input() pageId: number;

  config: {
    previewMode: boolean;
  };

  constructor(
    private formConfigService: FormConfigService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.formConfigService.getConfig().subscribe((data) => {
      this.config = data;
      this.cd.markForCheck();
    });
  }

  deleteRow(rowIndex: number, row = { id: null }) {
    this.page.rows.splice(rowIndex, 1);
    this.cd.markForCheck();
  }
}
