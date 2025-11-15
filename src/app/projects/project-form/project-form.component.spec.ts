import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ProjectService } from "src/app/shared/services/project.service";

import { ProjectFormComponent } from "./project-form.component";

describe("ProjectFormComponent", () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;
  let formBuilder: FormBuilder;
  let projectService: ProjectService;
  let projectServiceMock;

  beforeEach(async(() => {
    projectServiceMock = jasmine.createSpyObj("ProjectService", [
      "getProjectById",
      "updateProject",
      "storeProject",
    ]);
    TestBed.configureTestingModule({
      declarations: [ProjectFormComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ProjectService,
          useValue: projectServiceMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test huehue", () => {
    component.projectForm.get("id").patchValue(1);
    projectServiceMock.getProjectById.and.returnValue(
      of({
        success: true,
        data: {
          name: "name 1",
        },
      }),
    );
    projectServiceMock.getProjectById(1).subscribe((result) => {});

    //expect(component).toBeTruthy();
  });
});
