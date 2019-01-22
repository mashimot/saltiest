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
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.getDBName = function () {
        return Object.keys(this.get()).map(function (data) { return data.toLowerCase(); });
    };
    DatabaseService.prototype.getType = function () {
        return Object.keys(this.get()['ORACLE']).map(function (data) { return data.toLowerCase(); });
    };
    //key = data_type. ex: type CHAR
    //value = input type of html. ex. <input type="text" />
    /*| key         | type
      | CHAR        | <input type="text" />
      | NUMBER      | <input type="number" />
      | TIMESTAMP   | <input type="text" class="datepicker"/> //from datepicker plugin
      | VARCHAR2    | <textarea></textarea>
      */
    DatabaseService.prototype.get = function () {
        return {
            ORACLE: {
                CHAR: 'text',
                NCHAR: 'text',
                VARCHAR2: 'textarea',
                VARCHAR: 'textarea',
                NVARCHAR2: 'textarea',
                INTEGER: 'text',
                /*CLOB : true,
                NCLOB : true,*/
                LONG: 'text',
                NUMBER: 'number',
                DATE: 'date',
                INTERVAL: 'text',
                TIMESTAMP: 'date'
            }
        };
    };
    DatabaseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatabaseService);
    return DatabaseService;
}());
export { DatabaseService };
//# sourceMappingURL=database.service.js.map