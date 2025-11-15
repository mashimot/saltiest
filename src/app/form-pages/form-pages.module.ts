import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { FormConfigComponent } from '../form-builder/form-config/form-config.component';
import { FormConfigModule } from '../form-builder/form-config/form-config.module';
import { FormColumnsComponent } from './form-columns/form-columns.component';
import { FormContentsComponent } from './form-contents/form-contents.component';
import { FormPagesComponent } from './form-pages.component';
import { FormRowsComponent } from './form-rows/form-rows.component';
import { RenderContentModule } from './render-content/render-content.module';

@NgModule({
  imports: [CommonModule, DragulaModule.forRoot(), RenderContentModule, FormConfigModule],
  exports: [FormPagesComponent, FormRowsComponent, FormColumnsComponent, FormContentsComponent],
  declarations: [FormPagesComponent, FormRowsComponent, FormColumnsComponent, FormContentsComponent],
  providers: []
})
export class FormPagesModule {}
