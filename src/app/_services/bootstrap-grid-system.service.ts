import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Page } from "./../_core/model";

@Injectable()
export class BootstrapGridSystemService {
    _data: any[];
    _grid: string;
    _page: Page;

    constructor(data?: any[], grid: string = '4 4 4') {
        this._data = data;
        this._grid = grid;
    }
  
    getGrid() {
        return of(
            [{
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
            }]
        );
    }
    
    convert() {
        let groups = [];
        let grid = this._grid.replace(/ +/g, ' ').trim();
        let arrGrid = grid.split(' ');

        let chunkSize = arrGrid.length;

        for (let i = 0; i < this._data.length; i += chunkSize) {
            groups.push(this._data.slice(i, i + chunkSize));
        }

        this._page = groups.reduce((page, group, index) => {
            if(!page.rows){
                page = {
                    rows: [],
                    name: 'Page ' + (index + 1)
                }
            }
            page.rows.push({
                grid: grid,
                columns: []
            });
            group.map(data => {
                return page.rows[index].columns.push({
                    contents: [data]
                });
            });
            return page;
        }, []);

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
