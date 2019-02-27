var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormContentConfigService } from './../../services/form-content-config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var FormConfigComponent = /** @class */ (function () {
    function FormConfigComponent(formContentConfig, fb, modalService) {
        this.formContentConfig = formContentConfig;
        this.fb = fb;
        this.modalService = modalService;
    }
    FormConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.formContentConfig.getContent().subscribe(function (data) {
            var tag = data.html.tag;
            _this.render = _this.formContentConfig.render()[tag];
            _this.formConfig = _this.fb.group({
                html: _this.fb.group({
                    'tag': [data.html.tag],
                    'category': [data.html.category],
                    'elements': _this.fb.array([], []),
                    'fields': [data.html.fields, []],
                    'label': [data.html.label, []],
                    'src': [data.html.src, []],
                    'text': [data.html.text, []],
                    'data': [data.html.data, []]
                }),
                table: _this.fb.group({
                    'columnName': [data.table.columnName],
                    'type': [data.table.type],
                    'size': [data.table.size],
                    'nullable': [data.table.nullable, []]
                })
            });
            if (data.html.elements) {
                _this.populate(data.html.elements);
            }
            var m = _this.modalService.open(_this.modal, _this.options);
            m.result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
                if (typeof data.html !== undefined) {
                    data.html = _this.formConfig.value.html;
                }
                if (typeof data.table !== undefined) {
                    data.table = _this.formConfig.value.table;
                }
            }, function (reason) {
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
        });
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
    FormConfigComponent = __decorate([
        Component({
            selector: 'app-form-config',
            templateUrl: './form-config.component.html',
            styleUrls: ['./form-config.component.css']
        }),
        __metadata("design:paramtypes", [FormContentConfigService,
            FormBuilder,
            NgbModal])
    ], FormConfigComponent);
    return FormConfigComponent;
}());
export { FormConfigComponent };
//# sourceMappingURL=form-config.component.js.map