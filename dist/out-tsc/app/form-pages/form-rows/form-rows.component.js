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
import { FormConfigService } from './../../_services/form-config.service';
import { RowService } from '../../shared/services/row.service';
var FormRowsComponent = /** @class */ (function () {
    function FormRowsComponent(formConfigService, cd, rowService) {
        this.formConfigService = formConfigService;
        this.cd = cd;
        this.rowService = rowService;
    }
    FormRowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormRowsComponent.prototype.deleteRow = function (rowIndex, row) {
        var _this = this;
        if (row === void 0) { row = { id: null }; }
        if (row.id != null) {
            this.rowService.deleteRow(row.id).subscribe(function (result) {
                if (result.success) {
                    _this.page.rows.forEach(function (cV, index) {
                        if (cV.id == row.id) {
                            _this.page.rows.splice(index, 1);
                        }
                    });
                    _this.cd.markForCheck();
                }
            });
        }
        else {
            //static remove
            this.page.rows.splice(rowIndex, 1);
            this.cd.markForCheck();
        }
    };
    FormRowsComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "page", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "pageId", void 0);
    FormRowsComponent = __decorate([
        Component({
            selector: 'app-form-rows',
            templateUrl: './form-rows.component.html',
            styleUrls: ['./form-rows.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [FormConfigService,
            ChangeDetectorRef,
            RowService])
    ], FormRowsComponent);
    return FormRowsComponent;
}());
export { FormRowsComponent };
//# sourceMappingURL=form-rows.component.js.map