import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { RenderHtmlService } from '../services/render-html.service';
import { HomeService } from "../shared/services/home.service";

import { Page } from "../shared/models/page.model";
import { Content } from "../shared/models/content.model";

@Injectable({
    providedIn: 'root'
})
export class Validator {

    inputs: any[];
    rules: string;
    attributes: string;
    messages: string;

    name?: string;
    nullable?: boolean;
    labelName: string;
    inputType: string;
    fields?: any[];
    htmlData?: string;
    imgSrc?: string;
    headingType?: string;
    text?: string;
    elements?: any[];
    size?: number;
    dataType?: string;

    constructor() { 
        this.inputs = [];
    }

    setParams(d) {
        if (d) {
            if (d.table) {
                this.name = typeof d.table.columnName === 'undefined' ? '' : d.table.columnName;
                this.nullable = typeof d.table.nullable === 'undefined' ? '' : d.table.nullable;
                this.size = typeof d.table.size === 'undefined' ? '' : d.table.size;
                this.dataType = typeof d.table.type === 'undefined' ? '' : d.table.type;
            }
            if (d.html) {
                this.labelName = typeof d.html.label === 'undefined' ? '' : d.html.label;
                this.htmlData = typeof d.html.data === 'undefined' ? '' : d.html.data;
                this.imgSrc = typeof d.html.src === 'undefined' ? '' : d.html.src;
                this.inputType = typeof d.html.tag === 'undefined' ? '' : d.html.tag;
                this.text = typeof d.html.text === 'undefined' ? '' : d.html.text;
                this.fields = typeof d.html.fields === 'undefined' ? [] : d.html.fields;
                this.elements = typeof d.html.elements === 'undefined' ? [] : d.html.elements;
            }
        }
    }

    setInputs(inputs) {
        this.inputs = inputs;
    }

    getValidator() {
        this.rules = `\t'${this.name}' => '${this.isRequired()}${this.getDataType()}${this.getMaxlength()}',\n`;
        this.attributes = `\t'${this.name}' => '${this.labelName}',\n`;
    }

    getDataType(): string {
        switch (this.dataType) {
            case 'number':
                return '|numeric';
            case 'date':
                return '|date_format:"d/m/Y"';
            default:
                return '';
        }
    }

    getMaxlength(): string {
        if (this.size > 0) {             
            if (this.dataType === 'number') {
                return '|digits_between:1,' + this.size;
            }
            return '|max:' + this.size;
        }
        return '';
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
        return this.nullable ? 'required' : 'nullable';
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

    constructor(private renderHtmlService: RenderHtmlService) {
    }

    init() {
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
        this.pages.forEach((page, pageNumber) => {
            htmlPages.push(`<section class="page-${pageNumber + 1}">`);
               page.rows.forEach(row => {
                    let grid = row.grid.split(' ');
                    htmlPages.push(`<div class="row">`);
                        row.columns.map((column, j) => {
                            htmlPages.push(`<div class="col-md-${grid[j]}">`);
                            column.contents.map(content => {
                                if (content.html.category === 'form') {
                                    this.inputs.push(content);
                                }
                                content.html['grid'] = grid[j];
                                this.renderHtmlService.setParams(content);
                                htmlPages.push(this.renderHtmlService.get().html);
                            });
                            htmlPages.push(`</div>`);
                        });
                    htmlPages.push(`</div>`);
                });
            htmlPages.push(`</section>`);
        });
        this.code = htmlPages.join("");
    }

    html(){
        return this.code;
    }

    table(){
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

