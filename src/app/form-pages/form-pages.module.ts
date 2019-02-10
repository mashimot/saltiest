import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { FormPagesComponent } from './form-pages.component';
import { FormRowsComponent } from './form-rows/form-rows.component';
import { FormColumnsComponent } from './form-columns/form-columns.component';
import { FormContentsComponent } from './form-contents/form-contents.component';
import { RenderContentModule } from './render-content/render-content.module';

@NgModule({
	imports: [
		CommonModule,
		DragulaModule.forRoot(),
		RenderContentModule
	],
	exports: [
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
export class FormPagesModule { }
