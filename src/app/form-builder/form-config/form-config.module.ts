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

@NgModule({
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
export class FormConfigModule { }
