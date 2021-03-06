var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { FormBuilderComponent } from "./form-builder.component";
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FormBuilderRoutingModule } from "./form-builder-routing.module";
import { FormConfigModule } from './../form-builder/form-config/form-config.module';
import { FormPagesModule } from './../form-pages/form-pages.module';
import { FormInfoModule } from '../form-info/form-info.module';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';
import { RenderContentModule } from '../form-pages/render-content/render-content.module';
import { SnakeCaseToCamelCasePipe } from '../shared/pipes/snake-case-to-camel-case.pipe';
import { ConfigChoicesModule } from '../config-choices/config-choices.module';
import { SharedModule } from '../shared/shared.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTableToJsonModule } from '../create-table-to-json/create-table-to-json.module';
var FormBuilderModule = /** @class */ (function () {
    function FormBuilderModule() {
    }
    FormBuilderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DragulaModule,
                CreateTableToJsonModule,
                FormBuilderRoutingModule,
                RenderContentModule,
                FormPagesModule,
                FormConfigModule,
                FormInfoModule,
                ConfigChoicesModule,
                SharedModule,
                NgbPopoverModule
            ],
            exports: [
                DragulaModule
            ],
            declarations: [
                FormMenuComponent,
                FormBuilderComponent,
                SnakeCaseToCamelCasePipe,
                SumBeEqualsToDirective
            ],
            providers: [],
            entryComponents: [
            //ConfigChoicesComponent
            ]
        })
    ], FormBuilderModule);
    return FormBuilderModule;
}());
export { FormBuilderModule };
//# sourceMappingURL=form-builder.module.js.map