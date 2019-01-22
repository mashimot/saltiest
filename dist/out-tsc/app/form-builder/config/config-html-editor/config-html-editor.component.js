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
var ConfigHtmlEditorComponent = /** @class */ (function () {
    function ConfigHtmlEditorComponent() {
    }
    ConfigHtmlEditorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ConfigHtmlEditorComponent.prototype, "data", {
        get: function () {
            return this.parentFormGroup.get('html.data');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigHtmlEditorComponent.prototype, "parentFormGroup", void 0);
    ConfigHtmlEditorComponent = __decorate([
        Component({
            selector: 'app-config-html-editor',
            templateUrl: './config-html-editor.component.html',
            styleUrls: ['./config-html-editor.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ConfigHtmlEditorComponent);
    return ConfigHtmlEditorComponent;
}());
export { ConfigHtmlEditorComponent };
//# sourceMappingURL=config-html-editor.component.js.map