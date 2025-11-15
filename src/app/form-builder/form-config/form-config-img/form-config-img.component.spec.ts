import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormConfigImgComponent } from './form-config-img.component';

describe('FormConfigImgComponent', () => {
  let component: FormConfigImgComponent;
  let fixture: ComponentFixture<FormConfigImgComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfigImgComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigImgComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      html: formBuilder.group({
        tag: ['', Validators.required],
        src: ['', Validators.required]
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
