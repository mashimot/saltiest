var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { AuthGuard } from '../core/guards/auth.guard';
var routes = [
    {
        path: 'config-choices',
        component: ConfigChoicesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'create', component: ConfigChoiceFormComponent },
            { path: ':id/edit', component: ConfigChoiceFormComponent }
        ]
    }
];
var ConfigChoicesRoutingModule = /** @class */ (function () {
    function ConfigChoicesRoutingModule() {
    }
    ConfigChoicesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ConfigChoicesRoutingModule);
    return ConfigChoicesRoutingModule;
}());
export { ConfigChoicesRoutingModule };
//# sourceMappingURL=config-choices-routing.module.js.map