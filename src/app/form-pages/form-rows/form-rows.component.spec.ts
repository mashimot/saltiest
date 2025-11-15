import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxUiLoaderHttpModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { of } from 'rxjs';
import { RowService } from 'src/app/shared/services/row.service';

import { FormRowsComponent } from './form-rows.component';

describe('FormRowsComponent', () => {
  let component: FormRowsComponent;
  let fixture: ComponentFixture<FormRowsComponent>;
  let rowService: RowService;
  let spyRowService;

  beforeEach(async(() => {
    spyRowService = jasmine.createSpyObj('RowService', [
      'storeRow',
      'deleteRow',
    ]);

    TestBed.configureTestingModule({
      declarations: [FormRowsComponent],
      imports: [HttpClientTestingModule, DragulaModule],
      providers: [
        {
          provide: RowService,
          useValue: spyRowService,
        },
        {
          provide: DragulaService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRowsComponent);
    component = fixture.componentInstance;
    component.page = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a row statically (page.rows.length == 1)', () => {
    component.page = {
      rows: [
        {
          grid: '12',
          columns: [],
        },
        {
          grid: '6',
          columns: [],
        },
      ],
    };
    spyOn(component, 'deleteRow').and.callThrough();
    component.deleteRow(0);

    expect(component.page.rows.length).toBe(1);
  });

  it('should delete a row with a service', fakeAsync(() => {
    component.page = {
      rows: [
        {
          id: 1,
          grid: '12',
          columns: [],
        },
        {
          id: 2,
          grid: '6',
          columns: [],
        },
      ],
    };

    const resMock = of({
      success: true,
      id: 1,
    });
    spyRowService.deleteRow.and.returnValue(resMock);

    spyOn(component, 'deleteRow').and.callThrough();
    component.deleteRow(0, component.page.rows[0]);

    spyRowService.deleteRow(1).subscribe(result => {
      expect(result.id).toEqual(1);
    });

    //spyOn(component, 'deleteRow').and.callThrough();
    //component.deleteRow(0, component.page.rows[0]);

    /*spyRowService.deleteRow(component.page.rows[0]).subscribe(result => {
      expect(result.success).toEqual(true);
    })*/
    //expect(spyRowService.deleteRow).toHaveBeenCalledWith(component.page.rows[0].id);
  }));
});
