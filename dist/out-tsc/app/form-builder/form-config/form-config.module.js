var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigChoicesComponent } from './../config/config-choices/config-choices.component';
import { ConfigGeneralComponent } from './../config/config-general/config-general.component';
import { ConfigHtmlEditorComponent } from './../config/config-html-editor/config-html-editor.component';
import { ConfigImgComponent } from './../config/config-img/config-img.component';
import { FormConfigComponent } from './form-config.component';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigTableBuilderComponent } from '../config/config-table-builder/config-table-builder.component';
import { RenderContentModule } from '../../form-pages/render-content/render-content.module';
import { ConfigTitleComponent } from '../config/config-title/config-title.component';
var FormConfigModule = /** @class */ (function () {
    function FormConfigModule() {
    }
    FormConfigModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DragulaModule,
                FormsModule,
                RenderContentModule,
                ReactiveFormsModule
            ],
            exports: [
                FormConfigComponent,
                ConfigChoicesComponent,
                ConfigGeneralComponent,
                ConfigHtmlEditorComponent,
                ConfigImgComponent,
                ConfigTableBuilderComponent,
                ConfigTitleComponent
            ],
            declarations: [
                FormConfigComponent,
                ConfigChoicesComponent,
                ConfigGeneralComponent,
                ConfigHtmlEditorComponent,
                ConfigImgComponent,
                ConfigTableBuilderComponent,
                ConfigTitleComponent
            ]
        })
    ], FormConfigModule);
    return FormConfigModule;
}());
export { FormConfigModule };
//# sourceMappingURL=form-config.module.js.map