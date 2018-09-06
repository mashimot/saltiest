import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent implements OnInit {
    pages: Array<Page>;
    html: string = '';
    teste: boolean = false;
    constructor(private renderHtmlService: RenderHtmlService) {
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
    }

    ngOnInit() {
        //this.teste = true;
        this.pages = [
            {
                "rows": [
                    {
                        "grid": "6 6",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "label": "Type your Text",
                                            "category": "form",
                                            "tag": "radio",
                                            "elements": [
                                                {
                                                    "value": "Radio 1",
                                                    "text": "Radio 1"
                                                },
                                                {
                                                    "value": "Radio 2",
                                                    "text": "Radio 2"
                                                },
                                                {
                                                    "value": "Radio 3",
                                                    "text": "Radio 3"
                                                }
                                            ]
                                        },
                                        "table": {
                                            "columnName": "namejl5b1mxf"
                                        }
                                    }
                                ]
                            },
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "label": "Type your Text",
                                            "category": "form",
                                            "tag": "select",
                                            "elements": [
                                                {
                                                    "value": "Select 1",
                                                    "text": "Select 1"
                                                },
                                                {
                                                    "value": "Select 2",
                                                    "text": "Select 2"
                                                },
                                                {
                                                    "value": "Select 3",
                                                    "text": "Select 3"
                                                }
                                            ]
                                        },
                                        "table": {
                                            "columnName": "namejl5b1qm8"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "name": "Salt - A tool for Lazy Developer"
            }
        ];
    }

    public renderHtml(pages) {
        var fullHtml = '';
        if (pages.length > 0 && typeof pages !== undefined) {
            for (var k = 0; k < pages.length; k++) {
                var rowHtml = '';
                var rows = pages[k].rows;
                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var columns = row.columns;
                        var grid = row.grid.split(' ');
                        var columnHtml = '';
                        if (columns.length > 0) {
                            for (var j = 0; j < columns.length; j++) {
                                var column = columns[j];
                                var contents = column.contents;
                                var dataHtml = '';
                                if (contents.length > 0) {
                                    for (var m = 0; m < contents.length; m++) {
                                        var d = contents[m];
                                        this.renderHtmlService.setParams(d);
                                        dataHtml += "\n\t\t\t" + this.renderHtmlService.get();
                                    }
                                }
                                columnHtml += `\n\t\t<div class="col-md-${grid[j]}">${dataHtml}\n\t\t</div>`;
                            }
                        }
                        rowHtml += `\n\t<div class="row">${columnHtml}\n\t</div>`;
                    }
                }
                fullHtml += `\n<section class="page-${k + 1}">${rowHtml}\n</section>`;
            }
        }
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
