import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigTitleComponent } from './form-config-title.component';

describe('FormConfigTitleComponent', () => {
  let component: FormConfigTitleComponent;
  let fixture: ComponentFixture<FormConfigTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
