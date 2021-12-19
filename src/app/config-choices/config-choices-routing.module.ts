import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { AuthGuard } from '../_core/guards/auth.guard';

/*const routes: Routes = [
  {
    path: 'config-choices',
    component: ConfigChoicesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'create', component: ConfigChoiceFormComponent } ,
      { path: ':id/edit', component: ConfigChoiceFormComponent }
    ]
  }
];*/
const routes: Routes = [
  {
    path: '',
    component: ConfigChoicesComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: ':id/edit', 
    component: ConfigChoiceFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigChoicesRoutingModule { }
