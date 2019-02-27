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
        return Object.keys(this.engines).map(function (data) { return data.toLowerCase(); });
    };
    DatabaseEngine.get = function (type) {
        if (type === void 0) { type = "ORACLE"; }
        var engineExists = Object.keys(this.engines).find(function (item) {
            return item == type;
        });
        if (engineExists) {
            return this.engines[type];
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