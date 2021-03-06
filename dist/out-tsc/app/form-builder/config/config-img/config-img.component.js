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
import { FormGroup, Validators } from '@angular/forms';
var ConfigImgComponent = /** @class */ (function () {
    function ConfigImgComponent() {
    }
    ConfigImgComponent.prototype.ngOnInit = function () {
        this.tag.setValidators([
            Validators.required
        ]);
        this.html.patchValue({
            'tag': this.content.html.tag
        });
        this.src.setValidators([
            Validators.required
        ]);
        this.html.patchValue({
            'src': this.content.html.src
        });
    };
    Object.defineProperty(ConfigImgComponent.prototype, "tag", {
        get: function () {
            return this.html.get('tag');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigImgComponent.prototype, "src", {
        get: function () {
            return this.html.get('src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigImgComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], ConfigImgComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigImgComponent.prototype, "content", void 0);
    ConfigImgComponent = __decorate([
        Component({
            selector: 'app-config-img',
            templateUrl: './config-img.component.html',
            styleUrls: ['./config-img.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ConfigImgComponent);
    return ConfigImgComponent;
}());
export { ConfigImgComponent };
//# sourceMappingURL=config-img.component.js.map