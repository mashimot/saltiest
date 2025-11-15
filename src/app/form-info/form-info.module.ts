import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInfoComponent } from './form-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormInfoComponent],
  declarations: [FormInfoComponent],
})
export class FormInfoModule {}
