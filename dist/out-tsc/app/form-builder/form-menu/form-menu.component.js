var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { BootstrapGridSystemService } from '../../_services/bootstrap-grid-system.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoicesComponent } from '../../config-choices/config-choices.component';
import { map } from 'rxjs/operators';
var FormMenuComponent = /** @class */ (function () {
    function FormMenuComponent(htmlElementService, modalService) {
        this.htmlElementService = htmlElementService;
        this.modalService = modalService;
        this.optionType = 1;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.isNewPage = new EventEmitter();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
        //this.tools = [];
        this.grids = new BootstrapGridSystemService().getGrid();
        this.bootstrap = [{
                grid: [
                    "6 6",
                    "2 4 4 2",
                    "4 4 4",
                    "7 5"
                ].join("\n")
            }];
        //this.tools = this.htmlElementService.getStaticTools();
        this.tools$ = this.htmlElementService /*.getTools()*/.getStaticTools()
            .pipe(map(function (res) {
            return res.tools;
        }));
        /*this.htmlElementService.getTools().subscribe(result => {
            console.log(result);
            if(result.success){
                this.tools = result.tools;
            }
        });*/
        this.pageModel = [{
                rows: [],
                name: "Salt - A tool for Lazy Developer"
            }];
    };
    FormMenuComponent.prototype.createChoices = function () {
        this.modalService.open(ConfigChoicesComponent, this.options);
    };
    FormMenuComponent.prototype.editChoices = function (content) {
        var m = this.modalService.open(ConfigChoicesComponent, this.options);
        m.componentInstance.content = content;
    };
    FormMenuComponent.prototype.newPage = function () {
        this.isNewPage.emit(true);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormMenuComponent.prototype, "isNewPage", void 0);
    FormMenuComponent = __decorate([
        Component({
            selector: 'app-form-menu',
            templateUrl: './form-menu.component.html',
            styleUrls: ['./form-menu.component.css']
        }),
        __metadata("design:paramtypes", [HtmlElementService,
            NgbModal])
    ], FormMenuComponent);
    return FormMenuComponent;
}());
export { FormMenuComponent };
//# sourceMappingURL=form-menu.component.js.map