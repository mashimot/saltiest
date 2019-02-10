import { Component, OnInit, OnChanges, Input, Output, EventEmitter,  SimpleChanges } from '@angular/core';
import { FormConfigService } from './../services/form-config.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
//import { RenderHtmlService } from '../services/render-html.service';
import { BootstrapForm } from '../services/render-html.service';

@Component({
    selector: 'app-form-pages',
    templateUrl: './form-pages.component.html',
    styleUrls: ['./form-pages.component.css']   
})
export class FormPagesComponent implements OnInit {
    @Input() pages;
    @Output() pagesChange = new EventEmitter();
    config: {
        previewMode: boolean
    };
    subs = new Subscription();
    private dropModelPageUpdated = false;

    constructor(
        private formConfigService: FormConfigService,
        private dragulaService: DragulaService
    ) {
        dragulaService.createGroup('pages', {
            revertOnSpill: true,
            removeOnSpill: false,
            copy: (el, source) => {
                return source.className === 'menu-page-sortable';
            },
            copyItem: (el) => {
                return el;
                //console.log(el);
                //return JSON.parse(JSON.stringify(el));
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
                    let currPageIndex    = el.getAttribute('data-current-page-index');
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
                if(pageIndex != null && currRowIndex != null){
                    let gridArr = this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                    let aux     = gridArr[sourceIndex];
                    
                    gridArr.splice(sourceIndex, 1);
                    gridArr.splice(targetIndex, 0, aux);

                    this.pages[pageIndex].rows[currRowIndex].grid = gridArr.join(" ").trim();
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
                return target.className !== 'menu-row-sortable';
            },
            moves: (el, container, handle) => {
                if (handle.classList) {
                    return handle.classList.contains('row-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.dropModel("rowSortable")
            .subscribe(({ sourceModel, targetModel, item }) => {
                if (item.columns.length <= 0) {
                    let textWithoutExtraWhiteSpaces = item.grid.replace(/ +/g, ' ').trim();
                    let arrNumbers = textWithoutExtraWhiteSpaces.split(' ');
                    let columns = [];
                    if (arrNumbers.length > 0) {
                        for (let i = 0; i < arrNumbers.length; i++) {
                            columns.push({
                                contents: []
                            });
                        }
                        item.grid = textWithoutExtraWhiteSpaces;
                        item.columns = columns;
                    }
                    return item;
                }
            })
        );
        dragulaService.createGroup('contents', {
            copy: (el, source) => {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: (el) => {
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
                    let currentDataAttr = JSON.parse(clone.getAttribute('data-content'));
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
                if (item.table && item.html) {
                    if (
                        typeof item.table.columnName === 'undefined' && item.html.category === 'form'
                    ) {
                        item.table.columnName = 'name__' + new Date().getUTCMilliseconds();
                        item.table.size = '';
                    }
                }
            })
        );
    }

    ngOnInit() {
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig().subscribe(
            (data) => { this.config = data; }
        );
    }

    ngAfterViewInit() {
        this.subs.add(this.dragulaService.drop("pages")
            .subscribe((value) => {
                this.dropModelPageUpdated = true;
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
    }

    public deletePage(pageIndex) {
        this.pages.splice(pageIndex, 1);
    }
}
