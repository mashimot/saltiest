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
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Html } from "./../shared/models/html.model";
import { Table } from "./../shared/models/table.model";
var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService() {
        this._isTextareaWhenSizeEquals = 1000;
        this._wordIndex = 2;
        this.allowedDataTypes = ['null', 'not null', 'primary key', 'unique'];
        this.regex = {
            createTableSyntax: '',
            createTable: "\\s*CREATE\\s+TABLE(?:\\s+IF\\s+NOT\\s+EXISTS)?\\s+(\\w+)",
            //onlyNumeric2: /^(([0-9]+(\,[0-9]+)?)(\.[0-9]+)?)$/,
            onlyNumeric: "[0-9]+(\\,[0-9]+)?(\\.[0-9]+)?",
            valueBtwParentheses: "\\(([^)]*)\\)",
            valueBtwParenthesesGlobal: "\\(([^)]*)\\)",
            stringRestriction: "^[\\s\\w+\\_\\-\\,\\.()]*$",
        };
        this.html = new Html();
        this.table = new Table();
        this._data = [];
        this._errors = [];
        this._dataBase = DatabaseEngine.get('ORACLE');
        this._customLabel = this.getCustomLabelName();
        this.regex.createTableSyntax = this.createTableSyntax();
    }
    /*CREATE TABLE test_table (
        -- define columns (name / type / default value / column constraint
        id             DECIMAL                           PRIMARY KEY,
        part_number    CHAR(10)          DEFAULT 'n/a'   NOT NULL,
        part_name      VARCHAR(500),
        state          DECIMAL           DEFAULT -1,
    );*/
    CreateTableToJsonService.prototype.createTableSyntax = function () {
        var dbKeys = Object.keys(this._dataBase).join("|");
        var comma = '(,)';
        var allowedDataTypes = this.allowedDataTypes.map(function (item) {
            var newItem = item.toUpperCase().replace(/\s+/g, '\\s+');
            return "(?:" + newItem + "?)?";
        }).join("");
        var info = "\n        (\\s*\n            (\\w+)\\s+\n            (\n                (" + dbKeys + ")(\\s+)?\n                (?:\n                    ([(]" + this.regex.onlyNumeric + "[)])\n                )?\n            ) \n            (?:\n                \\s+" + allowedDataTypes + "\n            )?\n            (?:\n                \\s+(PRIMARY\\s+KEY)?\n            )?\n        )\n        ";
        var regexCreateTableSyntax = ("\n        " + this.regex.createTable + "\n        \\s*[(]\n            (\\s*\n                (\n                    " + info + comma + "\\s*\n                )*\n                (\n                    " + info + "\\s*\n                )\n            )\n        \\s*[)]\\s*[;]\n        ").toLowerCase().replace(/\s+/g, '').trim();
        return regexCreateTableSyntax;
    };
    CreateTableToJsonService.prototype.getDataTypeAndSize = function (str) {
        var secondMatch = str[1];
        var inputType, size = '';
        var dataType = secondMatch;
        var matchValBtwParen = secondMatch.match(this.regex.valueBtwParentheses);
        var hasValueBtwParen = false;
        if (matchValBtwParen !== null) {
            hasValueBtwParen = true;
            dataType = secondMatch.replace(matchValBtwParen[0], '');
        }
        else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) {
                var thirdMatch = str[2];
                matchValBtwParen = thirdMatch.match(this.regex.valueBtwParentheses); //get value between parentheses
                if (matchValBtwParen !== null) {
                    hasValueBtwParen = true;
                    this._wordIndex = 3;
                }
            }
        }
        if (hasValueBtwParen) {
            var numeric = matchValBtwParen[1];
            var onlyNumericRegex = new RegExp(this.regex.onlyNumeric);
            if (!onlyNumericRegex.test(numeric)) {
                this._errors.push("`" + this.table.columnName + "`: " + numeric + " is not a number!");
            }
            size = numeric;
        }
        var database = this._dataBase[dataType.toUpperCase()];
        //console.log(database);
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        }
        else {
            this._errors.push("Check the manual for the right syntax to use near '" + this.table.columnName + "'");
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;
    };
    CreateTableToJsonService.prototype.validateSyntax = function (words) {
        var value = '';
        var allowed = {
            'not': {
                next: ['null'],
                previous: [],
                correct: 'not null'
            },
            'null': {
                next: [],
                previous: [],
                correct: 'null'
            },
            'primary': {
                next: ['key'],
                previous: [],
                correct: 'primary key'
            },
            'key': {
                next: [],
                previous: ['primary'],
                correct: 'primary key'
            },
            'unique': {
                next: [],
                previous: [],
                correct: 'unique'
            },
        };
        //'not null|null'
        for (var i = this._wordIndex; i < words.length; i++) {
            var currentWord = words[i].replace(/,/g, "");
            var hasError = false;
            var nextValue = '';
            var prevValue = '';
            if (typeof allowed[currentWord] === 'undefined') {
                this._errors.push("Check the manual for the right syntax to use near '" + this.table.columnName + "'");
            }
            else {
                var index = i + 1;
                if (i === words.length - 1) {
                    index = words.length - 1;
                }
                var nextString = words[index];
                var prevString = words[i - 1];
                if (allowed[currentWord].next.length > 0) {
                    if (nextString.indexOf(allowed[currentWord].next[0]) !== -1) {
                    }
                    else {
                        nextValue = allowed[currentWord].next[0];
                        hasError = true;
                    }
                }
                if (allowed[currentWord].previous.length > 0) {
                    if (prevString.indexOf(allowed[currentWord].previous[0]) !== -1) {
                    }
                    else {
                        prevValue = allowed[currentWord].previous[0];
                        hasError = true;
                    }
                }
                value += prevValue + " " + currentWord + " " + nextValue;
                if (hasError && value !== '') {
                    this._errors.push("error: `" + currentWord + "` maybe `" + allowed[currentWord].correct + "` ? at line: " + this.table.columnName);
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._wordIndex = 2;
    };
    CreateTableToJsonService.prototype.convert = function () {
        var _this = this;
        var regex = new RegExp(this.regex.createTableSyntax);
        this._string = this._string.replace(/\s/g, " ").toLowerCase();
        if (!regex.test(this._string)) {
            this._errors.push("Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )", "You have an error in your SQL syntax:");
        }
        var createTable = (/\s*create\s+table(?:\s+if\s+not\s+not)?\s+(\w+)\s+([^\(]*(\(.*\))[^\)])/g).exec(this._string);
        var defineColumns = [];
        if (createTable) {
            console.log(createTable[3]);
            defineColumns = //this._string.replace(/[^\(]*(\(.*\))[^\)]*/, '$1')
                createTable[3].replace(/^\((.+)\)$/, '$1')
                    .replace(this.regex.valueBtwParenthesesGlobal, function (string, first) {
                    var regex = new RegExp(_this.regex.onlyNumeric, 'g');
                    if (regex.test(first)) {
                        return "(" + first.replace(/,/g, '.') + ")";
                    }
                    return string;
                })
                    .split(",")
                    .reduce(function (previous, currentValue) {
                    if (previous && currentValue !== '') {
                        previous.push(currentValue.replace(/\s+/g, " ")
                            .trim()
                            .toLowerCase());
                    }
                    return previous;
                }, []);
        }
        //console.log(defineColumns)
        var i = 0;
        while (i < defineColumns.length /* && this._errors.length <= 0*/) {
            var currentDefineColumn = defineColumns[i];
            var eachWords = currentDefineColumn.split(' '); //break the define columns into words
            if (eachWords.length <= 1) {
                //this._errors.push(`Incompleted`);
            }
            else {
                this.table.columnName = eachWords[0]; // column name
                //if (this.table.columnName === 'create' && eachWords[1] === 'table') {
                //this._data.name = stringArr[2];
                //} else {
                //the firstMatch  (stringArr[0]) will be always the column name
                //the secondMatch (stringArr[1]) will be always the column data type
                this.getDataTypeAndSize(eachWords);
                this.validateSyntax(eachWords);
                this.customInput();
                this.customLabelName();
                this._data.push({
                    html: {
                        category: 'form',
                        tag: this.html.tag,
                        label: this.html.label
                    },
                    table: {
                        isPrimaryKey: this.table.isPrimaryKey,
                        columnName: this.table.columnName,
                        type: this.table.type,
                        nullable: this.table.nullable,
                        size: this.table.size
                    }
                });
                //}
            }
            i++;
        }
        //console.log(this._data)
    };
    CreateTableToJsonService.prototype.customLabelName = function () {
        var splitColumnName = this.table.columnName.split('_');
        if (splitColumnName.length > 0) {
            for (var i = 0; i < splitColumnName.length; i++) {
                var currentPartialName = splitColumnName[i];
                var value = this._customLabel[currentPartialName];
                if (typeof value !== 'undefined')
                    currentPartialName = value;
                splitColumnName[i] = currentPartialName.charAt(0).toUpperCase() + currentPartialName.substr(1);
            }
            this.html.label = splitColumnName.join(' ').trim();
            ;
        }
    };
    CreateTableToJsonService.prototype.customInput = function () {
        if (this.table.columnName.indexOf('ind_') !== -1)
            this.html.tag = 'select';
        if (this.html.tag === 'text' || this.html.tag === 'textarea') {
            //this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
            this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals) ? 'text' : 'textarea';
        }
    };
    CreateTableToJsonService.prototype.getData = function () {
        return this._data;
    };
    CreateTableToJsonService.prototype.setString = function (_string) {
        this._string = _string;
    };
    CreateTableToJsonService.prototype.getString = function () {
        return this._string;
    };
    CreateTableToJsonService.prototype.getError = function () {
        var _this = this;
        return this._errors.filter(function (item, pos) {
            return _this._errors.indexOf(item) == pos;
        });
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
    CreateTableToJsonService.prototype.hasError = function () {
        return this._errors.length > 0 ? true : false;
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