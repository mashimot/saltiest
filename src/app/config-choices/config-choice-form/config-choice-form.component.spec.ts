import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { ConfigChoiceFormComponent } from './config-choice-form.component';

describe('ConfigChoiceFormComponent', () => {
  let component: ConfigChoiceFormComponent;
  let fixture: ComponentFixture<ConfigChoiceFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DragulaModule
      ],
      declarations: [ ConfigChoiceFormComponent ],
      providers: [ 
        NgbActiveModal,
        {
          provide: DragulaService
        }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChoiceFormComponent);
    component = fixture.componentInstance;
    component.content = {
      html: {
        choices: [{
          text: 'text 1',
          value: 'value 1'
        }]
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should text be converted to array of choices', () => {
    component.text.patchValue('text 1|value 1');
    expect(component.choiceForm.get('choices').value).toEqual([{
      text: 'text 1',
      value: 'value 1'
    }])
  });

  it('should add a new element to choiceForm', () => {
    spyOn(component, 'addChoice').and.callThrough();
    component.addChoice();
    expect(component.choiceForm.get('choices').value.length).toBe(2)
  });

  it('should remove an element in choiceForm', () => {
    spyOn(component, 'removeContent').and.callThrough();
    component.removeContent(1);
    expect(component.choiceForm.get('choices').value.length).toBe(1)
    //expect(component.choiceForm.get('choices').value.length).toBe(2)
  });

  it('should choiceChanged method have been called', () => {
    spyOn(component, 'choiceChanged').and.callThrough();
    component.choiceChanged();
    expect(component.choiceChanged).toHaveBeenCalled();
  });

  it('should cancel method have been called', () => {
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });
});
