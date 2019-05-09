import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigChoicesRoutingModule } from './config-choices-routing.module';
import { ConfigChoicesComponent } from './config-choices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigChoicesRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    DragulaModule,
    SharedModule
  ],
  exports: [ConfigChoicesComponent, ConfigChoiceFormComponent],
  declarations: [ConfigChoicesComponent, ConfigChoiceFormComponent]
})
export class ConfigChoicesModule { }
