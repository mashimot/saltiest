import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMenuComponent } from './form-menu.component';

describe('FormMenuComponent', () => {
  let component: FormMenuComponent;
  let fixture: ComponentFixture<FormMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
