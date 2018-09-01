import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColumnsComponent } from './form-columns.component';

describe('FormColumnsComponent', () => {
  let component: FormColumnsComponent;
  let fixture: ComponentFixture<FormColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
