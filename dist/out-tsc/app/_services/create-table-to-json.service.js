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
//import { readFile } from 'fs';
var Parser = require('sql-ddl-to-json-schema');
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
        this._sql = this._sql.replace(/\s+/g, " ").toLowerCase();
        //const parser = new nearley.Parser(oracle_grammar);
        var parser = new Parser('mysql');
        try {
            parser.feed(this._sql);
            var options = {};
            var results = parser.feed(this._sql)
                .toJsonSchemaArray(options);
            this._rawData = results[0];
            this.convertData2();
            /*parser.feed(this._sql.replaceAllDecimalCommaToDecimalDot());
            this._rawData = parser.results[0];
            this.convertData();*/
        }
        catch (error) {
            //this._errors.push(error);
            this._errors.push(this.reportError(error, parser));
        }
    };
    CreateTableToJsonService.prototype.reportError = function (e, parser) {
        if (parser.table) {
            var lastColumnIndex = parser.table.length - 2;
            var lastColumn = parser.table[lastColumnIndex];
            var token = parser.lexer.buffer[parser.current];
            return [
                "You have an error in your SQL syntax. <br />",
                //`Instead of a ${JSON.stringify(token)}`,
                this.setCharAt(parser.lexer.buffer, parser.current, "<mark class=\"text-danger\">" + token + "</mark>")
            ].join("<br />");
        }
        return '';
        //console.log(parser.lexer.buffer);
        //console.log(`Instead of a ${JSON.stringify(token)}, I was expecting to see one of the following:`);
        //console.log(lastColumn.states);
    };
    CreateTableToJsonService.prototype.setCharAt = function (str, index, chr) {
        if (index > str.length - 1)
            return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    };
    CreateTableToJsonService.prototype.convertData2 = function () {
        var _this = this;
        if (this._rawData instanceof Object && Object.keys(this._rawData).length > 0) {
            var definitions = this._rawData.definitions;
            var required_1 = this._rawData.required;
            definitions.forEach(function (definition, columnName) {
                var column_name = columnName;
                //let column_definition = definition.column_definition;
                var is_primary_key = false;
                var nullable = false;
                if (required_1 instanceof Array && required_1.length > 0) {
                    required_1.forEach(function (value) {
                        if (value == columnName)
                            nullable = true;
                    });
                }
                _this._data.push({
                    html: {
                        category: _this.category,
                        tag: definition.tag,
                        label: _this.customLabelName(column_name)
                    },
                    definition: {
                        is_primary_key: is_primary_key,
                        column_name: column_name,
                        type: definition.type.toLowerCase(),
                        size: definition.maxLength,
                        nullable: nullable
                    }
                });
            });
        }
        else {
            //this._errors.push();
        }
        console.log(this._data);
    };
    CreateTableToJsonService.prototype.convertData = function () {
        var _this = this;
        console.log(this._rawData);
        console.log(this._data);
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
                    definition: {
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
        this._sql = string;
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