import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DragulaService } from 'ng2-dragula';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  startWith,
  switchMap,
  take,
  tap
} from 'rxjs/operators';
import { CHOICE_TYPE } from '../../_core/consts/choice-type.const';
import { Content } from '../../_core/model';
import { ContentChoiceItemService } from '../../shared/services/content-choice-item.service';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { ConfigChoiceFormComponent } from './../config-choice-form/config-choice-form.component';

interface ConfigChoice {
  type: string;
  icon: string;
  value: number;
}

interface ConfigChoiceType {
  [key: string]: ConfigChoice;
}

@Component({
  selector: 'app-config-choices-list',
  templateUrl: './config-choices-list.component.html',
  styleUrls: ['./config-choices-list.component.css']
})
export class ConfigChoicesListComponent implements OnInit {
  //choices: any;
  event: any;
  queryField: FormControl = new FormControl();
  choices$: Observable<any>;
  choices: any[];
  choiceTypes: ConfigChoiceType;
  options: any = {
    size: 'lg',
    backdrop: 'static',
    keyboard: false,
    centered: true
  };

  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(
    private htmlElementService: HtmlElementService,
    private dragulaService: DragulaService,
    private router: Router,
    private modalService: NgbModal
    /*private cd: ChangeDetectorRef,
        private location: Location,
        private contentChoiceItemService: ContentChoiceItemService,
        private activatedRoute: ActivatedRoute*/
  ) {}

  ngOnInit() {
    this.choiceTypes = CHOICE_TYPE;
    //this.activatedRoute.queryParams.subscribe(x => this.loadPage(x.page || 1));
    this.choices$ = this.queryField.valueChanges.pipe(
      startWith(''),
      delay(0),
      map(value => value.trim()),
      distinctUntilChanged(),
      tap(value => {
        if (value.length > 1 || value == '') {
          this.loadingSubject.next(true);
        }
      }),
      filter(value => {
        if (value == '' || value.length > 1) {
          return true;
        }

        return false;
      }),
      debounceTime(1000),
      switchMap(value => {
        console.log('value', value);
        if (value == '') {
          return this.htmlElementService.getOptionChoices();
        }

        return this.htmlElementService.getOptionChoices().pipe(
          tap(d => {
            console.log('jogos', d);
          }),
          map((result: any) => {
            const paginateData = result.paginate.data;
            const newData = [];

            paginateData.forEach(data => {
              if (data.description.toLowerCase().includes(value.toLowerCase())) {
                newData.push(data);
              }
            });
            console.log('paginateData', paginateData, 'newData', newData);

            result.paginate.data = newData;

            return result;
          })
        );
      }),
      tap(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  edit(content: any = null, index: number = null) {
    if (content == null) {
      content = {
        description: '',
        html: {
          category: 'form',
          content_choice_id: null,
          content_html_tag_id: 2,
          choices: [],
          group: '',
          label: 'Type your Text',
          tag: 'radio'
        }
      };
    }

    const modal = this.modalService.open(ConfigChoiceFormComponent, this.options);

    modal.componentInstance.content = content;
    modal.componentInstance.index = index;
    modal.componentInstance.emitData.subscribe($e => {
      if ($e.choices.length > 0) {
        const groups = $e.choices.map(choice => choice.text);
        this.choices$ = this.choices$.pipe(
          map(result => {
            if (index == null) {
              content.html.choices = $e.choices;
              content.description = groups.join('|');
              result.paginate.data.push(content);

              return result;
            }

            result.paginate.data[index].html.choices = $e.choices;
            return result;
          }),
          tap(x => console.log(x))
        );
      }
      modal.dismiss();
    });
  }

  private loadPage(page: number) {
    this.choices$ = this.htmlElementService.getOptionChoices();
    /*this.choices$ = this.htmlElementService
        //.queryParams({ page: page })
        .getStaticOptionChoices()
        .pipe(
            map(result => {
                return result.paginate;
            })
        );*/
    /*this.htmlElementService.queryParams({
            page: page
        }).subscribe(result => {
            this.choices = result.paginate;
        });*/
  }

  pageChange($e) {
    const navigationExtras = {
      queryParams: {
        page: $e
      }
    };

    // Navigate to the login page with extras
    this.router.navigate([], navigationExtras);
  }

  getChoiceType(tag: string) {
    return this.choiceTypes[tag.toUpperCase()];
  }

  ngOnDestroy() {
    this.dragulaService.destroy('pages');
    this.dragulaService.destroy('contents');
    this.dragulaService.destroy('columns');
    this.dragulaService.destroy('rowSortable');
    this.dragulaService.destroy('sortableElements');
  }

  setchoiceType(content: Content, choiceType: ConfigChoice) {
    content.html.tag = choiceType.type;
  }
}
