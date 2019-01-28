import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula';

import { FormBuilderComponent } from "./form-builder.component";
import { CreateTableToJsonComponent } from './../create-table-to-json/create-table-to-json.component';

import { FormMenuComponent } from './form-menu/form-menu.component';

import { FormBuilderRoutingModule } from "./form-builder-routing.module";
import { FormConfigModule } from './../form-builder/form-config/form-config.module';
import { FormPagesModule } from './../form-pages/form-pages.module';
import { GroupByPipe } from '../shared/pipes/group-by.pipe';
import { FormInfoModule } from '../form-info/form-info.module';
import { ConfigTitleComponent } from './config/config-title/config-title.component';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';
import { RenderContentModule } from '../form-pages/render-content/render-content.module';

@NgModule({
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
        SumBeEqualsToDirective
    ],
    providers: []
})
export class FormBuilderModule { }
