import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HtmlElementService } from '../shared/services/html-element.service';
import { DragulaService } from 'ng2-dragula';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';

@Component({
    selector: 'app-config-choices',
    templateUrl: './config-choices.component.html',
    styleUrls: ['./config-choices.component.css']
})
export class ConfigChoicesComponent implements OnInit {
    groups: Array<any>;
    toolType: {
        type: string,
        icon: string,
        value: number
    };
    toolTypes: Array<{
        type: string,
        icon: string,
        value: number
    }> = [{
        type: 'select',
        value: 3,
        icon: 'fas fa-box-open'
    },{
        type: 'radio',
        icon: 'far fa-check-circle',
        value: 1
    },{
        type: 'checkbox',
        icon: 'far fa-check-square',
        value: 2
    }];
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
        private cd: ChangeDetectorRef
    ) {
        this.toolType = this.toolTypes[1];
        this.groups = [];
        //this.groups = this.htmlElementService.getStaticOptionChoices();
    }

    ngOnInit() {
        this.htmlElementService.getTools().subscribe(result => {
            if(result.success){
                this.groups = result.data.groups;
                console.log('teste',  this.groups);
            }
        });
    }

    edit(index = null){
        const data = {
            content: this.groups[index],
            index: index
        };
        console.log(data.content);
        const m = this.modalService.open(ConfigChoiceFormComponent, this.options);
        //m.componentInstance.data = data;
        console.log(this.groups[0]);
        const myAss = {
            html: {
                category: "form",
                choices: [],
                group: "",
                label: "Type your Text",
                tag: "radio"
            }
        };
        m.componentInstance.content = myAss;
        if(index != null){
            m.componentInstance.content = this.groups[index];
            m.componentInstance.index = data.index;
        }
        
        //console.log(this.groups.length);
        m.componentInstance.emitData.subscribe($e => {
            if($e.choices.length > 0){
                const text = $e.choices.map(item => {
                    return item.text;
                }).join("|");
                if(index != null){
                    this.groups[index].html.choices = $e.choices;
                    this.groups[index].html.group = text;
                } else {
                    myAss.html.group = text;
                    myAss.html.choices = $e.choices;
                    this.groups.push(myAss);
                }
            }
            m.dismiss();
        });
    }

    ngOnDestroy() {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
    }

    setToolType(toolType){
        this.toolType = {
            value: toolType.value,
            icon: toolType.icon,
            type: toolType.type
        }
    }
}
