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
import { ProjectService } from '../../shared/services/project.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(projectService, fb, router, route) {
        this.projectService = projectService;
        this.fb = fb;
        this.router = router;
        this.route = route;
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectForm = this.fb.group({
            'id': [],
            'name': ['', [
                    Validators.required
                ]]
        });
        this.route.params.subscribe(function (result) {
            var id = result.id;
            if (!id) {
                //this.router.navigate(['projects']);
                return;
            }
            _this.projectService.getProjectById(id)
                .subscribe(function (res) {
                if (res.success) {
                    _this.projectForm.patchValue({
                        id: id,
                        name: res.data.name
                    });
                }
            });
        });
    };
    ProjectFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formValue = this.projectForm.value;
        var p = this.projectForm.value;
        if (formValue.id) {
            this.projectService.updateProject(formValue.id, p)
                .subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['projects', formValue.id, 'edit']);
                }
            });
        }
        else {
            this.projectService.storeProject(p)
                .subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['projects']);
                }
            });
        }
    };
    Object.defineProperty(ProjectFormComponent.prototype, "f", {
        get: function () {
            return this.projectForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectFormComponent = __decorate([
        Component({
            selector: 'app-project-form',
            templateUrl: './project-form.component.html',
            styleUrls: ['./project-form.component.css']
        }),
        __metadata("design:paramtypes", [ProjectService,
            FormBuilder,
            Router,
            ActivatedRoute])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());
export { ProjectFormComponent };
//# sourceMappingURL=project-form.component.js.map