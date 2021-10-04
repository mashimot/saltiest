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
    pages: Array<any>;
    inputs: Array<Content>;
    mvcList: Array<MVC>;
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
        private vueHtmlTemplate: VueHtmlTemplate,
        private bootstrapHtmlTemplate: BootstrapHtmlTemplate,
        private projectService: ProjectService,
        private homeService: HomeService,
        private pageService: PageService,
        private route: ActivatedRoute,
        private ngxLoader: NgxUiLoaderService,
        private cdRef: ChangeDetectorRef
    ) {

        this.mvcList = [/*{
            isOpen: false,
            name: 'Model'
        },*/{
            isOpen: false,
            name: 'View'
        }/*,{
            isOpen: false,
            name: 'Controller'
        },{
            isOpen: false,
            name: 'Validation'
        }*/];
    }

    ngOnInit() {
        this.pages = [];
        this.route.params.subscribe(r => {
            this.project_id = r.projectId;
        });
        this.tabMVC = 1;
        this.tabNumber = 1; 
        this.previewMode = false; 
        this.preview();
        this.config = {
            previewMode: this.previewMode
        };
        this.loadFormBuilder(); 
    }  

    loadFormBuilder(){
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        this.pages = this.homeService.getHomeStatic();
        /*this.pageService.getPageByProjectId(this.project_id)
        .subscribe(result => { 
            console.log(result);
            if(result.success){
                this.pages = result.paginate.data;
            }
            this.ngxLoader.stop();
        });*/
    }
      
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }

    public save(){
        this.pageService.createPage({ 
            project_id: this.project_id,
            pages: this.pages
        })
        .subscribe(result => {
            if(result.success){
                this.loadFormBuilder();
            }
        });
    }

    public pageNext(){

    }

    public pagePrevious(){

    }
    
    public preview(): void {
        //this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
      
        this.formConfigService.setConfig(this.config);
    }

    isTabMvcOpen(tabNumber: number = 1){
        if(this.mvcList[tabNumber].isOpen){
            //this.laravel.setInputs(this.viewHtmlGenerator.getInputs());
            //this.laravel.setTableName(this.tableName);
        }
        
        return this.mvcList[tabNumber].isOpen;
    }
    
    /*
    get validator() {
        return this.laravel.blanka().validator;
    }

    get model(){
        return this.laravel.blanka().model;
    }

    get controller(){
        return this.laravel.blanka().controller;
    }
    */

    public removeDoubleQuotes(word: string){
        if(typeof word != 'undefined')
            return word.replace(/\"/g, "");
        return '';            
    }

    public isNewPage(newPage: boolean): void {
        if (newPage) {
            /*this.pageService.createPage({ 
                project_id: this.project_id,
                name: `Page ${this.pages.length}`
            })
            .subscribe(result => {
                if(result.success){
                    this.pages = result.data;
                }
            });*/            
        
            this.pages = [...this.pages, {
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            }];
            
            
            /*this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });*/
        }
    }

    public newPage($event){
        if($event.isNewPage){
            var index = $event.pageIndex;
            this.pages = [
                // part of the array before the specified index
                ...this.pages.slice(0, index),
                // inserted item
                {
                    name: 'Page ' + (index + 1),
                    rows: []
                },
                // part of the array after the specified index
                ...this.pages.slice(index)
            ];

        }
        console.log('newPage', $event);
    }

    public getSchemas($schemas): void {
        let schemas = $schemas;
        let pages = [];
        schemas.forEach(schema => {
            this.tableName = schema.name;
            pages.push(schema.pages);
        });      
        this.pages = [...this.pages, ...pages];
        console.log('this.pages', this.pages);
    }
}