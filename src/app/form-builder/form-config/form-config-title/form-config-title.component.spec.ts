import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormConfigTitleComponent } from './form-config-title.component';

describe('FormConfigTitleComponent', () => {
  let component: FormConfigTitleComponent;
  let fixture: ComponentFixture<FormConfigTitleComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfigTitleComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigTitleComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      html: formBuilder.group({
        tag: ['', Validators.required],
        text: ['', Validators.required]
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
