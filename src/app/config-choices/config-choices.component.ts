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
import { tap, map } from 'rxjs/operators';

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
        private activatedRoute: ActivatedRoute
    ) {

        //this.choices = this.htmlElementService.getStaticOptionChoices();
    }

    ngOnInit() {
        this.choiceTypes = CHOICE_TYPE;
        /*this.choices = {
            data: []
        };*/
        this.activatedRoute.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }

    edit(index = null){
        this.choices$.subscribe(result => {
            const data = {
                id: null,
                content: result.data[index],
                index: index
            };
            const myAss = {
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
            const modal = this.modalService.open(
                ConfigChoiceFormComponent, this.options
            );
        
            modal.componentInstance.content = myAss;
            if(index != null){
                modal.componentInstance.content = data.content;
                modal.componentInstance.index = data.index;
            }

            modal.componentInstance.emitData.subscribe($e => {
                if($e.choices.length > 0){
                    var groups  = $e.choices.map(choice => choice.text)
                    if(index != null){
                        this.choices$ = this.choices$.pipe(
                            map( _ => {
                                result.data[index].html.choices = $e.choices;
                                return result;
                            }),
                            tap(x => console.log(x))
                        )
                    } else {
                        myAss.html.choices = $e.choices;
                        myAss.description = groups.join('|');
                        this.choices$ = this.choices$.pipe(
                            map( _ => {
                                //result.data.push(myAss);
                                result.data = [...result.data, myAss];
                                
                                return result;
                            }),
                            tap(x => console.log(x))
                        )
                    }
                }
                modal.dismiss();
            });
        });

        
        //console.log(this.choices.length);
        /*;*/
    }

    private loadPage(page: number) {
        this.choices$ = this.htmlElementService
        //.queryParams({ page: page })
        .getStaticOptionChoices()
        .pipe(
            map(result => {
                return result.paginate;
            })
        );
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
