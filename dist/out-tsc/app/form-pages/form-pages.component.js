var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
var FormPagesComponent = /** @class */ (function () {
    function FormPagesComponent(formConfigService, dragulaService, pageService, cd, contentService, rowService, columnService, route, ngxLoader) {
        var _this = this;
        this.formConfigService = formConfigService;
        this.dragulaService = dragulaService;
        this.pageService = pageService;
        this.cd = cd;
        this.contentService = contentService;
        this.rowService = rowService;
        this.columnService = columnService;
        this.route = route;
        this.ngxLoader = ngxLoader;
        this.pagesChange = new EventEmitter();
        this.subs = new Subscription();
        this.optionType = -1;
        this.objOptionType = {
            1: 'radio',
            2: 'checkbox',
            3: 'select'
        };
        this.options = [];
        this.dropModelPageUpdated = false;
        this.options = Object.values(this.objOptionType).map(function (item) {
            return item;
        }, []);
        this.route.params.subscribe(function (result) {
            _this.project_id = result.projectId;
        });
        dragulaService.createGroup('pages', {
            copy: function (el, source) {
                return source.className === 'menu-page-sortable';
            },
            copyItem: function (el) {
                return el;
                //console.log(el);
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.className !== 'menu-page-sortable';
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('page-handle');
                }
                return false;
            }
        });
        dragulaService.createGroup('columns', {
            accepts: function (el, target, source, sibling) {
                var currRowIndex = el.getAttribute('data-current-row-index');
                var currPageIndex = el.getAttribute('data-current-page-index');
                var currentClass = 'page-' + currPageIndex + '_row-' + currRowIndex;
                return target.classList.contains(currentClass);
            },
            moves: function (el, container, handle) {
                //let currColumnIndex = handle.getAttribute('data-current-column-index');
                if (handle.classList) {
                    return handle.classList.contains('column-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.dropModel("columns")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var currRowIndex = el.getAttribute('data-current-row-index');
            var pageIndex = el.getAttribute('data-current-page-index');
            var currRowId = target.getAttribute('data-current-row-id');
            if (pageIndex != null && currRowIndex != null) {
                var gridArr = _this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                var aux = gridArr[sourceIndex];
                gridArr.splice(sourceIndex, 1);
                gridArr.splice(targetIndex, 0, aux);
                var newGrid = gridArr.join(" ").trim();
                _this.pages[pageIndex].rows[currRowIndex].grid = newGrid;
                var data = {
                    project_id: _this.project_id,
                    page: {
                        currRowId: parseInt(currRowId)
                    },
                    newGrid: newGrid,
                    columnPos: targetModel.map(function (item) {
                        return item.id;
                    })
                };
                /*this.columnService.updateColumn(data.page.currRowId, data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
            }
        }));
        dragulaService.createGroup('rowSortable', {
            copy: function (el, source) {
                return source.className === 'menu-row-sortable';
            },
            copyItem: function (el) {
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid draggin from right to left container
                if (target.className !== 'menu-row-sortable') {
                    return true;
                }
                return false;
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('row-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.dropModel("rowSortable")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var targetPageId = target.getAttribute('data-current-page-id');
            var currRowId = el.getAttribute('data-current-row-id');
            if (typeof item.grid != 'undefined' && typeof item.columns == 'undefined') { //gambiarra, mas funciona
                var rows = [];
                var lines = item.grid.trim().split("\n");
                delete item.grid;
                for (var i_1 = 0; i_1 < lines.length; i_1++) {
                    var line = lines[i_1].replace(/\s+/g, ' ').trim();
                    if (line != '') {
                        var arrNumbers = line.split(' ');
                        if (arrNumbers.length > 0) {
                            rows.push({
                                grid: line,
                                columns: []
                            });
                            for (var j = 0; j < arrNumbers.length; j++) {
                                rows[rows.length - 1].columns.push({
                                    contents: []
                                });
                            }
                        }
                    }
                }
                for (var i = 0; i < targetModel.length; i++) {
                    if (Object.keys(targetModel[i]).length <= 0) {
                        targetModel.splice(i, 1);
                    }
                }
                var numSeparators = rows.length;
                for (var i_2 = 0; i_2 < numSeparators; i_2++) {
                    targetModel.splice(targetIndex + (i_2), 0, rows[i_2]);
                }
                /* API
                const data = {
                    project_id: this.project_id,
                    page: {
                        targetPageId: parseInt(targetPageId)
                    },
                    rowsPos: targetModel.map(item => {
                        return item.id;
                    }),
                    rowTargetIndex: targetIndex,
                    rows: rows
                };

                if(rows.length > 0){
                    this.rowService.storeRow(data)
                    .subscribe(result => {
                        if(result.success){
                            this.loadFormBuilder();
                            this.dropModelPageUpdated = true;
                        }
                    });
                }
            } else {
                const data = {
                    project_id: this.project_id,
                    page: {
                        currRowId: parseInt(currRowId),
                        targetPageId: parseInt(targetPageId)
                    },
                    rowPos: targetModel.map(item => {
                        return item.id;
                    })
                };
                this.rowService.updateRow(data.page.targetPageId, data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
            }
            return item;
        }));
        dragulaService.createGroup('contents', {
            copy: function (el, source) {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: function (el) {
                console.log(el);
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return !target.classList.contains('menu-content-sortable');
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('content-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.cloned("contents")
            .subscribe(function (_a) {
            var name = _a.name, clone = _a.clone, original = _a.original, cloneType = _a.cloneType;
            if (original.classList.contains('menu-content-sortable')) {
                var currentDataAttr = JSON.parse(original.getAttribute('data-content'));
                if (original.classList.contains('option-type-sortable')) {
                    var tag = currentDataAttr.html.tag;
                    if (_this.options.includes(tag)) {
                        var optionType = clone.getAttribute('data-option-type');
                        _this.optionType = parseInt(optionType);
                        currentDataAttr['html']['tag'] = _this.objOptionType[_this.optionType];
                    }
                }
                var r = new BootstrapForm(currentDataAttr);
                //r.setParams(currentDataAttr);
                clone.classList.remove('badge', 'bg-dark', 'col-md-6', 'bg-primary', 'text-white');
                clone.innerHTML = '';
                clone.insertAdjacentHTML('afterbegin', '<div class="px-1 py-1 bg-white text-dark" style="min-width: 300px;">' + r.get() + '</div>');
            }
        }));
        this.subs.add(dragulaService.dropModel("contents")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            item['table'] = {};
            console.log('item ->', item);
            if (item.table && item.html) {
                var currRowId = target.getAttribute('data-current-row-id');
                var currPageId = target.getAttribute('data-current-page-id');
                var currcolumnId = target.getAttribute('data-current-column-id');
                if (typeof item.table.columnName === 'undefined' && item.html.category === 'form') {
                    var tag = item.html.tag;
                    if (_this.options.includes(tag)) {
                        item.html.tag = _this.objOptionType[_this.optionType];
                    }
                    item.table.columnName = 'name__' + new Date().getUTCMilliseconds();
                    item.table.size = '';
                }
                var data = {
                    project_id: _this.project_id,
                    page: {
                        currPageId: currPageId,
                        currRowId: currRowId,
                        currColumnId: currcolumnId
                    },
                    contentPos: targetModel.map(function (item) {
                        return item.id;
                    }),
                    html: item.html,
                    table: item.table
                };
                if (typeof item.id != 'undefined') {
                    data['id'] = item.id;
                }
                /*this.contentService.storeContent(data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
            }
        }));
    }
    FormPagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig()
            .subscribe(function (data) {
            _this.config = __assign({}, data);
        });
    };
    FormPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.dropModel("pages")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var data = {
                project_id: _this.project_id,
                pagesPos: targetModel.map(function (item) {
                    return item.id;
                }),
                pageTargetIndex: targetIndex,
            };
            _this.dropModelPageUpdated = true;
            /*this.pageService.updatePagesPosition(data.project_id, data)
            .subscribe(result => {
                console.log(result);
            });*/
        }));
    };
    FormPagesComponent.prototype.ngDoCheck = function () {
        if (this.dropModelPageUpdated) { // this excutes if this.dropModelUpdated is true only
            this.pagesChange.emit(this.pages);
        }
    };
    FormPagesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
        this.subs.unsubscribe();
    };
    FormPagesComponent.prototype.deletePage = function (pageIndex) {
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
    };
    FormPagesComponent.prototype.loadFormBuilder = function () {
        var _this = this;
        this.ngxLoader.start();
        this.pageService.getPageByProjectId(this.project_id)
            .subscribe(function (result) {
            if (result.success) {
                _this.pages = result.data;
            }
            _this.ngxLoader.stop();
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormPagesComponent.prototype, "pages", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormPagesComponent.prototype, "pagesChange", void 0);
    FormPagesComponent = __decorate([
        Component({
            selector: 'app-form-pages',
            templateUrl: './form-pages.component.html',
            styleUrls: ['./form-pages.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [FormConfigService,
            DragulaService,
            PageService,
            ChangeDetectorRef,
            ContentService,
            RowService,
            ColumnService,
            ActivatedRoute,
            NgxUiLoaderService])
    ], FormPagesComponent);
    return FormPagesComponent;
}());
export { FormPagesComponent };
//# sourceMappingURL=form-pages.component.js.map