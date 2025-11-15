import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../../shared/services/project.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.css"],
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      id: [],
      name: ["", [Validators.required]],
    });
    this.route.params.subscribe((result) => {
      let id = result.id;
      console.log(result);
      if (!id) {
        //this.router.navigate(['projects']);
        return;
      }
      this.projectService.getProjectById(id).subscribe((res) => {
        if (res.success) {
          this.projectForm.patchValue({
            id: id,
            name: res.data.name,
          });
        }
      });
    });
  }

  onSubmit() {
    let formValue = this.projectForm.value;
    const p = this.projectForm.value;

    if (formValue.id) {
      this.projectService.updateProject(formValue.id, p).subscribe((result) => {
        if (result.success) {
          this.router.navigate(["projects", formValue.id, "edit"]);
        }
      });
    } else {
      this.projectService.storeProject(p).subscribe((result) => {
        if (result.success) {
          this.router.navigate(["projects"]);
        }
      });
    }
  }

  get f() {
    return this.projectForm.controls;
  }
}
