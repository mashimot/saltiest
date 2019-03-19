import { Component, OnInit, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { FormContentConfigService } from './../../services/form-content-config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form-config',
    templateUrl: './form-config.component.html',
    styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
    @ViewChild('modal') modal: TemplateRef<any>;
    options: NgbModalOptions;
    formConfig: FormGroup;
    @Input() content;
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
        private modalService: NgbModal,
        private activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        const tag = this.content.html.tag;
        this.render = this.formContentConfig.render()[tag];
        this.formConfig = this.fb.group({
            html: this.fb.group({
                'tag': [this.content.html.tag],
                'category': [this.content.html.category],
                'elements': this.fb.array([], [
                    //Validators.required
                ]),
                'fields': [this.content.html.fields, [
                    //Validators.required
                ]],
                'label': [this.content.html.label, [
                    //Validators.required,
                    //Validators.minLength(10)
                ]],
                'src': [this.content.html.src, [
                    //Validators.required,
                    //Validators.minLength(5)
                ]],
                'text': [this.content.html.text, [
                    //Validators.required
                ]],
                'data': [this.content.html.data, [
                    //Validators.required
                ]]
            }),
            table: this.fb.group({
                'columnName': [this.content.table.columnName],
                'type': [this.content.table.type],
                'size': [this.content.table.size],
                'nullable': [this.content.table.nullable, [
                    //Validators.required
                ]]
            })
        });
        if (this.content.html.elements) {
            this.populate(this.content.html.elements);
        }
    }

    register(){
        this.emitData.emit(this.formConfig.value);
    }

    populate(e) {
        return e.map(
            (d) => this.elements['controls'].push(this.getElement(d.text, d.value))
        );
    }

    private getElement(text: string = '', value: string = ''): object {
        return this.fb.group({
            'text': [text, [
                Validators.required
            ]],
            'value': [value, [
                Validators.required
            ]]
        });
    }

    get elements() {
        return this.formConfig.controls['html'].get('elements');
    }
}
