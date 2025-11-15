import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/guards/auth.guard';
import { FormBuilderComponent } from './form-builder.component';

/*const routes: Routes = [{
    path: 'form-builder',
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: '1/edit', pathMatch: 'full' },
        { path: ':projectId/edit', component: FormBuilderComponent }
    ]
}];*/

const routes: Routes = [
  {
    path: ':projectId/edit',
    component: FormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class FormBuilderRoutingModule {}
