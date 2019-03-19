var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormConfigService } from './../services/form-config.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
//import { RenderHtmlService } from '../services/render-html.service';
import { BootstrapForm } from '../services/render-html.service';
var FormPagesComponent = /** @class */ (function () {
    function FormPagesComponent(formConfigService, dragulaService) {
        var _this = this;
        this.formConfigService = formConfigService;
        this.dragulaService = dragulaService;
        this.pagesChange = new EventEmitter();
        this.subs = new Subscription();
        this.dropModelPageUpdated = false;
        dragulaService.createGroup('pages', {
            revertOnSpill: true,
            removeOnSpill: false,
            copy: function (el, source) {
                return source.className === 'menu-page-sortable';
            },
            copyItem: function (el) {
                return el;
                //console.log(el);
                //return JSON.parse(JSON.stringify(el));
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
            if (pageIndex != null && currRowIndex != null) {
                var gridArr = _this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                var aux = gridArr[sourceIndex];
                gridArr.splice(sourceIndex, 1);
                gridArr.splice(targetIndex, 0, aux);
                _this.pages[pageIndex].rows[currRowIndex].grid = gridArr.join(" ").trim();
            }
        }));
        dragulaService.createGroup('rowSortable', {
            revertOnSpill: true,
            copy: function (el, source) {
                return source.className === 'menu-row-sortable';
            },
            copyItem: function (el) {
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid draggin from right to left container
                return target.className !== 'menu-row-sortable';
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
            }
            return item;
        }));
        dragulaService.createGroup('contents', {
            copy: function (el, source) {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: function (el) {
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
                var currentDataAttr = JSON.parse(clone.getAttribute('data-content'));
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
            if (item.table && item.html) {
                if (typeof item.table.columnName === 'undefined' && item.html.category === 'form') {
                    item.table.columnName = 'name__' + new Date().getUTCMilliseconds();
                    item.table.size = '';
                }
            }
        }));
        this.dragulaService.find('rowSortable').drake.cancel(true);
    }
    FormPagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig().subscribe(function (data) { _this.config = data; });
    };
    FormPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.drop("pages")
            .subscribe(function (value) {
            _this.dropModelPageUpdated = true;
        }));
    };
    FormPagesComponent.prototype.trackByFn = function (index, item) {
        console.log(index);
        return index;
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
    };
    FormPagesComponent.prototype.deletePage = function (pageIndex) {
        this.pages.splice(pageIndex, 1);
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
            styleUrls: ['./form-pages.component.css']
        }),
        __metadata("design:paramtypes", [FormConfigService,
            DragulaService])
    ], FormPagesComponent);
    return FormPagesComponent;
}());
export { FormPagesComponent };
//# sourceMappingURL=form-pages.component.js.map