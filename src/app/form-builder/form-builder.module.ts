import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { FormBuilderComponent } from './form-builder.component';
import { CreateTableToJsonComponent } from './../create-table-to-json/create-table-to-json.component';

import { FormMenuComponent } from './form-menu/form-menu.component';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
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

@NgModule({
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
    NgbPopoverModule,
  ],
  exports: [DragulaModule],
  declarations: [
    FormMenuComponent,
    FormBuilderComponent,
    SnakeCaseToCamelCasePipe,
  ],
  providers: [],
})
export class FormBuilderModule {}
