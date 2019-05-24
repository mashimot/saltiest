var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpellCheckerComponent } from './spell-checker.component';
import { AuthGuard } from '../_core/guards/auth.guard';
var routes = [{
        path: 'spell-checker',
        canActivate: [AuthGuard],
        children: [{
                path: '', component: SpellCheckerComponent
            }]
    }];
var SpellCheckerRoutingModule = /** @class */ (function () {
    function SpellCheckerRoutingModule() {
    }
    SpellCheckerRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SpellCheckerRoutingModule);
    return SpellCheckerRoutingModule;
}());
export { SpellCheckerRoutingModule };
//# sourceMappingURL=spell-checker-routing.module.js.map