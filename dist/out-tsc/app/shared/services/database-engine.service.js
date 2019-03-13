var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var DatabaseEngine = /** @class */ (function () {
    function DatabaseEngine() {
    }
    DatabaseEngine.getDatabaseEngines = function () {
        var _this = this;
        return Object.keys(this.engines).map(function (item) {
            return {
                engine: item.toLowerCase(),
                logo: _this.engines[item].logo
            };
        });
    };
    //Default is "ORACLE"
    DatabaseEngine.get = function (dbName) {
        if (dbName === void 0) { dbName = "ORACLE"; }
        var engineExists = Object.keys(this.engines).find(function (item) {
            return item == dbName;
        });
        if (engineExists) {
            var t = {};
            for (var key in this.engines[dbName].types) {
                if (this.engines[dbName].types.hasOwnProperty(key)) {
                    t[key] = this.engines[dbName].types[key].toLowerCase();
                }
            }
            return t;
        }
        return {};
    };
    DatabaseEngine.type = 'ORACLE'; //Oracle as Default
    /*
    key = data_type. ex: type CHAR
    value = input type of html. ex. <input type="text" />
    | key         | type
    | CHAR        | <input type="text" />
    | NUMBER      | <input type="number" />
    | TIMESTAMP   | <input type="text" class="datepicker"/> //from datepicker plugin
    | VARCHAR2    | <textarea></textarea>
    */
    DatabaseEngine.engines = {
        ORACLE: {
            logo: 'https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif',
            types: {
                CHAR: 'text',
                NCHAR: 'text',
                VARCHAR2: 'textarea',
                VARCHAR: 'textarea',
                NVARCHAR2: 'textarea',
                INTEGER: 'number',
                /*CLOB : true,
                NCLOB : true,*/
                LONG: 'number',
                NUMBER: 'number',
                DATE: 'date',
                INTERVAL: 'text',
                TIMESTAMP: 'date'
            }
        },
        MYSQL: {
            logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
            types: {
                //integer
                INT: 'TEXT',
                SMALLINT: 'TEXT',
                TINYINT: 'TEXT',
                MEDIUMINT: 'TEXT',
                BIGINT: 'TEXT',
                //real
                FLOAT: 'NUMBER',
                DOUBLE: 'NUMBER',
                DECIMAL: 'NUMBER',
                //text
                CHAR: 'TEXT',
                VARCHAR: 'TEXT',
                TEXT: 'TEXT',
                MEDIUMTEXT: 'TEXT',
                LONGTEXT: 'TEXT',
                //binary
                BINARY: 'TEXT',
                //temporal
                DATE: 'TEXT',
                TIME: 'TEXT',
                DATETIME: 'TEXT',
                TIMESTAMP: 'TEXT'
            }
        }
    };
    DatabaseEngine = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], DatabaseEngine);
    return DatabaseEngine;
}());
export { DatabaseEngine };
//# sourceMappingURL=database-engine.service.js.map