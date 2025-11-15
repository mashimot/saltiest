import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BootstrapGridSystemService } from "../../_services/bootstrap-grid-system.service";
import { ToolService } from "src/app/shared/services/tool.service";
import { ConfigChoicesComponent } from "../../config-choices/config-choices.component";
import { Column, Content } from "src/app/_core/model";
import { CustomValidators } from "src/app/shared/validators/CustomValidators";

interface BootstrapGrid {
  grid: string;
}

interface PageModel {
  rows: unknown[];
  name: string;
}

@Component({
  selector: "app-form-menu",
  templateUrl: "./form-menu.component.html",
  styleUrls: ["./form-menu.component.css"],
})
export class FormMenuComponent implements OnInit {
  readonly options: any = {
    size: "lg",
    backdrop: "static",
    keyboard: false,
    centered: true,
  };

  tools$!: Observable<any[]>;
  pageModel!: PageModel[];
  bootstrap!: BootstrapGrid[];
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly toolService: ToolService,
    private readonly modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.initBootstrapGrid();
    this.createForm();
    this.initTools();
    this.initPageModel();
    this.subscribeGridChanges();
  }

  private initBootstrapGrid(): void {
    this.bootstrap = [
      {
        grid: ["12", "6 6", "3 4 5", "4 4 4", "7 5"].join("\n"),
      },
    ];
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      gridModel: [
        this.bootstrap[0].grid,
        [
          Validators.required,
          CustomValidators.sumBeEqualsTo(12),
          Validators.pattern(/^(\s*(0?[1-9]|[1-9][0-9])+\s*)+$/),
          Validators.minLength(2),
        ],
      ],
    });
  }

  private initTools(): void {
    this.tools$ = this.toolService.getTools().pipe(
      map((res) => res.tools || [])
    );
  }

  private initPageModel(): void {
    this.pageModel = [
      {
        rows: [],
        name: "Salt - A tool for Lazy Developer",
      },
    ];
  }

  private subscribeGridChanges(): void {
    this.gridModel.valueChanges.subscribe((value: string) => {
      this.bootstrap[0].grid = value;
    });
  }

  createChoices(): void {
    this.modalService.open(ConfigChoicesComponent, this.options);
  }

  editChoices(content: Content): void {
    const modalRef = this.modalService.open(ConfigChoicesComponent, this.options);
    modalRef.componentInstance.content = content;
  }

  get f(): FormGroup {
    return this.form as FormGroup;
  }

  get gridModel(): FormControl {
    return this.f.get("gridModel") as FormControl;
  }
}
