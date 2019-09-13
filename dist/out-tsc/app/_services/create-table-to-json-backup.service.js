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
import { Html, Table } from "./../_core/model";
import * as nearley from 'nearley';
import * as bracketexpr_grammar from './../_parser/create-table-oracle-to-json';
var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService(DB) {
        this._isTextareaWhenSizeEquals = 1000;
        this._wordIndex = 2;
        this.columnConstraints = [
            'null',
            'not null myass',
            'primary key',
            'unique',
            'check',
            'default (?:["]{string}["]|[(]{string}[)]|[\']{string}[\']|{number}|-{number})',
            'enum [(]{list}[)]'
        ];
        this.regex = {
            createTableSyntax: '',
            createTable: "\\s*create\\s+table(?:\\s+if\\s+not\\s+exists)?\\s+(\\w+)\\s*",
            onlyNumeric: "(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)",
            valueBtwParentheses: "\\(([^)]*)\\)",
            stringRestriction: "^[\\s\\w+\\_\\-\\,\\.()]*$",
            onlyWords: "\\w+"
        };
        var bexpr_parser = new nearley.Parser(nearley.Grammar.fromCompiled(bracketexpr_grammar));
        bexpr_parser.feed('crEAtE taBle easdad (q cLoB,   z  cLob PRImarY key      PrImAry KeY  NULl );');
        alert();
        console.log(bexpr_parser.results[0]);
        this.html = new Html();
        this.table = new Table();
        this._data = [];
        this._errors = [];
        this._dataBase = DatabaseEngine.get(DB);
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
    CreateTableToJsonService.prototype.convertToRegex = function (columnConstraints) {
        var _this = this;
        return columnConstraints.mfap(function (c) {
            return c.split(" ")
                .filter(function (value) { return value != null; })
                .map(function (item) {
                return item
                    .replace(/{string}/ig, _this.regex.onlyWords)
                    .replace(/{number}/ig, _this.regex.onlyNumeric);
            })
                .join(" ");
        });
    };
    CreateTableToJsonService.prototype.createTableSyntax = function () {
        var types = Object.keys(this._dataBase).join("|");
        var column_names = "[`]" + this.regex.onlyWords + "[`]|(" + this.regex.onlyWords + ")";
        var columnConstraints = this.convertToRegex(this.columnConstraints)
            .map(function (constraint) { return "(?:" + constraint + "?)?"; })
            .join("")
            .replace(/\s+/g, '\\s+');
        var row = "\n        (\n            (?:\n                " + column_names + "\n            )\n            \\s+\n            (?:\n                (" + types + ")(\\s*)?\n                (\n                    ([(]" + this.regex.onlyNumeric + "[)])\n                )?\n            )\n            \\s+?\n            (?:\n                (" + columnConstraints + ")*\n            )?\n        )";
        var regexCreateTableSyntax = ("\n        " + this.regex.createTable + "\n        [(]\n            (\\s*\n                (\n                    \\s*" + row + "[,]\n                )*\n                (\n                    \\s*" + row + "\n                )\n            )\\s*\n        [)]\\s*([;])")
            .toLowerCase()
            .replace(/\s+/g, '')
            .trim();
        console.log(regexCreateTableSyntax);
        return regexCreateTableSyntax;
    };
    CreateTableToJsonService.prototype.getDataTypeAndSize = function (str) {
        var secondMatch = str[1];
        var inputType, size = '';
        var dataType = secondMatch;
        var matchValBtwParen = secondMatch.match(new RegExp(this.regex.valueBtwParentheses));
        var hasValueBtwParen = false;
        if (matchValBtwParen !== null) {
            hasValueBtwParen = true;
            dataType = secondMatch.replace(matchValBtwParen[0], '');
        }
        else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the column_name (it must be an integer or float)
            if (str.length > 2) { //has more than 2 elements
                var thirdMatch = str[2];
                matchValBtwParen = thirdMatch.match(new RegExp(this.regex.valueBtwParentheses)); //get value between parentheses
                if (matchValBtwParen !== null) { // it goes to the next index if parentheses doesn't exists
                    hasValueBtwParen = true;
                    this._wordIndex = 3;
                }
            }
        }
        if (hasValueBtwParen) {
            var numeric = matchValBtwParen[1];
            var onlyNumericRegex = new RegExp("^" + this.regex.onlyNumeric + "$");
            if (!onlyNumericRegex.test(numeric)) {
                this._errors.push("`" + this.table.column_name + "`: " + numeric + " is not a number!");
            }
            size = numeric;
        }
        var database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        }
        else {
            this._errors.push("Check the manual for the right syntax to use near '" + this.table.column_name + "'");
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;
        return this;
    };
    CreateTableToJsonService.prototype.getColumnName = function (words) {
        this.table.column_name = words[0].replace(/`/g, ""); // column name
        return this;
    };
    CreateTableToJsonService.prototype.validateSyntax = function (words) {
        var value = '';
        var allowed = {
            'not': {
                nextWord: ['null', 'myass'],
                previousWord: [],
                correct: 'not null myass'
            },
            'myass': {
                nextWord: [],
                previousWord: ['not', 'null'],
                correct: 'not null myass'
            },
            'null': {
                nextWord: [],
                previousWord: [],
                correct: 'null'
            },
            'primary': {
                nextWord: ['key'],
                previousWord: [],
                correct: 'primary key'
            },
            'key': {
                nextWord: [],
                previousWord: ['primary'],
                correct: 'primary key'
            },
            'unique': {
                nextWord: [],
                previousWord: [],
                correct: 'unique'
            },
        };
        var _loop_1 = function (i) {
            var currentWord = words[i].replace(/,/g, "");
            var isDiff = [];
            var nextValue = '';
            var prevValue = '';
            if (typeof allowed[currentWord] != 'undefined') {
                var index = i + 1;
                if (i === words.length - 1) {
                    index = words.length - 1;
                }
                var nextString = words[index];
                var prevString = words[i - 1];
                var huehue_1 = [];
                //console.log(allowed[currentWord].nextWord);
                if (allowed[currentWord].nextWord.length > 0) {
                    for (var k = 0; k < allowed[currentWord].nextWord.length; k++) {
                        huehue_1.push(words[k + index]);
                    }
                    isDiff = allowed[currentWord].nextWord.filter(function (w) {
                        return !huehue_1.includes(w);
                    });
                    if (isDiff.length > 0) {
                        nextValue = allowed[currentWord].nextWord.join(' ');
                    }
                }
                if (allowed[currentWord].previousWord.length > 0) {
                    for (var j = 0; j < allowed[currentWord].previousWord.length; j++) {
                        huehue_1.push(words[(i - 1) - j]);
                    }
                    isDiff = allowed[currentWord].previousWord.filter(function (w) {
                        return !huehue_1.includes(w);
                    });
                    if (isDiff.length > 0) {
                        prevValue = allowed[currentWord].previousWord.join(' ');
                    }
                }
                value += prevValue + " " + currentWord + " " + nextValue;
                if (isDiff.length > 0) {
                    this_1._errors.push("error: `" + currentWord + "` maybe `" + allowed[currentWord].correct + "` ? at line: " + this_1.table.column_name);
                }
            }
        };
        var this_1 = this;
        for (var i = this._wordIndex; i < words.length; i++) {
            _loop_1(i);
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        //console.log(value);
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.is_primary_key = (value.indexOf("primary key") !== -1) ? true : false;
        this._wordIndex = 2;
    };
    CreateTableToJsonService.prototype.convert = function () {
        var _this = this;
        var defineColumns = [];
        var regex = new RegExp(this.regex.createTableSyntax);
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        var groups = regex.exec(this._string);
        if (groups == null) {
            this._errors.push("Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )", "You have an error in your SQL syntax:");
        }
        else {
            console.log(groups);
        }
        var createTable = new RegExp(this.regex.createTable + "([^\\(]*(\\(.*\\))[^\\)])").exec(this._string);
        if (createTable) {
            this.tableName = createTable[1];
            defineColumns = createTable[3].replace(/^\((.+)\)$/, '$1')
                .replace(new RegExp(this.regex.valueBtwParentheses, "g"), function (string, first) {
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
        var i = 0;
        while (i < defineColumns.length /* && this._errors.length <= 0*/) {
            var currentDefineColumn = defineColumns[i];
            var eachWords = currentDefineColumn.split(' '); //break the define columns into words
            if (eachWords.length <= 1) {
                //this._errors.push(`Incompleted`);
            }
            else {
                //this.table.column_name = eachWords[0].replace(/`/g, ""); // column name
                //the firstMatch  (stringArr[0]) will be always the column name
                //the secondMatch (stringArr[1]) will be always the column data type
                this.getColumnName(eachWords)
                    .getDataTypeAndSize(eachWords)
                    //.customInput()
                    .customLabelName();
                this.validateSyntax(eachWords);
                //.setData();
                this._data.push({
                    html: {
                        category: 'form',
                        tag: this.html.tag,
                        label: this.html.label || ''
                    },
                    table: {
                        is_primary_key: this.table.is_primary_key,
                        column_name: this.table.column_name,
                        type: this.table.type,
                        nullable: this.table.nullable,
                        size: this.table.size
                    }
                });
            }
            i++;
        }
        console.log(this._data);
    };
    CreateTableToJsonService.prototype.customLabelName = function () {
        var _this = this;
        this.html.label = this.table.column_name.split('_')
            .map(function (partialName) {
            var value = _this._customLabel[partialName];
            if (typeof value !== 'undefined')
                partialName = value;
            return partialName.charAt(0).toUpperCase() + partialName.substr(1);
        })
            .join(' ')
            .trim();
        return this;
    };
    CreateTableToJsonService.prototype.customInput = function () {
        if (this.table.column_name.indexOf('ind_') !== -1)
            this.html.tag = 'select';
        if (this.html.tag === 'text' || this.html.tag === 'textarea') {
            //this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
            this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals) ? 'text' : 'textarea';
        }
        return this;
    };
    CreateTableToJsonService.prototype.getTableName = function () {
        return this.tableName;
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
        Injectable(),
        __metadata("design:paramtypes", [String])
    ], CreateTableToJsonService);
    return CreateTableToJsonService;
}());
export { CreateTableToJsonService };
//# sourceMappingURL=create-table-to-json-backup.service.js.map