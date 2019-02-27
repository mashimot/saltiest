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
        this.renderHtmlService.setParams(content);
        var code = this.renderHtmlService.get().html;
        this.copyToClipboard(code);
    };
    FormContentsComponent.prototype.copyToClipboard = function (text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return window.clipboardData.setData("Text", text);
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy"); // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
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