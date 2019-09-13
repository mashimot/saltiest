var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService, activatedRoute, router) {
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = '?';
        this.showModal = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (r) {
            _this.pageNumber = r.page || 1;
            _this.loadProjects();
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
    };
    ProjectsComponent.prototype.pageChange = function ($e) {
        var navigationExtras = {
            queryParams: {
                'page': $e
            }
        };
        // Navigate to the login page with extras
        this.router.navigate([], navigationExtras);
    };
    ProjectsComponent.prototype.askToDelete = function (project) {
        this.showModal = true;
        this.projectToDelete = project;
        if (this.projectToDelete.name) {
            this.message = "Would you like to delete " + this.projectToDelete.name + "?";
        }
    };
    ProjectsComponent.prototype.closeModal = function () {
        this.showModal = false;
    };
    ProjectsComponent.prototype.deleteProject = function () {
        var _this = this;
        if (this.projectToDelete) {
            var id_1 = this.projectToDelete.id;
            this.projectService.deleteProject(id_1)
                .subscribe(function (result) {
                if (result.success) {
                    //this.loadProjects();
                    _this.projects$ = _this.projects$.pipe(filter(function (item) { return item.id !== id_1; }));
                    _this.projectToDelete = null;
                    _this.closeModal();
                }
            });
        }
    };
    ProjectsComponent.prototype.loadProjects = function () {
        this.projects$ = this.projectService.getProjects({
            page: this.pageNumber
        }).pipe(map(function (result) {
            return result.paginate;
        }));
    };
    ProjectsComponent = __decorate([
        Component({
            selector: 'app-project',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.css']
        }),
        __metadata("design:paramtypes", [ProjectService,
            ActivatedRoute,
            Router])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
export { ProjectsComponent };
//# sourceMappingURL=projects.component.js.map