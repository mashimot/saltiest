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
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
var ConfigChoicesComponent = /** @class */ (function () {
    function ConfigChoicesComponent(htmlElementService, dragulaService, router, modalService, cd) {
        this.htmlElementService = htmlElementService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.modalService = modalService;
        this.cd = cd;
        this.toolTypes = [{
                type: 'select',
                value: 3,
                icon: 'fas fa-box-open'
            }, {
                type: 'radio',
                icon: 'far fa-check-circle',
                value: 1
            }, {
                type: 'checkbox',
                icon: 'far fa-check-square',
                value: 2
            }];
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.toolType = this.toolTypes[1];
        this.groups = this.htmlElementService.getStaticOptionChoices();
        /*this.htmlElementService.getTools().subscribe(result => {
            if(result.success){
                this.groups = result.data.groups;
                console.log(this.groups);
            }
        });*/
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
    };
    ConfigChoicesComponent.prototype.edit = function (index) {
        var _this = this;
        if (index === void 0) { index = null; }
        var data = {
            content: this.groups[index],
            index: index
        };
        console.log(data.content);
        var m = this.modalService.open(ConfigChoiceFormComponent, this.options);
        //m.componentInstance.data = data;
        console.log(this.groups[0]);
        var myAss = {
            html: {
                category: "form",
                choices: [],
                group: "",
                label: "Type your Text",
                tag: "radio"
            }
        };
        m.componentInstance.content = myAss;
        if (index != null) {
            m.componentInstance.content = this.groups[index];
            m.componentInstance.index = data.index;
        }
        //console.log(this.groups.length);
        m.componentInstance.emitData.subscribe(function ($e) {
            if ($e.choices.length > 0) {
                var text = $e.choices.map(function (item) {
                    return item.text;
                }).join("|");
                if (index != null) {
                    _this.groups[index].html.choices = $e.choices;
                    _this.groups[index].html.group = text;
                }
                else {
                    myAss.html.group = text;
                    myAss.html.choices = $e.choices;
                    _this.groups.push(myAss);
                }
            }
            m.dismiss();
        });
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.setToolType = function (toolType) {
        this.toolType = {
            value: toolType.value,
            icon: toolType.icon,
            type: toolType.type
        };
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
            ChangeDetectorRef])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());
export { ConfigChoicesComponent };
//# sourceMappingURL=config-choices.component.js.map