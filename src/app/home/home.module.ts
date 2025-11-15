import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormPagesModule } from '../form-pages/form-pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    FormPagesModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule {}
