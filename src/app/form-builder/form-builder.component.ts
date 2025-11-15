import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Page } from '../_core/model';
import { Content } from '../_core/model/content.model';
import { BootstrapHtmlTemplate } from '../_services/bootstrap-html-template.service';
import { FormConfigService } from '../_services/form-config.service';
import { HomeService } from '../shared/services/home.service';

export interface MVC {
  isOpen: boolean;
  name: string;
}

export interface FormBuilderConfig {
  previewMode: boolean;
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit, OnDestroy, AfterContentChecked {
  pages: Page[] = [];
  inputs: Content[] = [];
  subscription: Subscription = new Subscription();

  tableName: string = '';
  tabNumber: number = 1;
  tabMVC!: number;
  isTabAlreadyOpen: boolean = false;
  previewMode: boolean = false;
  config!: FormBuilderConfig;
  projectId!: number;

  constructor(
    private readonly formConfigService: FormConfigService,
    private readonly bootstrapHtmlTemplate: BootstrapHtmlTemplate,
    private readonly homeService: HomeService,
    private readonly route: ActivatedRoute,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setProjectIdFromRoute();
    this.initPreview();
    this.loadFormBuilder();
  }

  private setProjectIdFromRoute(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('projectId');
      if (id) this.projectId = +id;
    });
  }

  private initPreview(): void {
    this.previewMode = false;
    this.config = { previewMode: this.previewMode };
    this.formConfigService.setConfig(this.config);
  }

  private loadFormBuilder(): void {
    this.subscription.add(
      this.homeService.getHome().subscribe((result: Page[]) => {
        this.pages = result;
        this.cdRef.markForCheck();
      })
    );
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public newPage(): void {
    const page: Page = {
      name: `Page ${this.pages.length + 1}`,
      rows: []
    };
    this.pages = [...this.pages, page];
  }

  public getPages(updatedPages: Page[]): void {
    this.pages = updatedPages;
  }

  public preview(): void {
    this.config = { previewMode: this.previewMode };
    this.formConfigService.setConfig(this.config);
  }

  public getTemplate(): string {
    return this.bootstrapHtmlTemplate.getTemplate(this.pages ?? []);
  }

  public getSchemas(schemas): void {
    if (!schemas.length) return;

    this.tableName = schemas[0]?.name || '';
    const newPages: Page[] = [];

    schemas.forEach(schema => {
      newPages.push(schema.pages);
    });

    this.pages = [...this.pages, ...newPages];
  }
}
