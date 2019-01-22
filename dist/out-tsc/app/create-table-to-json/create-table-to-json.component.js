var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { CreateTableToJsonService } from '../services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../services/bootstrap-grid-system.service';
import { DatabaseService } from '../shared/services/database.service';
var CreateTableToJsonComponent = /** @class */ (function () {
    function CreateTableToJsonComponent(db) {
        this.db = db;
        this.pageChange = new EventEmitter();
        this.options = {
            database: 'oracle'
        };
        this.gridModel = '4 4 4';
        this.errors = [];
        this.database = [];
    }
    CreateTableToJsonComponent.prototype.ngOnInit = function () {
        this.database = this.db.getDBName();
        this.string = "\nsupplier_id number(10) NOT NULL  ,\nsupplier_name varchar2(50) NOT NULL,\naddress varchar2(50),\ncity varchar2(50),\nstate varchar2(25),\ndat_now date,\nzip_code varchar2(10)".trim();
    };
    CreateTableToJsonComponent.prototype.onSubmit = function () {
    };
    CreateTableToJsonComponent.prototype.createTable = function () {
        var ct = new CreateTableToJsonService();
        ct.setString(this.string);
        ct.convert();
        this.errors = ct.getError();
        if (!ct.hasError()) {
            var data = ct.getData();
            var bootstrapGridSystem = new BootstrapGridSystemService(data, this.gridModel);
            bootstrapGridSystem.convert();
            var pages = bootstrapGridSystem.getPage();
            this.pageChange.emit(pages);
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "pageChange", void 0);
    CreateTableToJsonComponent = __decorate([
        Component({
            selector: 'app-create-table-to-json',
            templateUrl: './create-table-to-json.component.html',
            styleUrls: ['./create-table-to-json.component.css']
        }),
        __metadata("design:paramtypes", [DatabaseService])
    ], CreateTableToJsonComponent);
    return CreateTableToJsonComponent;
}());
export { CreateTableToJsonComponent };
//# sourceMappingURL=create-table-to-json.component.js.map