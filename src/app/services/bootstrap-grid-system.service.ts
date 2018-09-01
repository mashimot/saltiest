import { Injectable } from '@angular/core';
interface Html {
    category: string;
    tag: string;
    label?: string;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

interface Table {
    columnName?: string;
    isPrimaryKey?: boolean;
    type: string;
    nullable: boolean;
    size: string;
}

interface Content {
    html: Html;
    table?: Table; //optional
}

interface Column {
    contents: Array<Content>
}

interface Row {
    grid: string;
    columns: Array<Column>
}

interface Page {
    name: string;
    rows: Array<Row>;
}

@Injectable({
    providedIn: 'root'
})
export class BootstrapGridSystemService {
    _data: any[];
    _grid: string;
    _page: Page;

    constructor(data?: any[], grid: string = '4 4 4') {
        this._data = data;
        this._grid = grid;
        //this._page = [];
    }
  
    getGrid() {
        return [{
          grid: '6 6',
          columns: []
        },{
            grid: '4 4 4',
            columns: []
        }, {
            grid: '3 3 3 3',
            columns: []
        }, {
            grid: '2 2 4 2 2',
            columns: []
        }, {
            grid: '12',
            columns: []
        }];
    }
    convert() {
        let groups = [];
        let grid = this._grid.replace(/ +/g, ' ').trim();
        let arrGrid = grid.split(' ');

        let chunkSize = arrGrid.length;
        let page = {
            rows: [],
            name: 'Page 1'
        };

        for (let i = 0; i < this._data.length; i += chunkSize) {
            groups.push(this._data.slice(i, i + chunkSize));
        }
        let count = -1;
        this._page = groups.reduce(function (acc, group, index) {
            page.rows.push({
                grid: grid,
                columns: []
            });
            group.map(function (data, i) {
                count++;
                return page.rows[index].columns.push({
                    contents: [data]
                });
            }, 0);
            return page;
        }, 0);

        let lastRow = this._page.rows.length;
        let columns = this._page.rows[lastRow - 1].columns;
        if (columns.length < chunkSize) {
            for (let k = columns.length; k < chunkSize; k++) {
                this._page.rows[lastRow - 1].columns.push({
                    contents: []
                });
            }
        }
    }
    getPage() {
        return this._page;
    }
}
