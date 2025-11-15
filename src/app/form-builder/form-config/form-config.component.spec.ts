import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { of } from 'rxjs';
import { FormContentConfigService } from 'src/app/_services/form-content-config.service';
import { RenderContentModule } from 'src/app/form-pages/render-content/render-content.module';
import { FormConfigComponent } from './form-config.component';
import { FormConfigGeneralComponent } from './form-config-general/form-config-general.component';
import { FormConfigHtmlEditorComponent } from './form-config-html-editor/form-config-html-editor.component';
import { FormConfigImgComponent } from './form-config-img/form-config-img.component';
import { FormConfigTitleComponent } from './form-config-title/form-config-title.component';

describe('FormConfigComponent', () => {
  let component: FormConfigComponent;
  let fixture: ComponentFixture<FormConfigComponent>;
  let formContentService: FormContentConfigService;
  const CONTENT = {
    id: null,
    name: null,
    html: {
      tag: 'text',
      content_choice_id: null,
      choices: [],
      category: null,
      label: null,
      src: null,
      text: null,
      data: null
    },
    type: {
      datatype: null,
      length: null
    },
    options: {
      nullable: null
    }
  };

  beforeEach(async(() => {
    const spyFormContentService = jasmine.createSpyObj('FormContentConfigService', ['render', 'getValue']);
    TestBed.configureTestingModule({
      declarations: [
        FormConfigComponent,
        FormConfigGeneralComponent,
        FormConfigHtmlEditorComponent,
        FormConfigImgComponent,
        FormConfigTitleComponent
      ],
      imports: [ReactiveFormsModule, RenderContentModule, DragulaModule.forRoot()],
      providers: [
        NgbActiveModal,
        FormContentConfigService
        /*{
          provide: formContentService,
          useValue: spyFormContentService
        }*/
      ]
    }).compileComponents();
    formContentService = TestBed.get(FormContentConfigService); // Add this
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigComponent);
    component = fixture.componentInstance;
    component.content = CONTENT;
    formContentService = TestBed.get(FormContentConfigService);

    fixture.detectChanges();
    fixture.componentInstance.ngOnInit();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => { // Remove inject()
    expect(formContentService).toBeTruthy();
  });

  it('should be created2', () => { // Remove inject()
    spyOn(formContentService, 'getValue').and.returnValue('value');
    let response = formContentService.getValue();

    expect(response).toEqual('value');

  });*/

  function updateForm() {
    component.configForm.patchValue(CONTENT);
  }
});
