import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHtmlEditorComponent } from './config-html-editor.component';

describe('ConfigHtmlEditorComponent', () => {
  let component: ConfigHtmlEditorComponent;
  let fixture: ComponentFixture<ConfigHtmlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHtmlEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHtmlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
