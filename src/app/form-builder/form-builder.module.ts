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

@NgModule({
  imports: [
    FormBuilderRoutingModule,
    CommonModule,
    FormsModule,
    DragulaModule,
    FormPagesModule,
    FormConfigModule,
    FormInfoModule
  ],
  exports: [
    FormBuilderRoutingModule,
    CommonModule,
    FormsModule,
    DragulaModule,
    CreateTableToJsonComponent,
    FormMenuComponent,
    FormBuilderComponent
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
