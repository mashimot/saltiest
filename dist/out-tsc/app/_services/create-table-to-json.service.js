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
var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService() {
        this._errors = [];
        this._data = [];
        this._customLabel = this.getCustomLabelName();
    }
    CreateTableToJsonService.prototype.parse = function () {
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        var parser = new nearley.Parser((bracketexpr_grammar)).feed(this._string);
        this._rawData = parser.results[0];
        this.convertData();
    };
    CreateTableToJsonService.prototype.convertData = function () {
        var _this = this;
        var hue = [];
        var rawData = this._rawData
            .filter(function (item) { return (item instanceof Array || item instanceof Object); });
        this._table_name = rawData[0].table_name;
        rawData[1].forEach(function (column) {
            var columnName = column[0].name;
            column.forEach(function (item) {
                if (item instanceof Object) {
                    var data_type = item.data_type;
                    _this._data.push({
                        html: {
                            tag: data_type.tag,
                            label: _this.customLabelName(columnName)
                        },
                        table: {
                            columnName: columnName,
                            type: data_type.type,
                            size: data_type.size
                        }
                    });
                }
            });
        });
        console.log(this._data);
    };
    CreateTableToJsonService.prototype.customLabelName = function (columnName) {
        var _this = this;
        return columnName
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
        this._rawData;
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