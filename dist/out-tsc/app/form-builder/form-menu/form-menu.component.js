var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { BootstrapGridSystemService } from '../../services/bootstrap-grid-system.service';
var FormMenuComponent = /** @class */ (function () {
    function FormMenuComponent(formConfigService, htmlElementService) {
        this.formConfigService = formConfigService;
        this.htmlElementService = htmlElementService;
        this.isNewFile = new EventEmitter();
        this.isNewPage = new EventEmitter();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
        this.previewMode = true;
        this.config = {
            previewMode: this.previewMode
        };
        this.preview();
        this.grids = new BootstrapGridSystemService().getGrid();
        this.bootstrap = [this.grids[0]];
        this.tools = this.htmlElementService.get();
        this.pageModel = [{
                rows: [],
                name: "Salt - A tool for Lazy Developer"
            }];
    };
    FormMenuComponent.prototype.preview = function () {
        this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    };
    FormMenuComponent.prototype.newFile = function () {
        this.isNewFile.emit(true);
    };
    FormMenuComponent.prototype.newPage = function () {
        this.isNewPage.emit(true);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormMenuComponent.prototype, "isNewFile", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormMenuComponent.prototype, "isNewPage", void 0);
    FormMenuComponent = __decorate([
        Component({
            selector: 'app-form-menu',
            templateUrl: './form-menu.component.html',
            styleUrls: ['./form-menu.component.css']
        }),
        __metadata("design:paramtypes", [FormConfigService,
            HtmlElementService])
    ], FormMenuComponent);
    return FormMenuComponent;
}());
export { FormMenuComponent };
//# sourceMappingURL=form-menu.component.js.map