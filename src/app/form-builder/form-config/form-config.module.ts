import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigGeneralComponent } from './../config/config-general/config-general.component';
import { ConfigHtmlEditorComponent } from './../config/config-html-editor/config-html-editor.component';
import { ConfigImgComponent } from './../config/config-img/config-img.component';
import { FormConfigComponent } from './form-config.component';
import { DragulaModule } from 'ng2-dragula';
import { ConfigTableBuilderComponent } from '../config/config-table-builder/config-table-builder.component';
import { RenderContentModule } from '../../form-pages/render-content/render-content.module';
import { ConfigTitleComponent } from '../config/config-title/config-title.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigChoiceFormComponent } from '../../config-choices/config-choice-form/config-choice-form.component';
import { ConfigChoicesModule } from 'src/app/config-choices/config-choices.module';

@NgModule({
	imports: [
		CommonModule,
		DragulaModule,
		RenderContentModule,
		SharedModule,
		ConfigChoicesModule
	],
	exports: [
		FormConfigComponent,
		ConfigGeneralComponent,
		ConfigHtmlEditorComponent,
		ConfigImgComponent,
		ConfigTableBuilderComponent,
		ConfigTitleComponent
	],
	declarations: [
		FormConfigComponent,
		ConfigGeneralComponent,
		ConfigHtmlEditorComponent,
		ConfigImgComponent,
		ConfigTableBuilderComponent,
		ConfigTitleComponent
	]
})
export class FormConfigModule { }
