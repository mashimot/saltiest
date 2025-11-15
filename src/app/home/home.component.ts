import { AsyncPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormPagesModule } from "../form-pages/form-pages.module";
import { Page } from "./../_core/model";
import { FormConfigService } from "./../_services/form-config.service";
import { HomeService } from "./../shared/services/home.service";

interface HomeConfig {
  previewMode: boolean;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [
    AsyncPipe,
    FormPagesModule
  ]
})
export class HomeComponent implements OnInit {
  public pages$!: Observable<Page[]>;
  private readonly config: HomeConfig = { previewMode: true };

  constructor(
    private readonly formConfigService: FormConfigService,
    private readonly homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getFormConfig();
    this.loadPages();
  }

  private getFormConfig(): void {
    this.formConfigService.setConfig(this.config);
  }

  private loadPages(): void {
    this.pages$ = this.homeService.getHome();
  }
}
