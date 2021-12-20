import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormContentConfigService {

    newFormConfigSubject = new Subject<any>();
    component: {
        [key: string]: {
            title: string,
            componentName: string
        }
    };

    constructor() {
        this.component = {
            general: {
                title: "General Configuration", componentName: 'app-form-config-general'
            },
            choices: {
                title: "Choices", componentName: 'app-config-choices'
            },
            visibleIf: {
                title: "Vísivel Se", componentName: '<hide-when-tab content="content"></hide-when-tab>'
            },
            htmlEditor: {
                title: "Html Editor", componentName: 'app-form-config-html-editor'
            },
            title: {
                title: "Title", componentName: 'app-form-config-title'
            },
            /*table: {
                title: "Table", componentName: 'app-config-table-builder'
            },*/
            img: {
                title: "Image", componentName: 'app-form-config-img'
            }
        };
    }

    render() {
        return {
            'h1': {
                components: [this.component.title]
            },
            'h2': {
                components: [this.component.title]
            },
            'h3': {
                components: [this.component.title]
            },
            'h4': {
                components: [this.component.title]
            },
            'h5': {
                components: [this.component.title]
            },
            'h6': {
                components: [this.component.title]
            },
            'legend': {
                components: [this.component.title]
            },
            'radio': {
                components: [this.component.general, this.component.choices]
            },
            'checkbox': {
                components: [this.component.general, this.component.choices]
            },
            'select': {
                components: [this.component.general, this.component.choices]
            },
            'textarea': {
                components: [this.component.general]
            },
            'text': {
                components: [this.component.general]
            },
            'number': {
                components: [this.component.general]
            },
            'date': {
                components: [this.component.general]
            },
            'image': {
                components: [this.component.img]
            },
            'html': {
                components: [this.component.htmlEditor]
            },
            'table': {
                components: [this.component.table]
            },
            'file': {
                components: [this.component.general]
            }
        };
    };
}
