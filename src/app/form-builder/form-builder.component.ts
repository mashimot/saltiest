import { Component, OnInit, Injectable, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HomeService } from "../shared/services/home.service";
import { VueHtmlTemplate } from "../_services/vue-html-template.service";
import { BootstrapHtmlTemplate } from "../_services/bootstrap-html-template.service";
import { Content } from "../_core/model/content.model";
import { FormConfigService } from '../_services/form-config.service';
import { PageService } from '../shared/services/page.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/services/project.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map, startWith, tap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { Page } from '../_core/model';

export interface MVC {
    isOpen: boolean;
    name: string;
}

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit {
    pages: Page[];
    subs: Subscription;
    inputs: Content[];
    tableName: string = '';
    tabNumber: number;
    isTabAlreadyOpen: boolean = false;
    tabMVC: number; 
    previewMode: boolean = false;
    config: {
        previewMode: boolean 
    };
    project_id: number;

    constructor(
        private formConfigService: FormConfigService,
        private bootstrapHtmlTemplate: BootstrapHtmlTemplate,
        private homeService: HomeService,
        private route: ActivatedRoute,
        private cdRef: ChangeDetectorRef,
        /*private vueHtmlTemplate: VueHtmlTemplate,
        private projectService: ProjectService,
        private pageService: PageService,
        private ngxLoader: NgxUiLoaderService,*/
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(r => {
            this.project_id = r.projectId;
        });
        this.tabNumber = 1; 
        this.previewMode = false; 
        this.preview();
        this.config = {
            previewMode: this.previewMode
        };
        this.loadFormBuilder(); 
    }  

    loadFormBuilder(){
        this.subs = this.homeService.getHome()
            .subscribe(result => {
                this.pages = result;
            });
    }
      
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }

    public newPage(){
        this.pages = [
            ...this.pages, 
            {
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            }
        ];
        //this.pagesChange.emit(this.pages);
    }

    public preview(): void {
        this.config = {
            previewMode: this.previewMode
        };
      
        this.formConfigService.setConfig(this.config);
    }

    public getPages($event: Page[]){
        this.pages = ($event);
    }

    public getTemplate(){
        return this.bootstrapHtmlTemplate.getTemplate(
            this.pages
                ? this.pages
                : []
        );
    }

    public getSchemas(schemas): void {
        let newPages = [];
        schemas.forEach(schema => {
            this.tableName = schema.name;
            newPages.push(schema.pages);
        });      

        this.pages = [...this.pages, ...newPages];
    }

    ngOnDestroy(){
        this.subs.unsubscribe();
    }
}