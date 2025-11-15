import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoicesListComponent } from './config-choices-list/config-choices-list.component';

describe('ConfigChoicesComponent', () => {
  let component: ConfigChoicesComponent;
  let fixture: ComponentFixture<ConfigChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigChoicesComponent, ConfigChoiceFormComponent, ConfigChoicesListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        DragulaModule.forRoot(),
        NgxPaginationModule,
        NgbModalModule
      ],
      providers: [
        {
          provide: DragulaService
        }
      ]
    }).compileComponents();
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
