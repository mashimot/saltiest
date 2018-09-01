import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigImgComponent } from './config-img.component';

describe('ConfigImgComponent', () => {
  let component: ConfigImgComponent;
  let fixture: ComponentFixture<ConfigImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
