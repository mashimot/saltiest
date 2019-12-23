import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormConfigService } from './../_services/form-config.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { BootstrapForm } from '../_services/render-html.service';
import { PageService } from '../shared/services/page.service';
import { ContentService } from '../shared/services/content.service';
import { RowService } from '../shared/services/row.service';
import { ColumnService } from '../shared/services/column.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-form-pages',
    templateUrl: './form-pages.component.html',
    styleUrls: ['./form-pages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPagesComponent implements OnInit {
    @Input() pages;
    @Output() pagesChange = new EventEmitter();
    config: {
        previewMode: boolean
    };
    project_id: number;
    subs = new Subscription();

    private dropModelPageUpdated = false;

    constructor(
        private formConfigService: FormConfigService,
        private dragulaService: DragulaService,
        private pageService: PageService,
        private cd: ChangeDetectorRef,
        private contentService: ContentService,
        private rowService: RowService,
        private columnService: ColumnService,
        private route: ActivatedRoute,
        private ngxLoader: NgxUiLoaderService
    ) {
   
        this.route.params.subscribe(result => {
            this.project_id = result.projectId;
        });
        
        dragulaService.createGroup('pages', {
            copy: (el, source) => {
                return source.className === 'menu-page-sortable';
            },
            copyItem: (el) => {
                return el;
                //console.log(el);
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return target.className !== 'menu-page-sortable';
            },
            moves: (el, container, handle) => {
                if (handle.classList) {
                    return handle.classList.contains('page-handle');
                }
                return false;
            }
        });

        dragulaService.createGroup('columns', {
            accepts: function(el, target, source, sibling) {
                let currRowIndex    = el.getAttribute('data-current-row-index');                
                let currPageIndex   = el.getAttribute('data-current-page-index');
                let currentClass = 'page-' + currPageIndex + '_row-' + currRowIndex;
                return target.classList.contains(currentClass);
            },            
            moves: (el, container, handle) => {
                //let currColumnIndex = handle.getAttribute('data-current-column-index');
                if (handle.classList) {
                    return handle.classList.contains('column-handle');
                }
                return false;
            }
        });

        this.subs.add(dragulaService.dropModel("columns")
            .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
                let currRowIndex    = el.getAttribute('data-current-row-index');
                let pageIndex       = el.getAttribute('data-current-page-index');
                let currRowId       = target.getAttribute('data-current-row-id');
                if(pageIndex != null && currRowIndex != null){
                    let gridArr = this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                    let aux     = gridArr[sourceIndex];
                    
                    gridArr.splice(sourceIndex, 1);
                    gridArr.splice(targetIndex, 0, aux);
                    let newGrid = gridArr.join(" ").trim();
                    this.pages[pageIndex].rows[currRowIndex].grid = newGrid;
                    const params = {
                        project_id: this.project_id,
                        page: {
                            currRowId: parseInt(currRowId)
                        },
                        newGrid: newGrid,
                        columnPos: targetModel.map(item => {
                            return item.id? item.id: null;
                        })
                    }
                    console.info('column sorted');
                    this.columnService.updateColumn(params.page.currRowId, params)
                    .subscribe(result => {
                        if(result.success){
                            this.loadFormBuilder();
                            this.dropModelPageUpdated = true;
                        }
                    });
                }   
            })
        );

        dragulaService.createGroup('rowSortable', {
            copy: (el, source) => {
                return source.className === 'menu-row-sortable';
            },
            copyItem: (el) => {
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function(el, target, source, sibling) {
                // To avoid draggin from right to left container
                if(target.className !== 'menu-row-sortable'){
                    return true;
                }
                return false;
            },
            moves: (el, container, handle) => {
                if (handle.classList) {
                    return handle.classList.contains('row-handle');
                }
                return false;
            }
        });

        this.subs.add(dragulaService.dropModel("rowSortable")
            .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
                const targetPageId  = target.getAttribute('data-current-page-id');
                const currRowId     = el.getAttribute('data-current-row-id');

                if(typeof item.grid != 'undefined' && typeof item.columns == 'undefined'){//gambiarra, mas funciona
                    //let rows = [];
                    let lines = item.grid.trim().split("\n");
                    delete item.grid;
                    let rows = lines.map(line => {
                        return line.replace(/\s+/g, ' ').trim();
                    })
                    .filter(line => line != '')
                    .map(line => {
                        let arrNumbers = line.split(' ');
                        if (arrNumbers.length > 0) {
                            let columns = [];
                            for (let j = 0; j < arrNumbers.length; j++) {
                                columns.push({
                                    contents: []
                                });
                            }
                            return {
                                grid: line,
                                columns: columns
                            };
                        }
                    });


                    for(var i = 0 ; i < targetModel.length; i++){
                        if(Object.keys(targetModel[i]).length <= 0){
                            targetModel.splice(i, 1);
                        }
                    }
                    const numSeparators = rows.length;
                    for (let i = 0; i < numSeparators; i++) {
                        targetModel.splice(targetIndex + (i), 0, rows[i]);
                    }
                    //API
                    const params = {
                        project_id: this.project_id,
                        page: {
                            targetPageId: parseInt(targetPageId)
                        },
                        rowsPos: targetModel.map(item => {
                            return item.id? item.id: null;
                        }),
                        rowTargetIndex: targetIndex,
                        rows: rows
                    };                
                    console.info('row sorted');
                    if(rows.length > 0){
                        this.rowService.storeRow(params)
                        .subscribe(result => {
                            if(result.success){
                                this.loadFormBuilder();
                                this.dropModelPageUpdated = true;
                            }
                        });
                    }
                } else {
                    const params = {
                        project_id: this.project_id,
                        page: {
                            currRowId: parseInt(currRowId),
                            targetPageId: parseInt(targetPageId)
                        },
                        rowPos: targetModel.map(item => {
                            return item.id? item.id: null;
                        })
                    };
                    this.rowService.updateRow(params.page.targetPageId, params)
                    .subscribe(result => {
                        if(result.success){
                            this.loadFormBuilder();
                            this.dropModelPageUpdated = true;
                        }
                    });
                }
                return item;                    
            })
        );
        
        dragulaService.createGroup('contents', {
            copy: (el, source) => {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: (el) => {
                console.log(el);
                return JSON.parse(JSON.stringify(el));
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return !target.classList.contains('menu-content-sortable');
            },
            moves: (el, container, handle) => {
                if (handle.classList) {
                    return handle.classList.contains('content-handle');
                }
                return false;
            }
        });

        this.subs.add(dragulaService.cloned("contents")
            .subscribe(({ name, clone, original, cloneType }) => {
                if (original.classList.contains('menu-content-sortable')) {
                    let currentDataAttr = JSON.parse(original.getAttribute('data-content'));
                    let r = new BootstrapForm(currentDataAttr);
                    //r.setParams(currentDataAttr);
                    clone.classList.remove('badge', 'bg-dark', 'col-md-6', 'bg-primary', 'text-white');
                    clone.innerHTML = '';
                    clone.insertAdjacentHTML('afterbegin',
                        '<div class="px-1 py-1 bg-white text-dark" style="min-width: 300px;">' + r.get() + '</div>'
                    );
                }
            })
        );
        
        this.subs.add(dragulaService.dropModel("contents")
            .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
                item.definition = item.definition || {};
                item.html = item.html || {};
                if (item.definition && item.html) {
                    const currRowId     = target.getAttribute('data-current-row-id');                
                    const currPageId    = target.getAttribute('data-current-page-id');
                    const currcolumnId  = target.getAttribute('data-current-column-id');      
                    if (
                        typeof item.definition.name === 'undefined' && item.html.category === 'form'
                    ) {
                        item.definition.name = 'name__' + new Date().getUTCMilliseconds();
                        //item.definition.options.leng = '';
                    }
                    const params = {
                        project_id: this.project_id,
                        page: {
                            currPageId: currPageId,
                            currRowId: currRowId,
                            currColumnId: currcolumnId    
                        },
                        contentPos: targetModel
                        .map(item => {
                            return item.id? item.id: null;
                        }),
                        html: item.html,
                        definition: item.definition
                    }; 
                    console.info('content sorted', params);
                    if(typeof item.id != 'undefined'){
                        params['id'] = item.id;
                    }
                    this.contentService.storeContent(params)
                    .subscribe(result => {
                        if(result.success){
                            this.loadFormBuilder();
                            this.dropModelPageUpdated = true;
                        }
                    });
                }
            })
        );
    }

    ngOnInit() {
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig()
        .subscribe(data => {
            this.config = {...data};
        });
    }
    

    ngAfterViewInit() {
        this.subs.add(this.dragulaService.dropModel("pages")
            .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
                const params = {
                    project_id: this.project_id,
                    pagesPos: targetModel.map(item => {
                        return item.id;
                    }),
                    pageTargetIndex: targetIndex,
                };    

                this.dropModelPageUpdated = true;
                /*this.pageService.updatePagesPosition(data.project_id, params)
                .subscribe(result => {
                    console.log(result);
                });*/
            })
        );
    }

    ngDoCheck() {    
        if (this.dropModelPageUpdated) { // this excutes if this.dropModelUpdated is true only
            this.pagesChange.emit(this.pages);
        }
    }

    ngOnDestroy() {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
        this.subs.unsubscribe();
    }

    public deletePage(pageIndex: number) {
        /*this.pageService.deletePage(page.id).subscribe(result => {
            if(result.success){
                this.pages.forEach((cV, index) => {
                    if(cV.id == page.id){
                        this.pages.splice(index, 1);
                    }
                });
                this.cd.markForCheck();
            }
        });*/
        //static
        this.pages.splice(pageIndex, 1);
    }

    loadFormBuilder(){
        this.ngxLoader.start();
        this.pageService.getPageByProjectId(this.project_id)
        .subscribe(result => { 
            if(result.success){
                this.pages = result.paginate.data;
            }
            this.ngxLoader.stop();
        });        
    }    
}
