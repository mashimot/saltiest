var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';
import { RenderHtmlService } from '../../services/render-html.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormConfigComponent } from './../../form-builder/form-config/form-config.component';
import { ContentService } from '../../shared/services/content.service';
var FormContentsComponent = /** @class */ (function () {
    function FormContentsComponent(formConfigService, renderHtmlService, modalService, cd, contentService) {
        this.formConfigService = formConfigService;
        this.renderHtmlService = renderHtmlService;
        this.modalService = modalService;
        this.cd = cd;
        this.contentService = contentService;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
    }
    FormContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormContentsComponent.prototype.trackByFn = function (index, item) {
        return index;
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
    FormContentsComponent.prototype.sendDataToModal = function (contents, index) {
        var _this = this;
        var m = this.modalService.open(FormConfigComponent, this.options);
        m.componentInstance.content_id = contents[index].id;
        m.componentInstance.content = contents[index];
        m.componentInstance.emitData.subscribe(function ($e) {
            contents[index] = $e;
            _this.cd.markForCheck();
            /*this.contentService.updateContent($e).subscribe(result => {
                console.log(result);
                if(result.success){
                    contents[index] = result.data;
                    this.cd.markForCheck();
                }
            });*/
        });
    };
    FormContentsComponent.prototype.deleteContent = function (contentIndex) {
        /*this.contentService.deleteContent(content.id)
        .subscribe(result =>{
            if(result.success){
                this.column.contents.forEach((cV, index) => {
                    if(cV.id == content.id){
                        this.column.contents.splice(index, 1);
                    }
                });
                this.cd.markForCheck();
            }
        });*/
        this.column.contents.splice(contentIndex, 1);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "column", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "rowIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "columnIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "pageId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "rowId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "columnId", void 0);
    FormContentsComponent = __decorate([
        Component({
            selector: 'app-form-contents',
            templateUrl: './form-contents.component.html',
            styleUrls: ['./form-contents.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [FormConfigService,
            RenderHtmlService,
            NgbModal,
            ChangeDetectorRef,
            ContentService])
    ], FormContentsComponent);
    return FormContentsComponent;
}());
export { FormContentsComponent };
//# sourceMappingURL=form-contents.component.js.map