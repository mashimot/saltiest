import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { Project } from '../_core/model';

@Component({
	selector: 'app-project',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	projects: Array<Project>;
	projectToDelete: Project;
	message: string = '?';
	showModal: boolean = false;

	constructor(
		private projectService: ProjectService,
	) { }

	ngOnInit() {
		this.projectService.getProjects()
		.subscribe(result => {
			console.log(result);
			if(result.success){
				this.projects = result.data;
			}
		});
	}

	askToDelete(project: Project){
		this.showModal = true;
		this.projectToDelete = project;
		if(this.projectToDelete.name){
			this.message = `Would you like to delete ${this.projectToDelete.name}?`;
		}
	}
	
	closeModal() {
		this.showModal = false;
	}

	deleteProject(){
		if(this.projectToDelete){
			const id = this.projectToDelete.id;
			this.projectService.deleteProject(id)
			.subscribe(result => {
				if(result.success){
					this.projects = this.projects.filter(item => {
						return item.id != id;
					});
					this.projectToDelete = null;
					this.closeModal();
				}
			});
		}
	}
}
