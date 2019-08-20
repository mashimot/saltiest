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
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
var LanguageToolService = /** @class */ (function () {
    function LanguageToolService(http) {
        this.http = http;
        this.apiUrl = 'https://languagetool.org/api/v2/check';
        this.language = 'pt-br';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    LanguageToolService.prototype.getCorrectWord = function (text, language) {
        var params = new HttpParams()
            .set('language', language ? language : this.language)
            .set('text', text);
        console.log(params);
        return this.http.get(this.apiUrl, {
            params: params,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        });
    };
    LanguageToolService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LanguageToolService);
    return LanguageToolService;
}());
export { LanguageToolService };
//# sourceMappingURL=language-tool.service.js.map