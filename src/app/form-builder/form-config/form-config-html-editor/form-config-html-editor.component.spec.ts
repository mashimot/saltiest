import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormConfigHtmlEditorComponent } from './form-config-html-editor.component';

describe('FormConfigHtmlEditorComponent', () => {
  let component: FormConfigHtmlEditorComponent;
  let fixture: ComponentFixture<FormConfigHtmlEditorComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfigHtmlEditorComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigHtmlEditorComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      html: formBuilder.group({
        data: ['', Validators.required]
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
