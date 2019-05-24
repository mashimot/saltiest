var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LanguageToolService } from '../shared/services/language-tool.service';
var SpellCheckerComponent = /** @class */ (function () {
    function SpellCheckerComponent(languageToolService) {
        this.languageToolService = languageToolService;
        this.text = 'hadouken';
        this.textChange = new EventEmitter();
    }
    SpellCheckerComponent.prototype.ngOnInit = function () {
        this.checkSpelling();
    };
    SpellCheckerComponent.prototype.textOnChange = function () {
        this.textChange.emit(this.text);
    };
    SpellCheckerComponent.prototype.checkSpelling = function () {
        //this.isLoading = true;
        if (this.hasText()) {
            this.text = this.langTool();
            this.languageToolService.getCorrectWord(this.text)
                .subscribe(function (result) {
                console.log(result);
                /*if (result.matches) {
                    this.result = result;
                    //this.isLoading = false;
                }*/
            });
            //console.log(this.result);
        }
    };
    SpellCheckerComponent.prototype.langTool = function () {
        if (this.hasText()) {
            var arrOfWords = this.text.split(' ');
            var newText = [];
            for (var i = 0; i < arrOfWords.length; i++) {
                var word = arrOfWords[i].trim();
                word = word.charAt(0).toUpperCase() + word.slice(1);
                newText.push(word);
            }
            return newText.join(' ');
        }
        return '';
    };
    SpellCheckerComponent.prototype.hasText = function () {
        if (this.text.length > 0) {
            return true;
        }
        return false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SpellCheckerComponent.prototype, "text", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SpellCheckerComponent.prototype, "textChange", void 0);
    SpellCheckerComponent = __decorate([
        Component({
            selector: 'app-spell-checker',
            templateUrl: './spell-checker.component.html',
            styleUrls: ['./spell-checker.component.css']
        }),
        __metadata("design:paramtypes", [LanguageToolService])
    ], SpellCheckerComponent);
    return SpellCheckerComponent;
}());
export { SpellCheckerComponent };
//# sourceMappingURL=spell-checker.component.js.map