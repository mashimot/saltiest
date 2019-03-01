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
var ConfigTableBuilderComponent = /** @class */ (function () {
    function ConfigTableBuilderComponent() {
        this.oldValue = '';
        this.newValue = '';
        this.ableToModify = false;
    }
    ConfigTableBuilderComponent.prototype.whileTyping = function (event) {
        this.newValue = event.target.value;
    };
    ConfigTableBuilderComponent.prototype.onFocus = function (oldValue) {
        this.oldValue = oldValue;
    };
    ConfigTableBuilderComponent.prototype.onFocusOut = function (fieldIndex) {
        var keyFields = this.getKeyFields();
        if (typeof this.newValue !== 'undefined' && this.newValue.trim() !== '' && this.oldValue !== '') {
            if (this.fields.value.length > 0 && this.oldValue != this.newValue) {
                keyFields.splice(fieldIndex, 1);
                keyFields.splice(fieldIndex, 0, { text: this.newValue });
                var fields = this.fields.value;
                var newFields = JSON.parse(JSON.stringify(fields).replace("\"" + this.oldValue + "\":", "\"" + this.newValue + ":\""));
                for (var i = 0; i < fields.length; i++) {
                    //cria um novo item
                    //fields[i][this.newValue] = fields[i][this.oldValue];
                    //deleta o item antigo
                    //delete fields[i][this.oldValue];
                }
                //}
                //console.log(joeys);
                this.fields.value = newFields;
                this.fields.updateValueAndValidity({ onlySelf: false, emitEvent: true });
                this.keyFields = this.getKeyFields();
                this.ableToModify = false;
            }
        }
    };
    ConfigTableBuilderComponent.prototype.ngOnInit = function () {
        this.keyFields = this.getKeyFields();
    };
    ConfigTableBuilderComponent.prototype.ngOnChanges = function () {
    };
    ConfigTableBuilderComponent.prototype.getKeyFields = function () {
        if (this.fields.value.length > 0) {
            var fieldKeys = JSON.parse(JSON.stringify(this.fields.value[0]));
            return Object.keys(fieldKeys).map(function (item) {
                return { text: item };
            });
        }
        return [];
    };
    Object.defineProperty(ConfigTableBuilderComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigTableBuilderComponent.prototype, "fields", {
        get: function () {
            return this.html.get('fields');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "parentFormGroup", void 0);
    ConfigTableBuilderComponent = __decorate([
        Component({
            selector: 'app-config-table-builder',
            templateUrl: './config-table-builder.component.html',
            styleUrls: ['./config-table-builder.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ConfigTableBuilderComponent);
    return ConfigTableBuilderComponent;
}());
export { ConfigTableBuilderComponent };
//# sourceMappingURL=config-table-builder.component.js.map