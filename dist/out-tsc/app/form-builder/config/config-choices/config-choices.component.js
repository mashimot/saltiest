var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
var ConfigChoicesComponent = /** @class */ (function () {
    function ConfigChoicesComponent(dragulaService, fb) {
        this.dragulaService = dragulaService;
        this.fb = fb;
        this.text = '';
        this.subs = new Subscription();
        dragulaService.createGroup('sortableElements', {
            moves: function (el, container, handle) {
                return handle.classList.contains('element-handle');
            }
        });
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.dropModel('sortableElements').subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            _this.elements.controls = sourceModel;
            _this.text = _this.elementToString();
        }));
        this.html = this.parentFormGroup.controls.html;
    };
    ConfigChoicesComponent.prototype.ngOnChanges = function () {
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.elementChanged = function () {
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.addElement = function () {
        this.elements.push(this.getElement());
    };
    ConfigChoicesComponent.prototype.getElement = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            'text': [text, [
                    Validators.required
                ]],
            'value': [value, [
                    Validators.required
                ]]
        });
    };
    ConfigChoicesComponent.prototype.stringToElement = function () {
        if (this.text.length > 0) {
            var string = this.text.split('\n');
            var cloneElements = JSON.parse(JSON.stringify(this.elements.value));
            for (var i = 0; i < string.length; i++) {
                var str = string[i];
                var firstMatch = str;
                var secondMatch = '';
                if (str.indexOf('|') !== -1) {
                    var match = str.split('|');
                    firstMatch = match[0];
                    secondMatch = str.substring(firstMatch.length + 1); //return '' if '|' was not found
                }
                var text = (typeof firstMatch !== 'undefined') ? firstMatch : '';
                var value = (typeof secondMatch !== 'undefined') ? secondMatch : '';
                this.elements.removeAt(i);
                if (typeof this.elements.controls[i] === 'undefined') {
                    this.elements.push(this.getElement(text, value));
                }
                else {
                    this.elements.controls[i].patchValue({
                        text: text,
                        value: value
                    });
                }
            }
        }
        else {
            while (this.elements.length !== 0) {
                this.elements.removeAt(0);
            }
        }
    };
    ConfigChoicesComponent.prototype.removeContent = function ($index) {
        this.elements.removeAt($index);
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.orderBy = function (type) {
        if (this.sortType !== type) {
            this.sortReverse = true;
        }
        this.sortReverse = !this.sortReverse;
        this.sortType = type;
    };
    ConfigChoicesComponent.prototype.cloneThis = function (name) {
        var elementsLength = this.elements.value.length;
        if (elementsLength > 0) {
            var cloneThisObjectName = (name === 'value') ? 'text' : 'value';
            for (var i = 0; i < elementsLength; i++) {
                this.elements.value[i][name] = this.elements.value[i][cloneThisObjectName];
            }
            this.text = this.elementToString();
            this.stringToElement();
        }
    };
    ConfigChoicesComponent.prototype.elementToString = function () {
        var string = '';
        //fire the `valueChanges` manually
        this.elements.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        var e = this.elements.value;
        if (typeof e !== 'undefined') {
            if (e.length > 0) {
                for (var i = 0; i < e.length; i++) {
                    var str = e[i];
                    var pipe = (str.value === '') ? '' : '|';
                    var element = {
                        text: typeof str.text !== 'undefined' ? str.text : '',
                        value: typeof str.value !== 'undefined' ? str.value : '',
                    };
                    string += (element.text + pipe + element.value) + (i === e.length - 1 ? '' : "\n");
                }
            }
        }
        return string;
    };
    ConfigChoicesComponent.prototype.getField = function (field, index) {
        return this.elements.controls[index].get(field);
    };
    Object.defineProperty(ConfigChoicesComponent.prototype, "elements", {
        get: function () {
            return this.parentFormGroup.get('html.elements');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigChoicesComponent.prototype, "parentFormGroup", void 0);
    ConfigChoicesComponent = __decorate([
        Component({
            selector: 'app-config-choices',
            templateUrl: './config-choices.component.html',
            styleUrls: ['./config-choices.component.css']
        }),
        __metadata("design:paramtypes", [DragulaService,
            FormBuilder])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());
export { ConfigChoicesComponent };
//# sourceMappingURL=config-choices.component.js.map