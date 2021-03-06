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
var ConfigTitleComponent = /** @class */ (function () {
    function ConfigTitleComponent() {
    }
    ConfigTitleComponent.prototype.ngOnInit = function () {
        this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        this.text.setValidators([
            Validators.required
        ]);
        this.html.patchValue({
            'text': this.content.html.text
        });
    };
    Object.defineProperty(ConfigTitleComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigTitleComponent.prototype, "text", {
        get: function () {
            return this.html.get('text');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigTitleComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], ConfigTitleComponent.prototype, "parentFormGroup", void 0);
    ConfigTitleComponent = __decorate([
        Component({
            selector: 'app-config-title',
            templateUrl: './config-title.component.html',
            styleUrls: ['./config-title.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ConfigTitleComponent);
    return ConfigTitleComponent;
}());
export { ConfigTitleComponent };
//# sourceMappingURL=config-title.component.js.map