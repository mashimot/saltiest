import { Component, OnInit, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { FormContentConfigService } from './../../_services/form-content-config.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from 'src/app/shared/services/content.service';
import { Content } from '../../_core/model';

@Component({
    selector: 'app-form-config',
    templateUrl: './form-config.component.html',
    styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
    @ViewChild('modal') modal: TemplateRef<any>;
    options: NgbModalOptions;
    configForm: FormGroup;
    //content: any;

    @Input() content_id: number;
    @Input() content: Content;
    @Output() emitData = new EventEmitter();
    @Output() isClickedChange = new EventEmitter();

    render: {
        [key: string]: {
            tabs: Array<string>
        }
    };
    constructor(
        private formContentConfig: FormContentConfigService,
        private fb: FormBuilder,
        private contentService: ContentService,
        private activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        /*this.contentService.showContent(this.content_id).subscribe(r => {
            if(r.success){
                this.content = r.data;
                this.content['id'] = this.content_id;
                const tag = this.content.html.tag;
                this.render = this.formContentConfig.render()[tag];
                this.configForm = this.fb.group({
                    id: [this.content_id,[]],
                    html: this.fb.group({
                        'tag': [this.content.html.tag,[]],
                        'content_choice_id': [this.content.html.content_choice_id,[]],
                        'category': [this.content.html.category,[]],
                        'fields': [this.content.html.fields,[]],
                        'label': [this.content.html.label,[]],
                        'src': [this.content.html.src,[]],
                        'text': [this.content.html.text,[]],
                        'data': [this.content.html.data]
                    }),
                    table: this.fb.group({
                        'columnName': [this.content.table.columnName,[]],
                        'type': [this.content.table.type,[]],
                        'size': [this.content.table.size,[]],
                        'nullable': [this.content.table.nullable]
                    })
                });
            }
        });*/
        //this.content['id'] = this.content.;
        const tag = this.content.html.tag;
        this.render = this.formContentConfig.render()[tag];
        this.configForm = this.fb.group({
            id: [this.content_id,[]],
            html: this.fb.group({
                'tag': [this.content.html.tag,[]],
                'content_choice_id': [this.content.html.content_choice_id ,[]],
                'choices': this.fb.array([]),
                'category': [this.content.html.category, []],
                'fields': [this.content.html.fields, []],
                'label': [this.content.html.label, []],
                'src': [this.content.html.src, []],
                'text': [this.content.html.text, []],
                'data': [this.content.html.data]
            }),
            table: this.fb.group({
                'columnName': [this.content.table.columnName, []],
                'type': [this.content.table.type,[]],
                'size': [this.content.table.size,[]],
                'nullable': [this.content.table.nullable, []]
            })
        });        
    }

    editContent(element){
    }

    register(){
        console.log(this.configForm.value);
        this.emitData.emit(this.configForm.value);
        //this.activeModal.close();
    }
}
