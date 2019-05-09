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
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        var _this = this;
        this.isOpen = false;
        this.handleYes = new EventEmitter();
        this.handleNo = new EventEmitter();
        this.onNo = function () {
            _this.handleNo.emit();
        };
        this.onYes = function () {
            _this.handleYes.emit();
        };
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.closeModal = function () {
        this.isOpen = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "isOpen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "message", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "handleYes", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "handleNo", void 0);
    ModalComponent = __decorate([
        Component({
            selector: 'app-modal',
            template: "\n<div class=\"modal fade\" [ngClass]=\"{ 'show': isOpen }\" [style.display]=\"isOpen ? 'block' : 'none'\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" (click)=\"onNo()\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                {{ message }}\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"onNo()\">No</button>\n                <button class=\"btn btn-primary\" (click)=\"onYes()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
        })
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map