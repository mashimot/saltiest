import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectFormComponent } from "./project-form/project-form.component";
import { SharedModule } from "../shared/shared.module";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
  exports: [ProjectsComponent],
  declarations: [ProjectsComponent, ProjectFormComponent],
})
export class ProjectsModule {}
