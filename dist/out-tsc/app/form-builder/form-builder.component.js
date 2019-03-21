var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { RenderHtmlService } from '../services/render-html.service';
import { HomeService } from "../shared/services/home.service";
import { Html } from "../shared/models/html.model";
import { Table } from "../shared/models/table.model";
import { FormConfigService } from '../services/form-config.service';
var Validator = /** @class */ (function () {
    function Validator() {
        this.inputs = [];
    }
    Validator.prototype.setParams = function (d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    };
    Validator.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Validator.prototype.getValidator = function () {
        var rules = [];
        rules.push(this.isRequired(), this.getDataType(), this.getMaxlength());
        var rules = rules.filter(function (el) {
            return el != "" && el != null;
        });
        this.rules = "\t'" + this.table.columnName + "' => " + JSON.stringify(rules) + ",\n";
        this.attributes = "\t'" + this.table.columnName + "' => '" + this.html.label + "',\n";
    };
    Validator.prototype.getDataType = function () {
        switch (this.table.type) {
            case 'number':
                return 'numeric';
            case 'date':
                return 'date_format:"d/m/Y"';
            default:
                return null;
        }
    };
    Validator.prototype.getMaxlength = function () {
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
                    return "between:0," + output;
                }
                return "digits_between:1," + this.table.size;
            }
            return 'max:' + this.table.size;
        }
        return null;
    };
    Validator.prototype.laravel = function () {
        var _this = this;
        var attr = '';
        var rules = '';
        var request = '';
        var update = '';
        var fillable = [];
        var primaryKey = [];
        var hue = this.inputs.reduce(function (prev, curr) {
            _this.setParams(curr);
            _this.getValidator();
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
        return hue;
    };
    Validator.prototype.isRequired = function () {
        return this.table.nullable ? 'required' : 'nullable';
    };
    Validator.prototype.getMessages = function () {
        return this.messages;
    };
    Validator = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Validator);
    return Validator;
}());
export { Validator };
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
                    //htmlPages.push(`${t}<div class="col-md-${grid[j]}">`);
                    column.contents.forEach(function (content) {
                        if (content.html.category === 'form') {
                            _this.inputs.push(content);
                        }
                        content.html['grid'] = grid[j];
                        _this.renderHtmlService.setParams(content);
                        htmlPages.push(t + _this.renderHtmlService.get().code);
                    });
                    //htmlPages.push(`${t}</div>`);
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
    function FormBuilderComponent(formConfigService, bootstrap, validator, homeService) {
        this.formConfigService = formConfigService;
        this.bootstrap = bootstrap;
        this.validator = validator;
        this.homeService = homeService;
        this.tableName = '';
        this.isTabAlreadyOpen = false;
        this.count = 0;
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
        this.tabNumber = 1;
        this.tabMVC = 1;
        this.pages = this.homeService.get();
        this.config = {
            previewMode: this.previewMode
        };
    };
    FormBuilderComponent.prototype.preview = function () {
        this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    };
    FormBuilderComponent.prototype.isTabMvcOpen = function (tabNumber) {
        if (this.mvcList[tabNumber].isOpen) {
            this.bootstrap.setPages(this.pages);
            this.bootstrap.init();
            this.validator.setInputs(this.bootstrap.getInputs());
        }
        return this.mvcList[tabNumber].isOpen;
    };
    Object.defineProperty(FormBuilderComponent.prototype, "laravel", {
        get: function () {
            return this.validator.laravel();
        },
        enumerable: true,
        configurable: true
    });
    FormBuilderComponent.prototype.isNewFile = function (newFile) {
        if (newFile) {
            this.pages = [];
        }
    };
    FormBuilderComponent.prototype.removeDoubleQuotes = function (word) {
        if (typeof word != 'undefined')
            return word.replace(/\"/g, "");
        return '';
    };
    FormBuilderComponent.prototype.isNewPage = function (newPage) {
        if (newPage) {
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
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [FormConfigService,
            Bootstrap,
            Validator,
            HomeService])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=form-builder.component.js.map