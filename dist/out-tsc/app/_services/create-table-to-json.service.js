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
import * as oracle_grammar from './../_parser/create-table-oracle-to-json';
import * as Parser from './../_parser/lib/parser';
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
        this._errors = {};
        this.category = 'form';
        this._customLabel = this.getCustomLabelName();
        this._schema = {
            $id: '',
            data: [],
            definitions: [],
            pages: []
        };
    }
    CreateTableToJsonService.prototype.setDataBase = function (database) {
        this._database = database;
    };
    CreateTableToJsonService.prototype.getDataBase = function () {
        return this._database;
    };
    CreateTableToJsonService.prototype.parse = function () {
        this._sql = this._sql.replace(/\s+/g, " ").toLowerCase();
        var hadouken = new Parser('mysql');
        //alert(this.getDataBase());
        if (this.getDataBase() == 'oracle') {
            hadouken = new nearley.Parser(oracle_grammar);
        }
        try {
            var options = {};
            if (this.getDataBase() == 'mysql') {
                var results = hadouken.feed(this._sql).toJsonSchemaArray(options);
                this._rawSchema = results[0];
                console.log(this._rawSchema);
                this.convertDataMysql();
            }
            if (this.getDataBase() == 'oracle') {
                var results = hadouken.feed(this._sql.replaceAllDecimalCommaToDecimalDot()).results;
                this._rawSchema = results[0];
                this.convertDataOracle();
            }
        }
        catch (error) {
            //this._errors.push(error);
            this._errors = this.reportError(error, hadouken);
        }
    };
    CreateTableToJsonService.prototype.reportError = function (e, parser) {
        if (parser.table) {
            var lastColumnIndex = parser.table.length - 2;
            var lastColumn = parser.table[lastColumnIndex];
            var token = parser.lexer.buffer[parser.current];
            return {
                title: "You have an error in your SQL syntax.",
                msg: this.setCharAt(parser.lexer.buffer, parser.current, token)
            };
        }
        return {};
        //console.log(parser.lexer.buffer);
        //console.log(`Instead of a ${JSON.stringify(token)}, I was expecting to see one of the following:`);
        //console.log(lastColumn.states);
    };
    CreateTableToJsonService.prototype.setCharAt = function (str, index, chr) {
        if (index > str.length - 1) {
            return {
                str: str,
                strBegin: '',
                char: chr,
                strEnd: ''
            };
        }
        //return str.substr(0, index) + chr + str.substr(index+1);
        return {
            str: str,
            strBegin: str.substr(0, index),
            char: chr,
            strEnd: str.substr(index + 1)
        };
    };
    CreateTableToJsonService.prototype.convertDataMysql = function () {
        if (Object.keys(this._rawSchema).length > 0) {
            var definitions = this._rawSchema.definitions;
            var required = this._rawSchema.required;
            this._schema.$id = this._rawSchema.$id;
            this._table_name = this._rawSchema.$id;
            this._schema.definitions = definitions;
            var _loop_1 = function (columnName) {
                if (definitions.hasOwnProperty(columnName)) {
                    var definition = definitions[columnName];
                    var column_name = columnName;
                    var is_primary_key = false;
                    var nullable_1 = false;
                    if (required instanceof Array && required.length > 0) {
                        required.forEach(function (value) {
                            if (value == columnName)
                                nullable_1 = true;
                        });
                    }
                    if (typeof definition.$comment != 'undefined') {
                        if (definition.$comment == 'primary key') {
                            is_primary_key = true;
                        }
                    }
                    this_1._schema.data.push({
                        html: {
                            category: this_1.category,
                            tag: definition.tag || 'text',
                            label: this_1.customLabelName(column_name)
                        },
                        definition: {
                            is_primary_key: is_primary_key || false,
                            column_name: column_name,
                            type: definition.type.toLowerCase(),
                            size: definition.maxLength || '',
                            nullable: nullable_1 || false
                        }
                    });
                }
            };
            var this_1 = this;
            for (var columnName in definitions) {
                _loop_1(columnName);
            }
            ;
        }
    };
    CreateTableToJsonService.prototype.convertDataOracle = function () {
        var _this = this;
        if (this._rawSchema instanceof Object && Object.keys(this._rawSchema).length > 0) {
            var create_table_statement = this._rawSchema.create_table_statement;
            var create_definition = this._rawSchema.create_definition;
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
                _this._schema.data.push({
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
                        nullable: nullable,
                    }
                });
            });
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
        return Object.keys(this._errors).length > 0 ? true : false;
    };
    CreateTableToJsonService.prototype.getError = function () {
        return this._errors;
    };
    CreateTableToJsonService.prototype.setSql = function (sql) {
        this._sql = sql;
    };
    CreateTableToJsonService.prototype.getSchema = function () {
        return this._schema;
    };
    CreateTableToJsonService.prototype.getRawData = function () {
        return this._rawSchema;
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