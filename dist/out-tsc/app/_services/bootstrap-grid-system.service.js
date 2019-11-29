var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var BootstrapGridSystemService = /** @class */ (function () {
    function BootstrapGridSystemService(data, grid) {
        if (grid === void 0) { grid = '4 4 4'; }
        this._data = data;
        this._grid = grid;
    }
    BootstrapGridSystemService.prototype.getGrid = function () {
        return [{
                grid: '6 6',
                columns: []
            }, {
                grid: '4 4 4',
                columns: []
            }, {
                grid: '3 3 3 3',
                columns: []
            }, {
                grid: '2 2 4 2 2',
                columns: []
            }, {
                grid: '12',
                columns: []
            }];
    };
    BootstrapGridSystemService.prototype.convert = function () {
        var groups = [];
        var grid = this._grid.replace(/ +/g, ' ').trim();
        var arrGrid = grid.split(' ');
        var chunkSize = arrGrid.length;
        var page = {
            rows: [],
            name: 'Page 1'
        };
        for (var i = 0; i < this._data.length; i += chunkSize) {
            groups.push(this._data.slice(i, i + chunkSize));
        }
        this._page = groups.reduce(function (acc, group, index) {
            page.rows.push({
                grid: grid,
                columns: []
            });
            group.map(function (data, i) {
                return page.rows[index].columns.push({
                    contents: [data]
                });
            }, 0);
            return page;
        }, 0);
        var lastRow = this._page.rows.length;
        var columns = this._page.rows[lastRow - 1].columns;
        if (columns.length < chunkSize) {
            for (var k = columns.length; k < chunkSize; k++) {
                this._page.rows[lastRow - 1].columns.push({
                    contents: []
                });
            }
        }
    };
    BootstrapGridSystemService.prototype.getPage = function () {
        return this._page;
    };
    BootstrapGridSystemService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Array, String])
    ], BootstrapGridSystemService);
    return BootstrapGridSystemService;
}());
export { BootstrapGridSystemService };
//# sourceMappingURL=bootstrap-grid-system.service.js.map