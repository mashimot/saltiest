import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DragulaModule } from 'ng2-dragula';
import { ConfigChoicesModule } from 'src/app/config-choices/config-choices.module';
import { ToolService } from 'src/app/shared/services/tool.service';
import { FormBuilderModule } from '../form-builder.module';

import { FormMenuComponent } from './form-menu.component';

describe('FormMenuComponent', () => {
  let component: FormMenuComponent;
  let fixture: ComponentFixture<FormMenuComponent>;
  let toolService: ToolService;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ToolService', ['getTools']);

    TestBed.configureTestingModule({
      declarations: [FormMenuComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        ConfigChoicesModule,
        DragulaModule,
      ],
      providers: [
        {
          provide: toolService,
          useValue: spy,
        },
      ],
    }).compileComponents();
    toolService = TestBed.inject(ToolService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should boootstrap[0].grid equals to 4 4 4', () => {
    component.gridModel.patchValue('4 4 4');
    fixture.detectChanges();
    expect(component.bootstrap[0]).toEqual({
      grid: '4 4 4',
    });
  });
});
