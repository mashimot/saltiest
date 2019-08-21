import { Component, OnInit, Injectable } from '@angular/core';
import { RenderHtmlService } from '../_services/render-html.service';
import { HomeService } from "../shared/services/home.service";

import { Page } from "../_core/model/page.model";
import { Content } from "../_core/model/content.model";
import { Html, IHtml } from "../_core/model/html.model";
import { Table, ITable } from "../_core/model/table.model";
import { FormConfigService } from '../_services/form-config.service';
import { PageService } from '../shared/services/page.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/services/project.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Injectable({
    providedIn: 'root'
})
export class Laravel {
    inputs: any[];
    rules: string;
    attributes: string;
    messages: string;
    tableName: string = '';
    html: IHtml;
    table: ITable;

    constructor() { 
        this.inputs = [];
    }

    setParams(d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    }

    setInputs(inputs) {
        this.inputs = inputs;
    }

    getRules() {
        var basic = {
            number: ['nullable', 'numeric'],
            date: ['nullable', 'date_format:"d/m/Y"'],
            text: ['nullable', 'string'],
            textarea: ['nullable', 'string']
        }
        var tag = this.html.tag.toLowerCase();
        if(typeof basic[tag] != 'undefined'){
            basic[tag][0] = this.isRequired();
            basic[tag].push(
                this.size()
            );
            var newBasic = basic[tag].filter(el => {
                return el != "" && el != null;
            });
            return [`"${this.table.columnName}" => ${JSON.stringify(newBasic)}`].join(",");
        }
        return [`${this.table.columnName} => ${JSON.stringify(basic[tag])}`].join(",");
    }

    size(){
        if(typeof this.table.size != 'undefined'){
            if(this.table.size != null && this.table.size != ''){
                var size = {
                    number: `digits_between:1,${this.table.size}`,
                    date: 'max:' + this.table.size,
                    text: 'max:' + this.table.size,
                    textarea: 'max:' + this.table.size,
                }            
                return size[this.table.type];
            }
        }
        return null;
    }
    
    blanka(){
        let fillable = [], 
            primaryKey = [],
            rules = [],
            attributes = [],
            request = [];        
        
            if(this.inputs.length > 0){
            this.inputs.forEach(curr => {
                this.setParams(curr);

                if(curr.table.isPrimaryKey){
                    primaryKey.push(`"${curr.table.columnName}"`);
                }
                fillable.push(curr.table.columnName);
                request.push(`"${curr.table.columnName}" => $request->input('${curr.table.columnName}'),\n`);
                attributes.push(`\t'${this.table.columnName}' => '${this.html.label}'`);
                rules.push(this.getRules());
            });
        }

        return {
            model: {
                fillable: JSON.stringify(fillable, null, "\t"),
                primaryKey: primaryKey
            },
            view: {
                table: this.htmlTable(),
                script: this.htmlScript()
            },
            controller: {
                request:  `[${request}]`
            },
            validator: {
                rules: `[\n${rules.join(",\n")}\n]`,
                attributes: attributes.join(",\n")
            }
        }        
    }
    
    isRequired(): string {
        return this.table.nullable ? 'required' : 'nullable';
    }

    setTableName(tableName: string){
        this.tableName = tableName;
    }

    getMessages(): string {
        return this.messages;
    }

    htmlTable(): string{
        if(this.inputs.length > 0){
            let th = this.inputs.map((item) => { 
                return `\n<th>${item.html.label}</th>`;
            }, '').join('');
            return `
            <table class="table table-striped" id="${this.tableName}">
                <thead>
                    <tr>
                    ${th}
                    <th class="td_justo no-sort text-right">
                    {!! $HTML::iconeCriar(
                        Auth::user()->can('admin.financeirodescontos.create'), 
                        '#', 
                        true, 
                        route('admin.financeirodescontos.store'))
                    !!}
                    </th>                
                    </tr>
                </thead>
            </table>
            `;            
        }
        return '';
    }

    htmlScript(){
        if(this.inputs.length > 0){
            var script = this.inputs.map((item) => {
                return { 
                    data: item.table.columnName,
                    name: item.table.columnName
                };
            }, []);

            script.push({
                'data': 'action',
                'name': 'name'     
            });

            return `
            <script>
                /*---------------------Datatables--------------------------------*/
                var table = $('#${this.tableName}').DataTable({
                    stateSave: true,
                    processing: true,
                    serverSide: true,
                    cache: true,
                    ajax: "",
                    columns: ${JSON.stringify(script, null, '\t')}
                });        
                /*---------------------/Datatables-------------------------------*/
                /*---------------------CRUD IN MODAL-------------------------*/
                modalCrudConstruct('modal_mudar_aqui','form_mudar_aqui');
                /*---------------------/Create Edit Show-------------------------*/

                /*---------------------Validation-----------------------------------*/
                $(document).on('click', '#i_btn_salvar_modal_mudar_aqui',function(){
                    validationForm('#form_mudar_aqui');
                });
                /*---------------------/Validation-------------------------*/            
            </script>`;
        }

        return '';
    }

}

@Injectable({
    providedIn: 'root'
})
export class Bootstrap {
    pages: Array<Page>;
    inputs: Array<Content>;
    code: string = '';

    constructor(
        private renderHtmlService: RenderHtmlService
    ) {
    }

    init(): void {
        this.inputs = [];
        var htmlPages = [];
        var t = "\n\t";

        this.pages.forEach((page, pageNumber) => {
            htmlPages.push(`\n<section class="page-${pageNumber + 1}">`);
                var tabNum = 1;
                t = this.tabSpace(tabNum);
                page.rows.forEach(row => {
                    let grid = row.grid.split(' ');
                    htmlPages.push(`${t}<div class="row">`);
                    tabNum++;
                    t = this.tabSpace(tabNum);
                        row.columns.forEach((column, j) => {
                            htmlPages.push(`${t}<div class="col-md-${grid[j]}">`);
                            column.contents.forEach(content => {
                                if (content.html.category === 'form') {
                                    this.inputs.push(content);
                                }
                                content.html['grid'] = grid[j];
                                this.renderHtmlService.setParams(content);
                                htmlPages.push(t + this.renderHtmlService.get().code);
                            });
                            htmlPages.push(`${t}</div>`);
                        });
                    tabNum--;
                    t = this.tabSpace(tabNum);
                    htmlPages.push(`${t}</div>`);
                });
            htmlPages.push(`</section>`);
        });
        this.code = htmlPages.join("\n");
    }

    private tabSpace(tabNum : number) : string{
        var tab = "\t";
        var newTab = "";
        for(var i = 0; i < tabNum; i++){
            newTab += tab;
        }
        return newTab;
    }

    html(): string{
        return this.code;
    }

    getInputs() {
        return this.inputs;
    }

    setPages(pages) {
        this.pages = pages;
    }
}

export interface MVC {
    isOpen: boolean;
    name: string;
}

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent implements OnInit {
    pages: Array<Page>;
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
        private bootstrap: Bootstrap,
        private laravel: Laravel,
        private projectService: ProjectService,
        private homeService: HomeService,
        private pageService: PageService,
        private route: ActivatedRoute,
        private ngxLoader: NgxUiLoaderService

    ) {

        this.mvcList = [{
            isOpen: false,
            name: 'Model'
        },{
            isOpen: false,
            name: 'View'
        },{
            isOpen: false,
            name: 'Controller'
        },{
            isOpen: false,
            name: 'Validation'
        }];
    }

    ngOnInit() {
        this.pages = [];
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        //this.pages = this.homeService.getHomeStatic();
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
            if(result.success){
                this.pages = result.data;
            }
            this.ngxLoader.stop();
        });*/
    }
      
    ngAfterViewInit(){
   
    }

    public save(){
        /*this.pageService.createPage({ 
            project_id: this.project_id,
            pages: this.pages 
        })
        .subscribe(result => {
            if(result.success){
                this.loadFormBuilder();
            }
        });*/
    }

    public preview(): void {
        //this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    }

    isTabMvcOpen(tabNumber: number){
        if(this.mvcList[tabNumber].isOpen){
            this.bootstrap.setPages(this.pages);
            this.bootstrap.init();
            this.laravel.setInputs(this.bootstrap.getInputs());
            this.laravel.setTableName(this.tableName);
        }
        return this.mvcList[tabNumber].isOpen;
    }

    get validator() {
        return this.laravel.blanka().validator;
    }

    get model(){
        return this.laravel.blanka().model;
    }

    get view(){
        return this.laravel.blanka().view;
    }

    get controller(){
        return this.laravel.blanka().controller;
    }

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

    public getPages(pages): void {
        this.pages = [...this.pages, pages];
        //this.pages.push(pages);
    }
}