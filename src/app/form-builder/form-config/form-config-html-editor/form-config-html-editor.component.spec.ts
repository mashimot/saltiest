import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigHtmlEditorComponent } from './form-config-html-editor.component';

describe('FormConfigHtmlEditorComponent', () => {
  let component: FormConfigHtmlEditorComponent;
  let fixture: ComponentFixture<FormConfigHtmlEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigHtmlEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigHtmlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
