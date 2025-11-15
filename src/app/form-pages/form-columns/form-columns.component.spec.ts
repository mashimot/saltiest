import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { FormConfigService } from 'src/app/_services/form-config.service';

import { FormColumnsComponent } from './form-columns.component';

describe('FormColumnsComponent', () => {
  let component: FormColumnsComponent;
  let fixture: ComponentFixture<FormColumnsComponent>;
  let formConfigService: FormConfigService;
  let spyFormConfigService;

  beforeEach(async(() => {
    spyFormConfigService = jasmine.createSpyObj('FormConfigService', ['getConfig']);
    TestBed.configureTestingModule({
      declarations: [FormColumnsComponent],
      imports: [DragulaModule],
      providers: [
        {
          provide: DragulaService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormColumnsComponent);

    component = fixture.componentInstance;
    component.row = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
