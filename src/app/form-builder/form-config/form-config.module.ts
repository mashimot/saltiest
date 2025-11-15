import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConfigComponent } from './form-config.component';
import { DragulaModule } from 'ng2-dragula';
import { RenderContentModule } from '../../form-pages/render-content/render-content.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigChoiceFormComponent } from '../../config-choices/config-choice-form/config-choice-form.component';
import { ConfigChoicesModule } from 'src/app/config-choices/config-choices.module';
import { FormConfigTitleComponent } from './form-config-title/form-config-title.component';
import { FormConfigImgComponent } from './form-config-img/form-config-img.component';
import { FormConfigHtmlEditorComponent } from './form-config-html-editor/form-config-html-editor.component';
import { FormConfigGeneralComponent } from './form-config-general/form-config-general.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    RenderContentModule,
    SharedModule,
    ConfigChoicesModule,
  ],
  exports: [
    FormConfigComponent,
    FormConfigGeneralComponent,
    FormConfigHtmlEditorComponent,
    FormConfigImgComponent,
    FormConfigTitleComponent,
  ],
  declarations: [
    FormConfigComponent,
    FormConfigGeneralComponent,
    FormConfigHtmlEditorComponent,
    FormConfigImgComponent,
    FormConfigTitleComponent,
  ],
})
export class FormConfigModule {}
