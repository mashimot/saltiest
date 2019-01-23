var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { RenderHtmlService } from '../services/render-html.service';
var Validator = /** @class */ (function () {
    function Validator() {
        this.inputs = [];
    }
    Validator.prototype.setParams = function (d) {
        if (d) {
            if (d.table) {
                this.name = typeof d.table.columnName === 'undefined' ? '' : d.table.columnName;
                this.nullable = typeof d.table.nullable === 'undefined' ? '' : d.table.nullable;
                this.size = typeof d.table.size === 'undefined' ? '' : d.table.size;
                this.dataType = typeof d.table.type === 'undefined' ? '' : d.table.type;
            }
            if (d.html) {
                this.labelName = typeof d.html.label === 'undefined' ? '' : d.html.label;
                this.htmlData = typeof d.html.data === 'undefined' ? '' : d.html.data;
                this.imgSrc = typeof d.html.src === 'undefined' ? '' : d.html.src;
                this.inputType = typeof d.html.tag === 'undefined' ? '' : d.html.tag;
                this.text = typeof d.html.text === 'undefined' ? '' : d.html.text;
                this.fields = typeof d.html.fields === 'undefined' ? [] : d.html.fields;
                this.elements = typeof d.html.elements === 'undefined' ? [] : d.html.elements;
            }
        }
    };
    Validator.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Validator.prototype.getValidator = function () {
        this.rules = "\t'" + this.name + "' => '" + this.isRequired() + this.getDataType() + this.getMaxlength() + "',\n";
        this.attributes = "\t'" + this.name + "' => '" + this.labelName + "',\n";
    };
    Validator.prototype.getDataType = function () {
        switch (this.dataType) {
            case 'number':
                return '|numeric';
            case 'date':
                return '|date_format:"d/m/Y"';
            default:
                return '';
        }
    };
    Validator.prototype.getMaxlength = function () {
        if (this.size > 0) {
            if (this.dataType === 'number') {
                return '|digits_between:1,' + this.size;
            }
            return '|max:' + this.size;
        }
        return '';
    };
    Validator.prototype.laravel = function () {
        var _this = this;
        var attr = '';
        var rules = '';
        var fillable = '';
        return this.inputs.reduce(function (prev, curr) {
            _this.setParams(curr);
            _this.getValidator();
            fillable += "\"" + curr.table.columnName + "\",\n";
            return {
                rules: rules += _this.rules,
                attributes: attr += _this.attributes,
                fillable: "[" + fillable + "]",
                th: "<th>" + curr.html.labelName + "</th>",
                primaryKey: '',
                table: ''
            };
        }, {});
    };
    Validator.prototype.isRequired = function () {
        return this.nullable ? 'required' : 'nullable';
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
        this.code = this.pages.map(function (page, pageNumber) {
            return "\n            <section class=\"page-" + (pageNumber + 1) + "\">\n                " + page.rows.map(function (row) {
                var grid = row.grid.split(' ');
                return "\n                    <div class=\"row\">\n                        " + row.columns.map(function (column, j) {
                    return "\n                            <div class=\"col-md-" + grid[j] + "\">\n                                " + column.contents.map(function (content) {
                        if (content.html.category === 'form') {
                            _this.inputs.push(content);
                        }
                        content.html['grid'] = grid[j];
                        _this.renderHtmlService.setParams(content);
                        return _this.renderHtmlService.get().code;
                    }) + "\n                            </div>";
                }).join('') + "  \n                    </div>";
            }).join('') + "\n            </section>";
        }).join('');
    };
    Bootstrap.prototype.html = function () {
        return this.code;
    };
    Bootstrap.prototype.table = function () {
        var th = this.inputs.map(function (item) {
            return "\n<th>" + item.html.label + "</th>";
        }, '').join('');
        return "\n        <table class=\"table table-striped\" id=\"" + this.tableName + "\">\n            <thead>\n                <tr>\n                " + th + "\n                <th class=\"td_justo no-sort text-right\">\n                {!! $HTML::iconeCriar(\n                    Auth::user()->can('admin.financeirodescontos.create'), \n                    '#', \n                    true, \n                    route('admin.financeirodescontos.store'))\n                !!}\n                </th>                \n                </tr>\n            </thead>\n        </table>\n        ";
    };
    Bootstrap.prototype.script = function () {
        var script = this.inputs.map(function (item) {
            return {
                data: item.table.columnName,
                name: item.table.columnName
            };
        }, []);
        script.push({
            'data': 'action',
            'name': 'name' /*,
            'className' : 'td_justo',
            'orderable' : false,
            'searchable' : false*/
        });
        console.log(script);
        return "\n<script>\n    /*---------------------Datatables--------------------------------*/\n    var table = $('#" + this.tableName + "').DataTable({\n        stateSave: true,\n        processing: true,\n        serverSide: true,\n        cache: true,\n        columns: " + JSON.stringify(script, null, '\t') + "\n    });\n    /*---------------------/Datatables-------------------------------*/\n</script>        \n        ";
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
    function FormBuilderComponent(b, validator) {
        this.b = b;
        this.validator = validator;
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FormBuilderComponent.prototype, "bootstrap", {
        get: function () {
            this.b.setPages(this.pages);
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "laravel", {
        get: function () {
            this.validator.setInputs(this.b.getInputs());
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
    FormBuilderComponent.prototype.isNewPage = function (newPage) {
        if (newPage) {
            this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });
        }
    };
    FormBuilderComponent.prototype.getPages = function (pages) {
        this.pages.push(pages);
    };
    FormBuilderComponent = __decorate([
        Component({
            selector: 'app-form-builder',
            templateUrl: './form-builder.component.html',
            styleUrls: ['./form-builder.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [Bootstrap,
            Validator])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=form-builder.component.js.map