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
        if (typeof control.value != 'undefined' && control.value != null) {
            var lines = control.value.trim().split("\n");
            for (var i = 0; i < lines.length; i++) {
                var sum = 0;
                var line = lines[i].replace(/\s+/g, ' ').trim();
                if (line != '') {
                    var currentValueArr = line.split(' ');
                    if (currentValueArr.length > 0) {
                        for (var j = 0; j < currentValueArr.length; j++) {
                            if (currentValueArr[j].trim() != '') {
                                var num = parseInt(currentValueArr[j]);
                                sum += num;
                            }
                        }
                        if (parseInt(this.sumBeEqualsTo) != sum) {
                            return {
                                'isSumInvalid': true,
                                'sumBeEqualsTo': this.sumBeEqualsTo
                            };
                        }
                    }
                }
            }
        }
        return null;
    };
    var SumBeEqualsToDirective_1;
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
}());
export { SumBeEqualsToDirective };
//# sourceMappingURL=sum-be-equals-to.directive.js.map