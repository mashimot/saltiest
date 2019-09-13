import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { Project } from '../_core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-project',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	//projects: Array<Project>;
	projects$: Observable<any>;
	projectToDelete: Project;
	message: string = '?';
	showModal: boolean = false;
	pageNumber: number;
	constructor(
		private projectService: ProjectService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(r => {
			this.pageNumber = r.page || 1; 
			this.loadProjects();
		})
		/*this.projectService.getProjects({
			page: this.pageNumber
		})
		.subscribe(result => {
			console.log(result);
			if(result.success){
				this.projects = result.data;
			}
		});*/
	}

	pageChange($e){
		let navigationExtras = {
			queryParams: { 
				'page': $e
			}
		};
		// Navigate to the login page with extras
		this.router.navigate([], navigationExtras);	
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
					//this.loadProjects();
					this.projects$ = this.projects$.pipe(
						filter(item => item.id !== id)
					);					
					this.projectToDelete = null;
					this.closeModal();
				}
			});
		}
	}

	loadProjects(){
		this.projects$ = this.projectService.getProjects({
			page: this.pageNumber
		}).pipe(
			map(result => {
				return result.paginate;
			})
		);
	}
}

