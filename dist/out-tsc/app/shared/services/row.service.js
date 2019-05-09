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
import { HttpClient, HttpHeaders } from '@angular/common/http';
var RowService = /** @class */ (function () {
    function RowService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/rows';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    RowService.prototype.storeRow = function (data) {
        return this.http.post("" + this.API_URL, data, this.httpOptions);
    };
    RowService.prototype.updateRow = function (id, data) {
        return this.http.put(this.API_URL + "/" + id, data, this.httpOptions);
    };
    RowService.prototype.deleteRow = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    RowService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RowService);
    return RowService;
}());
export { RowService };
//# sourceMappingURL=row.service.js.map