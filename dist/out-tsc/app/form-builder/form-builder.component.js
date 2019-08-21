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
        this.inputs = [];
    }
    Laravel.prototype.setParams = function (d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    };
    Laravel.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Laravel.prototype.getValidator = function () {
        var rules = [];
        rules.push(this.isRequired(), this.getDataType(), this.getMaxlength());
        var rules = rules.filter(function (el) {
            return el != "" && el != null;
        });
        this.rules = "\t'" + this.table.columnName + "' => " + JSON.stringify(rules) + ",\n";
        this.attributes = "\t'" + this.table.columnName + "' => '" + this.html.label + "',\n";
    };
    Laravel.prototype.getDataType = function () {
        var basic = {
            number: ['numeric'],
            date: ['date_format:"d/m/Y"'],
            text: ['string'],
            textarea: ['string']
        };
        console.log(this.table.type);
        if (typeof basic[this.table.type] != 'undefined') {
            if (typeof this.table.size != 'undefined') {
                basic[this.table.type].push(this.joeys());
            }
            console.log(basic[this.table.type]);
            return basic[this.table.type];
        }
        return null;
    };
    Laravel.prototype.joeys = function () {
        if (this.table.size.indexOf('.') !== -1) {
            var sizeArr = this.table.size.split('.');
            var b = '.';
            var position = parseInt(sizeArr[0]) - parseInt(sizeArr[1]);
            var endBetween = '';
            for (var i = 0; i < parseInt(this.table.size); i++) {
                endBetween += '9';
            }
            var output = [endBetween.slice(0, position), b, endBetween.slice(position)].join('');
            return "between:0," + output; //decimal
        }
        return "digits_between:1," + this.table.size; //integer
    };
    Laravel.prototype.getMaxlength = function () {
        if (parseInt(this.table.size) > 0) {
            if (this.table.type == 'number') {
                if (this.table.size.indexOf('.') !== -1) {
                    var sizeArr = this.table.size.split('.');
                    var b = '.';
                    var position = parseInt(sizeArr[0]) - parseInt(sizeArr[1]);
                    var endBetween = '';
                    for (var i = 0; i < parseInt(this.table.size); i++) {
                        endBetween += '9';
                    }
                    var output = [endBetween.slice(0, position), b, endBetween.slice(position)].join('');
                    return "between:0," + output; //decimal
                }
                return "digits_between:1," + this.table.size; //
            }
            return 'max:' + this.table.size;
        }
        return null;
    };
    Laravel.prototype.validator = function () {
        var _this = this;
        var attr = '';
        var rules = '';
        var request = '';
        var fillable = [];
        var primaryKey = [];
        var hue = this.inputs.reduce(function (prev, curr) {
            _this.setParams(curr);
            _this.getDataType();
            if (curr.table.isPrimaryKey) {
                primaryKey.push("\"" + curr.table.columnName + "\"");
            }
            fillable.push(curr.table.columnName);
            request += "\"" + curr.table.columnName + "\" => $request->input('" + curr.table.columnName + "'),\n";
            return {
                rules: rules += _this.rules,
                attributes: attr += _this.attributes,
                fillable: JSON.stringify(fillable, null, "\t"),
                request: "[" + request + "]",
                th: "<th>" + curr.html.labelName + "</th>",
                primaryKey: primaryKey,
                table: ''
            };
        }, {});
        console.log(hue);
        return hue;
    };
    Laravel.prototype.isRequired = function () {
        return this.table.nullable ? 'required' : 'nullable';
    };
    Laravel.prototype.getMessages = function () {
        return this.messages;
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
        this.tableName = "i_table_mudar_aqui";
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
    Bootstrap.prototype.table = function () {
        if (typeof this.inputs != 'undefined' && this.inputs.length > 0) {
            var th = this.inputs.map(function (item) {
                return "\n<th>" + item.html.label + "</th>";
            }, '').join('');
            return "\n            <table class=\"table table-striped\" id=\"" + this.tableName + "\">\n                <thead>\n                    <tr>\n                    " + th + "\n                    <th class=\"td_justo no-sort text-right\">\n                    {!! $HTML::iconeCriar(\n                        Auth::user()->can('admin.financeirodescontos.create'), \n                        '#', \n                        true, \n                        route('admin.financeirodescontos.store'))\n                    !!}\n                    </th>                \n                    </tr>\n                </thead>\n            </table>\n            ";
        }
        return '';
    };
    Bootstrap.prototype.script = function () {
        if (typeof this.inputs != 'undefined' && this.inputs.length > 0) {
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
            return "\n    <script>\n        /*---------------------Datatables--------------------------------*/\n        var table = $('#" + this.tableName + "').DataTable({\n            stateSave: true,\n            processing: true,\n            serverSide: true,\n            cache: true,\n            ajax: \"\",\n            columns: " + JSON.stringify(script, null, '\t') + "\n        });        \n        /*---------------------/Datatables-------------------------------*/\n        /*---------------------CRUD IN MODAL-------------------------*/\n        modalCrudConstruct('modal_mudar_aqui','form_mudar_aqui');\n        /*---------------------/Create Edit Show-------------------------*/\n    \n        /*---------------------Validation-----------------------------------*/\n        $(document).on('click', '#i_btn_salvar_modal_mudar_aqui',function(){\n            validationForm('#form_mudar_aqui');\n        });\n        /*---------------------/Validation-------------------------*/            \n    </script>";
        }
        return '';
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
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        this.pages = this.homeService.getHomeStatic();
        /*this.pageService.getPageByProjectId(this.project_id)
        .subscribe(result => {
            if(result.success){
                this.pages = result.data;
            }
            this.ngxLoader.stop();
        });*/
    };
    FormBuilderComponent.prototype.ngAfterViewInit = function () {
    };
    FormBuilderComponent.prototype.save = function () {
        /*this.pageService.createPage({
            project_id: this.project_id,
            pages: this.pages
        })
        .subscribe(result => {
            if(result.success){
                this.loadFormBuilder();
            }
        });*/
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
        }
        return this.mvcList[tabNumber].isOpen;
    };
    Object.defineProperty(FormBuilderComponent.prototype, "validator", {
        get: function () {
            return this.laravel.validator();
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