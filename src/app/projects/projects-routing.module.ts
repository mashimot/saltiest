import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';

const routes: Routes = [
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'projects/create', component: ProjectFormComponent },
	{ path: 'projects/:id', component: ProjectsComponent },
	{ path: 'projects/:id/edit', component: ProjectFormComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectsRoutingModule { }
