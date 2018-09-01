import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContentsComponent } from './form-contents.component';

describe('FormContentsComponent', () => {
  let component: FormContentsComponent;
  let fixture: ComponentFixture<FormContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
