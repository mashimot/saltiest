import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { ConfigChoicesModule } from '../config-choices/config-choices.module';
import { CreateTableToJsonComponent } from './../create-table-to-json/create-table-to-json.component';
import { CreateTableToJsonModule } from '../create-table-to-json/create-table-to-json.module';
import { FormConfigModule } from './../form-builder/form-config/form-config.module';
import { FormInfoModule } from '../form-info/form-info.module';
import { FormPagesModule } from './../form-pages/form-pages.module';
import { RenderContentModule } from '../form-pages/render-content/render-content.module';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';
import { SnakeCaseToCamelCasePipe } from '../shared/pipes/snake-case-to-camel-case.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormMenuComponent } from './form-menu/form-menu.component';

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
    NgbPopoverModule
  ],
  exports: [DragulaModule],
  declarations: [FormMenuComponent, FormBuilderComponent, SnakeCaseToCamelCasePipe],
  providers: []
})
export class FormBuilderModule {}
