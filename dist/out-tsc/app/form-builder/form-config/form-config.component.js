var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { FormContentConfigService } from './../../services/form-content-config.service';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from 'src/app/shared/services/content.service';
var FormConfigComponent = /** @class */ (function () {
    function FormConfigComponent(formContentConfig, fb, contentService, activeModal) {
        this.formContentConfig = formContentConfig;
        this.fb = fb;
        this.contentService = contentService;
        this.activeModal = activeModal;
        this.emitData = new EventEmitter();
        this.isClickedChange = new EventEmitter();
    }
    FormConfigComponent.prototype.ngOnInit = function () {
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
        var tag = this.content.html.tag;
        this.render = this.formContentConfig.render()[tag];
        this.configForm = this.fb.group({
            id: [this.content_id, []],
            html: this.fb.group({
                'tag': [this.content.html.tag, []],
                'content_choice_id': [this.content.html.content_choice_id, []],
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
                'type': [this.content.table.type, []],
                'size': [this.content.table.size, []],
                'nullable': [this.content.table.nullable]
            })
        });
    };
    FormConfigComponent.prototype.editContent = function (element) {
    };
    FormConfigComponent.prototype.register = function () {
        console.log(this.configForm.value);
        this.emitData.emit(this.configForm.value);
        //this.activeModal.close();
    };
    __decorate([
        ViewChild('modal'),
        __metadata("design:type", TemplateRef)
    ], FormConfigComponent.prototype, "modal", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], FormConfigComponent.prototype, "content_id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "content", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "emitData", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "isClickedChange", void 0);
    FormConfigComponent = __decorate([
        Component({
            selector: 'app-form-config',
            templateUrl: './form-config.component.html',
            styleUrls: ['./form-config.component.css']
        }),
        __metadata("design:paramtypes", [FormContentConfigService,
            FormBuilder,
            ContentService,
            NgbActiveModal])
    ], FormConfigComponent);
    return FormConfigComponent;
}());
export { FormConfigComponent };
//# sourceMappingURL=form-config.component.js.map