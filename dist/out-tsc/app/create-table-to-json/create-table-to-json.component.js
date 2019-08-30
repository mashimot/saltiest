var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateTableToJsonService } from '../_services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../_services/bootstrap-grid-system.service';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { Injectable } from '@angular/core';
var JoeysWorldTour = /** @class */ (function () {
    function JoeysWorldTour() {
        this.rules = {
            plural: {
                'ns': 'm',
                'res': 'r',
                'zes': 'z',
                'ses': 's',
                'ais': 'al',
                'éis': 'el',
                'óis': 'ol',
                'uis': 'ul',
                'ões': 'ão',
                'x': 'x'
            },
            singular: {
                'm': 'ns',
                'r': 'es',
                'z': 'es',
                's': 'ses',
                'al': 'ais',
                'el': 'éis',
                'ol': 'óis',
                'ul': 'uis',
                'ão': 'ões',
                'x': 'x'
            }
        };
        this.exceptionWords = {
            'lápis': 'lápis',
            'atlas': 'atlas',
            'pires': 'pires',
            'ônibus': 'ônibus',
            'vírus': 'vírus'
        };
    }
    //plural to singular
    JoeysWorldTour.prototype.singularize = function () {
        if (!this.hasWordException()) {
            for (var pluralKey in this.rules.plural) {
                var singular = this.rules.plural[pluralKey];
                if (this.word.endsWith(pluralKey)) {
                    return this.word.replace(new RegExp(pluralKey + "$"), singular);
                }
                else {
                    var res = this.word.split("");
                    res.pop();
                    return res.join("");
                }
            }
        }
        return this.word;
    };
    //singular to plural
    JoeysWorldTour.prototype.pluralize = function () {
        if (!this.hasWordException()) {
            for (var singularKey in this.rules.singular) {
                var plural = this.rules.singular[singularKey];
                if (this.word.endsWith(singularKey)) {
                    return this.word.replace(new RegExp(singularKey + "$"), plural);
                }
            }
        }
        return this.word;
    };
    JoeysWorldTour.prototype.hasWordException = function () {
        var _this = this;
        var hasWord = Object.keys(this.exceptionWords)
            .filter(function (word) { return word == _this.word; });
        return (hasWord.length > 0) ? true : false;
    };
    JoeysWorldTour.prototype.setWord = function (word) {
        this.word = word;
        return this;
    };
    JoeysWorldTour = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JoeysWorldTour);
    return JoeysWorldTour;
}());
export { JoeysWorldTour };
var Silabalize = /** @class */ (function () {
    function Silabalize() {
        this.vogais = ['a', 'e', 'i', 'o', 'u'];
        this.word = 'chuva';
        this.rules = {
            separam: {
                hiatos: this.hiatos(),
                digrafos: ['rr', 'ss', 'sc', 'sç', 'xc']
            },
            n_separam: {
                digrafos: ['ch', 'lh', 'nh', 'gu', 'qu']
            }
        };
    }
    Silabalize.prototype.hiatos = function () {
        var _this = this;
        var hiatos = [];
        this.vogais.forEach(function (v1) {
            _this.vogais.forEach(function (v2) {
                hiatos.push("" + v1 + v2);
            });
        });
        return hiatos;
    };
    Silabalize.prototype.silabalize = function () {
        var _this = this;
        console.log(this.rules.separam.hiatos);
        var joeys = [];
        for (var separamKey in this.rules.separam) {
            var separam = this.rules.separam[separamKey];
            var v = separam.map(function (w) {
                if (_this.word.indexOf(w) != -1) {
                    return _this.word.indexOf(w);
                }
                return null;
            })
                .filter(function (w) { return w; });
            joeys.push(v);
        }
        joeys = Array.prototype.concat.apply([], joeys);
        var auxWord = this.word.split("");
        joeys.forEach(function (index) {
            auxWord.splice(index + 1, 0, "-");
        });
        var hue = auxWord.join("");
        console.log(hue);
    };
    Silabalize.prototype.setWord = function (word) {
        this.word = word;
    };
    return Silabalize;
}());
export { Silabalize };
var CreateTableToJsonComponent = /** @class */ (function () {
    function CreateTableToJsonComponent(joeys) {
        this.joeys = joeys;
        this.pageChange = new EventEmitter();
        this.tableNameChange = new EventEmitter();
        this.options = {
            database: 'oracle',
            logo: ''
        };
        this.tabNumber = 1;
        this.gridModel = '4 4 4';
        this.errors = [];
        this.database = [];
    }
    CreateTableToJsonComponent.prototype.ngOnInit = function () {
        this.database = DatabaseEngine.getDatabaseEngines();
        this.setDatabaseEngineLogo(this.options.database);
        this.string = [
            'create table if not exists random_table_1 (',
            'supplier_id number(10) not null primary key,',
            '`cod_user` number(10) not null,',
            '`favorite_fruit` varchar2(10) default 10 not null,',
            'supplier_name varchar2(50) not null,',
            'address varchar2(50),',
            'city varchar2(50),',
            'state varchar2(25),',
            'dat_now date,',
            'zip_code number(10),price number(10.2)',
            ');'
        ].join("\n");
        var s = new Silabalize;
        s.silabalize();
    };
    CreateTableToJsonComponent.prototype.onSubmit = function () {
    };
    CreateTableToJsonComponent.prototype.setDatabaseEngineLogo = function (value) {
        for (var i = 0; i < this.database.length; i++) {
            if (this.database[i].engine == value) {
                this.options.database = value;
                this.options.logo = this.database[i].logo;
                break;
            }
        }
    };
    CreateTableToJsonComponent.prototype.createTable = function () {
        var ct = new CreateTableToJsonService();
        ct.setString(this.string);
        ct.parse();
        this.errors = ct.getError();
        console.log(ct.hasError());
        if (!ct.hasError()) {
            var data = ct.getData();
            console.log(data);
            var bootstrapGridSystem = new BootstrapGridSystemService(data, this.gridModel + "\n");
            bootstrapGridSystem.convert();
            var pages = bootstrapGridSystem.getPage();
            this.tableNameChange.emit(ct.getTableName()
            //this.joeys.setWord(ct.getTableName()).singularize()
            );
            this.pageChange.emit(pages);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CreateTableToJsonComponent.prototype, "tableName", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "pageChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "tableNameChange", void 0);
    CreateTableToJsonComponent = __decorate([
        Component({
            selector: 'app-create-table-to-json',
            templateUrl: './create-table-to-json.component.html',
            styleUrls: ['./create-table-to-json.component.css']
        }),
        __metadata("design:paramtypes", [JoeysWorldTour])
    ], CreateTableToJsonComponent);
    return CreateTableToJsonComponent;
}());
export { CreateTableToJsonComponent };
//# sourceMappingURL=create-table-to-json.component.js.map