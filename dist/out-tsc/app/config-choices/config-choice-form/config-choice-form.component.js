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
import { FormBuilder, Validators } from '@angular/forms';
import { ContentService } from 'src/app/shared/services/content.service';
import { ContentChoiceItemService } from 'src/app/shared/services/content-choice-item.service';
import { ActivatedRoute } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var ConfigChoiceFormComponent = /** @class */ (function () {
    function ConfigChoiceFormComponent(contentService, contentChoiceItemService, route, location, fb, dragulaService, modal) {
        this.contentService = contentService;
        this.contentChoiceItemService = contentChoiceItemService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.dragulaService = dragulaService;
        this.modal = modal;
        this.contentChoiceItemIdToUpdate = null;
        this.contentChoiceId = -1;
        this.text = "";
        this.subs = new Subscription();
        this.emitData = new EventEmitter();
        dragulaService.createGroup('sortableElements', {
            moves: function (el, container, handle) {
                return handle.classList.contains('element-handle');
            }
        });
    }
    ConfigChoiceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.dbops = DBOperation.create;
        var choices = this.content.html.choices;
        this.choiceForm = this.fb.group({
            'choices': this.fb.array([], [Validators.required, Validators.minLength(1)])
        });
        if (typeof this.parentFormGroup != 'undefined') {
            this.choiceForm = this.parentFormGroup.get('html');
        }
        this.choiceForm.setValidators([Validators.required, Validators.minLength(1)]);
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var items = this.choiceForm.get('choices');
            items.push(this.setChoice(item.text, item.value));
        }
        this.subs.add(this.dragulaService.dropModel('sortableChoices').subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            _this.choices.controls = sourceModel;
            _this.text = _this.elementToString();
        }));
        this.text = this.elementToString();
        /*this.choiceForm = this.fb.group({
            'id': [''],
            'content_choice_id': ['', [
            ]],
            'text': ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2000)
            ]],
            'value': ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2000)
            ]]
        });
        this.route.params.subscribe(result => {
            this.contentChoiceId = result.id;
            this.choiceForm.patchValue({
                'content_choice_id': this.contentChoiceId
            });
            this.loadChoices();
        })*/
    };
    ConfigChoiceFormComponent.prototype.ngOnChanges = function () {
    };
    ConfigChoiceFormComponent.prototype.ngOnDestroy = function () {
        /*this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');*/
        this.dragulaService.destroy('sortableElements');
    };
    /*public loadChoices(){
        if(this.contentChoiceId != -1){
            let id = this.contentChoiceId;
            this.contentService.getContentChoicesById(id).subscribe(result => {
                if(result.success){
                    this.choices = result.data;
                    console.log(this.choices);
                }
            });
        }
    }

    public onSubmit(){
        switch(this.dbops){
            case DBOperation.create:
                this.contentChoiceItemService.storeContentChoiceItem(this.choiceForm.value)
                .subscribe(result => {
                    console.log(result);
                    if(result.success){
                        this.reset();
                        this.contentChoiceId = result.data.contentChoiceId;
                        this.choiceForm.patchValue({
                            'content_choice_id': result.data.contentChoiceId
                        });
                        this.loadChoices();
                    }
                });
            break;
            case DBOperation.update:
                const id = this.contentChoiceItemIdToUpdate;
                this.contentChoiceItemService.updateContentChoiceItem(id, this.choiceForm.value)
                .subscribe(result => {
                    console.log(result.data);
                    if(result.success){
                        this.reset();
                        this.loadChoices();
                    }
                });
            break;
        }
    }

    public create(){
        this.dbops = DBOperation.create;
        this.reset();
    }

    public savePosition(){
        let id = this.contentChoiceId;
        const orderedIds = this.choices.map(item => {
            return item.id;
        });
        this.contentService.updateContentChoicesPosition(id, orderedIds)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
            }
        });
    }

    public editContentChoice(id: number) {
        this.contentChoiceItemService.getContentChoiceItemById(id)
        .subscribe(result => {
            if(result.success){
                const content = result.data;
                this.dbops = DBOperation.update;
                this.contentChoiceItemIdToUpdate = content.id;
                this.choiceForm.setValue({
                    'id': content.id,
                    'content_choice_id': content.content_choice_id,
                    'text': content.text,
                    'value': content.value,
                });
            }
        });
    }

    public deleteContentChoiceItem(id: number) {
        this.contentChoiceItemService.deleteContentChoiceItem(id)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
                this.reset();
            }
        });
    }

    private reset() {
        this.contentChoiceItemIdToUpdate = null;
        const resetExcept: string[] = ['content_choice_id', 'choices', 'tag', 'category', 'label'];

        Object.keys(this.choiceForm.controls).forEach(key => {
            if (resetExcept.findIndex(q => q === key) === -1) {
                this.choiceForm.get(key).reset();
            }
        });
    }*/
    ConfigChoiceFormComponent.prototype.choiceChanged = function () {
        this.text = this.elementToString();
    };
    ConfigChoiceFormComponent.prototype.addChoice = function () {
        this.choices.push(this.setChoice());
    };
    ConfigChoiceFormComponent.prototype.cancel = function () {
        this.modal.close();
    };
    ConfigChoiceFormComponent.prototype.save = function () {
        this.emitData.emit(this.choiceForm.value);
        this.modal.close();
    };
    ConfigChoiceFormComponent.prototype.stringToElement = function () {
        if (this.text.length > 0) {
            var string = this.text.split('\n');
            var cloneChoices = JSON.parse(JSON.stringify(this.choices.value));
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
                this.choices.removeAt(i);
                if (typeof this.choices.controls[i] === 'undefined') {
                    this.choices.push(this.setChoice(text, value));
                }
                else {
                    this.choices.controls[i].patchValue({
                        text: text,
                        value: value
                    });
                }
            }
        }
        else {
            while (this.choices.length !== 0) {
                this.choices.removeAt(0);
            }
        }
    };
    ConfigChoiceFormComponent.prototype.removeContent = function ($index) {
        this.choices.removeAt($index);
        this.text = this.elementToString();
    };
    ConfigChoiceFormComponent.prototype.cloneThis = function (name) {
        var choicesLength = this.choices.value.length;
        if (choicesLength > 0) {
            var cloneThisObjectName = (name === 'value') ? 'text' : 'value';
            for (var i = 0; i < choicesLength; i++) {
                this.choices.value[i][name] = this.choices.value[i][cloneThisObjectName];
            }
            this.text = this.elementToString();
            this.stringToElement();
        }
    };
    ConfigChoiceFormComponent.prototype.elementToString = function () {
        var string = '';
        //fire the `valueChanges` manually
        this.choices.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        var e = this.choices.value;
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
    ConfigChoiceFormComponent.prototype.setChoice = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            text: [text, [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(2000)
                ]],
            value: [value, [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(2000)
                ]]
        });
    };
    Object.defineProperty(ConfigChoiceFormComponent.prototype, "f", {
        get: function () {
            return this.choiceForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigChoiceFormComponent.prototype, "choices", {
        get: function () {
            return this.f.get('choices');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "emitData", void 0);
    ConfigChoiceFormComponent = __decorate([
        Component({
            selector: 'app-config-choice-form',
            templateUrl: './config-choice-form.component.html',
            styleUrls: ['./config-choice-form.component.css']
        }),
        __metadata("design:paramtypes", [ContentService,
            ContentChoiceItemService,
            ActivatedRoute,
            Location,
            FormBuilder,
            DragulaService,
            NgbActiveModal])
    ], ConfigChoiceFormComponent);
    return ConfigChoiceFormComponent;
}());
export { ConfigChoiceFormComponent };
//# sourceMappingURL=config-choice-form.component.js.map