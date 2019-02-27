var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { HtmlElementService } from '../shared/services/html-element.service';
var FormInfoComponent = /** @class */ (function () {
    function FormInfoComponent(htmlElementService) {
        this.htmlElementService = htmlElementService;
        this.pagesChange = new EventEmitter();
    }
    FormInfoComponent.prototype.ngOnInit = function () {
        this.database = Object.keys(DatabaseEngine.get()).map(function (item) {
            return item.toUpperCase();
        });
        this.tags = this.htmlElementService.getTags();
    };
    FormInfoComponent.prototype.buscaDominio = function () {
        alert("implementação");
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormInfoComponent.prototype, "pages", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormInfoComponent.prototype, "pagesChange", void 0);
    FormInfoComponent = __decorate([
        Component({
            selector: 'app-form-info',
            templateUrl: './form-info.component.html',
            styleUrls: ['./form-info.component.css'],
        }),
        __metadata("design:paramtypes", [HtmlElementService])
    ], FormInfoComponent);
    return FormInfoComponent;
}());
export { FormInfoComponent };
//# sourceMappingURL=form-info.component.js.map