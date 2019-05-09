import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChoiceFormComponent } from './config-choice-form.component';

describe('ConfigChoiceFormComponent', () => {
  let component: ConfigChoiceFormComponent;
  let fixture: ComponentFixture<ConfigChoiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigChoiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
