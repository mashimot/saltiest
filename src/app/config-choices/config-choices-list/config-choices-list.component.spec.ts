import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChoicesComponent } from './../config-choices.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { DragulaService } from 'ng2-dragula';
import { ConfigChoiceFormComponent } from './../config-choice-form/config-choice-form.component';
import { ConfigChoicesRoutingModule } from './../config-choices-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigChoicesListComponent } from './config-choices-list.component';

describe('ConfigChoicesListComponent', () => {
  let component: ConfigChoicesComponent;
  let fixture: ComponentFixture<ConfigChoicesComponent>;
  let htmlElementService: HtmlElementService;
  let htmlElementServiceSpy;
  let dragulaService: DragulaService;
  let modal: NgbActiveModal;

  beforeEach(async(() => {
    htmlElementServiceSpy = jasmine.createSpyObj([
      'getTags',
      'queryParams',
      'getTools',
      'getContentChoices',
      'getOptionChoices',
      'getHtmlElements',
    ]);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ConfigChoicesRoutingModule,
        ReactiveFormsModule,
        DragulaModule,
        NgxPaginationModule,
        NgbModalModule,
      ],
      declarations: [
        ConfigChoicesListComponent,
        ConfigChoicesComponent,
        ConfigChoiceFormComponent,
      ],
      providers: [
        {
          provide: htmlElementService,
          useValue: htmlElementServiceSpy,
        },
        {
          provide: DragulaService,
        },
        NgbActiveModal,
        NgbModal,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
