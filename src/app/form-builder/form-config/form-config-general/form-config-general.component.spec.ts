import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigGeneralComponent } from './form-config-general.component';

describe('FormConfigGeneralComponent', () => {
  let component: FormConfigGeneralComponent;
  let fixture: ComponentFixture<FormConfigGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
