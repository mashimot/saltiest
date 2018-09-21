import { Component, OnInit, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
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

class Validator {

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

    getLaravel() {
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

    isRequired(): string {
        return this.nullable ? 'required' : 'nullable';
    }

    getMessages(): string {
        return this.messages;
    }

    getRules(): string {
        return this.rules;
    }

    getAttributes() {
        return this.attributes;
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
    validator: string;

    constructor(private renderHtmlService: RenderHtmlService) {
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
    }

    ngOnInit() {
        this.pages = [];
    }

    public renderHtml(pages) {
        let validator = [];
        let fullHtml = pages.map((page, pageNumber) => {
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
                                validator.push(content);
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

        let attr = '';
        let rules = '';
        this.validator = validator.reduce(
            (prev, d) => {
                let v = new Validator();
                v.setParams(d);
                v.getLaravel();
                return {
                    rules: rules += v.getRules(),
                    attributes: attr += v.getAttributes()
                };
            }
        , '');
        return fullHtml;
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

