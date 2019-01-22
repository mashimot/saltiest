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
import { DomSanitizer } from '@angular/platform-browser';
import { RenderHtmlService } from './../../services/render-html.service';
var RenderContentComponent = /** @class */ (function () {
    function RenderContentComponent(sanitizer, renderHtml) {
        this.sanitizer = sanitizer;
        this.renderHtml = renderHtml;
        this.content = {
            html: {},
            table: {}
        };
    }
    RenderContentComponent.prototype.ngOnInit = function () {
    };
    RenderContentComponent.prototype.render = function () {
        if (typeof this.content !== 'undefined') {
            this.renderHtml.setParams(this.content);
            var html = this.renderHtml.get().html;
            //console.log(html);
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        return 'undefined';
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RenderContentComponent.prototype, "content", void 0);
    RenderContentComponent = __decorate([
        Component({
            selector: 'app-render-content',
            templateUrl: './render-content.component.html',
            styleUrls: ['./render-content.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer,
            RenderHtmlService])
    ], RenderContentComponent);
    return RenderContentComponent;
}());
export { RenderContentComponent };
//# sourceMappingURL=render-content.component.js.map