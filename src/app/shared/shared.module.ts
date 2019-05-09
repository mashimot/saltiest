import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from './pipes/group-by.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';

const components = [
    ModalComponent
];

@NgModule({
	declarations: [
		GroupByPipe,
		ModalComponent
	],
	exports: [
		GroupByPipe,
		ModalComponent,
		FormsModule, 
		ReactiveFormsModule
	],
	imports: [
		CommonModule, 
		FormsModule, 
		ReactiveFormsModule
	]
})
export class SharedModule { }
