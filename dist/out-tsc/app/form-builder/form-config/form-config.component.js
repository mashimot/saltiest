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
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var FormConfigComponent = /** @class */ (function () {
    function FormConfigComponent(formContentConfig, fb, modalService, activeModal) {
        this.formContentConfig = formContentConfig;
        this.fb = fb;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.emitData = new EventEmitter();
        this.isClickedChange = new EventEmitter();
    }
    FormConfigComponent.prototype.ngOnInit = function () {
        var tag = this.content.html.tag;
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
    };
    FormConfigComponent.prototype.register = function () {
        this.emitData.emit(this.formConfig.value);
        this.activeModal.close();
    };
    FormConfigComponent.prototype.populate = function (e) {
        var _this = this;
        return e.map(function (d) { return _this.elements['controls'].push(_this.getElement(d.text, d.value)); });
    };
    FormConfigComponent.prototype.getElement = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            'text': [text, [
                    Validators.required
                ]],
            'value': [value, [
                    Validators.required
                ]]
        });
    };
    Object.defineProperty(FormConfigComponent.prototype, "elements", {
        get: function () {
            return this.formConfig.controls['html'].get('elements');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild('modal'),
        __metadata("design:type", TemplateRef)
    ], FormConfigComponent.prototype, "modal", void 0);
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
            NgbModal,
            NgbActiveModal])
    ], FormConfigComponent);
    return FormConfigComponent;
}());
export { FormConfigComponent };
//# sourceMappingURL=form-config.component.js.map