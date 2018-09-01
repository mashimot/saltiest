import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRowsComponent } from './form-rows.component';

describe('FormRowsComponent', () => {
  let component: FormRowsComponent;
  let fixture: ComponentFixture<FormRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
