import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormConfigGeneralComponent } from './form-config-general.component';

describe('FormConfigGeneralComponent', () => {
  let component: FormConfigGeneralComponent;
  let fixture: ComponentFixture<FormConfigGeneralComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfigGeneralComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigGeneralComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.parentFormGroup = formBuilder.group({
      html: formBuilder.group({
        label: ['Label 1'],
      }),
      options: formBuilder.group({
        nullable: [false],
      }),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('shoul html.label equal to Label 1', () => {
    //expect(component.parentFormGroup.get('html.label').value).toEqual('Label 1')
  });*/
});
