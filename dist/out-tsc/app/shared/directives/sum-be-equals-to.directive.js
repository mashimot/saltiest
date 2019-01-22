var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var SumBeEqualsToDirective = /** @class */ (function () {
    function SumBeEqualsToDirective() {
    }
    SumBeEqualsToDirective_1 = SumBeEqualsToDirective;
    SumBeEqualsToDirective.prototype.validate = function (control) {
        var sum = 0;
        if (control.value) {
            var arrValues = control.value.trim().replace(/ +/g, ' ').split(' ');
            if (arrValues.length > 0) {
                for (var i = 0; i < arrValues.length; i++) {
                    var num = parseInt(arrValues[i]);
                    sum += num;
                }
            }
            return (parseInt(this.sumBeEqualsTo) === sum) ? null : { 'isSumInvalid': true, 'sumBeEqualsTo': this.sumBeEqualsTo };
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SumBeEqualsToDirective.prototype, "sumBeEqualsTo", void 0);
    SumBeEqualsToDirective = SumBeEqualsToDirective_1 = __decorate([
        Directive({
            selector: '[sumBeEqualsTo]',
            providers: [{
                    provide: NG_VALIDATORS,
                    useExisting: SumBeEqualsToDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], SumBeEqualsToDirective);
    return SumBeEqualsToDirective;
    var SumBeEqualsToDirective_1;
}());
export { SumBeEqualsToDirective };
//# sourceMappingURL=sum-be-equals-to.directive.js.map