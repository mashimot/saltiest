import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CreateTableToJsonService } from '../_services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../_services/bootstrap-grid-system.service';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/CustomValidators';

@Component({
  selector: 'app-create-table-to-json',
  templateUrl: './create-table-to-json.component.html',
  styleUrls: ['./create-table-to-json.component.css'],
})
export class CreateTableToJsonComponent implements OnInit {
  @Input() tableName: string;
  @Output() schemasChange = new EventEmitter();
  @ViewChild('popContent', { static: false }) popContent: ElementRef;
  form: FormGroup;
  errors: Object = {};
  primaryKeys: any[];
  options: {
    database: {
      engine: string;
      logo?: string;
    };
    ddl?: string;
  };
  sql: Array<{
    database: {
      engine: string;
      logo?: string;
    };
    ddl?: string;
  }>;

  constructor(private formBuilder: FormBuilder) {
    this.errors = {};
  }

  ngOnInit() {
    let database = DatabaseEngine.getDatabaseEngines();
    this.sql = database;

    this.form = this.formBuilder.group({
      gridModel: [
        '4 4 4',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^(\s*(0?[1-9]|[1-9][0-9])+\s*)+$/),
          CustomValidators.sumBeEqualsTo(12),
        ],
      ],
      options: this.formBuilder.group({
        ddl: ['', [Validators.required]],
        database: this.formBuilder.group({
          logo: [''],
          engine: ['oracle'],
        }),
      }),
    });
    this.setDDL(this.form.get('options.database').value);
  }

  public setDDL(database) {
    let index = this.sql.findIndex(item => {
      return item.database.engine == database.engine;
    });
    if (index != -1) {
      const sql = this.sql[index];
      this.form.get('options').patchValue({
        ddl: sql.ddl,
        database: {
          logo: sql.database?.logo,
        },
      });
    }
  }

  public objectLength() {
    return Object.keys(this.errors).length;
  }

  public createTable() {
    let ct = new CreateTableToJsonService();
    ct.setDataBase(this.f.get('options.database.engine').value);
    ct.setSql(this.f.get('options.ddl').value);
    ct.parse();
    this.errors = ct.getError();
    if (!ct.hasError()) {
      let schemas = ct.getSchemas();
      schemas = schemas.map(schema => {
        let bootstrapGridSystem = new BootstrapGridSystemService(
          schema.data,
          `${this.gridModel.value}\n`
        );
        bootstrapGridSystem.convert();
        schema.pages = bootstrapGridSystem.getPage();

        return schema;
      });
      this.schemasChange.emit(schemas);
    }
  }

  get f() {
    return this.form;
  }

  get gridModel(): FormGroup {
    return this.form.get('gridModel') as FormGroup;
  }
}
