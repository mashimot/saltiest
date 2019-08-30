var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from '@angular/core';
import { RenderHtmlService } from '../_services/render-html.service';
import { HomeService } from "../shared/services/home.service";
import { Html } from "../_core/model/html.model";
import { Table } from "../_core/model/table.model";
import { FormConfigService } from '../_services/form-config.service';
import { PageService } from '../shared/services/page.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/services/project.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
var Laravel = /** @class */ (function () {
    function Laravel() {
        this.tableName = '';
        this.inputs = [];
    }
    Laravel.prototype.setParams = function (d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    };
    Laravel.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Laravel.prototype.getRules = function () {
        var basic = {
            number: ['nullable', 'numeric'],
            date: ['nullable', 'date_format:"d/m/Y"'],
            text: ['nullable', 'string'],
            textarea: ['nullable', 'string']
        };
        var tag = this.html.tag.toLowerCase();
        if (typeof basic[tag] != 'undefined') {
            basic[tag][0] = this.isRequired();
            basic[tag].push(this.size());
            var newBasic = basic[tag].filter(function (el) {
                return el != "" && el != null;
            });
            return ["\"" + this.table.columnName + "\" => " + JSON.stringify(newBasic)].join(",");
        }
        return [this.table.columnName + " => " + JSON.stringify(basic[tag])].join(",");
    };
    Laravel.prototype.size = function () {
        if (typeof this.table.size != 'undefined') {
            var size = this.table.size;
            if (size != null && size != '') {
                var list = {
                    number: "digits_between:1," + size,
                    date: 'max:' + size,
                    text: 'max:' + size,
                    textarea: 'max:' + size,
                };
                return list[this.html.tag];
            }
        }
        return null;
    };
    Laravel.prototype.blanka = function () {
        var _this = this;
        var fillable = [], primaryKey = [], rules = [], attributes = [], request = [];
        if (this.inputs.length > 0) {
            this.inputs.forEach(function (curr) {
                _this.setParams(curr);
                if (curr.table.isPrimaryKey) {
                    primaryKey.push("\"" + curr.table.columnName + "\"");
                }
                fillable.push(curr.table.columnName);
                request.push("\"" + curr.table.columnName + "\" => $request->input('" + curr.table.columnName + "')");
                attributes.push("\t'" + _this.table.columnName + "' => '" + _this.html.label + "'");
                rules.push(_this.getRules());
            });
        }
        return {
            model: {
                fillable: JSON.stringify(fillable, null, "\t"),
                primaryKey: primaryKey
            },
            view: {
                table: this.htmlTable(),
                script: this.htmlScript()
            },
            controller: {
                request: "[" + request.join(",\n") + "]"
            },
            validator: {
                rules: "[\n" + rules.join(",\n") + "\n]",
                attributes: attributes.join(",\n")
            }
        };
    };
    Laravel.prototype.isRequired = function () {
        return this.table.nullable ? 'required' : 'nullable';
    };
    Laravel.prototype.setTableName = function (tableName) {
        this.tableName = tableName;
    };
    Laravel.prototype.getMessages = function () {
        return this.messages;
    };
    Laravel.prototype.htmlTable = function () {
        if (this.inputs.length > 0) {
            var th = this.inputs.map(function (item) {
                return "\n<th>" + item.html.label + "</th>";
            }, '').join('');
            return "\n            <table class=\"table table-striped\" id=\"" + this.tableName + "\">\n                <thead>\n                    <tr>\n                    " + th + "\n                    <th class=\"td_justo no-sort text-right\">\n                    {!! $HTML::iconeCriar(\n                        Auth::user()->can('admin.financeirodescontos.create'), \n                        '#', \n                        true, \n                        route('admin.financeirodescontos.store'))\n                    !!}\n                    </th>                \n                    </tr>\n                </thead>\n            </table>\n            ";
        }
        return '';
    };
    Laravel.prototype.htmlScript = function () {
        if (this.inputs.length > 0) {
            var script = this.inputs.map(function (item) {
                return {
                    data: item.table.columnName,
                    name: item.table.columnName
                };
            }, []);
            script.push({
                'data': 'action',
                'name': 'name'
            });
            return "\n            <script>\n                /*---------------------Datatables--------------------------------*/\n                var table = $('#" + this.tableName + "').DataTable({\n                    stateSave: true,\n                    processing: true,\n                    serverSide: true,\n                    cache: true,\n                    ajax: \"\",\n                    columns: " + JSON.stringify(script, null, '\t') + "\n                });        \n                /*---------------------/Datatables-------------------------------*/\n                /*---------------------CRUD IN MODAL-------------------------*/\n                modalCrudConstruct('modal_mudar_aqui','form_mudar_aqui');\n                /*---------------------/Create Edit Show-------------------------*/\n\n                /*---------------------Validation-----------------------------------*/\n                $(document).on('click', '#i_btn_salvar_modal_mudar_aqui',function(){\n                    validationForm('#form_mudar_aqui');\n                });\n                /*---------------------/Validation-------------------------*/            \n            </script>";
        }
        return '';
    };
    Laravel = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Laravel);
    return Laravel;
}());
export { Laravel };
var Bootstrap = /** @class */ (function () {
    function Bootstrap(renderHtmlService) {
        this.renderHtmlService = renderHtmlService;
        this.code = '';
    }
    Bootstrap.prototype.init = function () {
        var _this = this;
        this.inputs = [];
        var htmlPages = [];
        var t = "\n\t";
        this.pages.forEach(function (page, pageNumber) {
            htmlPages.push("\n<section class=\"page-" + (pageNumber + 1) + "\">");
            var tabNum = 1;
            t = _this.tabSpace(tabNum);
            page.rows.forEach(function (row) {
                var grid = row.grid.split(' ');
                htmlPages.push(t + "<div class=\"row\">");
                tabNum++;
                t = _this.tabSpace(tabNum);
                row.columns.forEach(function (column, j) {
                    htmlPages.push(t + "<div class=\"col-md-" + grid[j] + "\">");
                    column.contents.forEach(function (content) {
                        if (content.html.category === 'form') {
                            _this.inputs.push(content);
                        }
                        content.html['grid'] = grid[j];
                        _this.renderHtmlService.setParams(content);
                        htmlPages.push(t + _this.renderHtmlService.get().code);
                    });
                    htmlPages.push(t + "</div>");
                });
                tabNum--;
                t = _this.tabSpace(tabNum);
                htmlPages.push(t + "</div>");
            });
            htmlPages.push("</section>");
        });
        this.code = htmlPages.join("\n");
    };
    Bootstrap.prototype.tabSpace = function (tabNum) {
        var tab = "\t";
        var newTab = "";
        for (var i = 0; i < tabNum; i++) {
            newTab += tab;
        }
        return newTab;
    };
    Bootstrap.prototype.html = function () {
        return this.code;
    };
    Bootstrap.prototype.getInputs = function () {
        return this.inputs;
    };
    Bootstrap.prototype.setPages = function (pages) {
        this.pages = pages;
    };
    Bootstrap = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [RenderHtmlService])
    ], Bootstrap);
    return Bootstrap;
}());
export { Bootstrap };
var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(formConfigService, bootstrap, laravel, projectService, homeService, pageService, route, ngxLoader) {
        this.formConfigService = formConfigService;
        this.bootstrap = bootstrap;
        this.laravel = laravel;
        this.projectService = projectService;
        this.homeService = homeService;
        this.pageService = pageService;
        this.route = route;
        this.ngxLoader = ngxLoader;
        this.tableName = '';
        this.isTabAlreadyOpen = false;
        this.previewMode = false;
        this.mvcList = [{
                isOpen: false,
                name: 'Model'
            }, {
                isOpen: false,
                name: 'View'
            }, {
                isOpen: false,
                name: 'Controller'
            }, {
                isOpen: false,
                name: 'Validation'
            }];
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = [];
        this.result = {
            data: []
        };
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        //this.pages = this.homeService.getHomeStatic();
        this.route.params.subscribe(function (r) {
            _this.project_id = r.projectId;
        });
        this.tabMVC = 1;
        this.tabNumber = 1;
        this.previewMode = false;
        this.preview();
        this.config = {
            previewMode: this.previewMode
        };
        this.loadFormBuilder();
    };
    FormBuilderComponent.prototype.loadFormBuilder = function () {
        this.pages = this.homeService.getHomeStatic();
        this.result = {
            data: [
                this.pages
            ]
        };
        console.log(this.result.data[0]);
        /*this.pageService.getPageByProjectId(this.project_id)
        .subscribe(r => {
            if(r.success){
                this.pages = r.result.data[0];
                this.result = r.result;
            }
            this.ngxLoader.stop();
        });*/
    };
    FormBuilderComponent.prototype.pageNext = function () {
        var _this = this;
        this.pageService.getPageByUrl(this.result.next_page_url)
            .subscribe(function (r) {
            console.log(r);
            if (r.success) {
                console.log(r.current_page);
                _this.pages = r.result.data[0];
                _this.result = r.result;
            }
            _this.ngxLoader.stop();
        });
    };
    FormBuilderComponent.prototype.pagePrevious = function () {
        var _this = this;
        this.pageService.getPageByUrl(this.result.prev_page_url)
            .subscribe(function (r) {
            console.log(r);
            if (r.success) {
                console.log(r.current_page);
                _this.pages = r.result.data[0];
                _this.result = r.result;
            }
            _this.ngxLoader.stop();
        });
    };
    FormBuilderComponent.prototype.ngAfterViewInit = function () {
    };
    FormBuilderComponent.prototype.save = function () {
        var _this = this;
        this.pageService.createPage({
            project_id: this.project_id,
            pages: this.pages
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.loadFormBuilder();
            }
        });
    };
    FormBuilderComponent.prototype.preview = function () {
        //this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    };
    FormBuilderComponent.prototype.isTabMvcOpen = function (tabNumber) {
        if (this.mvcList[tabNumber].isOpen) {
            this.bootstrap.setPages(this.pages);
            this.bootstrap.init();
            this.laravel.setInputs(this.bootstrap.getInputs());
            this.laravel.setTableName(this.tableName);
        }
        return this.mvcList[tabNumber].isOpen;
    };
    Object.defineProperty(FormBuilderComponent.prototype, "validator", {
        get: function () {
            return this.laravel.blanka().validator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "model", {
        get: function () {
            return this.laravel.blanka().model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "view", {
        get: function () {
            return this.laravel.blanka().view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "controller", {
        get: function () {
            return this.laravel.blanka().controller;
        },
        enumerable: true,
        configurable: true
    });
    FormBuilderComponent.prototype.removeDoubleQuotes = function (word) {
        if (typeof word != 'undefined')
            return word.replace(/\"/g, "");
        return '';
    };
    FormBuilderComponent.prototype.isNewPage = function (newPage) {
        if (newPage) {
            /*this.pageService.createPage({
                project_id: this.project_id,
                name: `Page ${this.pages.length}`
            })
            .subscribe(result => {
                if(result.success){
                    this.pages = result.data;
                }
            });*/
            this.pages = this.pages.concat([{
                    name: 'Page ' + (this.pages.length + 1),
                    rows: []
                }]);
            /*this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });*/
        }
    };
    FormBuilderComponent.prototype.getPages = function (pages) {
        this.pages = this.pages.concat([pages]);
        //this.pages.push(pages);
    };
    FormBuilderComponent = __decorate([
        Component({
            selector: 'app-form-builder',
            templateUrl: './form-builder.component.html',
            styleUrls: ['./form-builder.component.css'],
        }),
        __metadata("design:paramtypes", [FormConfigService,
            Bootstrap,
            Laravel,
            ProjectService,
            HomeService,
            PageService,
            ActivatedRoute,
            NgxUiLoaderService])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=form-builder.component.js.map