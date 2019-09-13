var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as nearley from 'nearley';
import * as bracketexpr_grammar from './../_parser/create-table-oracle-to-json';
String.prototype.replaceAllDecimalCommaToDecimalDot = function () {
    var regex = {
        valueBtwParentheses: "\\(([^)]*)\\)",
        onlyNumeric: "(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)"
    };
    return this.replace(/^\((.+)\)$/, '$1')
        .replace(new RegExp(regex.valueBtwParentheses, "g"), function (currentString, first) {
        var r = new RegExp(regex.onlyNumeric, 'g');
        if (r.test(first)) {
            return "(" + first.replace(/,/g, '.') + ")";
        }
        return currentString;
    });
};
var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService() {
        this._errors = [];
        this._data = [];
        this.category = 'form';
        this._customLabel = this.getCustomLabelName();
        this._data = [];
    }
    CreateTableToJsonService.prototype.parse = function () {
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        var parser = new nearley.Parser((bracketexpr_grammar));
        try {
            parser.feed(this._string.replaceAllDecimalCommaToDecimalDot());
            this._rawData = parser.results[0];
            this.convertData();
        }
        catch (error) {
            this._errors.push(error);
        }
    };
    CreateTableToJsonService.prototype.convertData = function () {
        var _this = this;
        if (this._rawData instanceof Object && Object.keys(this._rawData).length > 0) {
            var create_table_statement = this._rawData.create_table_statement;
            var create_definition = this._rawData.create_definition;
            this._table_name = create_table_statement.table_name;
            create_definition.forEach(function (column) {
                var column_name = column.name;
                var data_type = column.data_type;
                var column_definition = column.column_definition;
                var is_primary_key = false;
                var nullable = false;
                if (column_definition instanceof Array && column_definition.length > 0) {
                    column_definition.forEach(function (c) {
                        if (typeof c.nullable != 'undefined')
                            nullable = c.nullable;
                        if (typeof c.is_primary_key != 'undefined')
                            is_primary_key = c.is_primary_key;
                    });
                }
                _this._data.push({
                    html: {
                        category: _this.category,
                        tag: data_type.tag,
                        label: _this.customLabelName(column_name)
                    },
                    table: {
                        is_primary_key: is_primary_key,
                        column_name: column_name,
                        type: data_type.type.toLowerCase(),
                        size: data_type.size,
                        nullable: nullable
                    }
                });
            });
        }
        else {
            //this._errors.push();
        }
    };
    CreateTableToJsonService.prototype.customLabelName = function (column_name) {
        var _this = this;
        return column_name
            .split('_')
            .map(function (partialName) {
            var value = _this._customLabel[partialName];
            if (typeof value !== 'undefined')
                partialName = value;
            return partialName.charAt(0).toUpperCase() + partialName.substr(1);
        })
            .join(' ')
            .trim();
    };
    CreateTableToJsonService.prototype.hasError = function () {
        return this._errors.length > 0 ? true : false;
    };
    CreateTableToJsonService.prototype.getError = function () {
        return this._errors;
    };
    CreateTableToJsonService.prototype.setString = function (string) {
        this._string = string;
    };
    CreateTableToJsonService.prototype.getData = function () {
        return this._data;
    };
    CreateTableToJsonService.prototype.getRawData = function () {
        return this._rawData;
    };
    CreateTableToJsonService.prototype.getTableName = function () {
        return this._table_name;
    };
    CreateTableToJsonService.prototype.getCustomLabelName = function () {
        return {
            'dat': 'Data',
            'qtd': 'Quantidade',
            'cod': 'Código',
            'dsc': 'Descrição',
            'ind': '',
            'usu': 'Usuário',
            'tpo': 'Tipo',
            'nom': 'Nome',
            'est': 'Estado',
            'acao': 'Ação',
            'psv': 'Processo Seletivo',
            'per': 'Porcentagem',
            'abv': 'Abreviatura',
            'obs': 'Observação',
            'num': 'Número',
            'usuario': 'Usuário',
            'docto': 'Documento',
            'doc': 'Documento',
            'val': 'Valor',
            'valor': 'Valor',
            'sta': 'Status',
            'config': 'Configuração',
            'inicio': 'Ínicio',
            'termino': 'Término',
            'situacao': 'Situação',
            'nivel': 'Nível'
        };
    };
    CreateTableToJsonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CreateTableToJsonService);
    return CreateTableToJsonService;
}());
export { CreateTableToJsonService };
//# sourceMappingURL=create-table-to-json.service.js.map