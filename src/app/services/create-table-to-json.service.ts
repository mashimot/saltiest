import { Injectable } from '@angular/core';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Content } from "./../shared/models/content.model";
import { Html } from "./../shared/models/html.model";
import { Table } from "./../shared/models/table.model";

@Injectable({
    providedIn: 'root'
})
export class CreateTableToJsonService {
    _isTextareaWhenSizeEquals: number = 1000;
    _index: number = 2;
    _string: string;
    _data: Array<Content>;
    _errors: Array<{
        message: string
    }>;
    _dataBase: {
        [key: string]: string
    };
    _customLabel: {
        [key: string]: string
    };
    html: Html;
    table: Table;


    constructor() {
        this.html = new Html();
        this.table = new Table();
        this._data = [];
        this._errors = [];
        this._dataBase = DatabaseEngine.get('ORACLE');
        this._customLabel = this.getCustomLabelName();
    }

    getDataTypeAndSize(str) {
        let RegexValBtwParen = '\\((.*)\\)';
        let secondMatch = str[1];
        let dataType, inputType, size = '';
        let hasValBtwParen = secondMatch.match(RegexValBtwParen);

        if (hasValBtwParen !== null) {
            dataType = secondMatch.replace(hasValBtwParen[0], '');
        } else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) { //has more than 2 elements
                let thirdMatch = str[2];
                if (thirdMatch.charAt(0) === '(') {
                    hasValBtwParen = thirdMatch.match(RegexValBtwParen); //get value between parentheses
                    if (hasValBtwParen !== null) // it goes to the next index if parentheses doesn't exists
                        this._index = 3;
                }
            }
            //if doesn't contains, the second element of array will be the type
            dataType = secondMatch;
        }

        if (hasValBtwParen !== null) {
            let n = hasValBtwParen[1];
            let re = /^([0-9]+(\.[0-9]+)?)$/;
            if (!re.test(n)) {
                this._errors.push({
                    message: `\`${this.table.columnName}\`: ${n} is not a number!`
                });
            } 
            size = n;
        }

        let database = this._dataBase[dataType.toUpperCase()];
        console.log(database);
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        } else {
            this._errors.push({
                message: `\`${dataType}\` does not exists! ${this.table.columnName}`
            });
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;
    }
    validateSyntax(stringArr) {
        let value = '';
        let allowed = {
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
        for (let i = this._index; i < stringArr.length; i++) {
            let currentWord = stringArr[i].replace(/,/g, "");
            let hasError = false;
            let nextValue = '';
            let prevValue = '';
            if (typeof allowed[currentWord] === 'undefined') {
                this._errors.push({
                    message: `You have an error in your SQL syntax; check the manual for the right syntax to use near '${this.table.columnName}'`
                });
            } else {
                let index = i + 1;
                if (i === stringArr.length - 1) {
                    index = stringArr.length - 1;
                }
                let nextString = stringArr[index];
                let prevString = stringArr[i - 1];

              if (allowed[currentWord].next.length > 0) {
                  if (nextString.indexOf(allowed[currentWord].next[0]) !== -1) {
                    } else {
                    nextValue = allowed[currentWord].next[0];
                        hasError = true;
                    }
                }
              if (allowed[currentWord].previous.length > 0) {
                  if (prevString.indexOf(allowed[currentWord].previous[0]) !== -1) {
                    } else {
                    prevValue = allowed[currentWord].previous[0];
                        hasError = true;
                    }
                }
              value += `${prevValue} ${currentWord} ${nextValue}`;
                if (hasError && value !== '') {
                    this._errors.push({
                      message: `error: \`${currentWord}\` maybe \`${allowed[currentWord].correct}\` ? at line: ${this.table.columnName} `
                    });
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._index = 2;
    }
    convert() {
        let newString = this._string.trim().replace(/\((.+)\)/g, function(string, first){
            return "(" +  first.replace(/,/g, '.') + ")";
        }).replace(/,/g, "\n");
        let split = newString.split("\n").reduce((previous, currentValue) => {
            if (previous && currentValue !== '') {
                previous.push(currentValue);
            }
            return previous;
        }, []);

        let i = 0;
        while (i < split.length && this._errors.length <= 0) {
            let currentString = split[i].toLowerCase()/*.replace(/(\r\n\t|\n|\r\t)/gm, "")*/.replace(/\s+/g, " ").trim();
            let stringArr = currentString.split(' ');
            if (stringArr.length <= 1) {
                this._errors.push({
                    message: `Incompleted`
                });
            } else {
                this.table.columnName = stringArr[0]; // columnName

                if (this.table.columnName === 'create' && stringArr[1] === 'table') {
                    //this._data.name = stringArr[2];
                } else {
                    //the firstMatch  (stringArr[0]) will be always the columnName
                    //the secondMatch (stringArr[1]) will be always the data_type
                    this.getDataTypeAndSize(stringArr);
                    this.validateSyntax(stringArr);
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
                }
            }
            i++;
        }
        //console.log(this._data)
    }

    customLabelName() {
        let splitColumnName = this.table.columnName.split('_');
        if (splitColumnName.length > 0) {
            for (let i = 0; i < splitColumnName.length; i++) {
                let currentPartialName = splitColumnName[i];
                let value = this._customLabel[currentPartialName];
                if (typeof value !== 'undefined')
                    currentPartialName = value;

                splitColumnName[i] = currentPartialName.charAt(0).toUpperCase() + currentPartialName.substr(1);
            }
            this.html.label = splitColumnName.join(' ').trim();;
        }
    }
    customInput() {
        if (this.table.columnName.indexOf('ind_') !== -1)
            this.html.tag = 'select';

        if (this.html.tag === 'text' || this.html.tag === 'textarea') {
            //this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
            this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
        }
    }
    getData() {
        return this._data;
    }
    setString(string) {
        this._string = string;
    }
    getString() {
        return this._string;
    }
    getError() {
        return this._errors;
    }
    getCustomLabelName() {
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
    }

    hasError(): boolean {
        if (this._errors.length > 0)
            return true;
        return false;
    }
}
