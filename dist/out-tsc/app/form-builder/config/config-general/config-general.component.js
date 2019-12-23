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
import { FormBuilder, Validators } from '@angular/forms';
var ConfigGeneralComponent = /** @class */ (function () {
    function ConfigGeneralComponent(fb) {
        this.fb = fb;
    }
    ConfigGeneralComponent.prototype.ngOnInit = function () {
        console.log('hue', this.content.definition);
        this.html.get('label').setValidators([
            Validators.required
        ]);
        this.html.patchValue({
            'label': this.content.html.label,
        });
        this.options.get('nullable').setValidators([
            Validators.required
        ]);
        this.options.patchValue({
            'nullable': this.content.definition.options.nullable || false
        });
        console.log(this.nullable);
    };
    Object.defineProperty(ConfigGeneralComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.get('html');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "definition", {
        get: function () {
            return this.parentFormGroup.get('definition');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "label", {
        get: function () {
            return this.parentFormGroup.get('html.label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "nullable", {
        get: function () {
            return this.parentFormGroup.get('definition.options.nullable');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "options", {
        get: function () {
            return this.parentFormGroup.get('definition.options');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigGeneralComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigGeneralComponent.prototype, "content", void 0);
    ConfigGeneralComponent = __decorate([
        Component({
            selector: 'app-config-general',
            templateUrl: './config-general.component.html',
            styleUrls: ['./config-general.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], ConfigGeneralComponent);
    return ConfigGeneralComponent;
}());
export { ConfigGeneralComponent };
//# sourceMappingURL=config-general.component.js.map