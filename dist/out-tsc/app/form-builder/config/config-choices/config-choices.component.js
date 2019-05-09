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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContentService } from '../../../shared/services/content.service';
import { DBOperation } from '../../../shared/enum';
import { ContentChoiceItemService } from '../../../shared/services/content-choice-item.service';
var ConfigChoicesComponent = /** @class */ (function () {
    function ConfigChoicesComponent(dragulaService, fb, contentService, contentChoiceItemService) {
        this.dragulaService = dragulaService;
        this.fb = fb;
        this.contentService = contentService;
        this.contentChoiceItemService = contentChoiceItemService;
        this.contentChoiceItemIdToUpdate = null;
        this.subs = new Subscription();
        dragulaService.createGroup('sortableElements', {
            moves: function (el, container, handle) {
                return handle.classList.contains('element-handle');
            }
        });
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
        this.dbops = DBOperation.create;
        this.loadChoices();
        this.choiceForm = this.fb.group({
            'id': [''],
            'content_choice_id': [this.content.html.content_choice_id, [
                    Validators.required
                ]],
            'text': ['', [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(10)
                ]],
            'value': ['', [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(2000)
                ]]
        });
    };
    ConfigChoicesComponent.prototype.ngOnChanges = function () {
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.loadChoices = function () {
        var _this = this;
        var id = this.content.html.content_choice_id;
        this.contentService.getContentChoicesById(id).subscribe(function (result) {
            if (result.success) {
                _this.choices = result.data;
                console.log(result.data);
                var newChoices = result.data.map(function (item) {
                    return {
                        id: item.id,
                        text: item.text,
                        value: item.value,
                    };
                });
                var choices_1 = _this.html.get('choices');
                while (choices_1.length !== 0) {
                    choices_1.removeAt(0);
                }
                newChoices.forEach(function (x) {
                    choices_1.push(_this.fb.group({
                        text: x.text,
                        value: x.value,
                        id: x.id
                    }));
                });
            }
        });
    };
    ConfigChoicesComponent.prototype.onSubmit = function () {
        var _this = this;
        switch (this.dbops) {
            case DBOperation.create:
                this.contentChoiceItemService.storeContentChoiceItem(this.choiceForm.value)
                    .subscribe(function (result) {
                    console.log(result);
                    if (result.success) {
                        _this.reset();
                        _this.loadChoices();
                    }
                });
                break;
            case DBOperation.update:
                var id = this.contentChoiceItemIdToUpdate;
                this.contentChoiceItemService.updateContentChoiceItem(id, this.choiceForm.value)
                    .subscribe(function (result) {
                    console.log(result.data);
                    if (result.success) {
                        _this.contentService.showContent(_this.content.id).subscribe(function (result) {
                            if (result.success) {
                                _this.reset();
                                _this.loadChoices();
                            }
                        });
                    }
                });
                break;
        }
    };
    ConfigChoicesComponent.prototype.create = function () {
        this.dbops = DBOperation.create;
        this.reset();
    };
    ConfigChoicesComponent.prototype.savePosition = function () {
        var _this = this;
        var id = this.content.html.content_choice_id;
        var orderedIds = this.choices.map(function (item) {
            return item.id;
        });
        this.contentService.updateContentChoicesPosition(id, orderedIds)
            .subscribe(function (result) {
            if (result.success) {
                _this.loadChoices();
            }
        });
    };
    ConfigChoicesComponent.prototype.editContentChoice = function (id) {
        var _this = this;
        this.contentChoiceItemService.getContentChoiceItemById(id).subscribe(function (result) {
            if (result.success) {
                var content = result.data;
                _this.dbops = DBOperation.update;
                _this.contentChoiceItemIdToUpdate = content.id;
                _this.choiceForm.setValue({
                    'id': content.id,
                    'content_choice_id': content.content_choice_id,
                    'text': content.text,
                    'value': content.value,
                });
            }
        });
    };
    ConfigChoicesComponent.prototype.deleteContentChoiceItem = function (id) {
        var _this = this;
        this.contentChoiceItemService.deleteContentChoiceItem(id).subscribe(function (result) {
            if (result.success) {
                _this.reset();
                _this.loadChoices();
            }
        });
        /*this.elements.removeAt(index);
        this.text = this.elementToString();*/
    };
    ConfigChoicesComponent.prototype.orderBy = function (type) {
        if (this.sortType !== type) {
            this.sortReverse = true;
        }
        this.sortReverse = !this.sortReverse;
        this.sortType = type;
    };
    ConfigChoicesComponent.prototype.getField = function (field) {
        return this.choiceForm.get(field);
    };
    Object.defineProperty(ConfigChoicesComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    ConfigChoicesComponent.prototype.reset = function () {
        var _this = this;
        this.contentChoiceItemIdToUpdate = null;
        var resetExcept = ['content_choice_id', 'choices', 'tag', 'category', 'label'];
        Object.keys(this.choiceForm.controls).forEach(function (key) {
            if (resetExcept.findIndex(function (q) { return q === key; }) === -1) {
                _this.choiceForm.get(key).reset();
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], ConfigChoicesComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigChoicesComponent.prototype, "content", void 0);
    ConfigChoicesComponent = __decorate([
        Component({
            selector: 'app-config-choices',
            templateUrl: './config-choices.component.html',
            styleUrls: ['./config-choices.component.css']
        }),
        __metadata("design:paramtypes", [DragulaService,
            FormBuilder,
            ContentService,
            ContentChoiceItemService])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());
export { ConfigChoicesComponent };
//# sourceMappingURL=config-choices.component.js.map