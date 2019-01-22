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
var Laravel = /** @class */ (function () {
    function Laravel() {
    }
    Laravel.prototype.setParams = function (d) {
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
    Laravel.prototype.wrapHtml = function (html) {
        return "\n    @extends('Admin.layouts.app_index')\n\n    @section('css')\n    @endsection\n    \n    @section('breadcrumb-manual')\n    <li>Financeiro</li>\n    <li>{{ $objetoPagina->nom_objeto }}</li>\n    @endsection\n    \n    @section('pagina_header')\n    @endsection\n    \n    @section('pagina_conteudo')\n    <table class=\"table table-striped\" id=\"i_table_mudar_aqui\">\n        <thead>\n            <tr>  \n                <th class=\"td_justo no-sort text-right\">\n                {!! $HTML::iconeCriar(\n                    Auth::user()->can('admin.financeirodescontos.create'), \n                    '#', \n                    true, \n                    route('admin.financeirodescontos.store'))\n                !!}\n                </th>\n            </tr>\n        </thead>\n    </table>\n\n    <!-- MODAL CRUD -->\n    {!! $HTML::modalOpen('crud_mudar_aqui', 'Adicionar') !!}\n        {!! $HTML::formOpen('form_mudar_aqui', $acao) !!}  \n            " + html + "\n        {!! $HTML::formClose() !!}\n    {!! $HTML::modalClose(true, $HTML::modalBotoesSalvar('mudar_aqui')) !!}\n    @endsection\n\n    @section('bibliotecascript')\n        @include('bibliotecas.js.scripts.modalCrud')\n    @endsection\n\n    @section('script')\n\n    @endsection";
    };
    Laravel.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Laravel.prototype.getValidator = function () {
        this.rules = "\t'" + this.name + "' => '" + this.isRequired() + this.getDataType() + this.getMaxlength() + "',\n";
        this.attributes = "\t'" + this.name + "' => '" + this.labelName + "',\n";
    };
    Laravel.prototype.getDataType = function () {
        switch (this.dataType) {
            case 'number':
                return '|numeric';
            case 'date':
                return '|date_format:"d/m/Y"';
            default:
                return '';
        }
    };
    Laravel.prototype.getMaxlength = function () {
        if (this.size > 0) {
            if (this.dataType === 'number') {
                return '|digits_between:1,' + this.size;
            }
            return '|max:' + this.size;
        }
        return '';
    };
    Laravel.prototype.getLaravel = function () {
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
    Laravel.prototype.isRequired = function () {
        return this.nullable ? 'required' : 'nullable';
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
    }
    Bootstrap.prototype.bootstrap = function () {
        var _this = this;
        this.inputs = [];
        return this.pages.map(function (page, pageNumber) {
            return "\n            <section class=\"page-" + (pageNumber + 1) + "\">\n                " + page.rows.map(function (row) {
                var grid = row.grid.split(' ');
                return "\n                    <div class=\"row\">\n                        " + row.columns.map(function (column, j) {
                    return "\n                            <div class=\"col-md-" + grid[j] + "\">\n                                " + column.contents.map(function (content) {
                        if (content.html.category === 'form') {
                            _this.inputs.push(content);
                        }
                        _this.renderHtmlService.setParams(content);
                        return _this.renderHtmlService.get().code;
                    }) + "\n                            </div>";
                }).join('') + "  \n                    </div>";
            }).join('') + "\n            </section>";
        }).join('');
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
    function FormBuilderComponent(b, l) {
        this.b = b;
        this.l = l;
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FormBuilderComponent.prototype, "bootstrap", {
        get: function () {
            this.b.setPages(this.pages);
            return this.l.wrapHtml(this.b.bootstrap());
            //return this.b.bootstrap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "laravel", {
        get: function () {
            this.l.setInputs(this.b.getInputs());
            return this.l.getLaravel();
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
            Laravel])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=form-builder.component.js.map