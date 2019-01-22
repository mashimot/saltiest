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
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
var LanguageToolService = /** @class */ (function () {
    function LanguageToolService(http) {
        this.http = http;
        this.apiUrl = 'https://languagetool.org/api/v2/check';
        this.language = 'pt-br';
    }
    LanguageToolService.prototype.getCorrectWord = function (text, language) {
        return this.http.get(this.apiUrl, {
            params: {
                language: language ? language : this.language,
                text: text
            }
        }).pipe(map(function (res) {
            return res.json();
        }));
    };
    LanguageToolService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], LanguageToolService);
    return LanguageToolService;
}());
export { LanguageToolService };
//# sourceMappingURL=language-tool.service.js.map