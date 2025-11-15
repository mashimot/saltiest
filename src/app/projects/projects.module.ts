import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, NgxPaginationModule],
  exports: [ProjectsComponent],
  declarations: [ProjectsComponent, ProjectFormComponent]
})
export class ProjectsModule {}
