var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/projects';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ProjectService.prototype.getProjects = function (queryParams) {
        var httpOptions = {
            params: __assign({}, queryParams)
        };
        return this.http.get("" + this.API_URL, httpOptions);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    ProjectService.prototype.updateProject = function (id, data) {
        return this.http.put(this.API_URL + "/" + id, data, this.httpOptions);
    };
    ProjectService.prototype.storeProject = function (data) {
        return this.http.post("" + this.API_URL, data, this.httpOptions);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    ProjectService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map