import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from '../shared/validators/CustomValidators';

import { CreateTableToJsonComponent } from './create-table-to-json.component';

describe('CreateTableToJsonComponent', () => {
  let component: CreateTableToJsonComponent;
  let fixture: ComponentFixture<CreateTableToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTableToJsonComponent ],
      imports: [
        ReactiveFormsModule
      ]
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

  it('should gridModel sum must be invalid (when sum > 12)', () => {
    component.form.patchValue({
      gridModel: '4 4 3'
    });

    expect(component.form.valid).toBeFalsy();
  });

  it('should gridModel sum must be valid (equal to 12)', () => {
    component.form.patchValue({
      gridModel: '4 4 4'
    });

    expect(component.form.valid).toBeTruthy();
  });

  it('should gridModel accept only numbers', () => {
    component.form.patchValue({
      gridModel: '4 4 a'
    });

    expect(component.form.valid).toBeFalsy();
  });
  
  it('should createTable have been called', () => {
    spyOn(component, 'createTable').and.callThrough();
    component.createTable();
    expect(component.createTable).toHaveBeenCalled();
  });

  /*it('should', () => {
    component.form.patchValue({
      gridModel: '4 4 4',
      database: {
        engine: 'oracle'
      }
    });
    component.ngOnInit();
    alert('t');
    console.log('component', component.form.value);
    spyOn(component, 'createTable');
    component.createTable();
    fixture.detectChanges();

    spyOn(component.schemasChange, 'emit');

  });*/
});
