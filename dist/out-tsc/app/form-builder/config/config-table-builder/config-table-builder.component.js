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
    }
    ConfigTableBuilderComponent.prototype.newField = function (index, key, newKey) {
        //console.log(key);
        console.log(newKey);
        if (typeof newKey !== 'undefined' && newKey.trim() !== '') {
            var fields = this.content.html.fields;
            console.log(fields);
            if (fields.length > 0) {
                for (var i = 0; i < fields.length; i++) {
                    var field = fields[i];
                    fields[i][newKey] = field[key];
                    delete fields[i][key];
                }
                var keysArr = Object.keys(fields[0]);
                var lastItem = keysArr[keysArr.length - 1];
                keysArr.splice(index, 0, lastItem);
                this.content.html.fields = JSON.parse(JSON.stringify(fields, keysArr));
                this.fields = this.getKeyFields();
            }
        }
    };
    ConfigTableBuilderComponent.prototype.ngOnInit = function () {
        this.fields = this.getKeyFields();
    };
    ConfigTableBuilderComponent.prototype.ngOnChanges = function () {
    };
    ConfigTableBuilderComponent.prototype.getKeyFields = function () {
        if (this.content.html.fields.length > 0) {
            return Object.keys(this.content.html.fields[0]);
        }
        return [];
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "content", void 0);
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