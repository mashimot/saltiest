import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { of } from 'rxjs';
import { ContentService } from 'src/app/shared/services/content.service';
import { RenderContentModule } from '../render-content/render-content.module';

import { FormContentsComponent } from './form-contents.component';

describe('FormContentsComponent', () => {
  let component: FormContentsComponent;
  let fixture: ComponentFixture<FormContentsComponent>;
  let mockContentService;
  let CONTENTS = [{
    id: 1,
    description: "",
    html: {
        category: "form",
        content_choice_id: null,
        content_html_tag_id: 2,
        choices: [],
        group: "",
        label: "Type your Text",
        tag: "radio"
    }
  },{
    id: 2,
    description: "",
    html: {
        category: "form",
        content_choice_id: null,
        content_html_tag_id: 3,
        choices: [],
        group: "",
        label: "Type your Text",
        tag: "text"
    }
  }];

  beforeEach(async(() => {
    mockContentService = jasmine.createSpyObj('ContentService', ['deleteContent'])
    TestBed.configureTestingModule({
      declarations: [ 
        FormContentsComponent
      ],
      imports: [
        HttpClientTestingModule,
        RenderContentModule,
        DragulaModule
      ],
      providers: [
        {
          provide: DragulaService
        },
        {
          provide: ContentService,
          useValue: mockContentService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContentsComponent);
    component = fixture.componentInstance;
    component.column = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a content statically', () => {
    component.column.contents = [{
      description: "",
      html: {
          category: "form",
          content_choice_id: null,
          content_html_tag_id: 2,
          choices: [],
          group: "",
          label: "Type your Text",
          tag: "radio"
      }
    },{
      description: "",
      html: {
          category: "form",
          content_choice_id: null,
          content_html_tag_id: 3,
          choices: [],
          group: "",
          label: "Type your Text",
          tag: "text"
      }
    }]
    spyOn(component, 'deleteContent').and.callThrough();
    component.deleteContent(0);
    expect(component.column.contents.length).toBe(1);
  });

  it('should delete a content with a service', fakeAsync(() => {
    component.column.contents = CONTENTS;

    mockContentService.deleteContent.and.returnValue(of({
      success: true
    }));
    
    spyOn(component, 'deleteContent').and.callThrough();
    component.deleteContent(0, {
      id: 1
    });

    mockContentService.deleteContent(1)
      .subscribe(result => {
        expect(component.column.contents.length).toBe(1);
      });
  }));
});
