var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormConfigService } from './../_services/form-config.service';
import { HomeService } from './../shared/services/home.service';
import { PageService } from '../shared/services/page.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(formConfigService, homeService, pageService) {
        this.formConfigService = formConfigService;
        this.homeService = homeService;
        this.pageService = pageService;
        this.pages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.config = {
            previewMode: true
        };
        this.formConfigService.setConfig(this.config);
        this.pages = this.homeService.getHomeStatic();
        /*this.pageService.getPageByProjectId(14)
        .subscribe(result => {
            console.log(result);
            if(result.success){
                this.pages = result.data;
            }
        });*/
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [FormConfigService,
            HomeService,
            PageService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map