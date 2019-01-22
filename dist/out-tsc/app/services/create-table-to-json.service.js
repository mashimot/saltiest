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
import { DatabaseService } from './../shared/services/database.service';
var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService() {
        this._index = 2;
        //this._string = string;
        this._nullable = false;
        this._isPrimaryKey = false;
        this._inputType = '';
        this._columnName = '';
        this._labelName = '';
        this._dataType = '';
        this._size = '';
        this._data = [];
        this._errors = [];
        this._dataBase = new DatabaseService().get()['ORACLE'];
        this._customLabel = this.getCustomLabelName();
    }
    CreateTableToJsonService.prototype.getValBtwParenthesis = function () {
    };
    CreateTableToJsonService.prototype.getDataTypeAndSize = function (str) {
        var RegexValBtwParen = '\\((.*)\\)';
        var secondMatch = str[1];
        var dataType, inputType, size = '';
        var hasValBtwParen = secondMatch.match(RegexValBtwParen);
        if (hasValBtwParen !== null) {
            dataType = secondMatch.replace(hasValBtwParen[0], '');
        }
        else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 3) {
                var thirdMatch = str[2];
                if (thirdMatch.charAt(0) === '(') {
                    hasValBtwParen = thirdMatch.match(RegexValBtwParen); //get value between parentheses
                    if (hasValBtwParen !== null)
                        this._index = 3;
                }
            }
            //if doesn't contains, the second element of array will be the type
            dataType = secondMatch;
        }
        if (hasValBtwParen !== null) {
            var n = hasValBtwParen[1];
            /*if (!this.isFloat(n)) {
                this._errors.push({
                    message: `\`${this._columnName}\`: ${n} is not a number!`
                });
            } else if (!this.isInt(n)) {
                this._errors.push({
                    message: `\`${this._columnName}\`: ${n} is not a number!`
                });
            }*/
            size = n;
        }
        var database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        }
        else {
            this._errors.push({
                message: "`" + dataType + "` does not exists! " + this._columnName
            });
        }
        this._dataType = dataType;
        this._inputType = inputType;
        this._size = size;
    };
    CreateTableToJsonService.prototype.validateSyntax = function (stringArr) {
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
        for (var i = this._index; i < stringArr.length; i++) {
            var currentWord = stringArr[i].replace(/,/g, "");
            var hasError = false;
            var nextValue = '';
            var prevValue = '';
            if (typeof allowed[currentWord] === 'undefined') {
                this._errors.push({
                    message: "You have an error in your SQL syntax; check the manual for the right syntax to use near '" + this._columnName + "'"
                });
            }
            else {
                var index = i + 1;
                if (i === stringArr.length - 1) {
                    index = stringArr.length - 1;
                }
                var nextString = stringArr[index];
                var prevString = stringArr[i - 1];
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
                    this._errors.push({
                        message: "error: `" + currentWord + "` maybe `" + allowed[currentWord].correct + "` ? at line: " + this._columnName + " "
                    });
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this._nullable = (value.indexOf("not null") !== -1) ? true : false;
        this._isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._index = 2;
    };
    CreateTableToJsonService.prototype.convert = function () {
        var newStringArr = this._string.trim().replace(/,/g, "\n");
        var split = newStringArr.split("\n").reduce(function (previous, currentValue) {
            if (previous && currentValue !== '') {
                console.log(currentValue);
                previous.push(currentValue);
            }
            return previous;
        }, []);
        var i = 0;
        while (i < split.length && this._errors.length <= 0) {
            var currentString = split[i].toLowerCase() /*.replace(/(\r\n\t|\n|\r\t)/gm, "")*/.replace(/\s+/g, " ").trim();
            var stringArr = currentString.split(' ');
            if (stringArr.length <= 1) {
                this._errors.push({
                    message: "Incompleted"
                });
            }
            else {
                this._columnName = stringArr[0]; // columnName
                if (this._columnName === 'create' && stringArr[1] === 'table') {
                    //this._data.name = stringArr[2];
                }
                else {
                    //the firstMatch  (stringArr[0]) will be always the columnName
                    //the secondMatch (stringArr[1]) will be always the data_type
                    this.getDataTypeAndSize(stringArr);
                    this.validateSyntax(stringArr);
                    this.customInput();
                    this.customLabelName();
                    this._data.push({
                        html: {
                            category: 'form',
                            tag: this._inputType,
                            label: this._labelName
                        },
                        table: {
                            isPrimaryKey: this._isPrimaryKey,
                            columnName: this._columnName,
                            type: this._dataType,
                            nullable: this._nullable,
                            size: this._size
                        }
                    });
                }
            }
            i++;
        }
    };
    CreateTableToJsonService.prototype.customLabelName = function () {
        var splitColumnName = this._columnName.split('_');
        if (splitColumnName.length > 0) {
            for (var i = 0; i < splitColumnName.length; i++) {
                var currentPartialName = splitColumnName[i];
                var value = this._customLabel[currentPartialName];
                if (typeof value !== 'undefined')
                    currentPartialName = value;
                splitColumnName[i] = currentPartialName.charAt(0).toUpperCase() + currentPartialName.substr(1);
            }
            this._labelName = splitColumnName.join(' ').trim();
            ;
        }
    };
    CreateTableToJsonService.prototype.customInput = function () {
        if (this._columnName.indexOf('ind_') !== -1)
            this._inputType = 'select';
        if (this._inputType === 'text' || this._inputType === 'textarea') {
            if (parseInt(this._size) <= 50)
                this._inputType = 'text';
            else
                this._inputType = 'textarea';
        }
    };
    CreateTableToJsonService.prototype.getData = function () {
        return this._data;
    };
    CreateTableToJsonService.prototype.setString = function (string) {
        this._string = string;
    };
    CreateTableToJsonService.prototype.getString = function () {
        return this._string;
    };
    CreateTableToJsonService.prototype.getError = function () {
        return this._errors;
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
        if (this._errors.length > 0)
            return true;
        return false;
    };
    CreateTableToJsonService.prototype.isInt = function (val) {
        var intRegex = /^-?\d+$/;
        if (!intRegex.test(val))
            return false;
        var intVal = parseInt(val, 10);
        return parseFloat(val) == intVal && !isNaN(intVal);
    };
    CreateTableToJsonService.prototype.isFloat = function (val) {
        if (val.indexOf('.') !== -1 || val.indexOf(',') !== -1) {
            var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
            if (!floatRegex.test(val))
                return false;
            val = parseFloat(val);
            if (isNaN(val))
                return false;
        }
        return true;
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