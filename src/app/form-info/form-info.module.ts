import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInfoComponent } from './form-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		FormInfoComponent
	],
	declarations: [
		FormInfoComponent
	]
})
export class FormInfoModule { }
