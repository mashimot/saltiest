import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTableBuilderComponent } from './config-table-builder.component';

describe('ConfigTableBuilderComponent', () => {
  let component: ConfigTableBuilderComponent;
  let fixture: ComponentFixture<ConfigTableBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTableBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTableBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
