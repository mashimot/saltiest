import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';

const routes: Routes = [
 { path: 'config-choices', component: ConfigChoicesComponent },
 { path: 'config-choices/create', component: ConfigChoiceFormComponent } ,
 { path: 'config-choices/:id/edit', component: ConfigChoiceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigChoicesRoutingModule { }
