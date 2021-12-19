import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChoicesComponent } from './config-choices.component';

describe('ConfigChoicesComponent', () => {
  let component: ConfigChoicesComponent;
  let fixture: ComponentFixture<ConfigChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
