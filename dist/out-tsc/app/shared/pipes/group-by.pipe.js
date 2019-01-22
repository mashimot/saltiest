var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        var _this = this;
        var newCollection = collection.reduce(function (previous, currentValue) {
            var c = _this.resolve(property, currentValue);
            if (previous[c]) {
                previous[c].push(currentValue);
            }
            else {
                previous[c] = [currentValue];
            }
            return previous;
        }, {});
        return Object.keys(newCollection).map(function (key) {
            return {
                key: key,
                value: newCollection[key]
            };
        });
    };
    GroupByPipe.prototype.resolve = function (path, obj, separator) {
        if (obj === void 0) { obj = self; }
        if (separator === void 0) { separator = '.'; }
        var properties = Array.isArray(path) ? path : path.split(separator);
        return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, obj);
    };
    GroupByPipe = __decorate([
        Pipe({
            name: 'groupBy'
        })
    ], GroupByPipe);
    return GroupByPipe;
}());
export { GroupByPipe };
//# sourceMappingURL=group-by.pipe.js.map