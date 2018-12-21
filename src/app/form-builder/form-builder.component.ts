import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { RenderHtmlService } from '../services/render-html.service';

interface Html {
    category?: string;
    tag: string;
    label?: string;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

interface Table {
    columnName?: string;
    isPrimaryKey?: boolean;
    type?: string;
    nullable?: boolean;
    size?: string;
}

interface Content {
    html?: Html;
    table?: Table; //optional
}

interface Column {
    contents?: Array<Content>
}

interface Row {
    grid?: string;
    columns?: Array<Column>
}

interface Page {
    name: string;
    rows?: Array<Row>;
}

@Injectable({
    providedIn: 'root'
})
export class Laravel {

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

    constructor() { }

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

    wrapHtml(html) {
        return `
    @extends('Admin.layouts.app')

    @section('breadcrumb')
        <li>Caminho</li>
        <li>de</li>
        <li>pão</li>
        <li>{{$titulo}}</li>
    @stop

    @section('pagina_conteudo')
    <div class="col-lg-12">
        <div class="wrapper wrapper-content tooltip-demo">
            <div class="ibox">
                <div class="ibox-content">
                    <form id="form" class="form" role="form"  
                        @if($acao == 'create')
                            action="{{ '' }}" method="post">
                        @elseif($acao == 'edit')
                            action="{{ '' }}" method="post">
                            {{ method_field('put') }}
                        @else
                            action="" method="">
                        @endif
                            {{ csrf_field() }}
                            ${html}
                    </form>
                </div>
            </div>      
        </div>
    </div>
    @stop

    @section('bibliotecascript')
        @include('bibliotecas.js.formulario')  
    @endsection`;
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

    getLaravel() {
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
    pages: Array<Page>;
    inputs: Array<Content>;

    constructor(private renderHtmlService: RenderHtmlService) {
    }

    bootstrap() {
        this.inputs = [];
        return this.pages.map((page, pageNumber) => {
            return `
            <section class="page-${pageNumber + 1}">
                ${page.rows.map(row => {
                    let grid = row.grid.split(' ');
                    return `
                    <div class="row">
                        ${row.columns.map((column, j) => {
                            return `
                            <div class="col-md-${grid[j]}">
                                ${column.contents.map(content => {
                                    if (content.html.category === 'form') {
                                        this.inputs.push(content);
                                    }
                                    this.renderHtmlService.setParams(content);
                                    return this.renderHtmlService.get()
                                })}
                            </div>`
                        }).join('')}  
                    </div>`
                }).join('')}
            </section>`
        }).join('');
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
    validator: { rules: string, attributes: string, fillable: string };

    constructor(
        private b: Bootstrap,
        private l: Laravel
    ) {
    }

    ngOnInit() {
    }

    get bootstrap() {
        this.b.setPages(this.pages);
        //return this.l.wrapHtml(this.b.bootstrap());
        return this.b.bootstrap();
    }

    get laravel() {
        this.l.setInputs(this.b.getInputs());
        return this.l.getLaravel();
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

