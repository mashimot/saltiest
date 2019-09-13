var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { HtmlElementService } from '../shared/services/html-element.service';
import { DragulaService } from 'ng2-dragula';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { Location } from '@angular/common';
import { CHOICE_TYPE } from '../_core/consts/choice-type.const';
import { tap, map } from 'rxjs/operators';
var ConfigChoicesComponent = /** @class */ (function () {
    function ConfigChoicesComponent(htmlElementService, dragulaService, router, modalService, cd, location, activatedRoute) {
        this.htmlElementService = htmlElementService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.modalService = modalService;
        this.cd = cd;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        //this.choices = this.htmlElementService.getStaticOptionChoices();
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.choiceTypes = CHOICE_TYPE;
        /*this.choices = {
            data: []
        };*/
        this.activatedRoute.queryParams.subscribe(function (x) { return _this.loadPage(x.page || 1); });
    };
    ConfigChoicesComponent.prototype.edit = function (index) {
        var _this = this;
        if (index === void 0) { index = null; }
        this.choices$.subscribe(function (result) {
            var data = {
                id: null,
                content: result.data[index],
                index: index
            };
            var myAss = {
                html: {
                    category: "form",
                    choices: [],
                    group: "",
                    label: "Type your Text",
                    tag: "radio"
                }
            };
            var modal = _this.modalService.open(ConfigChoiceFormComponent, _this.options);
            modal.componentInstance.content = myAss;
            if (index != null) {
                modal.componentInstance.content = data.content;
                modal.componentInstance.index = data.index;
            }
            modal.componentInstance.emitData.subscribe(function ($e) {
                if ($e.choices.length > 0) {
                    if (index != null) {
                        _this.choices$ = _this.choices$.pipe(map(function (_) {
                            result.data[index].html.choices = $e.choices;
                            return result;
                        }), tap(function (x) { return console.log(x); }));
                    }
                    else {
                        myAss.html.choices = $e.choices;
                        _this.choices$ = _this.choices$.pipe(map(function (_) {
                            result.data.push(myAss);
                            return result;
                        }), tap(function (x) { return console.log(x); }));
                    }
                }
                modal.dismiss();
            });
        });
        //console.log(this.choices.length);
        /*;*/
    };
    ConfigChoicesComponent.prototype.loadPage = function (page) {
        this.choices$ = this.htmlElementService.queryParams({
            page: page
        }).pipe(map(function (result) {
            return result.paginate;
        }));
        /*this.htmlElementService.queryParams({
            page: page
        }).subscribe(result => {
            this.choices = result.paginate;
        });*/
    };
    ConfigChoicesComponent.prototype.pageChange = function ($e) {
        var navigationExtras = {
            queryParams: {
                'page': $e
            }
        };
        // Navigate to the login page with extras
        this.router.navigate([], navigationExtras);
    };
    ConfigChoicesComponent.prototype.getChoiceType = function (tag) {
        return this.choiceTypes[tag.toUpperCase()];
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.setchoiceType = function (content, choiceType) {
        content.html.tag = choiceType.type;
    };
    ConfigChoicesComponent = __decorate([
        Component({
            selector: 'app-config-choices',
            templateUrl: './config-choices.component.html',
            styleUrls: ['./config-choices.component.css']
        }),
        __metadata("design:paramtypes", [HtmlElementService,
            DragulaService,
            Router,
            NgbModal,
            ChangeDetectorRef,
            Location,
            ActivatedRoute])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());
export { ConfigChoicesComponent };
//# sourceMappingURL=config-choices.component.js.map