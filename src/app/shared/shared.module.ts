import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const components = [ModalComponent];

@NgModule({
  declarations: [GroupByPipe, ModalComponent, SafeHtmlPipe],
  exports: [GroupByPipe, ModalComponent, FormsModule, ReactiveFormsModule, SafeHtmlPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
