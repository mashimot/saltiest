import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInfoComponent } from './form-info.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormInfoComponent],
  declarations: [FormInfoComponent]
})
export class FormInfoModule {}
