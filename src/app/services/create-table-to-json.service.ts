import { Injectable } from '@angular/core';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Content, Html, Table } from "./../core/model";

@Injectable()
export class CreateTableToJsonService {
    _isTextareaWhenSizeEquals: number = 1000;
    _wordIndex: number = 2;
    _string: string;
    _data: Array<Content>;
    _errors: Array<string>;
    _dataBase: {
        [key: string]: string
    };
    _customLabel: {
        [key: string]: string
    };
    html: Html;
    table: Table;
    tableName: string;
    allowedDataTypes: Array<string> = ['null', 'not null', 'primary key', 'unique'];
    regex: {
        [key:string]: string
    } = {
        createTableSyntax: '',
        createTable: `\\s*create\\s+table(?:\\s+if\\s+not\\s+exists)?\\s+(\\w+)\\s*`,
        onlyNumeric: `(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)`,
        valueBtwParentheses: `\\(([^)]*)\\)`,
        stringRestriction: `^[\\s\\w+\\_\\-\\,\\.()]*$`,
    };


    constructor(DB: string) {
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
    createTableSyntax(): string {
        var dbKeys = Object.keys(this._dataBase).join("|");
        var allowedDataTypes = this.allowedDataTypes.map((item)=>{
            var newItem = item.toUpperCase().replace(/\s+/g, '\\s+');
            return `(?:${newItem}?)?`;
        }).join("");

        let info = `
        (
            (\\w+)\\s*
            (?:
                (${dbKeys})(\\s*)?
                (
                    ([(]${this.regex.onlyNumeric}[)])
                )?
            ) 
            (?:
                \\s+${allowedDataTypes}
            )?
            (
                \\s*(PRIMARY\\s+KEY)?\\s*
            )?
        )
        `;
        let regexCreateTableSyntax = `
        ${this.regex.createTable}
        [(]
            (\\s*
                (
                    \\s*${info}[,]
                )*
                (
                    \\s*${info}
                )
            )
        \\s*[)]\\s*([;])
        `.toLowerCase().replace(/\s+/g, '').trim();

        return regexCreateTableSyntax;
    }
 
    getDataTypeAndSize(str: Array<string>) {
        let secondMatch = str[1];
        let inputType, size = '';
        let dataType = secondMatch;
        let matchValBtwParen = secondMatch.match(new RegExp(this.regex.valueBtwParentheses));
        let hasValueBtwParen = false;
       
        if (matchValBtwParen !== null) {
            hasValueBtwParen = true;
            dataType = secondMatch.replace(matchValBtwParen[0], '');
        } else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) { //has more than 2 elements
                let thirdMatch = str[2];
                matchValBtwParen = thirdMatch.match(new RegExp(this.regex.valueBtwParentheses)); //get value between parentheses
                if (matchValBtwParen !== null){ // it goes to the next index if parentheses doesn't exists
                    hasValueBtwParen = true;
                    this._wordIndex = 3;
                }
            }
        }

        if (hasValueBtwParen) {
            let numeric = matchValBtwParen[1];
            let onlyNumericRegex = new RegExp(`^${this.regex.onlyNumeric}$`);
            if (!onlyNumericRegex.test(numeric)) {
                this._errors.push(`\`${this.table.columnName}\`: ${numeric} is not a number!`);
            }
            size = numeric;
        }

        let database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        } else {
            this._errors.push(`Check the manual for the right syntax to use near '${this.table.columnName}'`);
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;
    }

    validateSyntax(words: Array<string>): void {
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
        for (let i = this._wordIndex; i < words.length; i++) {
            let currentWord = words[i].replace(/,/g, "");
            let hasError = false;
            let nextValue = '';
            let prevValue = '';
            if (typeof allowed[currentWord] === 'undefined') {
                this._errors.push(`Check the manual for the right syntax to use near '${this.table.columnName}'`);
            } else {
                let index = i + 1;
                if (i === words.length - 1) {
                    index = words.length - 1;
                }
                let nextString = words[index];
                let prevString = words[i - 1];

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
                    this._errors.push(`error: \`${currentWord}\` maybe \`${allowed[currentWord].correct}\` ? at line: ${this.table.columnName}`);
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._wordIndex = 2;
    }

    convert(): void {
        let regex = new RegExp(this.regex.createTableSyntax);
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        console.log(this._string);
        if(!regex.test(this._string)){
            this._errors.push(
                `Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )`,
                `You have an error in your SQL syntax:`
            );
        }

        var createTable = (new RegExp(`${this.regex.createTable}([^\\(]*(\\(.*\\))[^\\)])`)).exec(this._string);
        let defineColumns = [];
        if(createTable){
            this.tableName  = createTable[1];
            defineColumns   = createTable[3].replace(/^\((.+)\)$/, '$1')
            .replace(new RegExp(this.regex.valueBtwParentheses, "g"), (string, first) => {
                let regex = new RegExp(this.regex.onlyNumeric, 'g');
                if(regex.test(first)){
                    return "(" +  first.replace(/,/g, '.') + ")";
                }
                return string;
            })
            .split(",")
            .reduce((previous, currentValue) => {
                if (previous && currentValue !== '') {
                    previous.push(
                        currentValue.replace(/\s+/g, " ")
                            .trim()
                                .toLowerCase()
                    );
                }
                return previous;
            }, []);
        }
        
        let i = 0;
        while (i < defineColumns.length/* && this._errors.length <= 0*/) {
            let currentDefineColumn = defineColumns[i];
            let eachWords = currentDefineColumn.split(' '); //break the define columns into words

            if (eachWords.length <= 1) {
                //this._errors.push(`Incompleted`);
            } else {
                this.table.columnName = eachWords[0]; // column name
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

    getTableName(){
        return this.tableName;
    }

    getData() {
        return this._data;
    }

    setString(_string: string) {
        this._string = _string;
    }

    getString(): string {
        return this._string;
    }

    getError() {
        return this._errors.filter((item, pos) => {
            return this._errors.indexOf(item) == pos;
        });
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
        return this._errors.length > 0? true : false;
    }
}