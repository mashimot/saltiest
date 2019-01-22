var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { FormPagesComponent } from './form-pages.component';
import { FormRowsComponent } from './form-rows/form-rows.component';
import { FormColumnsComponent } from './form-columns/form-columns.component';
import { FormContentsComponent } from './form-contents/form-contents.component';
import { RenderContentModule } from './render-content/render-content.module';
var FormPagesModule = /** @class */ (function () {
    function FormPagesModule() {
    }
    FormPagesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DragulaModule,
                RenderContentModule
            ],
            exports: [
                CommonModule,
                FormPagesComponent,
                FormRowsComponent,
                FormColumnsComponent,
                FormContentsComponent
            ],
            declarations: [
                FormPagesComponent,
                FormRowsComponent,
                FormColumnsComponent,
                FormContentsComponent
            ]
        })
    ], FormPagesModule);
    return FormPagesModule;
}());
export { FormPagesModule };
//# sourceMappingURL=form-pages.module.js.map