var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';
var FormColumnsComponent = /** @class */ (function () {
    function FormColumnsComponent(formConfigService, cd) {
        this.formConfigService = formConfigService;
        this.cd = cd;
    }
    FormColumnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormColumnsComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    FormColumnsComponent.prototype.colNumber = function (columnIndex) {
        return parseInt(this.row.grid.trim().split(' ')[columnIndex]);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "row", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "rowIndex", void 0);
    FormColumnsComponent = __decorate([
        Component({
            selector: 'app-form-columns',
            templateUrl: './form-columns.component.html',
            styleUrls: ['./form-columns.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [FormConfigService,
            ChangeDetectorRef])
    ], FormColumnsComponent);
    return FormColumnsComponent;
}());
export { FormColumnsComponent };
//# sourceMappingURL=form-columns.component.js.map