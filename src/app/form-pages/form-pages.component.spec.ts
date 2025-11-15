import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { of } from 'rxjs';
import { FormColumnsComponent } from './form-columns/form-columns.component';
import { FormContentsComponent } from './form-contents/form-contents.component';

import { FormPagesComponent } from './form-pages.component';
import { FormRowsComponent } from './form-rows/form-rows.component';
import { RenderContentModule } from './render-content/render-content.module';

describe('FormPagesComponent', () => {
  let component: FormPagesComponent;
  let fixture: ComponentFixture<FormPagesComponent>;
  let dragulaService: DragulaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormPagesComponent,
        FormRowsComponent,
        FormColumnsComponent,
        FormContentsComponent,
      ],
      imports: [HttpClientTestingModule, RenderContentModule, DragulaModule],
      providers: [
        {
          provide: DragulaService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
