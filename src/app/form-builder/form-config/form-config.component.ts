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
    @ViewChild('modal', { static: false }) modal: TemplateRef<any>;
    options: NgbModalOptions;
    configForm: FormGroup;

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
        private formBuilder: FormBuilder,
        //private contentService: ContentService,
        private activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        const tag = this.content.html.tag;
        this.render = this.formContentConfig.render()[tag];
        this.configForm = this.formBuilder.group({
            id: [null],
            name: [null],
            html: this.formBuilder.group({
                'tag': [null],
                'content_choice_id': [null],
                'choices': this.formBuilder.array([]),
                'category': [null],
                //'fields': [this.content.html.fields],
                'label': [null],
                'src': [null],
                'text': [null],
                'data': [null]
            }),
            'type': this.formBuilder.group({
                datatype: [null],
                length: [null],
            }),
            'options': this.formBuilder.group({
                'nullable': [null]
            })
        });

        this.configForm.patchValue(this.content);
    }

    register(){
        this.emitData.emit(this.configForm.value);
    }
}

