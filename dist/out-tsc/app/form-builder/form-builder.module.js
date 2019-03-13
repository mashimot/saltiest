var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { FormBuilderComponent } from "./form-builder.component";
import { CreateTableToJsonComponent } from './../create-table-to-json/create-table-to-json.component';
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FormBuilderRoutingModule } from "./form-builder-routing.module";
import { FormConfigModule } from './../form-builder/form-config/form-config.module';
import { FormPagesModule } from './../form-pages/form-pages.module';
import { GroupByPipe } from '../shared/pipes/group-by.pipe';
import { FormInfoModule } from '../form-info/form-info.module';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';
import { RenderContentModule } from '../form-pages/render-content/render-content.module';
import { SnakeCaseToCamelCasePipe } from '../shared/pipes/snake-case-to-camel-case.pipe';
var FormBuilderModule = /** @class */ (function () {
    function FormBuilderModule() {
    }
    FormBuilderModule = __decorate([
        NgModule({
            imports: [
                FormBuilderRoutingModule,
                CommonModule,
                FormsModule,
                DragulaModule,
                RenderContentModule,
                FormPagesModule,
                FormConfigModule,
                FormInfoModule
            ],
            exports: [
                DragulaModule
            ],
            declarations: [
                CreateTableToJsonComponent,
                FormMenuComponent,
                FormBuilderComponent,
                GroupByPipe,
                SnakeCaseToCamelCasePipe,
                SumBeEqualsToDirective
            ],
            providers: []
        })
    ], FormBuilderModule);
    return FormBuilderModule;
}());
export { FormBuilderModule };
//# sourceMappingURL=form-builder.module.js.map