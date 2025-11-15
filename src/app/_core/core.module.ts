import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';

const components = [HeaderBarComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components]
})
export class CoreModule {}
