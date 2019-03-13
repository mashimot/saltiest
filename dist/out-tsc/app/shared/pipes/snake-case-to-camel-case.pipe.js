var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var SnakeCaseToCamelCasePipe = /** @class */ (function () {
    function SnakeCaseToCamelCasePipe() {
    }
    SnakeCaseToCamelCasePipe.prototype.transform = function (value, args) {
        if (typeof value != 'undefined') {
            if (value.trim() != '') {
                var newString = value.replace(/_(\w)/g, function (m) {
                    return m.toUpperCase();
                }).replace(/_/g, "");
                return (newString.charAt(0).toUpperCase() + newString.slice(1)).trim();
            }
        }
        return '';
    };
    SnakeCaseToCamelCasePipe = __decorate([
        Pipe({
            name: 'snakeCaseToCamelCase'
        })
    ], SnakeCaseToCamelCasePipe);
    return SnakeCaseToCamelCasePipe;
}());
export { SnakeCaseToCamelCasePipe };
//# sourceMappingURL=snake-case-to-camel-case.pipe.js.map