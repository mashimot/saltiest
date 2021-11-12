import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HtmlElementService } from '../shared/services/html-element.service';
import { DragulaService } from 'ng2-dragula';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { Location } from '@angular/common';
import { CHOICE_TYPE } from '../_core/consts/choice-type.const';
import { Content } from '../_core/model';
import { Observable } from 'rxjs';
import { tap, map, filter, switchMap, startWith, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { ContentService } from '../shared/services/content.service';
import { ContentChoiceItemService } from '../shared/services/content-choice-item.service';
import { FormControl } from '@angular/forms';

interface ConfigChoice {
    type: string;
    icon: string;
    value: number;   
}

interface ConfigChoiceType {
    [key: string]: ConfigChoice
}

@Component({
    selector: 'app-config-choices',
    templateUrl: './config-choices.component.html',
    styleUrls: ['./config-choices.component.css']
})
export class ConfigChoicesComponent implements OnInit {
    //choices: any;
    event: any;
    queryField: FormControl = new FormControl();
    choices$: Observable<any>;
    choiceTypes: ConfigChoiceType;
    options: any = {
        size: 'lg',
        backdrop : 'static',
        keyboard : false,
        centered: true
    };

    constructor(
        private htmlElementService: HtmlElementService,
        private dragulaService: DragulaService,
        private router: Router,
        private modalService: NgbModal,
        private cd: ChangeDetectorRef,
        private location: Location,
        private contentChoiceItemService: ContentChoiceItemService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.choiceTypes = CHOICE_TYPE;
        this.activatedRoute.queryParams.subscribe(x => this.loadPage(x.page || 1));
        this.choices$ = this.queryField
            .valueChanges
            .pipe(
                startWith(''),
                map(value => value.trim()),
                filter(value => {
                    if(value.length > 1){
                        return true
                    }

                    return true;
                }),
                distinctUntilChanged(),
                debounceTime(1000),
                switchMap((value) => {
                    if(value == ''){
                        return this.htmlElementService
                            .getOptionChoices()
                            .pipe(
                                tap(value => console.log('1', value)),
                                map((result) => {
                                    return result.paginate;
                                })
                            );
                    }

                    let newData = [];
                    return this.htmlElementService
                        .getOptionChoices()
                        .pipe(
                            tap(value2 => console.log('2', value2)),
                            map((result: any) => {
                                let aux = result.paginate.data;
                                aux.forEach((data) => {
                                    if((data.description.toLowerCase()).includes(value.toLowerCase())){
                                        newData.push(data)
                                    }
                                });
    
                                result.paginate.data = newData;
                
                                return result;
                            }),
                            map((result) => {
                                return result.paginate;
                            })
                        );
                })
            );
    }

    edit(content: any = null, index: number = null){
        if(content == null){
            content = {
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
            };
        }
        
        const modal = this.modalService.open(
            ConfigChoiceFormComponent,
            this.options
        );
        
        modal.componentInstance.content = content;
        modal.componentInstance.index = index;
        modal.componentInstance.emitData.subscribe($e => {
            if($e.choices.length > 0){
                const groups  = $e.choices.map(choice => choice.text);

                if(index == null){
                    this.choices$ = this.choices$
                        .pipe(
                            map((result) => {
                                content.html.choices = $e.choices;
                                content.description = groups.join('|');

                                result.data = [
                                    ...result.data,
                                    content
                                ];
                                
                                return result;
                            }),
                            tap(x => console.log('xx', x))
                        );
                    return;
                }

                this.choices$ = this.choices$
                    .pipe(
                        map(result => {
                            result.data[index].html.choices = $e.choices;
                            return result;
                        }),
                        tap(x => console.log(x))
                    )
            }
            modal.dismiss();
        });
    }

    private loadPage(page: number) {

        this.choices$ = this.htmlElementService
            .getOptionChoices()
            .pipe(
                map((result) => {
                    return result.paginate;
                })
            );
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

    pageChange($e){
        let navigationExtras = {
            queryParams: { 
                'page': $e
            }
        };
      
        // Navigate to the login page with extras
        this.router.navigate([], navigationExtras);
    }

    getChoiceType(tag: string){
        return this.choiceTypes[tag.toUpperCase()];
    }

    ngOnDestroy() {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
    }

    setchoiceType(content: Content, choiceType: ConfigChoice){                                                                                
        content.html.tag = choiceType.type;
    }

}
