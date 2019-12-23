var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableToJsonComponent } from './create-table-to-json.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var CreateTableToJsonModule = /** @class */ (function () {
    function CreateTableToJsonModule() {
    }
    CreateTableToJsonModule = __decorate([
        NgModule({
            declarations: [
                CreateTableToJsonComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                NgbModule
            ],
            exports: [
                CreateTableToJsonComponent
            ]
        })
    ], CreateTableToJsonModule);
    return CreateTableToJsonModule;
}());
export { CreateTableToJsonModule };
//# sourceMappingURL=create-table-to-json.module.js.map