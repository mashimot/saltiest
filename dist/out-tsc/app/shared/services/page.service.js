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
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/pages';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    PageService.prototype.getPages = function () {
        return this.http.get("" + this.API_URL);
    };
    PageService.prototype.getPageByProjectId = function (projectId) {
        return this.http.get(this.API_URL + "/" + projectId + "/project");
    };
    PageService.prototype.getPageById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    PageService.prototype.createPage = function (data) {
        return this.http.post(this.API_URL, data, this.httpOptions);
    };
    PageService.prototype.updatePagesPosition = function (id, data) {
        return this.http.put(this.API_URL + "/" + id + "/updatePosition", data, this.httpOptions);
    };
    PageService.prototype.deletePage = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    PageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PageService);
    return PageService;
}());
export { PageService };
//# sourceMappingURL=page.service.js.map