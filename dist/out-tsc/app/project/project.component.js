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
import { ProjectService } from './../shared/services/project.service';
import { FormBuilder, Validators } from '@angular/forms';
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, fb) {
        this.projectService = projectService;
        this.fb = fb;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (result) {
            console.log(result);
            if (result.success) {
                _this.projects = result.data;
            }
        });
        this.projectForm = this.fb.group({
            'name': ['', [
                    Validators.required
                ]]
        });
    };
    ProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        var p = this.projectForm.value;
        this.projectService.storeProject(p)
            .subscribe(function (result) {
            if (result.success) {
                _this.projects = result.data;
            }
        });
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.projectService.storeProject(project.id)
            .subscribe(function (result) {
            if (result.success) {
                _this.projects = result.data;
            }
        });
    };
    Object.defineProperty(ProjectComponent.prototype, "f", {
        get: function () {
            return this.projectForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectComponent = __decorate([
        Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.css']
        }),
        __metadata("design:paramtypes", [ProjectService,
            FormBuilder])
    ], ProjectComponent);
    return ProjectComponent;
}());
export { ProjectComponent };
//# sourceMappingURL=project.component.js.map