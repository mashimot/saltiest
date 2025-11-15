import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Project } from '../_core/model';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //projects: Array<Project>;
  projects$: Observable<any>;
  joeysWorldTour$: Observable<any>;
  projectToDelete: Project;
  message: string = '?';
  showModal: boolean = false;
  pageNumber: number;
  staticProjects$: {
    current_page: number;
    data: Array<any>;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
  } = {
    current_page: 1,
    data: [
      {
        id: 2,
        name: 'Teste',
        created_at: '2021-05-23 23:53:15',
        updated_at: '2021-05-23 23:53:15'
      }
    ],
    first_page_url: 'http://salty-suite.herokuapp.com/api/projects?page=1',
    from: 1,
    last_page: 1,
    last_page_url: 'http://salty-suite.herokuapp.com/api/projects?page=1',
    next_page_url: null,
    path: 'http://salty-suite.herokuapp.com/api/projects',
    per_page: 10,
    prev_page_url: null,
    to: 1,
    total: 1
  };

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(result => {
      this.pageNumber = result.page || 1;
      this.loadProjects();
    });
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

  pageChange($e) {
    const navigationExtras = {
      queryParams: {
        page: $e
      }
    };
    // Navigate to the login page with extras
    this.router.navigate([], navigationExtras);
  }

  askToDelete(project: Project) {
    this.showModal = true;
    this.projectToDelete = project;
    if (this.projectToDelete.name) {
      this.message = `Would you like to delete ${this.projectToDelete.name}?`;
    }
  }

  closeModal() {
    this.showModal = false;
  }

  deleteProject() {
    if (this.projectToDelete) {
      const id = this.projectToDelete.id;
      this.joeysWorldTour$ = this.projectService.deleteProject(id).pipe(
        tap(result => {
          console.log('response from server:', result);
        }),
        map(result => {
          return result;
        })
      );
      /*.subscribe(result => {
					console.log('aqui');
					if(result.success){
						//this.loadProjects();
						this.projects$ = this.projects$.pipe(
							filter(item => item.id !== id)
						);					
						this.projectToDelete = null;
						this.closeModal();
					}
				})*/
      /*.subscribe(result => {
					if(result.success){
						//this.loadProjects();
						this.projects$ = this.projects$.pipe(
							filter(item => item.id !== id)
						);					
						this.projectToDelete = null;
						this.closeModal();
					}
				});*/
      console.log(this.joeysWorldTour$);
    }
  }

  loadProjects() {
    //this.projects$ = of(this.staticProjects$);
    this.projects$ = this.projectService
      .getProjects({
        page: this.pageNumber
      })
      .pipe(
        map(result => {
          return result.paginate;
        })
      );
  }
}
