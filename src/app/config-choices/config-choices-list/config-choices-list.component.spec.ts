import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { ConfigChoiceFormComponent } from './../config-choice-form/config-choice-form.component';
import { ConfigChoicesComponent } from './../config-choices.component';
import { ConfigChoicesRoutingModule } from './../config-choices-routing.module';
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
      'getHtmlElements'
    ]);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ConfigChoicesRoutingModule,
        ReactiveFormsModule,
        DragulaModule,
        NgxPaginationModule,
        NgbModalModule
      ],
      declarations: [ConfigChoicesListComponent, ConfigChoicesComponent, ConfigChoiceFormComponent],
      providers: [
        {
          provide: htmlElementService,
          useValue: htmlElementServiceSpy
        },
        {
          provide: DragulaService
        },
        NgbActiveModal,
        NgbModal
      ]
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
