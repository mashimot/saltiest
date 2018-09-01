import { Injectable } from '@angular/core';
import { DatabaseService } from './../shared/services/database.service';

interface Html {
    category: string;
    tag: string;
    label?: string;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

interface Table {
    columnName?: string;
    isPrimaryKey?: boolean;
    type: string;
    nullable: boolean;
    size: string;
}

interface Content {
    html: Html;
    table?: Table; //optional
}

@Injectable({
    providedIn: 'root'
})
export class CreateTableToJsonService {
    _string: string;
    _nullable: boolean;
    _isPrimaryKey: boolean;
    _inputType: string;
    _columnName: string;
    _labelName: string;
    _dataType: string;
    _size: string;
    _index: number = 2;
    _data: Array<Content>;
    _errors: Array<{
        message: string
    }>;
    _dataBase: {
      [key: string]: string
    };
    _customLabel: {};

    constructor() {
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
    
    getDataTypeAndSize(str) {
        let RegexValBtwParen = '\\((.*)\\)';
        let secondMatch = str[1];
        let dataType, inputType, size = '';
        let hasValBtwParen = secondMatch.match(RegexValBtwParen);

        if (hasValBtwParen !== null) {
            dataType = secondMatch.replace(hasValBtwParen[0], '');
        } else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) { //has 2 elements
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
              if (!this.isFloat(n)) {
                  this._errors.push({
                      message: `\`${this._columnName}\`: ${n} is not a number!`
                  });
              } else if (!this.isInt(n)) {
                  this._errors.push({
                      message: `\`${this._columnName}\`: ${n} is not a number!`
                  });
              }
              size = n;
        }

        let database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        } else {
            this._errors.push({
                message: `\`${dataType}\` does not exists! ${this._columnName}`
            });
        }
        this._dataType = dataType;
        this._inputType = inputType;
        this._size = size;
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
                    message: `You have an error in your SQL syntax; check the manual for the right syntax to use near '${this._columnName}'`
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
                      message: `error: \`${currentWord}\` maybe \`${allowed[currentWord].correct}\` ? at line: ${this._columnName} `
                    });
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this._nullable = (value.indexOf("not null") !== -1) ? true : false;
        this._isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._index = 2;
    }
    convert() {
        let newStringArr = this._string.trim().replace(/,/g, "\n");
        let split = newStringArr.split("\n").reduce((previous, currentValue) => {
            if (previous && currentValue !== '') {
                console.log(currentValue);  
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
                this._columnName = stringArr[0]; // columnName

                if (this._columnName === 'create' && stringArr[1] === 'table') {
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
    }

    customLabelName() {
        let splitColumnName = this._columnName.split('_');
        if (splitColumnName.length > 0) {
            for (let i = 0; i < splitColumnName.length; i++) {
                let currentPartialName = splitColumnName[i];
                let value = this._customLabel[currentPartialName];
                if (typeof value !== 'undefined')
                    currentPartialName = value;

                splitColumnName[i] = currentPartialName.charAt(0).toUpperCase() + currentPartialName.substr(1);
            }
            this._labelName = splitColumnName.join(' ').trim();;
        }
    }
    customInput() {
        if (this._columnName.indexOf('ind_') !== -1)
            this._inputType = 'select';

        if (this._inputType === 'text' || this._inputType === 'textarea') {
            if (parseInt(this._size) <= 50)
                this._inputType = 'text';
            else
                this._inputType = 'textarea';
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

    isInt(val): boolean {
        let intRegex = /^-?\d+$/;
        if (!intRegex.test(val))
            return false;

        let intVal = parseInt(val, 10);
        return parseFloat(val) == intVal && !isNaN(intVal);
    }

    isFloat(val): boolean {
        if (val.indexOf('.') !== -1 || val.indexOf(',') !== -1) {
            let floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
            if (!floatRegex.test(val))
              return false;

            val = parseFloat(val);
            if (isNaN(val))
              return false;
        }
        return true;
    }
}
