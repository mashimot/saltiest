import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTableToJsonComponent } from './create-table-to-json.component';

describe('CreateTableToJsonComponent', () => {
  let component: CreateTableToJsonComponent;
  let fixture: ComponentFixture<CreateTableToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTableToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTableToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
