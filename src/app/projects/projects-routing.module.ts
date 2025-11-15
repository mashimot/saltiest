import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/guards/auth.guard';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects.component';

/*const routes: Routes = [{
	path: 'projects',
	canActivate: [AuthGuard],	
	children: [
		{ path: '', component: ProjectsComponent },
		{ path: 'create', component: ProjectFormComponent },
		{ path: ':id', component: ProjectsComponent },
		{ path: ':id/edit', component: ProjectFormComponent },
	]
}];*/
const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'create', component: ProjectFormComponent },
  { path: ':id', component: ProjectsComponent },
  { path: ':id/edit', component: ProjectFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
