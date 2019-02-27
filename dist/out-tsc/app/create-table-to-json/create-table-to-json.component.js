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
import { DatabaseEngine } from '../shared/services/database-engine.service';
var CreateTableToJsonComponent = /** @class */ (function () {
    function CreateTableToJsonComponent() {
        this.pageChange = new EventEmitter();
        this.options = {
            database: 'oracle'
        };
        this.gridModel = '4 4 4';
        this.errors = [];
        this.database = [];
    }
    CreateTableToJsonComponent.prototype.ngOnInit = function () {
        this.database = DatabaseEngine.getDatabaseEngines();
        this.string = [
            'create table random_table_1 (',
            'supplier_id number(10)  not null,',
            'supplier_name varchar2(50) not null,',
            'address varchar2(50),',
            'city varchar2(50),',
            'state varchar2(25),',
            'dat_now date,',
            'zip_code varchar2(10),price number(12,2)',
            ');'
        ].join("\n");
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
        __metadata("design:paramtypes", [])
    ], CreateTableToJsonComponent);
    return CreateTableToJsonComponent;
}());
export { CreateTableToJsonComponent };
//# sourceMappingURL=create-table-to-json.component.js.map