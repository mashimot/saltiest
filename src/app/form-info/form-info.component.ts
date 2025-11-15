import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  SimpleChange,
} from '@angular/core';
import {
  Validators,
  FormControl,
  AbstractControl,
  FormGroup,
  FormBuilder,
  FormArray,
  ValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HtmlElementService } from '../shared/services/html-element.service';
import { Content } from '../_core/model';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css'],
})
export class FormInfoComponent implements OnInit {
  form!: FormGroup;
  formSubmitAttempt: boolean = false;
  tags$: Observable<any>;
  @Input() pages;
  @Output() pagesChange = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private htmlElementService: HtmlElementService
  ) {}

  ngOnInit(): void {
    this.tags$ = this.htmlElementService.getTags();

    this.form = this.formBuilder.group({
      pages: this.formBuilder.array([]),
    });

    this.pages.forEach((page, pageIndex: number) => {
      this.getPages().push(this.createPages());

      const rowsFormArray = this.getPagesRows(pageIndex);
      page.rows.forEach((row: any, rowIndex: number) => {
        rowsFormArray.push(this.createPagesRows());

        const columnsFormArray = this.getPagesRowsColumns(pageIndex, rowIndex);
        row.columns.forEach((column: any, columnIndex: number) => {
          columnsFormArray.push(this.createPagesRowsColumns());

          const contentsFormArray = this.getPagesRowsColumnsContents(
            pageIndex,
            rowIndex,
            columnIndex
          );
          column.contents.forEach((content: Content, contentIndex: number) => {
            contentsFormArray.push(this.createPagesRowsColumnsContents());

            if (content && content.html && content.html.choices) {
              const htmlChoicesFormArray =
                this.getPagesRowsColumnsContentsChoices(
                  pageIndex,
                  rowIndex,
                  columnIndex,
                  contentIndex
                ).get('html.choices') as FormArray;

              content.html.choices.forEach(choice => {
                htmlChoicesFormArray.push(
                  this.formBuilder.group({
                    text: ['', Validators.required],
                    value: ['', Validators.required],
                  })
                );
              });
            }
          });
        });
      });
    });

    this.getPages().patchValue(this.pages);
    this.onChanges();
  }

  onChanges() {
    this.f.valueChanges.subscribe(result => {
      this.pagesChange.emit(result.pages);
    });
  }

  onSubmit(): void {
    this.formSubmitAttempt = true;
    if (this.f.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.f);
    }
  }

  validateAllFormFields(control: AbstractControl) {
    if (control instanceof FormControl) {
      control.markAsTouched({
        onlySelf: true,
      });
    } else if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((field: string) => {
        const groupControl = control.get(field)!;
        this.validateAllFormFields(groupControl);
      });
    } else if (control instanceof FormArray) {
      const controlAsFormArray = control as FormArray;
      controlAsFormArray.controls.forEach((arrayControl: AbstractControl) =>
        this.validateAllFormFields(arrayControl)
      );
    }
  }

  get f() {
    return this.form;
  }

  getPagesRowsColumnsContents(
    indexPages: number,
    indexRows: number,
    indexColumns: number
  ): FormArray {
    return (
      (
        (this.form.get('pages') as FormArray)
          .at(indexPages)
          .get('rows') as FormArray
      )
        .at(indexRows)
        .get('columns') as FormArray
    )
      .at(indexColumns)
      .get('contents') as FormArray;
  }

  getPagesRowsColumnsContentsChoices(
    indexPages: number,
    indexRows: number,
    indexColumns: number,
    indexContents: number
  ): FormArray {
    return (
      (
        (
          (this.form.get('pages') as FormArray)
            .at(indexPages)
            .get('rows') as FormArray
        )
          .at(indexRows)
          .get('columns') as FormArray
      )
        .at(indexColumns)
        .get('contents') as FormArray
    ).at(indexContents) as FormArray;
  }

  deletePagesRowsColumnsContents(
    indexPages: number,
    indexRows: number,
    indexColumns: number,
    indexContents: number
  ): void {
    this.getPagesRowsColumnsContents(
      indexPages,
      indexRows,
      indexColumns
    ).removeAt(indexContents);
  }

  createPagesRowsColumnsContents() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      html: this.formBuilder.group({
        content_choice_id: ['', Validators.required],
        label: ['', Validators.required],
        category: ['', Validators.required],
        text: ['', Validators.required],
        tag: ['', Validators.required],
        choices: this.formBuilder.array([]),
        class: [''],
        src: [''],
        data: [''],
        required: [''],
      }),
      type: this.formBuilder.group({
        length: ['', [Validators.pattern('^[0-9]+(.[0-9])?$')]],
      }),
      options: this.formBuilder.group({
        nullable: ['', Validators.required],
      }),
    });
  }

  getPagesRowsColumns(indexPages: number, indexRows: number): FormArray {
    return (
      (this.form.get('pages') as FormArray)
        .at(indexPages)
        .get('rows') as FormArray
    )
      .at(indexRows)
      .get('columns') as FormArray;
  }

  deletePagesRowsColumns(
    indexPages: number,
    indexRows: number,
    indexColumns: number
  ): void {
    this.getPagesRowsColumns(indexPages, indexRows).removeAt(indexColumns);
  }

  createPagesRowsColumns() {
    return this.formBuilder.group({
      contents: this.formBuilder.array([
        //this.createPagesRowsColumnsContents()
      ]),
    });
  }

  getPagesRows(indexPages: number): FormArray {
    return (this.form.get('pages') as FormArray)
      .at(indexPages)
      .get('rows') as FormArray;
  }

  deletePagesRows(indexPages: number, indexRows: number): void {
    this.getPagesRows(indexPages).removeAt(indexRows);
  }

  createPagesRows() {
    return this.formBuilder.group({
      grid: ['', [Validators.required]],
      columns: this.formBuilder.array([
        //this.createPagesRowsColumns()
      ]),
    });
  }

  getPages(): FormArray {
    return this.form.get('pages') as FormArray;
  }

  deletePages(indexPages: number): void {
    this.getPages().removeAt(indexPages);
  }

  createPages() {
    return this.formBuilder.group({
      rows: this.formBuilder.array([
        //this.createPagesRows()
      ]),
    });
  }
}
