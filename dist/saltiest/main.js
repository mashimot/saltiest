(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _spell_checker_spell_checker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spell-checker/spell-checker.component */ "./src/app/spell-checker/spell-checker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'spell-checker', component: _spell_checker_spell_checker_component__WEBPACK_IMPORTED_MODULE_3__["SpellCheckerComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"splash\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<img src=\"https://i.imgur.com/WlEBazl.png\" alt=\"\">\t\t\t\t\n\t\t\t\t<div id=\"social\">\n\t\t\t\t\t<span class=\"center-block text-center\">\n\t\t\t\t\t\t<iframe id=\"gh-star\" src=\"https://ghbtns.com/github-btn.html?user=mashimot&repo=saltiest&type=watch&count=true\" width=\"110\" height=\"20\" style=\"border: none;\"></iframe>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'salt';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _form_builder_form_builder_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-builder/form-builder.module */ "./src/app/form-builder/form-builder.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _form_builder_form_builder_module__WEBPACK_IMPORTED_MODULE_11__["FormBuilderModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"].forRoot()
            ],
            providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-table-to-json/create-table-to-json.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/create-table-to-json/create-table-to-json.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-table-to-json/create-table-to-json.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/create-table-to-json/create-table-to-json.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n    <div class=\"col-md-12\">\n        <form class=\"card\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <section type=\"pills\" active=\"active\" justified=\"true\">\n                            <div index=\"0\" heading=\"Create Table\">\n                                <textarea [(ngModel)]=\"string\"\n                                          name=\"string\"\n                                          [ngClass]=\"{ 'is-invalid' : errors.length > 0 }\"\n                                          class=\"form-control form-control-sm h-100\"\n                                          rows=\"10\"></textarea>\n                                <div *ngIf=\"errors\" class=\"invalid-feedback\">\n                                    <div *ngFor=\"let e of errors\">\n                                        {{ e.message }}\n                                    </div>\n                                </div>\n                            </div>\n                            <div index=\"1\" heading=\"JSON\">\n                                <pre>{{ primaryKeys | json }}</pre>\n                            </div>\n                        </section>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"form_ct_database\">Database</label>\n                            <select id=\"form_ct_database\" class=\"form-control\" [(ngModel)]=\"options.database\" name=\"database\">\n                                <option *ngFor=\"let db of database\" [value]=\"db\">{{ db }}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"form_ct_grid\">Bootstrap Grid</label>\n                            <input type=\"text\"\n                                   id=\"form_ct_grid\"\n                                   [(ngModel)]=\"gridModel\"\n                                   name=\"grid\"\n                                   [ngClass]=\"{ 'is-invalid': f.controls.grid?.invalid }\"\n                                   class=\"form-control form-control-sm\"\n                                   [ngStyle]=\"{ cursor: 'pointer' }\"\n                                   sumBeEqualsTo=\"12\"\n                                   minlength=\"2\"\n                                   pattern=\"[0-9 ]+\"\n                                   required>\n                            <div *ngIf=\"f.controls.grid?.invalid || f.controls.grid?.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.controls.grid?.errors?.required \">* Enter with your grid.</div>\n                                <div *ngIf=\"f.controls.grid?.errors?.pattern\">* Allows only numbers and space.</div>\n                                <div *ngIf=\"f.controls.grid?.errors?.minlength\">* Min. Length is {{ f.controls.grid?.errors.minlength.requiredLength }}.</div>\n                                <div *ngIf=\"f.controls.grid?.errors?.isSumInvalid\">* The sum must be equals to {{ f.controls.grid.errors?.sumBeEqualsTo }}.</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-primary btn-block\" (click)=\"createTable()\">Generate</button>\n            </div>\n        </form>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/create-table-to-json/create-table-to-json.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/create-table-to-json/create-table-to-json.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateTableToJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTableToJsonComponent", function() { return CreateTableToJsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_create_table_to_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/create-table-to-json.service */ "./src/app/services/create-table-to-json.service.ts");
/* harmony import */ var _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bootstrap-grid-system.service */ "./src/app/services/bootstrap-grid-system.service.ts");
/* harmony import */ var _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/database-engine.service */ "./src/app/shared/services/database-engine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTableToJsonComponent = /** @class */ (function () {
    function CreateTableToJsonComponent() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = {
            database: 'oracle'
        };
        this.gridModel = '4 4 4';
        this.errors = [];
        this.database = [];
    }
    CreateTableToJsonComponent.prototype.ngOnInit = function () {
        this.database = _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseEngine"].getDatabaseEngines();
        this.string = [
            'supplier_id number(10) NOT NULL',
            'supplier_name varchar2(50) NOT NULL',
            'address varchar2(50)',
            'city varchar2(50)',
            'state varchar2(25)',
            'dat_now date',
            'zip_code varchar2(10),price NUMBER(12,2)'
        ].join(",\n");
    };
    CreateTableToJsonComponent.prototype.onSubmit = function () {
    };
    CreateTableToJsonComponent.prototype.createTable = function () {
        var ct = new _services_create_table_to_json_service__WEBPACK_IMPORTED_MODULE_1__["CreateTableToJsonService"]();
        ct.setString(this.string);
        ct.convert();
        this.errors = ct.getError();
        if (!ct.hasError()) {
            var data = ct.getData();
            var bootstrapGridSystem = new _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_2__["BootstrapGridSystemService"](data, this.gridModel);
            bootstrapGridSystem.convert();
            var pages = bootstrapGridSystem.getPage();
            this.pageChange.emit(pages);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "pageChange", void 0);
    CreateTableToJsonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-table-to-json',
            template: __webpack_require__(/*! ./create-table-to-json.component.html */ "./src/app/create-table-to-json/create-table-to-json.component.html"),
            styles: [__webpack_require__(/*! ./create-table-to-json.component.css */ "./src/app/create-table-to-json/create-table-to-json.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateTableToJsonComponent);
    return CreateTableToJsonComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-choices/config-choices.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-choices/config-choices.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-choices/config-choices.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-choices/config-choices.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-header\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-5\">\n\t\t\t<button class=\"btn btn-secondary btn-sm btn-block\" type=\"button\" (click)=\"orderBy('text')\">\n\t\t\t\tOrder by Text\n\t\t\t\t<span ng-show=\"sortType == 'text' && !sortReverse\" class=\"fa fa-caret-down\"></span>\n\t\t\t\t<span ng-show=\"sortType == 'text' && sortReverse\" class=\"fa fa-caret-up\"></span>\n\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t<button class=\"btn btn-secondary btn-sm btn-block\" type=\"button\" (click)=\"orderBy('value')\">\n\t\t\t\tOrder by Value\n\t\t\t\t<span ng-show=\"sortType == 'value' && !sortReverse\" class=\"fa fa-caret-down\"></span>\n\t\t\t\t<span ng-show=\"sortType == 'value' && sortReverse\" class=\"fa fa-caret-up\"></span>\n\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t<button class=\"btn btn-secondary btn-sm btn-block\" type=\"button\" (click)=\"addElement()\">\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card-body\" [formGroup]=\"parentFormGroup.controls.html\"\n\t[ngClass]=\"{ 'is-invalid': elements.invalid }\">\n\n\t\t<div *ngIf=\"elements.invalid || elements.touched\" class=\"invalid-feedback\">\n\t\t\t<div *ngIf=\"elements.errors?.required\">Array, woo woo woo</div>\n\t\t</div>\n\t\t<div [dragula]='\"sortableElements\"'\n\t\t\t[(dragulaModel)]=\"elements.controls\"\n\t\t\tformArrayName=\"elements\">\n\t\t\t<div *ngFor=\"let element of elements.controls; let id = index;\"\n\t\t\t\t[formGroupName]=\"id\"\n\t\t\t\tclass=\"sortable-item-contents\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\tformControlName=\"text\"\n\t\t\t\t\t\t\t(input)=\"elementChanged()\"\n\t\t\t\t\t\t\tclass=\"form-control form-control-sm\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': getField('text', id).invalid }\" />\n\t\t\t\t\t\t<div *ngIf=\"getField('text', id).invalid || getField('text', id).touched\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"getField('text', id).errors?.required\">You did not enter a field</div>\n\t\t\t\t\t\t<div *ngIf=\"getField('text', id).errors?.minlength\">Your field is too short</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\tformControlName=\"value\"\n\t\t\t\t\t\t\t(input)=\"elementChanged()\"\n\t\t\t\t\t\t\tclass=\"form-control form-control-sm\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': getField('value', id).invalid }\" />\n\t\t\t\t\t\t<div *ngIf=\"getField('value', id).invalid || getField('value', id).touched\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"getField('value', id).errors?.required\">You did not enter a field</div>\n\t\t\t\t\t\t<div *ngIf=\"getField('value', id).errors?.minlength\">Your field is too short</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger btn-sm btn-block\" (click)=\"removeContent(id)\">\n\t\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<span class=\"element-handle\">\n\t\t\t\t\t\tmove\n\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<button type=\"button\" (click)=\"cloneThis('value')\" class=\"btn btn-secondary btn-sm btn-block\">\n\t\t\t\t\tClone Text to Values\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<button type=\"button\" (click)=\"cloneThis('text')\" class=\"btn btn-secondary btn-sm btn-block\">\n\t\t\t\t\tClone Values To Text\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card-footer\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"fast-entry\">Fast Entry</label>\n\t\t\t<textarea id=\"fast-entry\"\n\t\t\t\t\t[(ngModel)]=\"text\"\n\t\t\t\t\t(ngModelChange)=\"stringToElement()\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tstyle=\"resize: none; height: 210px;\"></textarea>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-choices/config-choices.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-choices/config-choices.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfigChoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigChoicesComponent", function() { return ConfigChoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigChoicesComponent = /** @class */ (function () {
    function ConfigChoicesComponent(dragulaService, fb) {
        this.dragulaService = dragulaService;
        this.fb = fb;
        this.text = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        dragulaService.createGroup('sortableElements', {
            moves: function (el, container, handle) {
                return handle.classList.contains('element-handle');
            }
        });
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.dropModel('sortableElements').subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            _this.elements.controls = sourceModel;
            _this.text = _this.elementToString();
        }));
        this.html = this.parentFormGroup.controls.html;
    };
    ConfigChoicesComponent.prototype.ngOnChanges = function () {
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.elementChanged = function () {
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.addElement = function () {
        this.elements.push(this.getElement());
    };
    ConfigChoicesComponent.prototype.getElement = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            'text': [text, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]],
            'value': [value, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]]
        });
    };
    ConfigChoicesComponent.prototype.stringToElement = function () {
        if (this.text.length > 0) {
            var string = this.text.split('\n');
            var cloneElements = JSON.parse(JSON.stringify(this.elements.value));
            for (var i = 0; i < string.length; i++) {
                var str = string[i];
                var firstMatch = str;
                var secondMatch = '';
                if (str.indexOf('|') !== -1) {
                    var match = str.split('|');
                    firstMatch = match[0];
                    secondMatch = str.substring(firstMatch.length + 1); //return '' if '|' was not found
                }
                var text = (typeof firstMatch !== 'undefined') ? firstMatch : '';
                var value = (typeof secondMatch !== 'undefined') ? secondMatch : '';
                this.elements.removeAt(i);
                if (typeof this.elements.controls[i] === 'undefined') {
                    this.elements.push(this.getElement(text, value));
                }
                else {
                    this.elements.controls[i].patchValue({
                        text: text,
                        value: value
                    });
                }
            }
        }
        else {
            while (this.elements.length !== 0) {
                this.elements.removeAt(0);
            }
        }
    };
    ConfigChoicesComponent.prototype.removeContent = function ($index) {
        this.elements.removeAt($index);
        this.text = this.elementToString();
    };
    ConfigChoicesComponent.prototype.orderBy = function (type) {
        if (this.sortType !== type) {
            this.sortReverse = true;
        }
        this.sortReverse = !this.sortReverse;
        this.sortType = type;
    };
    ConfigChoicesComponent.prototype.cloneThis = function (name) {
        var elementsLength = this.elements.value.length;
        if (elementsLength > 0) {
            var cloneThisObjectName = (name === 'value') ? 'text' : 'value';
            for (var i = 0; i < elementsLength; i++) {
                this.elements.value[i][name] = this.elements.value[i][cloneThisObjectName];
            }
            this.text = this.elementToString();
            this.stringToElement();
        }
    };
    ConfigChoicesComponent.prototype.elementToString = function () {
        var string = '';
        //fire the `valueChanges` manually
        this.elements.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        var e = this.elements.value;
        if (typeof e !== 'undefined') {
            if (e.length > 0) {
                for (var i = 0; i < e.length; i++) {
                    var str = e[i];
                    var pipe = (str.value === '') ? '' : '|';
                    var element = {
                        text: typeof str.text !== 'undefined' ? str.text : '',
                        value: typeof str.value !== 'undefined' ? str.value : '',
                    };
                    string += (element.text + pipe + element.value) + (i === e.length - 1 ? '' : "\n");
                }
            }
        }
        return string;
    };
    ConfigChoicesComponent.prototype.getField = function (field, index) {
        return this.elements.controls[index].get(field);
    };
    Object.defineProperty(ConfigChoicesComponent.prototype, "elements", {
        get: function () {
            return this.parentFormGroup.get('html.elements');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigChoicesComponent.prototype, "parentFormGroup", void 0);
    ConfigChoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-choices',
            template: __webpack_require__(/*! ./config-choices.component.html */ "./src/app/form-builder/config/config-choices/config-choices.component.html"),
            styles: [__webpack_require__(/*! ./config-choices.component.css */ "./src/app/form-builder/config/config-choices/config-choices.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-general/config-general.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-general/config-general.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-general/config-general.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-general/config-general.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <form class=\"card-body\">\r\n    <div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.table\">\r\n      <label>\r\n        <div class=\"checkbox-inline\">\r\n          <input type=\"checkbox\"\r\n                 formControlName=\"nullable\"\r\n                 style=\"display: none;\" checked>\r\n          Required?\r\n          <div [ngSwitch]=\"nullable.value\" >\r\n            <span *ngSwitchCase=\"true\"><i class=\"far fa-check-square\"></i> Yes</span>\r\n            <span *ngSwitchCase=\"false\"><i class=\"far fa-square\"></i> No</span>\r\n            <span *ngSwitchDefault><i class=\"far fa-square\"></i> No</span>\r\n          </div>\r\n        </div>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.html\">\r\n      <label>Description:</label>\r\n      <input type=\"text\"\r\n              formControlName=\"label\"\r\n              class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': label.invalid }\"\r\n      />\r\n      <div *ngIf=\"label.invalid || label.touched\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"label.errors?.required\">You did not enter a field</div>\r\n        <div *ngIf=\"label.errors?.minlength\">Your field is too short</div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-general/config-general.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/form-builder/config/config-general/config-general.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfigGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGeneralComponent", function() { return ConfigGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigGeneralComponent = /** @class */ (function () {
    function ConfigGeneralComponent() {
    }
    ConfigGeneralComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ConfigGeneralComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "label", {
        get: function () {
            return this.parentFormGroup.get('html.label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "nullable", {
        get: function () {
            return this.parentFormGroup.get('table.nullable');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigGeneralComponent.prototype, "parentFormGroup", void 0);
    ConfigGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-general',
            template: __webpack_require__(/*! ./config-general.component.html */ "./src/app/form-builder/config/config-general/config-general.component.html"),
            styles: [__webpack_require__(/*! ./config-general.component.css */ "./src/app/form-builder/config/config-general/config-general.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigGeneralComponent);
    return ConfigGeneralComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-html-editor/config-html-editor.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-html-editor/config-html-editor.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"parentFormGroup.controls.html\">\r\n  <div class=\"form-group\">\r\n    <textarea formControlName=\"data\" class=\"form-control h-100\" rows=\"10\"></textarea>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-html-editor/config-html-editor.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfigHtmlEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigHtmlEditorComponent", function() { return ConfigHtmlEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigHtmlEditorComponent = /** @class */ (function () {
    function ConfigHtmlEditorComponent() {
    }
    ConfigHtmlEditorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ConfigHtmlEditorComponent.prototype, "data", {
        get: function () {
            return this.parentFormGroup.get('html.data');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigHtmlEditorComponent.prototype, "parentFormGroup", void 0);
    ConfigHtmlEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-html-editor',
            template: __webpack_require__(/*! ./config-html-editor.component.html */ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.html"),
            styles: [__webpack_require__(/*! ./config-html-editor.component.css */ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigHtmlEditorComponent);
    return ConfigHtmlEditorComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-img/config-img.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/form-builder/config/config-img/config-img.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-img/config-img.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/form-builder/config/config-img/config-img.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.html\">\r\n  <label for=\"title-text\">Image source</label>\r\n  <input type=\"text\"\r\n         id=\"img-src\"\r\n         formControlName=\"src\"\r\n         class=\"form-control\"\r\n         [ngClass]=\"{ 'is-invalid': src.invalid }\"\r\n         />\r\n  <div *ngIf=\"src.invalid || src.touched\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"src.errors?.required\">You did not enter a field</div>\r\n    <div *ngIf=\"src.errors?.minlength\">Your field is too short</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-img/config-img.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/form-builder/config/config-img/config-img.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfigImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigImgComponent", function() { return ConfigImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigImgComponent = /** @class */ (function () {
    function ConfigImgComponent() {
    }
    ConfigImgComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ConfigImgComponent.prototype, "src", {
        get: function () {
            return this.html.get('src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigImgComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigImgComponent.prototype, "parentFormGroup", void 0);
    ConfigImgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-img',
            template: __webpack_require__(/*! ./config-img.component.html */ "./src/app/form-builder/config/config-img/config-img.component.html"),
            styles: [__webpack_require__(/*! ./config-img.component.css */ "./src/app/form-builder/config/config-img/config-img.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigImgComponent);
    return ConfigImgComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-table-builder/config-table-builder.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-table-builder/config-table-builder.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <button type=\"button\" ng-click=\"newColumn()\" class=\"btn btn-outline-primary btn-block btn-sm\">\r\n          <i class=\"fa fa-columns\" aria-hidden=\"true\"></i> New Column\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <button type=\"button\" ng-click=\"newLine()\" class=\"btn btn-outline-primary btn-block btn-sm\">\r\n          <i class=\"fa fa-bars\"></i> New Line\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <pre>{{ content.html.fields | json }}</pre>\r\n\r\n    <div *ngIf=\"content.html.fields.length > 0\">\r\n      <div ng-show=\"hasDuplicateName\" class=\"alert alert-danger\">\r\n        <strong ng-bind=\"duplicatedName\" class=\"text-dark\"></strong> already exists! The name must be unique.\r\n      </div>\r\n      <table class=\"table table-condensed table-bordered\" *ngIf=\"content.html.fields.length > 0\">\r\n        <thead class=\"thead-light\" ui-sortable>\r\n          <tr>\r\n            <th *ngFor=\"let f of fields; let fieldIndex = index;\">\r\n              {{ fieldIndex }}\r\n              <div class=\"input-group input-group-sm\">\r\n                <input type=\"text\"\r\n                       ng-change=\"verifyDuplicates($index, hadouken)\"\r\n                       (blur)=\"newField(fieldIndex, f, hadouken)\"\r\n                       [(ngModel)]=\"hadouken\"\r\n                       [value]=\"f\"\r\n                       class=\"form-control form-control-sm\" />\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text text-danger\" ng-click=\"deleteColumn(key)\">\r\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody ui-sortable>\r\n          <tr *ngFor=\"let field of content.html.fields; let fieldIndex = index;\">\r\n            <td *ngFor=\"let f of fields\">\r\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"field[f]\">\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" ng-click=\"deleteLine(fieldIndex)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <h6 class=\"alert alert-danger\" *ngIf=\"content.html.fields.length <= 0\">\r\n      <i class=\"fa fa-exclamation-triangle\"></i> Empty Table\r\n    </h6>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/form-builder/config/config-table-builder/config-table-builder.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfigTableBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigTableBuilderComponent", function() { return ConfigTableBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigTableBuilderComponent = /** @class */ (function () {
    function ConfigTableBuilderComponent() {
    }
    ConfigTableBuilderComponent.prototype.newField = function (index, key, newKey) {
        //console.log(key);
        console.log(newKey);
        if (typeof newKey !== 'undefined' && newKey.trim() !== '') {
            var fields = this.content.html.fields;
            console.log(fields);
            if (fields.length > 0) {
                for (var i = 0; i < fields.length; i++) {
                    var field = fields[i];
                    fields[i][newKey] = field[key];
                    delete fields[i][key];
                }
                var keysArr = Object.keys(fields[0]);
                var lastItem = keysArr[keysArr.length - 1];
                keysArr.splice(index, 0, lastItem);
                this.content.html.fields = JSON.parse(JSON.stringify(fields, keysArr));
                this.fields = this.getKeyFields();
            }
        }
    };
    ConfigTableBuilderComponent.prototype.ngOnInit = function () {
        this.fields = this.getKeyFields();
    };
    ConfigTableBuilderComponent.prototype.ngOnChanges = function () {
    };
    ConfigTableBuilderComponent.prototype.getKeyFields = function () {
        if (this.content.html.fields.length > 0) {
            return Object.keys(this.content.html.fields[0]);
        }
        return [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "content", void 0);
    ConfigTableBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-table-builder',
            template: __webpack_require__(/*! ./config-table-builder.component.html */ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.html"),
            styles: [__webpack_require__(/*! ./config-table-builder.component.css */ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigTableBuilderComponent);
    return ConfigTableBuilderComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/config/config-title/config-title.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/form-builder/config/config-title/config-title.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/config/config-title/config-title.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/form-builder/config/config-title/config-title.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"  [formGroup]=\"parentFormGroup.controls.html\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title-heading-type\">Heading Type</label>\r\n      <select id=\"title-heading-type\" formControlName=\"tag\" class=\"form-control form-control-sm\">\r\n        <option *ngFor=\"let h of headingTypes\" [value]=\"h\">{{ h }}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title-text\">Title</label>\r\n      <input type=\"text\"\r\n             id=\"title-text\"\r\n             formControlName=\"text\"\r\n             class=\"form-control form-control-sm\"\r\n             [ngClass]=\"{ 'is-invalid': text.invalid }\" />\r\n      <div *ngIf=\"text.invalid || text.touched\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"text.errors?.required\">You did not enter a field</div>\r\n        <div *ngIf=\"text.errors?.minlength\">Your field is too short</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/form-builder/config/config-title/config-title.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/form-builder/config/config-title/config-title.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigTitleComponent", function() { return ConfigTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigTitleComponent = /** @class */ (function () {
    function ConfigTitleComponent() {
    }
    ConfigTitleComponent.prototype.ngOnInit = function () {
        this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    };
    Object.defineProperty(ConfigTitleComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigTitleComponent.prototype, "text", {
        get: function () {
            return this.html.get('text');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigTitleComponent.prototype, "parentFormGroup", void 0);
    ConfigTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-title',
            template: __webpack_require__(/*! ./config-title.component.html */ "./src/app/form-builder/config/config-title/config-title.component.html"),
            styles: [__webpack_require__(/*! ./config-title.component.css */ "./src/app/form-builder/config/config-title/config-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigTitleComponent);
    return ConfigTitleComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/form-builder-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-builder/form-builder-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FormBuilderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderRoutingModule", function() { return FormBuilderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'form-builder', component: _form_builder_component__WEBPACK_IMPORTED_MODULE_2__["FormBuilderComponent"] }
];
var FormBuilderRoutingModule = /** @class */ (function () {
    function FormBuilderRoutingModule() {
    }
    FormBuilderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], FormBuilderRoutingModule);
    return FormBuilderRoutingModule;
}());



/***/ }),

/***/ "./src/app/form-builder/form-builder.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.html":
/*!**********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <app-create-table-to-json (pageChange)=\"getPages($event)\" class=\"col-md-12\"></app-create-table-to-json>\n</div>\n<ul class=\"nav nav-tabs nav-pills\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" (click)=\"tabNumber = 1;\">Salt</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\" (click)=\"tabNumber = 2;\">Salty Suite</a>\n    </li>\n</ul>\n<div class=\"tab-content\">\n    <div *ngIf=\"tabNumber == 1\">\n        <div class=\"row\">\n            <app-form-menu (isNewFile)=\"isNewFile($event)\" (isNewPage)=\"isNewPage($event)\" class=\"col-md-3\"></app-form-menu>\n            <app-form-pages [(pages)]=\"pages\" class=\"col-md-9\"></app-form-pages>\n        </div>\n    </div>\n    <div *ngIf=\"tabNumber == 2\">\n        <app-form-info [(pages)]=\"pages\" class=\"col-md-12\"></app-form-info>\n    </div>\n</div>\n<app-form-config></app-form-config>\n\n<textarea class=\"form-control\" rows=\"40\">\n@extends('Admin.layouts.app_index')\n\n@section('css')\n@endsection\n\n@section('breadcrumb-manual')\n<li>Financeiro</li>\n<li></li>\n@endsection\n\n@section('pagina_header')\n@endsection\n\n@section('pagina_conteudo')    \n    {{ bootstrap.init() }}\n\n    {{ bootstrap.table() }}\n\n    <!-- MODAL CRUD -->\n    {!! $HTML::modalOpen('crud_mudar_aqui', 'Adicionar') !!}\n        {!! $HTML::formOpen('form_mudar_aqui', $acao) !!}  \n            {{ bootstrap.html() }}\n        {!! $HTML::formClose() !!}\n    {!! $HTML::modalClose(true, $HTML::modalBotoesSalvar('mudar_aqui')) !!}\n@endsection   \n \n@section('bibliotecascript')\n    @include('bibliotecas.js.scripts.modalCrud')\n@endsection\n\n@section('script')    \n    {{ bootstrap.script() }}\n@endsection\n</textarea>\n<textarea class=\"form-control\" rows=\"40\">\n    /**\n     * Determine if the user is authorized to make this request.\n     *\n     * @return bool\n     */\n    public function authorize(){\n        return true;\n    }\n\n    public function rules(){\n        $rules = [\n            {{ laravel.rules }}\n        ];\n        return $rules;\n    }\n\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array\n     */\n    public function attributes(){\n        $attributes = [\n            {{ laravel.attributes }}\n        ];\n        return $attributes;\n    }\n</textarea>\n\n<textarea class=\"form-control\" rows=\"40\">\nclass AlgumaClasse extends ModelAuditable {\n  protected $table      = '{{ laravel.table }}';\n  protected $primaryKey = '{{ laravel.primaryKey }}';\n  public $incrementing  = true; \n  public $sequence      = 'sga_{{ laravel.primaryKey }}_seq';  \n  \n  protected $fillable = {{ laravel.fillable }};\n\n}\n</textarea>\n\n"

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.ts ***!
  \********************************************************/
/*! exports provided: Validator, Bootstrap, FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap", function() { return Bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_render_html_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/render-html.service */ "./src/app/services/render-html.service.ts");
/* harmony import */ var _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/home.service */ "./src/app/shared/services/home.service.ts");
/* harmony import */ var _shared_models_html_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/html.model */ "./src/app/shared/models/html.model.ts");
/* harmony import */ var _shared_models_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/table.model */ "./src/app/shared/models/table.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Validator = /** @class */ (function () {
    function Validator() {
        this.inputs = [];
    }
    Validator.prototype.setParams = function (d) {
        this.html = new _shared_models_html_model__WEBPACK_IMPORTED_MODULE_3__["Html"](d.html);
        this.table = new _shared_models_table_model__WEBPACK_IMPORTED_MODULE_4__["Table"](d.table);
    };
    Validator.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    Validator.prototype.getValidator = function () {
        var rules = [];
        rules.push(this.isRequired(), this.getDataType(), this.getMaxlength());
        var rules = rules.filter(function (el) {
            return el != "" && el != null;
        });
        this.rules = "\t'" + this.table.columnName + "' => " + JSON.stringify(rules) + ",\n";
        this.attributes = "\t'" + this.table.columnName + "' => '" + this.html.label + "',\n";
    };
    Validator.prototype.getDataType = function () {
        switch (this.table.type) {
            case 'number':
                return 'numeric';
            case 'date':
                return 'date_format:"d/m/Y"';
            default:
                return null;
        }
    };
    Validator.prototype.getMaxlength = function () {
        if (parseInt(this.table.size) > 0) {
            if (this.table.type == 'number') {
                if (this.table.size.indexOf('.') !== -1) {
                    var sizeArr = this.table.size.split('.');
                    var b = '.';
                    var position = parseInt(sizeArr[0]) - parseInt(sizeArr[1]);
                    var endBetween = '';
                    for (var i = 0; i < parseInt(this.table.size); i++) {
                        endBetween += '9';
                    }
                    var output = [endBetween.slice(0, position), b, endBetween.slice(position)].join('');
                    return "between:0," + output;
                }
                return "digits_between:1," + this.table.size;
            }
            return 'max:' + this.table.size;
        }
        return null;
    };
    Validator.prototype.laravel = function () {
        var _this = this;
        var attr = '';
        var rules = '';
        var fillable = '';
        return this.inputs.reduce(function (prev, curr) {
            _this.setParams(curr);
            _this.getValidator();
            fillable += "\"" + curr.table.columnName + "\",\n";
            return {
                rules: rules += _this.rules,
                attributes: attr += _this.attributes,
                fillable: "[" + fillable + "]",
                th: "<th>" + curr.html.labelName + "</th>",
                primaryKey: '',
                table: ''
            };
        }, {});
    };
    Validator.prototype.isRequired = function () {
        return this.table.nullable ? 'required' : 'nullable';
    };
    Validator.prototype.getMessages = function () {
        return this.messages;
    };
    Validator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Validator);
    return Validator;
}());

var Bootstrap = /** @class */ (function () {
    function Bootstrap(renderHtmlService) {
        this.renderHtmlService = renderHtmlService;
        this.tableName = "i_table_mudar_aqui";
        this.code = '';
    }
    Bootstrap.prototype.init = function () {
        var _this = this;
        this.inputs = [];
        /*this.code   = this.pages.map((page, pageNumber) => {
            return `
            <section class="page-${pageNumber + 1}">
                ${page.rows.map(row => {
                    let grid = row.grid.split(' ');
                    return `
                    <div class="row">
                        ${row.columns.map((column, j) => {
                            return `
                                ${column.contents.map(content => {
                                    if (content.html.category === 'form') {
                                        this.inputs.push(content);
                                    }
                                    content.html['grid'] = grid[j];
                                    this.renderHtmlService.setParams(content);
                                    return this.renderHtmlService.get().code;
                                })}
                            `
                        }).join('')}
                    </div>`
                }).join('')}
            </section>`
        }).join('');*/
        var htmlPages = [];
        var t = "\n\t";
        this.pages.forEach(function (page, pageNumber) {
            htmlPages.push("\n<section class=\"page-" + (pageNumber + 1) + "\">");
            var tabNum = 1;
            t = _this.tabSpace(tabNum);
            page.rows.forEach(function (row) {
                var grid = row.grid.split(' ');
                htmlPages.push(t + "<div class=\"row\">");
                tabNum++;
                t = _this.tabSpace(tabNum);
                row.columns.forEach(function (column, j) {
                    //htmlPages.push(`${t}<div class="col-md-${grid[j]}">`);
                    column.contents.forEach(function (content) {
                        if (content.html.category === 'form') {
                            _this.inputs.push(content);
                        }
                        content.html['grid'] = grid[j];
                        _this.renderHtmlService.setParams(content);
                        htmlPages.push(t + _this.renderHtmlService.get().code);
                    });
                    //htmlPages.push(`${t}</div>`);
                });
                tabNum--;
                t = _this.tabSpace(tabNum);
                htmlPages.push(t + "</div>");
            });
            htmlPages.push("</section>");
        });
        this.code = htmlPages.join("\n");
    };
    Bootstrap.prototype.tabSpace = function (tabNum) {
        var tab = "\t";
        var newTab = "";
        for (var i = 0; i < tabNum; i++) {
            newTab += tab;
        }
        return newTab;
    };
    Bootstrap.prototype.html = function () {
        return this.code;
    };
    Bootstrap.prototype.table = function () {
        var th = this.inputs.map(function (item) {
            return "\n<th>" + item.html.label + "</th>";
        }, '').join('');
        return "\n        <table class=\"table table-striped\" id=\"" + this.tableName + "\">\n            <thead>\n                <tr>\n                " + th + "\n                <th class=\"td_justo no-sort text-right\">\n                {!! $HTML::iconeCriar(\n                    Auth::user()->can('admin.financeirodescontos.create'), \n                    '#', \n                    true, \n                    route('admin.financeirodescontos.store'))\n                !!}\n                </th>                \n                </tr>\n            </thead>\n        </table>\n        ";
    };
    Bootstrap.prototype.script = function () {
        var script = this.inputs.map(function (item) {
            return {
                data: item.table.columnName,
                name: item.table.columnName
            };
        }, []);
        script.push({
            'data': 'action',
            'name': 'name'
        });
        return "\n<script>\n    /*---------------------Datatables--------------------------------*/\n    var table = $('#" + this.tableName + "').DataTable({\n        stateSave: true,\n        processing: true,\n        serverSide: true,\n        cache: true,\n        columns: " + JSON.stringify(script, null, '\t') + "\n    });\n    /*---------------------/Datatables-------------------------------*/\n</script>        \n        ";
    };
    Bootstrap.prototype.getInputs = function () {
        return this.inputs;
    };
    Bootstrap.prototype.setPages = function (pages) {
        this.pages = pages;
    };
    Bootstrap = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_render_html_service__WEBPACK_IMPORTED_MODULE_1__["RenderHtmlService"]])
    ], Bootstrap);
    return Bootstrap;
}());

var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(b, validator, homeService) {
        this.b = b;
        this.validator = validator;
        this.homeService = homeService;
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        this.tabNumber = 1;
        this.tabMVC = 1;
        this.pages = this.homeService.get();
    };
    Object.defineProperty(FormBuilderComponent.prototype, "bootstrap", {
        get: function () {
            this.b.setPages(this.pages);
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormBuilderComponent.prototype, "laravel", {
        get: function () {
            this.validator.setInputs(this.b.getInputs());
            return this.validator.laravel();
        },
        enumerable: true,
        configurable: true
    });
    FormBuilderComponent.prototype.isNewFile = function (newFile) {
        if (newFile) {
            this.pages = [];
        }
    };
    FormBuilderComponent.prototype.isNewPage = function (newPage) {
        if (newPage) {
            this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });
        }
    };
    FormBuilderComponent.prototype.getPages = function (pages) {
        this.pages.push(pages);
    };
    FormBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.css */ "./src/app/form-builder/form-builder.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [Bootstrap,
            Validator,
            _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/form-builder.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/form-builder/form-builder.module.ts ***!
  \*****************************************************/
/*! exports provided: FormBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderModule", function() { return FormBuilderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _form_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
/* harmony import */ var _create_table_to_json_create_table_to_json_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../create-table-to-json/create-table-to-json.component */ "./src/app/create-table-to-json/create-table-to-json.component.ts");
/* harmony import */ var _form_menu_form_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-menu/form-menu.component */ "./src/app/form-builder/form-menu/form-menu.component.ts");
/* harmony import */ var _form_builder_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-builder-routing.module */ "./src/app/form-builder/form-builder-routing.module.ts");
/* harmony import */ var _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../form-builder/form-config/form-config.module */ "./src/app/form-builder/form-config/form-config.module.ts");
/* harmony import */ var _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../form-pages/form-pages.module */ "./src/app/form-pages/form-pages.module.ts");
/* harmony import */ var _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/group-by.pipe */ "./src/app/shared/pipes/group-by.pipe.ts");
/* harmony import */ var _form_info_form_info_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-info/form-info.module */ "./src/app/form-info/form-info.module.ts");
/* harmony import */ var _shared_directives_sum_be_equals_to_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/sum-be-equals-to.directive */ "./src/app/shared/directives/sum-be-equals-to.directive.ts");
/* harmony import */ var _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form-pages/render-content/render-content.module */ "./src/app/form-pages/render-content/render-content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FormBuilderModule = /** @class */ (function () {
    function FormBuilderModule() {
    }
    FormBuilderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _form_builder_routing_module__WEBPACK_IMPORTED_MODULE_7__["FormBuilderRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"],
                _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_13__["RenderContentModule"],
                _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_9__["FormPagesModule"],
                _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_8__["FormConfigModule"],
                _form_info_form_info_module__WEBPACK_IMPORTED_MODULE_11__["FormInfoModule"]
            ],
            exports: [
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"]
            ],
            declarations: [
                _create_table_to_json_create_table_to_json_component__WEBPACK_IMPORTED_MODULE_5__["CreateTableToJsonComponent"],
                _form_menu_form_menu_component__WEBPACK_IMPORTED_MODULE_6__["FormMenuComponent"],
                _form_builder_component__WEBPACK_IMPORTED_MODULE_4__["FormBuilderComponent"],
                _shared_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_10__["GroupByPipe"],
                _shared_directives_sum_be_equals_to_directive__WEBPACK_IMPORTED_MODULE_12__["SumBeEqualsToDirective"]
            ],
            providers: []
        })
    ], FormBuilderModule);
    return FormBuilderModule;
}());



/***/ }),

/***/ "./src/app/form-builder/form-config/form-config.component.css":
/*!********************************************************************!*\
  !*** ./src/app/form-builder/form-config/form-config.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-builder/form-config/form-config.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/form-builder/form-config/form-config.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-template #modal let-c=\"close\" let-d=\"dismiss\">\n        <form *ngIf=\"formConfig\" [formGroup]=\"formConfig\" (ngSubmit)=\"c('Save')\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{ title }}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <app-render-content [content]=\"formConfig.value\"></app-render-content>\n                                    <div *ngFor=\"let r of render.components\">\n                                        <app-config-general [parentFormGroup]=\"formConfig\"\n                                                            *ngIf=\"r.componentName === 'app-config-general'\"></app-config-general>\n                                        <app-config-img [parentFormGroup]=\"formConfig\"\n                                                        *ngIf=\"r.componentName === 'app-config-img'\"></app-config-img>\n                                        <app-config-choices [parentFormGroup]=\"formConfig\"\n                                                            *ngIf=\"r.componentName === 'app-config-choices'\"></app-config-choices>\n                                        <app-config-title [parentFormGroup]=\"formConfig\"\n                                                        *ngIf=\"r.componentName === 'app-config-title'\"></app-config-title>\n                                        <app-config-html-editor [parentFormGroup]=\"formConfig\"\n                                                                *ngIf=\"r.componentName === 'app-config-html-editor'\"></app-config-html-editor>\n                                    </div>\n                                    <!--<button type=\"submit\" class=\"btn btn-outline-primary btn-sm\" [disabled]=\"!formConfig.valid\">Submit </button>-->\n                                </div>\n                            </div>\n                            <!--\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-offset-3\">\n                                    <pre>{{ formConfig.value | json }}</pre>\n                                </div>\n                            </div>\n                            -->\n                        </div>\n                    </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-outline-success btn-sm\" [ngClass]=\"{'btn-outline-danger': !formConfig.valid }\" [disabled]=\"!formConfig.valid\">Save </button>\n            </div>\n        </div>\n    </form>\n    </ng-template>\n    "

/***/ }),

/***/ "./src/app/form-builder/form-config/form-config.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-builder/form-config/form-config.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfigComponent", function() { return FormConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_content_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-content-config.service */ "./src/app/services/form-content-config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormConfigComponent = /** @class */ (function () {
    function FormConfigComponent(formContentConfig, fb, modalService) {
        this.formContentConfig = formContentConfig;
        this.fb = fb;
        this.modalService = modalService;
    }
    FormConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.formContentConfig.getContent().subscribe(function (data) {
            var tag = data.html.tag;
            _this.render = _this.formContentConfig.render()[tag];
            _this.formConfig = _this.fb.group({
                html: _this.fb.group({
                    'tag': [data.html.tag],
                    'category': [data.html.category],
                    'elements': _this.fb.array([], [
                    //Validators.required
                    ]),
                    'label': [data.html.label, [
                        //Validators.required,
                        //Validators.minLength(10)
                        ]],
                    'src': [data.html.src, [
                        //Validators.required,
                        //Validators.minLength(5)
                        ]],
                    'text': [data.html.text, [
                        //Validators.required
                        ]],
                    'data': [data.html.data, [
                        //Validators.required
                        ]]
                }),
                table: _this.fb.group({
                    'columnName': [data.table.columnName],
                    'type': [data.table.type],
                    'size': [data.table.size],
                    'nullable': [data.table.nullable, [
                        //Validators.required
                        ]]
                })
            });
            if (data.html.elements) {
                _this.populate(data.html.elements);
            }
            var m = _this.modalService.open(_this.modal, _this.options);
            m.result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
                if (typeof data.html !== undefined) {
                    data.html = _this.formConfig.value.html;
                }
                if (typeof data.table !== undefined) {
                    data.table = _this.formConfig.value.table;
                }
            }, function (reason) {
                //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
            /*this.formConfig.valueChanges.subscribe((form) => {
                if (typeof data.html !== undefined) {
                    this.content.html = form.html;
                }
                if (typeof data.table !== undefined) {
                    this.content.table = form.table;
                }
            });*/
        });
    };
    FormConfigComponent.prototype.populate = function (e) {
        var _this = this;
        return e.map(function (d) { return _this.elements['controls'].push(_this.getElement(d.text, d.value)); });
    };
    FormConfigComponent.prototype.getElement = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            'text': [text, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'value': [value, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    };
    Object.defineProperty(FormConfigComponent.prototype, "elements", {
        get: function () {
            return this.formConfig.controls['html'].get('elements');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FormConfigComponent.prototype, "modal", void 0);
    FormConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-config',
            template: __webpack_require__(/*! ./form-config.component.html */ "./src/app/form-builder/form-config/form-config.component.html"),
            styles: [__webpack_require__(/*! ./form-config.component.css */ "./src/app/form-builder/form-config/form-config.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_content_config_service__WEBPACK_IMPORTED_MODULE_1__["FormContentConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], FormConfigComponent);
    return FormConfigComponent;
}());



/***/ }),

/***/ "./src/app/form-builder/form-config/form-config.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/form-builder/form-config/form-config.module.ts ***!
  \****************************************************************/
/*! exports provided: FormConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfigModule", function() { return FormConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config/config-choices/config-choices.component */ "./src/app/form-builder/config/config-choices/config-choices.component.ts");
/* harmony import */ var _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config-general/config-general.component */ "./src/app/form-builder/config/config-general/config-general.component.ts");
/* harmony import */ var _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config/config-html-editor/config-html-editor.component */ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.ts");
/* harmony import */ var _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config/config-img/config-img.component */ "./src/app/form-builder/config/config-img/config-img.component.ts");
/* harmony import */ var _form_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-config.component */ "./src/app/form-builder/form-config/form-config.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/config-table-builder/config-table-builder.component */ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.ts");
/* harmony import */ var _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../form-pages/render-content/render-content.module */ "./src/app/form-pages/render-content/render-content.module.ts");
/* harmony import */ var _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/config-title/config-title.component */ "./src/app/form-builder/config/config-title/config-title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FormConfigModule = /** @class */ (function () {
    function FormConfigModule() {
    }
    FormConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_7__["DragulaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_10__["RenderContentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            exports: [
                _form_config_component__WEBPACK_IMPORTED_MODULE_6__["FormConfigComponent"],
                _config_config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_2__["ConfigChoicesComponent"],
                _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_3__["ConfigGeneralComponent"],
                _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_4__["ConfigHtmlEditorComponent"],
                _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_5__["ConfigImgComponent"],
                _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_9__["ConfigTableBuilderComponent"],
                _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_11__["ConfigTitleComponent"]
            ],
            declarations: [
                _form_config_component__WEBPACK_IMPORTED_MODULE_6__["FormConfigComponent"],
                _config_config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_2__["ConfigChoicesComponent"],
                _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_3__["ConfigGeneralComponent"],
                _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_4__["ConfigHtmlEditorComponent"],
                _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_5__["ConfigImgComponent"],
                _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_9__["ConfigTableBuilderComponent"],
                _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_11__["ConfigTitleComponent"]
            ]
        })
    ], FormConfigModule);
    return FormConfigModule;
}());



/***/ }),

/***/ "./src/app/form-builder/form-menu/form-menu.component.css":
/*!****************************************************************!*\
  !*** ./src/app/form-builder/form-menu/form-menu.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n}\r\n"

/***/ }),

/***/ "./src/app/form-builder/form-menu/form-menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/form-builder/form-menu/form-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sticky-top scrollable\">\n  <div class=\"px-3 py-3 card bg-white text-black\">\n    <div class=\"row\">\n      <section id=\"page\" class=\"col-md-12\">\n        <button (click)=\"preview()\"\n                class=\"btn btn-block btn-lg btn-link\">\n                <i [ngClass]=\"{ 'fa-eye': previewMode, 'fa-eye-slash': !previewMode }\" class=\"fa fa-3x\"></i>\n            Preview {{ previewMode? 'Mode' : '' }}\n        </button>\n        <button class=\"btn btn-primary btn-block btn-sm\" (click)=\"newFile()\">\n            <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>\n          New Task\n        </button>\n        <div [dragula]=\"'pages'\" [(dragulaModel)]=\"pageModel\" class=\"menu-page-sortable\">\n          <span (click)=\"newPage()\" class=\"badge badge-primary col-md-12 page-handle\">\n            <i class=\"fa fa-file\"></i> New Page\n          </span>\n        </div>\n      </section>\n    </div>\n    <div class=\"row\">\n      <section id=\"containers\" class=\"col-md-12\">\n        <fieldset name=\"bootstrap_container\" [dragula]='\"rowSortable\"' [(dragulaModel)]=\"bootstrap\" class=\"menu-row-sortable\">\n          <div *ngFor=\"let b of bootstrap\">\n            <form #f=\"ngForm\">\n              <div [hidden]=\"f.invalid\">\n                <strong class=\"badge badge-primary row-handle col-md-12\" [ngStyle]=\"{ cursor: 'move' }\">\n                  <i class=\"fa fa-arrows-alt fa-1x\"></i> GRID {{ b.grid }}\n                </strong>\n              </div>\n              <div class=\"input-group input-group-sm\">\n                <input type=\"text\"\n                       [(ngModel)]=\"b.grid\"\n                       name=\"grid\"\n                       [ngClass]=\"{ 'is-invalid': f.controls.grid?.invalid }\"\n                       class=\"form-control form-control-sm\"\n                       [ngStyle]=\"{ cursor: 'pointer' }\"\n                       sumBeEqualsTo=\"12\"\n                       minlength=\"2\"\n                       pattern=\"[0-9 ]+\"\n                       required>\n                <div *ngIf=\"f.controls.grid?.invalid || f.controls.grid?.touched\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.controls.grid?.errors?.required \">* Enter with your grid.</div>\n                  <div *ngIf=\"f.controls.grid?.errors?.pattern\">* Allows only numbers and space.</div>\n                  <div *ngIf=\"f.controls.grid?.errors?.minlength\">* Min. Length is {{ f.controls.grid?.errors.minlength.requiredLength }}.</div>\n                  <div *ngIf=\"f.controls.grid?.errors?.isSumInvalid\">* The sum must be equals to {{ f.controls.grid.errors?.sumBeEqualsTo }}.</div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </fieldset>\n      </section>\n    </div>\n    <section id=\"tools\" class=\"py-1\">\n      <div *ngFor=\"let tool of tools | groupBy: 'html.category'; let toolCategoryIndex = index;\">\n        <strong class=\"text-center text-uppercase px-2\">{{ tool.key }}</strong>\n        <div [dragula]='\"contents\"'\n             [(dragulaModel)]=\"tool.value\"\n             class=\"menu-content-sortable\">\n          <div *ngFor=\"let t of tool.value\"\n               [ngStyle]=\"{ 'cursor': 'move' }\"\n               class=\"badge bg-dark col-md-6 text-white content-handle menu-content-sortable\"\n               [attr.data-content]=\"t | json\"\n               >\n              <span class=\"content-handle text-white\">{{ t.html.tag }}</span>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/form-builder/form-menu/form-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-builder/form-menu/form-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: FormMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMenuComponent", function() { return FormMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var _shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/html-element.service */ "./src/app/shared/services/html-element.service.ts");
/* harmony import */ var _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bootstrap-grid-system.service */ "./src/app/services/bootstrap-grid-system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormMenuComponent = /** @class */ (function () {
    function FormMenuComponent(formConfigService, htmlElementService) {
        this.formConfigService = formConfigService;
        this.htmlElementService = htmlElementService;
        this.isNewFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNewPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
        this.previewMode = true;
        this.config = {
            previewMode: this.previewMode
        };
        this.preview();
        this.grids = new _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_3__["BootstrapGridSystemService"]().getGrid();
        this.bootstrap = [this.grids[0]];
        this.tools = this.htmlElementService.get();
        this.pageModel = [{
                rows: [],
                name: "Salt - A tool for Lazy Developer"
            }];
    };
    FormMenuComponent.prototype.preview = function () {
        this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    };
    FormMenuComponent.prototype.newFile = function () {
        this.isNewFile.emit(true);
    };
    FormMenuComponent.prototype.newPage = function () {
        this.isNewPage.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormMenuComponent.prototype, "isNewFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormMenuComponent.prototype, "isNewPage", void 0);
    FormMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-menu',
            template: __webpack_require__(/*! ./form-menu.component.html */ "./src/app/form-builder/form-menu/form-menu.component.html"),
            styles: [__webpack_require__(/*! ./form-menu.component.css */ "./src/app/form-builder/form-menu/form-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_2__["HtmlElementService"]])
    ], FormMenuComponent);
    return FormMenuComponent;
}());



/***/ }),

/***/ "./src/app/form-info/form-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/form-info/form-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-info/form-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/form-info/form-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"card\">\n    <div *ngFor=\"let page of pages; let pageIndex = index;\" class=\"px-2 py-2\">\n        <span>Page {{ pageIndex + 1 }}</span>\n        <hr />\n        <div *ngFor=\"let row of page.rows; let rowIndex = index;\">\n            <section *ngFor=\"let column of row.columns; let columnIndex = index;\">\n                <div *ngFor=\"let d of column.contents; let contentIndex = index;\">\n                    <section *ngIf=\"d.html?.category === 'form'\" class=\"row\">\n                        <div class=\"col-md-1\">\n                        \n                        </div>\n                        <div class=\"col-md-2\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\" *ngIf=\"d.table.columnName.toLowerCase().indexOf('ind_') != -1 && d.table.columnName\">\n                                    <button (click)=\"buscaDominio(d.table.columnName)\" class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-search fa-1x\" aria-hidden=\"true\"></i>\n                                    </button>\n                                    <div class=\"dropdown-menu\" [ngStyle]=\"{ width: '100%' }\">\n                                        <a class=\"dropdown-item\" href=\"#\" ng-show=\"vm.loading\">\n                                            <i class=\"fa fa-cog fa-1x fa-spin\"></i> Loading...\n                                        </a>\n                                        <a class=\"dropdown-item\" href=\"#\" ng-show=\"!vm.loading && vm.dominio.error.has\">\n                                            <span class=\"text-danger\" ng-bind=\"vm.dominio.error.msg\"></span>\n                                        </a>\n                                        <a class=\"dropdown-item\" href=\"#\" ng-repeat=\"(dI, dom) in vm.dominio.data\" ng-if=\"vm.dominio.data.length > 0\">\n                                            <span ng-bind=\"dom.val_dominio_item\"></span> - <span ng-bind=\"dom.dsc_dominio_item\"></span>\n                                        </a>\n                                    </div>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': tableColumnName.invalid }\" \n                                name=\"table-column-name-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\"                                 \n                                [(ngModel)]=\"d.table.columnName\" \n                                [ngModelOptions]=\"{ standalone: true }\"\n                                #tableColumnName=\"ngModel\"\n                                required\n                                >\n                                <div *ngIf=\"tableColumnName.invalid || tableColumnName.touched\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"tableColumnName.errors?.required\">This is required.</div>\n                                </div> \n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': htmlLabel.invalid }\" \n                            name=\"html-label-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\"                                 \n                            [(ngModel)]=\"d.html.label\" \n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #htmlLabel=\"ngModel\"\n                            required\n                            >                            \n                            <div *ngIf=\"htmlLabel.invalid || htmlLabel.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"htmlLabel.errors?.required\">This is required.</div>\n                            </div>   \n                        </div>\n                        <div class=\"col-md-2\" >\n                            <select class=\"form-control\" [ngClass]=\"{ 'is-invalid': htmlTag.invalid }\"\n                            name=\"input-type-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            [(ngModel)]=\"d.html.tag\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #htmlTag=\"ngModel\"\n                            required\n                            >\n                                <option value=\"\">Selecione</option>\n                                <option value=\"{{ tag }}\" *ngFor=\"let tag of tags\">{{ tag }}</option>\n                            </select>\n                            <div *ngIf=\"htmlTag.invalid || htmlTag.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"htmlTag.errors?.required\">This is required.</div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <select class=\"form-control text-uppercase\" [ngClass]=\"{ 'is-invalid': tableType.invalid }\"\n                            name=\"table-type-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            [(ngModel)]=\"d.table.type\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #tableType=\"ngModel\"\n                            required\n                            >\n                                <option value=\"\">Selecione</option>\n                                <option *ngFor=\"let db of database; let columnName = index;\" [value]=\"db.toLowerCase()\">{{ db }}</option>\n                            </select>\n                            <div *ngIf=\"tableType.invalid || tableType.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tableType.errors?.required\">This is required.</div>\n                            </div>                            \n                        </div>\n                        <div class=\"col-md-1\">\n                            <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': tableSize.invalid }\"\n                            [(ngModel)]=\"d.table.size\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            pattern=\"^[0-9]+(.[0-9])?$\"\n                            name=\"table-size-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            #tableSize=\"ngModel\"                            \n                            >\n                            <div *ngIf=\"tableSize.invalid || tableSize.touched\" class=\"invalid-feedback\">\n                            </div>                               \n                        </div>\n                        <div class=\"col-md-1\">\n                            <div class=\"row\">\n                                <label [ngClass]=\"{'badge-danger': d.table.nullable, 'badge-default' : !d.table.nullable}\"\n                                       class=\"badge col-md-12\"\n                                       [ngStyle]=\"{ 'cursor': 'pointer' }\">\n                                    nullable? {{ d.table.nullable? 'No' : 'Yes' }}\n                                    <input type=\"checkbox\" [(ngModel)]=\"d.table.nullable\" name=\"asd3\" class=\"checkbox\" [ngStyle]=\"{ display: 'none' }\">\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button type=\"button\" (click)=\"column.contents.splice(contentIndex, 1)\" class=\"btn btn-outline-danger btn-sm btn-block\"><i class=\"far fa-trash-alt\"></i></button>\n                        </div>\n                    </section>\n                </div>\n            </section>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/form-info/form-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-info/form-info.component.ts ***!
  \**************************************************/
/*! exports provided: FormInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoComponent", function() { return FormInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/database-engine.service */ "./src/app/shared/services/database-engine.service.ts");
/* harmony import */ var _shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/html-element.service */ "./src/app/shared/services/html-element.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormInfoComponent = /** @class */ (function () {
    function FormInfoComponent(htmlElementService) {
        this.htmlElementService = htmlElementService;
        this.pagesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormInfoComponent.prototype.ngOnInit = function () {
        this.database = Object.keys(_shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseEngine"].get()).map(function (item) {
            return item.toUpperCase();
        });
        this.tags = this.htmlElementService.getTags();
    };
    FormInfoComponent.prototype.buscaDominio = function () {
        alert("implementação");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInfoComponent.prototype, "pages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormInfoComponent.prototype, "pagesChange", void 0);
    FormInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-info',
            template: __webpack_require__(/*! ./form-info.component.html */ "./src/app/form-info/form-info.component.html"),
            styles: [__webpack_require__(/*! ./form-info.component.css */ "./src/app/form-info/form-info.component.css")],
        }),
        __metadata("design:paramtypes", [_shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_2__["HtmlElementService"]])
    ], FormInfoComponent);
    return FormInfoComponent;
}());



/***/ }),

/***/ "./src/app/form-info/form-info.module.ts":
/*!***********************************************!*\
  !*** ./src/app/form-info/form-info.module.ts ***!
  \***********************************************/
/*! exports provided: FormInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoModule", function() { return FormInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-info.component */ "./src/app/form-info/form-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spell_checker_spell_checker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spell-checker/spell-checker.component */ "./src/app/spell-checker/spell-checker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormInfoModule = /** @class */ (function () {
    function FormInfoModule() {
    }
    FormInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _form_info_component__WEBPACK_IMPORTED_MODULE_2__["FormInfoComponent"]
            ],
            declarations: [
                _form_info_component__WEBPACK_IMPORTED_MODULE_2__["FormInfoComponent"],
                _spell_checker_spell_checker_component__WEBPACK_IMPORTED_MODULE_4__["SpellCheckerComponent"]
            ]
        })
    ], FormInfoModule);
    return FormInfoModule;
}());



/***/ }),

/***/ "./src/app/form-pages/form-columns/form-columns.component.css":
/*!********************************************************************!*\
  !*** ./src/app/form-pages/form-columns/form-columns.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-pages/form-columns/form-columns.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/form-pages/form-columns/form-columns.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    [attr.data-bootstrap-grid]=\"row.grid\"\n    dragula=\"columns\"\n\t[(dragulaModel)]=\"row.columns\"\n\tclass=\"row page-{{ pageIndex }}_row-{{ rowIndex }}\"\n>\n\t<div *ngFor=\"let column of row.columns; let columnIndex = index\"\n\t\tclass=\"col-md-{{ colNumber(columnIndex) }}\"\n\t\t[attr.data-current-page-index]=\"pageIndex\"\n\t\t[attr.data-current-row-index]=\"rowIndex\"\n\t\t[attr.data-current-column-index]=\"columnIndex\"\n\t>\n\t\t<!--b>[{{ pageIndex }}][{{ rowIndex }}][{{ columnIndex }}]</b-->\n\t\t<div class=\"option-column\">\n\t\t\t<div [hidden]=\"config?.previewMode\">\n\t\t\t\t<small class=\"column-handle\" [ngStyle]=\"{ 'cursor': 'move' }\">\n\t\t\t\t\t<i class=\"fa fa-arrows-alt\"></i> col-md-{{ colNumber(columnIndex) }}\n\t\t\t\t</small>\n\t\t\t\t<div class=\"border-bottom border-danger\"></div>\n\t\t\t</div>\t\n\t\t\t<app-form-contents [column]=\"column\"></app-form-contents>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/form-pages/form-columns/form-columns.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-pages/form-columns/form-columns.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormColumnsComponent", function() { return FormColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-config.service */ "./src/app/services/form-config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormColumnsComponent = /** @class */ (function () {
    function FormColumnsComponent(formConfigService) {
        this.formConfigService = formConfigService;
    }
    FormColumnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) { _this.config = data; });
    };
    FormColumnsComponent.prototype.colNumber = function (columnIndex) {
        return this.row.grid.trim().split(' ')[columnIndex];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "rowIndex", void 0);
    FormColumnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-columns',
            template: __webpack_require__(/*! ./form-columns.component.html */ "./src/app/form-pages/form-columns/form-columns.component.html"),
            styles: [__webpack_require__(/*! ./form-columns.component.css */ "./src/app/form-pages/form-columns/form-columns.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"]])
    ], FormColumnsComponent);
    return FormColumnsComponent;
}());



/***/ }),

/***/ "./src/app/form-pages/form-contents/form-contents.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/form-pages/form-contents/form-contents.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-pages/form-contents/form-contents.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/form-pages/form-contents/form-contents.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dragula=\"contents\"\n     [(dragulaModel)]=\"column.contents\"\n     [ngStyle]=\"{ 'min-height': '20px' }\">\n    <div *ngFor=\"let content of column.contents; let contentIndex = index\"\n         class=\"mt-1\">\n        <div class=\"row\" [hidden]=\"config?.previewMode\">\n            <div class=\"col-md-12\">\n                <div class=\"float-left\">\n                    <small class=\"content-handle\" [ngStyle]=\"{ 'cursor': 'move' }\">\n                        <i class=\"fa fa-arrows-alt content-handle\"></i> move\n                    </small>\n                    <span (click)=\"sendDataToModal(content)\" [ngStyle]=\"{ 'cursor': 'pointer' }\" class=\"badge btn-outline-primary\">\n                        <i class=\"fa fa-edit\"></i> edit\n                    </span>\n                    <span (click)=\"copyHtml(content)\" [ngStyle]=\"{ 'cursor': 'pointer' }\" class=\"badge btn-outline-primary\">\n                        <i class=\"fa fa-edit\"></i> copy html\n                    </span>                    \n                </div>\n                <div class=\"float-right\" role=\"group\" aria-label=\"Basic example\">\n                    <span (click)=\"deleteContent(contentIndex)\" class=\"badge btn-outline-danger col-md-12\" style=\"cursor: pointer;\">\n                        <i class=\"fas fa-window-close\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"content\">\n            <div [hidden]=\"config?.previewMode\">\n                <span *ngIf=\"content.html.tag\" class=\"badge badge-primary\">{{ content.html.tag }}</span>\n                <span *ngIf=\"content.table?.nullable && content.html.category === 'form'\" class=\"badge badge-success\">required</span>\n                <span *ngIf=\"!content.table?.nullable && content.html.category === 'form'\" class=\"badge badge-danger\">not required</span>\n            </div>\n            <app-render-content [content]=\"content\"></app-render-content>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form-pages/form-contents/form-contents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-pages/form-contents/form-contents.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContentsComponent", function() { return FormContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_content_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/form-content-config.service */ "./src/app/services/form-content-config.service.ts");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var _services_render_html_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/render-html.service */ "./src/app/services/render-html.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormContentsComponent = /** @class */ (function () {
    function FormContentsComponent(formContentConfigService, formConfigService, renderHtmlService) {
        this.formContentConfigService = formContentConfigService;
        this.formConfigService = formConfigService;
        this.renderHtmlService = renderHtmlService;
    }
    FormContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(function (data) { return _this.config = data; });
    };
    FormContentsComponent.prototype.copyHtml = function (content) {
        this.renderHtmlService.setParams(content);
        var code = this.renderHtmlService.get().html;
        this.copyToClipboard(code);
    };
    FormContentsComponent.prototype.copyToClipboard = function (text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return window.clipboardData.setData("Text", text);
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy"); // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
    };
    FormContentsComponent.prototype.sendDataToModal = function (content) {
        this.formContentConfigService.setContent(content);
    };
    FormContentsComponent.prototype.deleteContent = function (contentIndex) {
        this.column.contents.splice(contentIndex, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "column", void 0);
    FormContentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-contents',
            template: __webpack_require__(/*! ./form-contents.component.html */ "./src/app/form-pages/form-contents/form-contents.component.html"),
            styles: [__webpack_require__(/*! ./form-contents.component.css */ "./src/app/form-pages/form-contents/form-contents.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_content_config_service__WEBPACK_IMPORTED_MODULE_1__["FormContentConfigService"],
            _services_form_config_service__WEBPACK_IMPORTED_MODULE_2__["FormConfigService"],
            _services_render_html_service__WEBPACK_IMPORTED_MODULE_3__["RenderHtmlService"]])
    ], FormContentsComponent);
    return FormContentsComponent;
}());



/***/ }),

/***/ "./src/app/form-pages/form-pages.component.css":
/*!*****************************************************!*\
  !*** ./src/app/form-pages/form-pages.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-pages/form-pages.component.html":
/*!******************************************************!*\
  !*** ./src/app/form-pages/form-pages.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n    dragula=\"pages\"\n    [(dragulaModel)]=\"pages\"\n>\n    <div *ngFor=\"let page of pages; let pageIndex = index\" class=\"mb-1\">\n        <div class=\"px-3 py-3\" [ngClass]=\"{ 'card bg-white text-dark': !config?.previewMode }\">\n            <div class=\"row\" [hidden]=\"config?.previewMode\">\n                <div class=\"col-md-12 page-handle\" [ngStyle]=\"{ cursor: 'move' }\">\n                    <div class=\"float-left\">\n                        <span class=\"page-handle\">{{ page.name }}</span>\n                    </div>\n                    <div class=\"float-right\">\n                        <small (click)=\"deletePage(pageIndex)\" class=\"badge btn-outline-danger\" [ngStyle]=\"{ cursor: 'pointer' }\">\n                            <i class=\"fas fa-window-close\"></i>\n                            <strong> page {{ pageIndex + 1 }}</strong>\n                        </small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"border-bottom border-secondary\" [hidden]=\"config?.previewMode\"></div>\n            <app-form-rows [page]=\"page\" [pageIndex]=\"pageIndex\"></app-form-rows>\n        </div>\n    </div><!--/.ng-repeat-->\n</div>"

/***/ }),

/***/ "./src/app/form-pages/form-pages.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-pages/form-pages.component.ts ***!
  \****************************************************/
/*! exports provided: FormPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPagesComponent", function() { return FormPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_render_html_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/render-html.service */ "./src/app/services/render-html.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { RenderHtmlService } from '../services/render-html.service';

var FormPagesComponent = /** @class */ (function () {
    function FormPagesComponent(formConfigService, dragulaService) {
        var _this = this;
        this.formConfigService = formConfigService;
        this.dragulaService = dragulaService;
        this.pagesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.dropModelPageUpdated = false;
        dragulaService.createGroup('pages', {
            revertOnSpill: true,
            removeOnSpill: false,
            copy: function (el, source) {
                return source.className === 'menu-page-sortable';
            },
            copyItem: function (el) {
                return el;
                //console.log(el);
                //return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.className !== 'menu-page-sortable';
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('page-handle');
                }
                return false;
            }
        });
        dragulaService.createGroup('columns', {
            accepts: function (el, target, source, sibling) {
                var currRowIndex = el.getAttribute('data-current-row-index');
                var currPageIndex = el.getAttribute('data-current-page-index');
                var currentClass = 'page-' + currPageIndex + '_row-' + currRowIndex;
                return target.classList.contains(currentClass);
            },
            moves: function (el, container, handle) {
                //let currColumnIndex = handle.getAttribute('data-current-column-index');
                if (handle.classList) {
                    return handle.classList.contains('column-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.dropModel("columns")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var currRowIndex = el.getAttribute('data-current-row-index');
            var pageIndex = el.getAttribute('data-current-page-index');
            if (pageIndex != null && currRowIndex != null) {
                var gridArr = _this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                var aux = gridArr[sourceIndex];
                gridArr.splice(sourceIndex, 1);
                gridArr.splice(targetIndex, 0, aux);
                _this.pages[pageIndex].rows[currRowIndex].grid = gridArr.join(" ").trim();
            }
        }));
        dragulaService.createGroup('rowSortable', {
            copy: function (el, source) {
                return source.className === 'menu-row-sortable';
            },
            copyItem: function (el) {
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid draggin from right to left container
                return target.className !== 'menu-row-sortable';
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('row-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.dropModel("rowSortable")
            .subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            if (item.columns.length <= 0) {
                var textWithoutExtraWhiteSpaces = item.grid.replace(/ +/g, ' ').trim();
                var arrNumbers = textWithoutExtraWhiteSpaces.split(' ');
                var columns = [];
                if (arrNumbers.length > 0) {
                    for (var i = 0; i < arrNumbers.length; i++) {
                        columns.push({
                            contents: []
                        });
                    }
                    item.grid = textWithoutExtraWhiteSpaces;
                    item.columns = columns;
                }
                return item;
            }
        }));
        dragulaService.createGroup('contents', {
            copy: function (el, source) {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: function (el) {
                return JSON.parse(JSON.stringify(el));
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return !target.classList.contains('menu-content-sortable');
            },
            moves: function (el, container, handle) {
                if (handle.classList) {
                    return handle.classList.contains('content-handle');
                }
                return false;
            }
        });
        this.subs.add(dragulaService.cloned("contents")
            .subscribe(function (_a) {
            var name = _a.name, clone = _a.clone, original = _a.original, cloneType = _a.cloneType;
            if (original.classList.contains('menu-content-sortable')) {
                var currentDataAttr = JSON.parse(clone.getAttribute('data-content'));
                var r = new _services_render_html_service__WEBPACK_IMPORTED_MODULE_4__["BootstrapForm"](currentDataAttr);
                //r.setParams(currentDataAttr);
                clone.classList.remove('badge', 'bg-dark', 'col-md-6', 'bg-primary', 'text-white');
                clone.innerHTML = '';
                clone.insertAdjacentHTML('afterbegin', '<div class="px-1 py-1 bg-white text-dark" style="min-width: 300px;">' + r.get() + '</div>');
            }
        }));
        this.subs.add(dragulaService.dropModel("contents")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            if (item.table && item.html) {
                if (typeof item.table.columnName === 'undefined' && item.html.category === 'form') {
                    item.table.columnName = 'name__' + new Date().getUTCMilliseconds();
                    item.table.size = '';
                }
            }
        }));
    }
    FormPagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig().subscribe(function (data) { _this.config = data; });
    };
    FormPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.drop("pages")
            .subscribe(function (value) {
            _this.dropModelPageUpdated = true;
        }));
    };
    FormPagesComponent.prototype.ngDoCheck = function () {
        if (this.dropModelPageUpdated) { // this excutes if this.dropModelUpdated is true only
            this.pagesChange.emit(this.pages);
        }
    };
    FormPagesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
    };
    FormPagesComponent.prototype.deletePage = function (pageIndex) {
        this.pages.splice(pageIndex, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormPagesComponent.prototype, "pages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormPagesComponent.prototype, "pagesChange", void 0);
    FormPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-pages',
            template: __webpack_require__(/*! ./form-pages.component.html */ "./src/app/form-pages/form-pages.component.html"),
            styles: [__webpack_require__(/*! ./form-pages.component.css */ "./src/app/form-pages/form-pages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"]])
    ], FormPagesComponent);
    return FormPagesComponent;
}());



/***/ }),

/***/ "./src/app/form-pages/form-pages.module.ts":
/*!*************************************************!*\
  !*** ./src/app/form-pages/form-pages.module.ts ***!
  \*************************************************/
/*! exports provided: FormPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPagesModule", function() { return FormPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _form_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-pages.component */ "./src/app/form-pages/form-pages.component.ts");
/* harmony import */ var _form_rows_form_rows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-rows/form-rows.component */ "./src/app/form-pages/form-rows/form-rows.component.ts");
/* harmony import */ var _form_columns_form_columns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-columns/form-columns.component */ "./src/app/form-pages/form-columns/form-columns.component.ts");
/* harmony import */ var _form_contents_form_contents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-contents/form-contents.component */ "./src/app/form-pages/form-contents/form-contents.component.ts");
/* harmony import */ var _render_content_render_content_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render-content/render-content.module */ "./src/app/form-pages/render-content/render-content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormPagesModule = /** @class */ (function () {
    function FormPagesModule() {
    }
    FormPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot(),
                _render_content_render_content_module__WEBPACK_IMPORTED_MODULE_7__["RenderContentModule"]
            ],
            exports: [
                _form_pages_component__WEBPACK_IMPORTED_MODULE_3__["FormPagesComponent"],
                _form_rows_form_rows_component__WEBPACK_IMPORTED_MODULE_4__["FormRowsComponent"],
                _form_columns_form_columns_component__WEBPACK_IMPORTED_MODULE_5__["FormColumnsComponent"],
                _form_contents_form_contents_component__WEBPACK_IMPORTED_MODULE_6__["FormContentsComponent"]
            ],
            declarations: [
                _form_pages_component__WEBPACK_IMPORTED_MODULE_3__["FormPagesComponent"],
                _form_rows_form_rows_component__WEBPACK_IMPORTED_MODULE_4__["FormRowsComponent"],
                _form_columns_form_columns_component__WEBPACK_IMPORTED_MODULE_5__["FormColumnsComponent"],
                _form_contents_form_contents_component__WEBPACK_IMPORTED_MODULE_6__["FormContentsComponent"]
            ]
        })
    ], FormPagesModule);
    return FormPagesModule;
}());



/***/ }),

/***/ "./src/app/form-pages/form-rows/form-rows.component.css":
/*!**************************************************************!*\
  !*** ./src/app/form-pages/form-rows/form-rows.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-pages/form-rows/form-rows.component.html":
/*!***************************************************************!*\
  !*** ./src/app/form-pages/form-rows/form-rows.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-3 bg-danger text-white\" *ngIf=\"page.rows.length <= 0\">\n  Place Bootstrap grid columns here\n</div>\n<div\n\tdragula=\"rowSortable\"\n\t[(dragulaModel)]=\"page.rows\"\n    [ngStyle]=\"{ 'min-height': '20px' }\"\n    class=\"row-sortable\"\n>\n<div *ngFor=\"let row of page.rows; let rowIndex = index;\">\n    <div class=\"row\" [hidden]=\"config?.previewMode\">\n      \t<div class=\"col-md-12 row-handle\" [ngStyle]=\"{ cursor: 'move' }\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<small class=\"row-handle\">row {{ rowIndex + 1 }}</small>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<small (click)=\"page.rows.splice(rowIndex, 1);\" class=\"badge btn-outline-danger\" [ngStyle]=\"{ cursor: 'pointer' }\">\n\t\t\t\t\t<i class=\"fas fa-window-close\"></i> row {{ rowIndex + 1 }}\n\t\t\t\t</small>\n        \t</div>\n      \t</div>\n    </div>\n    <div class=\"border-bottom border-secondary\" [hidden]=\"config?.previewMode\"></div>\n    \t<app-form-columns [row]=\"row\" [pageIndex]=\"pageIndex\" [rowIndex]=\"rowIndex\"></app-form-columns>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/form-pages/form-rows/form-rows.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-pages/form-rows/form-rows.component.ts ***!
  \*************************************************************/
/*! exports provided: FormRowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRowsComponent", function() { return FormRowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-config.service */ "./src/app/services/form-config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormRowsComponent = /** @class */ (function () {
    function FormRowsComponent(formConfigService) {
        this.formConfigService = formConfigService;
    }
    FormRowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) { _this.config = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "pageIndex", void 0);
    FormRowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-rows',
            template: __webpack_require__(/*! ./form-rows.component.html */ "./src/app/form-pages/form-rows/form-rows.component.html"),
            styles: [__webpack_require__(/*! ./form-rows.component.css */ "./src/app/form-pages/form-rows/form-rows.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"]])
    ], FormRowsComponent);
    return FormRowsComponent;
}());



/***/ }),

/***/ "./src/app/form-pages/render-content/render-content.component.css":
/*!************************************************************************!*\
  !*** ./src/app/form-pages/render-content/render-content.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-pages/render-content/render-content.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/form-pages/render-content/render-content.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [innerHtml]=\"render()\"></span>\r\n"

/***/ }),

/***/ "./src/app/form-pages/render-content/render-content.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form-pages/render-content/render-content.component.ts ***!
  \***********************************************************************/
/*! exports provided: RenderContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderContentComponent", function() { return RenderContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_render_html_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/render-html.service */ "./src/app/services/render-html.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RenderContentComponent = /** @class */ (function () {
    function RenderContentComponent(sanitizer, renderHtml) {
        this.sanitizer = sanitizer;
        this.renderHtml = renderHtml;
        this.content = {
            html: {},
            table: {}
        };
    }
    RenderContentComponent.prototype.ngOnInit = function () {
    };
    RenderContentComponent.prototype.render = function () {
        if (typeof this.content !== 'undefined') {
            this.renderHtml.setParams(this.content);
            var html = this.renderHtml.get().html;
            //console.log(html);
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        return 'undefined';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RenderContentComponent.prototype, "content", void 0);
    RenderContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-render-content',
            template: __webpack_require__(/*! ./render-content.component.html */ "./src/app/form-pages/render-content/render-content.component.html"),
            styles: [__webpack_require__(/*! ./render-content.component.css */ "./src/app/form-pages/render-content/render-content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _services_render_html_service__WEBPACK_IMPORTED_MODULE_2__["RenderHtmlService"]])
    ], RenderContentComponent);
    return RenderContentComponent;
}());



/***/ }),

/***/ "./src/app/form-pages/render-content/render-content.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/form-pages/render-content/render-content.module.ts ***!
  \********************************************************************/
/*! exports provided: RenderContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderContentModule", function() { return RenderContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _render_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-content.component */ "./src/app/form-pages/render-content/render-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RenderContentModule = /** @class */ (function () {
    function RenderContentModule() {
    }
    RenderContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _render_content_component__WEBPACK_IMPORTED_MODULE_2__["RenderContentComponent"]
            ],
            declarations: [_render_content_component__WEBPACK_IMPORTED_MODULE_2__["RenderContentComponent"]]
        })
    ], RenderContentModule);
    return RenderContentModule;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-form-pages [pages]=\"pages\"></app-form-pages>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/home.service */ "./src/app/shared/services/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(formConfigService, homeService) {
        this.formConfigService = formConfigService;
        this.homeService = homeService;
        this.pages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.config = {
            previewMode: true
        };
        this.formConfigService.setConfig(this.config);
        this.pages = this.homeService.get();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-pages/form-pages.module */ "./src/app/form-pages/form-pages.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_4__["FormPagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary navbar-transparent\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/form-builder']\">Salt</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/spell-checker']\">Spell Checker</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"http://builtwithbootstrap.com/\" target=\"_blank\">Built With Bootstrap</a>\n                </li>\n                <li>\n                    <a class=\"nav-link\" href=\"https://blog.angular.io/\" target=\"_blank\">Built With Angular 6</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/bootstrap-grid-system.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/bootstrap-grid-system.service.ts ***!
  \***********************************************************/
/*! exports provided: BootstrapGridSystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapGridSystemService", function() { return BootstrapGridSystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapGridSystemService = /** @class */ (function () {
    function BootstrapGridSystemService(data, grid) {
        if (grid === void 0) { grid = '4 4 4'; }
        this._data = data;
        this._grid = grid;
    }
    BootstrapGridSystemService.prototype.getGrid = function () {
        return [{
                grid: '6 6',
                columns: []
            }, {
                grid: '4 4 4',
                columns: []
            }, {
                grid: '3 3 3 3',
                columns: []
            }, {
                grid: '2 2 4 2 2',
                columns: []
            }, {
                grid: '12',
                columns: []
            }];
    };
    BootstrapGridSystemService.prototype.convert = function () {
        var groups = [];
        var grid = this._grid.replace(/ +/g, ' ').trim();
        var arrGrid = grid.split(' ');
        var chunkSize = arrGrid.length;
        var page = {
            rows: [],
            name: 'Page 1'
        };
        for (var i = 0; i < this._data.length; i += chunkSize) {
            groups.push(this._data.slice(i, i + chunkSize));
        }
        var count = -1;
        this._page = groups.reduce(function (acc, group, index) {
            page.rows.push({
                grid: grid,
                columns: []
            });
            group.map(function (data, i) {
                count++;
                return page.rows[index].columns.push({
                    contents: [data]
                });
            }, 0);
            return page;
        }, 0);
        var lastRow = this._page.rows.length;
        var columns = this._page.rows[lastRow - 1].columns;
        if (columns.length < chunkSize) {
            for (var k = columns.length; k < chunkSize; k++) {
                this._page.rows[lastRow - 1].columns.push({
                    contents: []
                });
            }
        }
    };
    BootstrapGridSystemService.prototype.getPage = function () {
        return this._page;
    };
    BootstrapGridSystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Array, String])
    ], BootstrapGridSystemService);
    return BootstrapGridSystemService;
}());



/***/ }),

/***/ "./src/app/services/create-table-to-json.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/create-table-to-json.service.ts ***!
  \**********************************************************/
/*! exports provided: CreateTableToJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTableToJsonService", function() { return CreateTableToJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/database-engine.service */ "./src/app/shared/services/database-engine.service.ts");
/* harmony import */ var _shared_models_html_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/models/html.model */ "./src/app/shared/models/html.model.ts");
/* harmony import */ var _shared_models_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/models/table.model */ "./src/app/shared/models/table.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTableToJsonService = /** @class */ (function () {
    function CreateTableToJsonService() {
        this._isTextareaWhenSizeEquals = 1000;
        this._wordIndex = 2;
        this.regex = {
            onlyNumeric: /^([0-9]+(\.[0-9]+)?)$/,
            onlyDecimal: /^([0-9]*([\,\.]+)([0-9]+)?)$/g,
            //valueBtwParentheses: /\((.*)\)/,
            //valueBtwParenthesesGlobal: /\((.+)\)/g,
            valueBtwParentheses: /\(([^)]*)\)/,
            valueBtwParenthesesGlobal: /\(([^)]*)\)/g,
            stringRestriction: /^[\s\w+\_\-\,\.()]*$/
        };
        this.html = new _shared_models_html_model__WEBPACK_IMPORTED_MODULE_2__["Html"]();
        this.table = new _shared_models_table_model__WEBPACK_IMPORTED_MODULE_3__["Table"]();
        this._data = [];
        this._errors = [];
        this._dataBase = _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseEngine"].get('ORACLE');
        this._customLabel = this.getCustomLabelName();
    }
    CreateTableToJsonService.prototype.getDataTypeAndSize = function (str) {
        var secondMatch = str[1];
        var inputType, size = '';
        var dataType = secondMatch;
        var matchValBtwParen = secondMatch.match(this.regex.valueBtwParentheses);
        var hasValueBtwParen = false;
        if (matchValBtwParen !== null) {
            hasValueBtwParen = true;
            dataType = secondMatch.replace(matchValBtwParen[0], '');
        }
        else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) { //has more than 2 elements
                var thirdMatch = str[2];
                matchValBtwParen = thirdMatch.match(this.regex.valueBtwParentheses); //get value between parentheses
                if (matchValBtwParen !== null) { // it goes to the next index if parentheses doesn't exists
                    hasValueBtwParen = true;
                    this._wordIndex = 3;
                }
            }
        }
        if (hasValueBtwParen) {
            var numeric = matchValBtwParen[1];
            var regex = new RegExp(this.regex.onlyNumeric);
            if (!regex.test(numeric)) {
                this._errors.push({
                    message: "`" + this.table.columnName + "`: " + numeric + " is not a number!"
                });
            }
            size = numeric;
        }
        var database = this._dataBase[dataType.toUpperCase()];
        //console.log(database);
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        }
        else {
            this._errors.push({
                message: "You have an error in your SQL syntax; check the manual for the right syntax to use near '" + this.table.columnName + "'"
            });
        }
        this.table.type = dataType;
        this.html.tag = inputType;
        this.table.size = size;
    };
    CreateTableToJsonService.prototype.validateSyntax = function (words) {
        var value = '';
        var allowed = {
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
        for (var i = this._wordIndex; i < words.length; i++) {
            var currentWord = words[i].replace(/,/g, "");
            var hasError = false;
            var nextValue = '';
            var prevValue = '';
            if (typeof allowed[currentWord] === 'undefined') {
                this._errors.push({
                    message: "You have an error in your SQL syntax; check the manual for the right syntax to use near '" + this.table.columnName + "'"
                });
            }
            else {
                var index = i + 1;
                if (i === words.length - 1) {
                    index = words.length - 1;
                }
                var nextString = words[index];
                var prevString = words[i - 1];
                if (allowed[currentWord].next.length > 0) {
                    if (nextString.indexOf(allowed[currentWord].next[0]) !== -1) {
                    }
                    else {
                        nextValue = allowed[currentWord].next[0];
                        hasError = true;
                    }
                }
                if (allowed[currentWord].previous.length > 0) {
                    if (prevString.indexOf(allowed[currentWord].previous[0]) !== -1) {
                    }
                    else {
                        prevValue = allowed[currentWord].previous[0];
                        hasError = true;
                    }
                }
                value += prevValue + " " + currentWord + " " + nextValue;
                if (hasError && value !== '') {
                    this._errors.push({
                        message: "error: `" + currentWord + "` maybe `" + allowed[currentWord].correct + "` ? at line: " + this.table.columnName + " "
                    });
                }
            }
        }
        value = value.replace(/\s\s+/g, ' ').trim();
        this.table.nullable = (value.indexOf("not null") !== -1) ? true : false;
        this.table.isPrimaryKey = (value.indexOf("primary key") !== -1) ? true : false;
        this._wordIndex = 2;
    };
    CreateTableToJsonService.prototype.convert = function () {
        var _this = this;
        var regex = new RegExp(this.regex.stringRestriction);
        if (!regex.test(this._string)) {
            this._errors.push({
                message: 'Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )'
            });
        }
        var split = this._string.replace(this.regex.valueBtwParenthesesGlobal, function (string, first) {
            var regex = new RegExp(_this.regex.onlyDecimal);
            if (regex.test(first)) {
                return "(" + first.replace(/,/g, '.') + ")";
            }
            return string;
        })
            .split(",")
            .reduce(function (previous, currentValue) {
            if (previous && currentValue !== '') {
                previous.push(currentValue);
            }
            return previous;
        }, []);
        console.log(split);
        var i = 0;
        while (i < split.length && this._errors.length <= 0) {
            var currentWord = split[i].toLowerCase().replace(/\s+/g, " ").trim();
            var eachWords = currentWord.split(' ');
            if (eachWords.length <= 1) {
                this._errors.push({
                    message: "Incompleted"
                });
            }
            else {
                this.table.columnName = eachWords[0]; // column name
                if (this.table.columnName === 'create' && eachWords[1] === 'table') {
                    //this._data.name = stringArr[2];
                }
                else {
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
            }
            i++;
        }
        //console.log(this._data)
    };
    CreateTableToJsonService.prototype.customLabelName = function () {
        var splitColumnName = this.table.columnName.split('_');
        if (splitColumnName.length > 0) {
            for (var i = 0; i < splitColumnName.length; i++) {
                var currentPartialName = splitColumnName[i];
                var value = this._customLabel[currentPartialName];
                if (typeof value !== 'undefined')
                    currentPartialName = value;
                splitColumnName[i] = currentPartialName.charAt(0).toUpperCase() + currentPartialName.substr(1);
            }
            this.html.label = splitColumnName.join(' ').trim();
            ;
        }
    };
    CreateTableToJsonService.prototype.customInput = function () {
        if (this.table.columnName.indexOf('ind_') !== -1)
            this.html.tag = 'select';
        if (this.html.tag === 'text' || this.html.tag === 'textarea') {
            //this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals)? 'text' : 'textarea';
            this.html.tag = (parseInt(this.table.size) <= this._isTextareaWhenSizeEquals) ? 'text' : 'textarea';
        }
    };
    CreateTableToJsonService.prototype.getData = function () {
        return this._data;
    };
    CreateTableToJsonService.prototype.setString = function (_string) {
        this._string = _string;
    };
    CreateTableToJsonService.prototype.getString = function () {
        return this._string;
    };
    CreateTableToJsonService.prototype.getError = function () {
        return this._errors;
    };
    CreateTableToJsonService.prototype.getCustomLabelName = function () {
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
    };
    CreateTableToJsonService.prototype.hasError = function () {
        return this._errors.length > 0 ? true : false;
    };
    CreateTableToJsonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CreateTableToJsonService);
    return CreateTableToJsonService;
}());



/***/ }),

/***/ "./src/app/services/form-config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/form-config.service.ts ***!
  \*************************************************/
/*! exports provided: FormConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfigService", function() { return FormConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Enviando parametros para componentes diferentes com Subject (Tópico, Assunto) 
var FormConfigService = /** @class */ (function () {
    function FormConfigService() {
        // Instância o objeto Subject
        this.newFormConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    FormConfigService.prototype.setConfig = function (config) {
        console.log(config);
        //Armazena o parametro que foi enviado
        this.newFormConfigSubject.next(config);
    };
    FormConfigService.prototype.getConfig = function () {
        //Fica "observando" por atualizações nos dados
        return this.newFormConfigSubject.asObservable();
    };
    FormConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormConfigService);
    return FormConfigService;
}());



/***/ }),

/***/ "./src/app/services/form-content-config.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/form-content-config.service.ts ***!
  \*********************************************************/
/*! exports provided: FormContentConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContentConfigService", function() { return FormContentConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormContentConfigService = /** @class */ (function () {
    function FormContentConfigService() {
        this.newFormConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.component = {
            general: {
                title: "General Configuration", componentName: 'app-config-general'
            },
            choices: {
                title: "Choices", componentName: 'app-config-choices'
            },
            visibleIf: {
                title: "Vísivel Se", componentName: '<hide-when-tab content="content"></hide-when-tab>'
            },
            htmlEditor: {
                title: "Html Editor", componentName: 'app-config-html-editor'
            },
            title: {
                title: "Title", componentName: 'app-config-title'
            },
            table: {
                title: "Table", componentName: 'app-config-table-builder'
            },
            img: {
                title: "Image", componentName: 'app-config-img'
            }
        };
    }
    FormContentConfigService.prototype.render = function () {
        return {
            'h1': {
                components: [this.component.title]
            },
            'h2': {
                components: [this.component.title]
            },
            'h3': {
                components: [this.component.title]
            },
            'h4': {
                components: [this.component.title]
            },
            'h5': {
                components: [this.component.title]
            },
            'h6': {
                components: [this.component.title]
            },
            'legend': {
                components: [this.component.title]
            },
            'radio': {
                components: [this.component.general, this.component.choices]
            },
            'checkbox': {
                components: [this.component.general, this.component.choices]
            },
            'select': {
                components: [this.component.general, this.component.choices]
            },
            'textarea': {
                components: [this.component.general]
            },
            'text': {
                components: [this.component.general]
            },
            'number': {
                components: [this.component.general]
            },
            'date': {
                components: [this.component.general]
            },
            'image': {
                components: [this.component.img]
            },
            'html': {
                components: [this.component.htmlEditor]
            },
            'table': {
                components: [this.component.table]
            },
            'file': {
                components: [this.component.general]
            }
        };
    };
    ;
    FormContentConfigService.prototype.setContent = function (content) {
        //Armazena o parametro que foi enviado
        this.newFormConfigSubject.next(content);
    };
    FormContentConfigService.prototype.getContent = function () {
        //Fica "observando" por atualizações nos dados
        return this.newFormConfigSubject.asObservable();
    };
    FormContentConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormContentConfigService);
    return FormContentConfigService;
}());



/***/ }),

/***/ "./src/app/services/render-html.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/render-html.service.ts ***!
  \*************************************************/
/*! exports provided: BootstrapForm, CustomForm, RenderHtmlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapForm", function() { return BootstrapForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomForm", function() { return CustomForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderHtmlService", function() { return RenderHtmlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_html_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/models/html.model */ "./src/app/shared/models/html.model.ts");
/* harmony import */ var _shared_models_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/models/table.model */ "./src/app/shared/models/table.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BootstrapForm = /** @class */ (function () {
    function BootstrapForm(d) {
        this.html = new _shared_models_html_model__WEBPACK_IMPORTED_MODULE_1__["Html"](d.html);
        this.table = new _shared_models_table_model__WEBPACK_IMPORTED_MODULE_2__["Table"](d.table);
    }
    BootstrapForm.prototype.get = function () {
        var _this = this;
        var data = {
            "html": ["" + this.html.data],
            "legend": ["<legend>" + this.html.text + "</legend>"],
            "h1": ["<h1>" + this.html.text + "</h1>"],
            "h2": ["<h2>" + this.html.text + "</h2>"],
            "h3": ["<h3>" + this.html.text + "</h3>"],
            "h4": ["<h4>" + this.html.text + "</h4>"],
            "h5": ["<h5>" + this.html.text + "</h5>"],
            "h6": ["<h6>" + this.html.text + "</h6>"],
            "table": ["<table class=\"table\">",
                "" + this.html.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.html.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join(''),
                "</table>"],
            "image": ["<img src=\"" + this.html.src + "\" class=\"img-fluid\">"],
            "textarea": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"txt_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "<textarea class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"txt_" + this.table.columnName + "\"  " + (this.table.nullable ? "" : "required") + "></textarea>",
                "</div>"],
            "select": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "<select class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" " + (this.table.nullable ? "" : "required") + ">",
                "<option value=\"\">Selecione</option>",
                "" + this.html.elements.map(function (element) { return "<option value=\"" + element.value + "\">" + element.text + "</option>"; }).join(''),
                "</select>",
                "</div>"],
            "checkbox": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "radio": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "text": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "<input type=\"text\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\"  " + (this.table.nullable ? "" : "required") + ">",
                "</div>"],
            "number": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "<input type=\"number\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\" " + (this.table.nullable ? "" : "required") + ">",
                "</div>"],
            "date": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "<input type=\"date\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\" " + (this.table.nullable ? "" : "required") + ">",
                "</div>"]
        };
        return typeof data[this.html.tag] !== 'undefined' ? data[this.html.tag].join("\n") : '';
    };
    return BootstrapForm;
}());

var CustomForm = /** @class */ (function () {
    function CustomForm(d) {
        this.html = new _shared_models_html_model__WEBPACK_IMPORTED_MODULE_1__["Html"](d.html);
        this.table = new _shared_models_table_model__WEBPACK_IMPORTED_MODULE_2__["Table"](d.table);
    }
    CustomForm.prototype.get = function () {
        var _this = this;
        var data = {
            "html": ["" + this.html.data],
            "legend": ["<legend>" + this.html.text + "</legend>"],
            "h1": ["<h1>" + this.html.text + "</h1>"],
            "h2": ["<h2>" + this.html.text + "</h2>"],
            "h3": ["<h3>" + this.html.text + "</h3>"],
            "h4": ["<h4>" + this.html.text + "</h4>"],
            "h5": ["<h5>" + this.html.text + "</h5>"],
            "h6": ["<h6>" + this.html.text + "</h6>"],
            "table": ["<table class=\"table\">",
                "" + this.html.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.html.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join(''),
                "</table>"],
            "image": ["<img src=\"" + this.html.src + "\" class=\"img-fluid\">"],
            "textarea": ["{!! $HTML::textArea(" + this.html.grid + ", '" + this.table.columnName + "', " + (parseInt(this.table.size) > 0 ? "" + this.table.size : "''") + ", \"" + this.html.label + "\", " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "') !!}"],
            "select": ["{!! $HTML::selectDominio(" + this.html.grid + ", '" + this.table.columnName + "', '" + this.html.label + "', " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "' ) !!}"],
            "checkbox": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "radio": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "text": ["{!! $HTML::inputTexto(" + this.html.grid + ", '" + this.table.columnName + "', " + (parseInt(this.table.size) > 0 ? "" + this.table.size : "''") + ", '" + this.html.label + "', " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "') !!}"],
            "number": ["{!! $HTML::inputNumero(" + this.html.grid + ", '" + (this.table.size ? (this.table.size.indexOf('.') != -1 ? "decimal" : "inteiro") : '') + "', '" + this.table.columnName + "', " + (parseInt(this.table.size) > 0 ? "" + this.table.size : "''") + ", '" + this.html.label + "', " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "') !!}"],
            "date": ["{!! $HTML::inputData(" + this.html.grid + ", '" + this.table.columnName + "', '" + this.html.label + "', " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "') !!}"]
        };
        return typeof data[this.html.tag] !== 'undefined' ? data[this.html.tag].join("\n") : '';
    };
    return CustomForm;
}());

var RenderHtmlService = /** @class */ (function () {
    function RenderHtmlService() {
    }
    RenderHtmlService.prototype.setParams = function (d) {
        this.bootstrapForm = new BootstrapForm(d);
        this.customForm = new CustomForm(d);
    };
    RenderHtmlService.prototype.get = function () {
        return {
            html: this.bootstrapForm.get(),
            code: this.customForm.get()
        };
    };
    RenderHtmlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RenderHtmlService);
    return RenderHtmlService;
}());



/***/ }),

/***/ "./src/app/shared/directives/sum-be-equals-to.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sum-be-equals-to.directive.ts ***!
  \*****************************************************************/
/*! exports provided: SumBeEqualsToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumBeEqualsToDirective", function() { return SumBeEqualsToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SumBeEqualsToDirective = /** @class */ (function () {
    function SumBeEqualsToDirective() {
    }
    SumBeEqualsToDirective_1 = SumBeEqualsToDirective;
    SumBeEqualsToDirective.prototype.validate = function (control) {
        var sum = 0;
        if (control.value) {
            var arrValues = control.value.trim().replace(/ +/g, ' ').split(' ');
            if (arrValues.length > 0) {
                for (var i = 0; i < arrValues.length; i++) {
                    var num = parseInt(arrValues[i]);
                    sum += num;
                }
            }
            return (parseInt(this.sumBeEqualsTo) === sum) ? null : { 'isSumInvalid': true, 'sumBeEqualsTo': this.sumBeEqualsTo };
        }
    };
    var SumBeEqualsToDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SumBeEqualsToDirective.prototype, "sumBeEqualsTo", void 0);
    SumBeEqualsToDirective = SumBeEqualsToDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sumBeEqualsTo]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: SumBeEqualsToDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], SumBeEqualsToDirective);
    return SumBeEqualsToDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/html.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/html.model.ts ***!
  \*********************************************/
/*! exports provided: Html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
var Html = /** @class */ (function () {
    function Html(html) {
        if (html === void 0) { html = {}; }
        this.fields = [];
        this.elements = [];
        for (var key in html) {
            if (html.hasOwnProperty(key)) {
                var value = html[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
    return Html;
}());



/***/ }),

/***/ "./src/app/shared/models/table.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/table.model.ts ***!
  \**********************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
var Table = /** @class */ (function () {
    function Table(table) {
        if (table === void 0) { table = {}; }
        this.columnName = '';
        this.isPrimaryKey = false;
        this.type = '';
        this.nullable = false;
        this.size = '';
        for (var key in table) {
            if (table.hasOwnProperty(key)) {
                var value = table[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
    return Table;
}());



/***/ }),

/***/ "./src/app/shared/pipes/group-by.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/group-by.pipe.ts ***!
  \***********************************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        var _this = this;
        var newCollection = collection.reduce(function (previous, currentValue) {
            var c = _this.resolve(property, currentValue);
            if (previous[c]) {
                previous[c].push(currentValue);
            }
            else {
                previous[c] = [currentValue];
            }
            return previous;
        }, {});
        return Object.keys(newCollection).map(function (key) {
            return {
                key: key,
                value: newCollection[key]
            };
        });
    };
    GroupByPipe.prototype.resolve = function (path, obj, separator) {
        if (obj === void 0) { obj = self; }
        if (separator === void 0) { separator = '.'; }
        var properties = Array.isArray(path) ? path : path.split(separator);
        return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, obj);
    };
    GroupByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupBy'
        })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/database-engine.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/database-engine.service.ts ***!
  \************************************************************/
/*! exports provided: DatabaseEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseEngine", function() { return DatabaseEngine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DatabaseEngine);
    return DatabaseEngine;
}());



/***/ }),

/***/ "./src/app/shared/services/home.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/home.service.ts ***!
  \*************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeService = /** @class */ (function () {
    function HomeService() {
    }
    HomeService.prototype.get = function () {
        return [
            {
                "rows": [
                    {
                        "grid": "12",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "label": "Type your Text",
                                            "category": "headings",
                                            "tag": "h1",
                                            "text": "Salt.",
                                            "class": "text-center"
                                        },
                                        "table": {}
                                    },
                                    {
                                        "html": {
                                            "category": "headings",
                                            "tag": "h6",
                                            "text": "A tool for lazy Developers.",
                                            "class": "text-center"
                                        },
                                        "table": {}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "grid": "12",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "tag": "html",
                                            "category": "html",
                                            "data": "<h1 class=\"p-3 mb-3 bg-danger text-white text-center\">A simple drag & drop Bootstrap Form Builder </h1>"
                                        },
                                        "table": {}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "grid": "3 9",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "tag": "image",
                                            "category": "html",
                                            "src": "http://i.imgur.com/AVqsATi.gif"
                                        },
                                        "table": {}
                                    }
                                ]
                            },
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "tag": "html",
                                            "category": "html",
                                            "data": "<p class=\"f3\">This project was made with Angular 6.1.2.</p>\n<p>It's been in development since December 2017 and is <strong>currently being developed.</strong></p>"
                                        },
                                        "table": {}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "grid": "8 4",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "label": "Type your Text",
                                            "category": "headings",
                                            "tag": "h1",
                                            "text": "Features",
                                            "class": "text-center"
                                        },
                                        "table": {}
                                    }
                                ]
                            },
                            {
                                "contents": []
                            }
                        ]
                    },
                    {
                        "grid": "12",
                        "columns": [
                            {
                                "contents": [
                                    {
                                        "html": {
                                            "tag": "html",
                                            "category": "html",
                                            "data": "<a href=\"http://wiki.languagetool.org/public-http-api\" target=\"_blank\">API RESTful - Language Tool (LanguageTool Style and Grammar Checker)</a> http://wiki.languagetool.org/public-http-api"
                                        },
                                        "table": {}
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "name": "Salt - A tool for Lazy Developer"
            }
        ];
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/shared/services/html-element.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/html-element.service.ts ***!
  \*********************************************************/
/*! exports provided: HtmlElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlElementService", function() { return HtmlElementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtmlElementService = /** @class */ (function () {
    function HtmlElementService() {
        this.category = 'form';
    }
    HtmlElementService.prototype.getTags = function () {
        var _this = this;
        var tags = this.get().reduce(function (previous, current) {
            if (current.html.category) {
                if (current.html.category === _this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    };
    HtmlElementService.prototype.get = function () {
        return [{
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'select',
                    elements: [{
                            value: 'Select 1',
                            text: 'Select 1'
                        }, {
                            value: 'Select 2',
                            text: 'Select 2'
                        }, {
                            value: 'Select 3',
                            text: 'Select 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    tag: 'html',
                    category: 'html',
                    data: '<h1>HTML</h1>'
                },
                table: {}
            }, {
                html: {
                    tag: 'image',
                    category: 'html',
                    src: 'http://i.imgur.com/AVqsATi.gif'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'text'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'radio',
                    elements: [{
                            value: 'Radio 1',
                            text: 'Radio 1'
                        }, {
                            value: 'Radio 2',
                            text: 'Radio 2'
                        }, {
                            value: 'Radio 3',
                            text: 'Radio 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'textarea'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'number'
                },
                table: {}
            }, {
                html: {
                    label: 'Choose file',
                    category: 'form',
                    tag: 'file'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'date'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'checkbox',
                    elements: [{
                            value: 'Checkbox 1',
                            text: 'Checkbox 1'
                        }, {
                            value: 'Checkbox 2',
                            text: 'Checkbox 2'
                        }, {
                            value: 'Checkbox 3',
                            text: 'Checkbox 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'headings',
                    tag: 'h1',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h2',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h3',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h4',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h5',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h6',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'formatting',
                    tag: 'legend',
                    text: 'Legend text'
                },
                table: {}
            }, {
                html: {
                    category: 'table',
                    tag: 'table',
                    fields: [
                        {
                            "Book Name": "Computer Architecture",
                            "Category": "Computers",
                            "Price": "125.60",
                            "Book ID": "1"
                        },
                        {
                            "Book ID": "2",
                            "Book Name": "Asp.Net 4 Blue Book",
                            "Category": "Programming",
                            "Price": "56.00"
                        },
                        {
                            "Book ID": "3",
                            "Book Name": "Popular Science",
                            "Category": "Science",
                            "Price": "210.40"
                        }
                    ]
                },
                table: {}
            }];
    };
    HtmlElementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HtmlElementService);
    return HtmlElementService;
}());



/***/ }),

/***/ "./src/app/shared/services/language-tool.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/language-tool.service.ts ***!
  \**********************************************************/
/*! exports provided: LanguageToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageToolService", function() { return LanguageToolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageToolService = /** @class */ (function () {
    function LanguageToolService(http) {
        this.http = http;
        this.apiUrl = 'https://languagetool.org/api/v2/check';
        this.language = 'pt-br';
    }
    LanguageToolService.prototype.getCorrectWord = function (text, language) {
        return this.http.get(this.apiUrl, {
            params: {
                language: language ? language : this.language,
                text: text
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.json();
        }));
    };
    LanguageToolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LanguageToolService);
    return LanguageToolService;
}());



/***/ }),

/***/ "./src/app/spell-checker/spell-checker.component.css":
/*!***********************************************************!*\
  !*** ./src/app/spell-checker/spell-checker.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spell-checker/spell-checker.component.html":
/*!************************************************************!*\
  !*** ./src/app/spell-checker/spell-checker.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group\">\n\t<input type=\"text\" [(ngModel)]=\"text\" (ngModelChange)=\"textOnChange()\"class=\"form-control\">\n\t<div class=\"input-group-append\">\n\t\t<button (click)=\"checkSpelling()\" class=\"btn btn-outline-info btn-sm\" type=\"button\">\n\t\t\t<i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n</div>\n<div *ngIf=\"isLoading\" class=\"text-center\">\n\t<i class=\"fa fa-cog fa-spin fa-2x\"></i> Loading...\n</div>\n<div ng-if=\"!isLoading\">\n\t<div id=\"spell-checker\" class=\"py-3\"></div>\n\t<div class=\"row\" *ngIf=\"result?.matches.length > 0\">\n\t\t<div *ngFor=\"let match of result?.matches; let mK = index;\" class=\"form-group col-md-6 col-xs-12\">\n\t\t\t<label>{{ match.message }}</label>\n\t\t\t<select multiple class=\"form-control\" disabled>\n\t\t\t\t<option *ngFor=\"let r of match.replacements; let rK = index;\">{{ r.value }}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/spell-checker/spell-checker.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/spell-checker/spell-checker.component.ts ***!
  \**********************************************************/
/*! exports provided: SpellCheckerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellCheckerComponent", function() { return SpellCheckerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_language_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/language-tool.service */ "./src/app/shared/services/language-tool.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpellCheckerComponent = /** @class */ (function () {
    function SpellCheckerComponent(languageToolService) {
        this.languageToolService = languageToolService;
        this.textChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
    }
    SpellCheckerComponent.prototype.ngOnInit = function () {
    };
    SpellCheckerComponent.prototype.textOnChange = function () {
        this.textChange.emit(this.text);
    };
    SpellCheckerComponent.prototype.checkSpelling = function () {
        var _this = this;
        this.isLoading = true;
        if (this.hasText()) {
            this.text = this.langTool();
            this.languageToolService.getCorrectWord(this.text).subscribe(function (data) {
                if (data.matches) {
                    _this.result = data;
                    _this.isLoading = false;
                }
            });
            console.log(this.result);
        }
    };
    SpellCheckerComponent.prototype.langTool = function () {
        if (this.hasText()) {
            var arrOfWords = this.text.split(' ');
            var newText = [];
            for (var i = 0; i < arrOfWords.length; i++) {
                var word = arrOfWords[i].trim();
                word = word.charAt(0).toUpperCase() + word.slice(1);
                newText.push(word);
            }
            return newText.join(' ');
        }
        return '';
    };
    SpellCheckerComponent.prototype.hasText = function () {
        if (this.text.length > 0) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpellCheckerComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpellCheckerComponent.prototype, "textChange", void 0);
    SpellCheckerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spell-checker',
            template: __webpack_require__(/*! ./spell-checker.component.html */ "./src/app/spell-checker/spell-checker.component.html"),
            styles: [__webpack_require__(/*! ./spell-checker.component.css */ "./src/app/spell-checker/spell-checker.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_language_tool_service__WEBPACK_IMPORTED_MODULE_1__["LanguageToolService"]])
    ], SpellCheckerComponent);
    return SpellCheckerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\projetos\saltiest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map