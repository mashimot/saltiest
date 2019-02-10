import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { RenderHtmlService } from '../services/render-html.service';
import { HomeService } from "../shared/services/home.service";
import { DragulaService } from 'ng2-dragula';

import { Page } from "../shared/models/page.model";
import { Content } from "../shared/models/content.model";
import { Html, IHtml } from "../shared/models/html.model";
import { Table, ITable } from "../shared/models/table.model";


@Injectable({
    providedIn: 'root'
})
export class Validator {

    inputs: any[];
    rules: string;
    attributes: string;
    messages: string;
    
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

    getValidator() {
        var rules = [];
        rules.push(
            this.isRequired(),
            this.getDataType(),
            this.getMaxlength()
        );
        var rules = rules.filter(function (el) {
            return el != "" && el != null;
        });
        this.rules = `\t'${this.table.columnName}' => ${JSON.stringify(rules)},\n`;
        this.attributes = `\t'${this.table.columnName}' => '${this.html.label}',\n`;        
    }

    getDataType(): string {
        switch (this.table.type) {
            case 'number':
                return 'numeric';
            case 'date':
                return 'date_format:"d/m/Y"';
            default:
                return null;
        }
    }

    getMaxlength(): string {
        if (parseInt(this.table.size) > 0) {             
            if (this.table.type == 'number') {
                if(this.table.size.indexOf('.') !== -1){
                    var sizeArr = this.table.size.split('.');
                    var b = '.';
                    var position = parseInt(sizeArr[0]) - parseInt(sizeArr[1]);
                    var endBetween = '';
                    for(var i = 0; i < parseInt(this.table.size); i++){
                        endBetween += '9';
                    }
                    var output = [endBetween.slice(0, position), b, endBetween.slice(position)].join('');

        
                    return `between:0,${output}`;
                }  
                return `digits_between:1,${this.table.size}`;
            }
            return 'max:' + this.table.size;
        }
        return null;
    }

    laravel() {
        let attr = '';
        let rules = '';
        let fillable = '';
        return this.inputs.reduce(
            (prev, curr) => {
                this.setParams(curr);
                this.getValidator();
                fillable += `"${curr.table.columnName}",\n`;
                return {
                    rules: rules += this.rules,
                    attributes: attr += this.attributes,
                    fillable: `[${fillable}]`,
                    th: `<th>${curr.html.labelName}</th>`,
                    primaryKey: '',
                    table: ''
                };
            }
        , {});
    }

    isRequired(): string {
        return this.table.nullable ? 'required' : 'nullable';
    }

    getMessages(): string {
        return this.messages;
    }
}

@Injectable({
    providedIn: 'root'
})
export class Bootstrap {
    tableName: string = "i_table_mudar_aqui";
    pages: Array<Page>;
    inputs: Array<Content>;
    code: string = '';

    constructor(
        private renderHtmlService: RenderHtmlService
    ) {
    }

    init(): void {
        this.inputs = [];
        /*this.code   = this.pages.map((page, pageNumber) => {
            return `
            <section class="page-${pageNumber + 1}">
                ${page.rows.map(row => {
                    let grid = row.grid.split(' ');
                    return `
                    <div class="row">
                        ${row.columns.map((column, j) => {
                            return `
                                ${column.contents.map(content => {
                                    if (content.html.category === 'form') {
                                        this.inputs.push(content);
                                    }
                                    content.html['grid'] = grid[j];
                                    this.renderHtmlService.setParams(content);
                                    return this.renderHtmlService.get().code;
                                })}
                            `
                        }).join('')}  
                    </div>`
                }).join('')}
            </section>`
        }).join('');*/
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
                            //htmlPages.push(`${t}<div class="col-md-${grid[j]}">`);
                            column.contents.forEach(content => {
                                if (content.html.category === 'form') {
                                    this.inputs.push(content);
                                }
                                content.html['grid'] = grid[j];
                                this.renderHtmlService.setParams(content);
                                htmlPages.push(t + this.renderHtmlService.get().code);
                            });
                            //htmlPages.push(`${t}</div>`);
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

    table(): string{
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

    script(){
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
        columns: ${JSON.stringify(script, null, '\t')}
    });
    /*---------------------/Datatables-------------------------------*/
</script>        
        `;
    }

    getInputs() {
        return this.inputs;
    }

    setPages(pages) {
        this.pages = pages;
    }
}

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent implements OnInit {
    pages: Array<Page>;
    inputs: Array<Content>;
    tabNumber: number;
    tabMVC: number; 

    constructor(
        private b: Bootstrap,
        private validator: Validator,
		private homeService: HomeService
    ) {
    }

    ngOnInit() {
        this.tabNumber = 1;
        this.tabMVC = 1;
        this.pages = this.homeService.get();
    }

    get bootstrap() {
        this.b.setPages(this.pages);
        return this.b;
    }

    get laravel() {
        this.validator.setInputs(this.b.getInputs());
        return this.validator.laravel();
    }

    public isNewFile(newFile: boolean): void {
        if (newFile) {
            this.pages = [];
        }
    }

    public isNewPage(newPage: boolean): void {
        if (newPage) {
            this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });
        }
    }

    public getPages(pages): void {
        this.pages.push(pages);
    }
}

