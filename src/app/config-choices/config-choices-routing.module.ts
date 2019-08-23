import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'config-choices',
    component: ConfigChoicesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'create', component: ConfigChoiceFormComponent } ,
      { path: ':id/edit', component: ConfigChoiceFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigChoicesRoutingModule { }
