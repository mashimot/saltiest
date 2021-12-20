import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigImgComponent } from './form-config-img.component';

describe('FormConfigImgComponent', () => {
  let component: FormConfigImgComponent;
  let fixture: ComponentFixture<FormConfigImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
