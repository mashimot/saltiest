import { Injectable } from '@angular/core';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Content, Html, Table } from "./../_core/model";
import * as nearley from 'nearley';
import * as bracketexpr_grammar from './../_parser/create-table-oracle-to-json';


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
    columnConstraints: Array<string> = [
        'null', 
        'not null myass', 
        'primary key', 
        'unique',
        'check',
        'default (?:["]{string}["]|[(]{string}[)]|[\']{string}[\']|{number}|-{number})',
        'enum [(]{list}[)]'
    ];
    regex: {
        [key:string]: string
    } = {
        createTableSyntax: '',
        createTable: `\\s*create\\s+table(?:\\s+if\\s+not\\s+exists)?\\s+(\\w+)\\s*`,
        onlyNumeric: `(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)`,
        valueBtwParentheses: `\\(([^)]*)\\)`,
        stringRestriction: `^[\\s\\w+\\_\\-\\,\\.()]*$`,
        onlyWords: `\\w+`
    };


    constructor(DB: string) {
        const bexpr_parser = new nearley.Parser(nearley.Grammar.fromCompiled(bracketexpr_grammar))

        bexpr_parser.feed('crEAtE taBle easdad (q cLoB,   z  cLob PRImarY key      PrImAry KeY  NULl );')
        alert();
        console.log(bexpr_parser.results[0])
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
    convertToRegex(columnConstraints): Array<string> {
        return columnConstraints.mfap(c => {
            return c.split(" ")
            .filter(value => value != null)
            .map(item => {
                return item
                .replace(
                    /{string}/ig, 
                    this.regex.onlyWords
                )
                .replace(
                    /{number}/ig, 
                    this.regex.onlyNumeric
                );
            })
            .join(" ");
        });    
    }

    createTableSyntax(): string {
        var types               = Object.keys(this._dataBase).join("|");
        var column_names         = `[\`]${this.regex.onlyWords}[\`]|(${this.regex.onlyWords})`;
        var columnConstraints   = this.convertToRegex(this.columnConstraints)
        .map(constraint => `(?:${constraint}?)?`)
        .join("")
        .replace(/\s+/g, '\\s+')

        let row = `
        (
            (?:
                ${column_names}
            )
            \\s+
            (?:
                (${types})(\\s*)?
                (
                    ([(]${this.regex.onlyNumeric}[)])
                )?
            )
            \\s+?
            (?:
                (${columnConstraints})*
            )?
        )`;

        let regexCreateTableSyntax = `
        ${this.regex.createTable}
        [(]
            (\\s*
                (
                    \\s*${row}[,]
                )*
                (
                    \\s*${row}
                )
            )\\s*
        [)]\\s*([;])`
        .toLowerCase()
        .replace(/\s+/g, '')
        .trim();

        console.log(regexCreateTableSyntax);
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
            //(2) probably the next element -thirdMatch- must have(or not) the size of the column_name (it must be an integer or float)
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
                this._errors.push(`\`${this.table.column_name}\`: ${numeric} is not a number!`);
            }
            size = numeric;
        }

        let database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        } else {
            this._errors.push(`Check the manual for the right syntax to use near '${this.table.column_name}'`);
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;

        return this;
    }

    getColumnName(words: Array<string>){
        this.table.column_name = words[0].replace(/`/g, ""); // column name
        return this;
    }

    validateSyntax(words: Array<string>): void {
        let value   = '';
        let allowed = {
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

        for (let i = this._wordIndex; i < words.length; i++) {
            let currentWord = words[i].replace(/,/g, "");
            let isDiff = [];
            let nextValue = '';
            let prevValue = '';
            if (typeof allowed[currentWord] != 'undefined') {
                let index = i + 1;
                if (i === words.length - 1) {
                    index = words.length - 1;
                }
                let nextString = words[index];
                let prevString = words[i - 1];
                let huehue = [];
                //console.log(allowed[currentWord].nextWord);
                if (allowed[currentWord].nextWord.length > 0) {
                    for(var k = 0; k < allowed[currentWord].nextWord.length; k++){
                        huehue.push(words[k + index]);
                    }
                    isDiff = allowed[currentWord].nextWord.filter(w => {
                        return !huehue.includes(w);
                    });
                    if(isDiff.length > 0){
                        nextValue = allowed[currentWord].nextWord.join(' ');
                    }
                }
                if (allowed[currentWord].previousWord.length > 0) {
                    for(var j = 0; j < allowed[currentWord].previousWord.length; j++){
                        huehue.push(words[(i - 1) - j]);
                    }
                    isDiff = allowed[currentWord].previousWord.filter(w => {
                        return !huehue.includes(w);
                    });
                    if(isDiff.length > 0){
                        prevValue = allowed[currentWord].previousWord.join(' ');
                    }
                }
                value += `${prevValue} ${currentWord} ${nextValue}`;

                if(isDiff.length > 0){
                    this._errors.push(`error: \`${currentWord}\` maybe \`${allowed[currentWord].correct}\` ? at line: ${this.table.column_name}`);
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        //console.log(value);
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.is_primary_key = (value.indexOf("primary key") !== -1) ? true : false;

        this._wordIndex = 2;
    }

    convert(): void {
        let defineColumns = [];
        const regex = new RegExp(this.regex.createTableSyntax);
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        const groups = regex.exec(this._string);
        if (groups == null) {
            this._errors.push(
                `Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )`,
                `You have an error in your SQL syntax:`
            );
        } else {
            console.log(groups);
        }

        var createTable = new RegExp(
            `${this.regex.createTable}([^\\(]*(\\(.*\\))[^\\)])`
        ).exec(this._string);
        
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
        console.log(this._data)
    }

    customLabelName() {
        this.html.label = this.table.column_name.split('_')
        .map(partialName => {
            let value = this._customLabel[partialName];
            if (typeof value !== 'undefined')
                partialName = value;

            return partialName.charAt(0).toUpperCase() + partialName.substr(1);
        })
        .join(' ')
        .trim();

        return this;
    }
   
    customInput() {
        if (this.table.column_name.indexOf('ind_') !== -1)
            this.html.tag = 'select';

        if (this.html.tag === 'text' || this.html.tag === 'textarea') {
            //this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
            this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
        }

        return this;
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