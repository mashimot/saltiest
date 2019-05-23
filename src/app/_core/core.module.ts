import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderBarComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class CoreModule { }
