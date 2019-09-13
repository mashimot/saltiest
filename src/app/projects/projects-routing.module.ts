import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [{
	path: 'projects',
	canActivate: [AuthGuard],
	children: [
		{ path: '', component: ProjectsComponent },
		{ path: 'create', component: ProjectFormComponent },
		{ path: ':id', component: ProjectsComponent },
		{ path: ':id/edit', component: ProjectFormComponent },
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectsRoutingModule { }
