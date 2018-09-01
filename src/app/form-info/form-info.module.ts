import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInfoComponent } from './form-info.component';
import { FormsModule } from '@angular/forms';
import { SpellCheckerComponent } from '../spell-checker/spell-checker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormInfoComponent
  ],
  declarations: [
    FormInfoComponent,
    SpellCheckerComponent
  ]
})
export class FormInfoModule { }
