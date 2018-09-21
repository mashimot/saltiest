import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormContentConfigService } from './../../services/form-content-config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

interface Html {
    category?: string;
    tag: string;
    label?: string;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

interface Table {
    columnName?: string;
    isPrimaryKey?: boolean;
    type?: string;
    nullable?: boolean;
    size?: string;
}

interface Content {
    html?: Html;
    table?: Table; //optional
}


@Component({
    selector: 'app-form-config',
    templateUrl: './form-config.component.html',
    styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
    @ViewChild('modal') modal: TemplateRef<any>;

    closeResult: string;
    options: NgbModalOptions;
    formConfig: FormGroup;
    render: {
        [key: string]: {
            tabs: Array<string>
        }
    };
    constructor(
        private formContentConfig: FormContentConfigService,
        private fb: FormBuilder,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.options = {
            size: 'lg',
            centered: true
        };
        this.formContentConfig.getContent().subscribe(
            (data) => {
                const tag = data.html.tag;
                this.render = this.formContentConfig.render()[tag];
                this.formConfig = this.fb.group({
                    html: this.fb.group({
                        'tag': [data.html.tag],
                        'category': [data.html.category],
                        'elements': this.fb.array([], [
                            //Validators.required
                        ]),
                        'label': [data.html.label, [
                            //Validators.required,
                            //Validators.minLength(10)
                        ]],
                        'src': [data.html.src, [
                            //Validators.required,
                            //Validators.minLength(5)
                        ]],
                        'text': [data.html.text, [
                            //Validators.required
                        ]],
                        'data': [data.html.data, [
                            //Validators.required
                        ]]
                    }),
                    table: this.fb.group({
                        'columnName': [data.table.columnName],
                        'nullable': [data.table.nullable, [
                            //Validators.required
                        ]]
                    })
                });
                if (data.html.elements) {
                    this.populate(data.html.elements);
                }
                let m = this.modalService.open(this.modal, this.options)
                m.result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                    if (typeof data.html !== undefined) {
                        data.html = this.formConfig.value.html;
                    }
                    if (typeof data.table !== undefined) {
                        data.table = this.formConfig.value.table;
                    }
                }, (reason) => {
                    //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
     
                /*this.formConfig.valueChanges.subscribe((form) => {
                    if (typeof data.html !== undefined) {
                        this.content.html = form.html;
                    }
                    if (typeof data.table !== undefined) {
                        this.content.table = form.table;
                    }
                });*/
              
            }
        );
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
