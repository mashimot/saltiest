var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormContentConfigService } from '../../services/form-content-config.service';
import { FormConfigService } from './../../services/form-config.service';
import { RenderHtmlService } from '../../services/render-html.service';
var FormContentsComponent = /** @class */ (function () {
    function FormContentsComponent(formContentConfigService, formConfigService, renderHtmlService) {
        this.formContentConfigService = formContentConfigService;
        this.formConfigService = formConfigService;
        this.renderHtmlService = renderHtmlService;
    }
    FormContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(function (data) { return _this.config = data; });
    };
    FormContentsComponent.prototype.copyHtml = function (content) {
    };
    FormContentsComponent.prototype.sendDataToModal = function (content) {
        this.formContentConfigService.setContent(content);
    };
    FormContentsComponent.prototype.deleteContent = function (contentIndex) {
        this.column.contents.splice(contentIndex, 1);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "column", void 0);
    FormContentsComponent = __decorate([
        Component({
            selector: 'app-form-contents',
            templateUrl: './form-contents.component.html',
            styleUrls: ['./form-contents.component.css']
        }),
        __metadata("design:paramtypes", [FormContentConfigService,
            FormConfigService,
            RenderHtmlService])
    ], FormContentsComponent);
    return FormContentsComponent;
}());
export { FormContentsComponent };
//# sourceMappingURL=form-contents.component.js.map