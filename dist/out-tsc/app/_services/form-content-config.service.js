var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var FormContentConfigService = /** @class */ (function () {
    function FormContentConfigService() {
        this.newFormConfigSubject = new Subject();
        this.component = {
            general: {
                title: "General Configuration", componentName: 'app-config-general'
            },
            choices: {
                title: "Choices", componentName: 'app-config-choices'
            },
            visibleIf: {
                title: "Vísivel Se", componentName: '<hide-when-tab content="content"></hide-when-tab>'
            },
            htmlEditor: {
                title: "Html Editor", componentName: 'app-config-html-editor'
            },
            title: {
                title: "Title", componentName: 'app-config-title'
            },
            table: {
                title: "Table", componentName: 'app-config-table-builder'
            },
            img: {
                title: "Image", componentName: 'app-config-img'
            }
        };
    }
    FormContentConfigService.prototype.render = function () {
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
    ;
    FormContentConfigService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormContentConfigService);
    return FormContentConfigService;
}());
export { FormContentConfigService };
//# sourceMappingURL=form-content-config.service.js.map