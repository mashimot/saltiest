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

module.exports = "<app-header-bar></app-header-bar>\n<ngx-ui-loader></ngx-ui-loader>\n<div class=\"splash\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<img src=\"https://i.imgur.com/WlEBazl.png\" class=\"img-fluid\" alt=\"\">\t\t\t\t\n\t\t\t\t<div id=\"social\">\n\t\t\t\t\t<span class=\"center-block text-center\">\n\t\t\t\t\t\t<iframe id=\"gh-star\" src=\"https://ghbtns.com/github-btn.html?user=mashimot&repo=saltiest&type=watch&count=true\" width=\"110\" height=\"20\" style=\"border: none;\"></iframe>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid mt-3\">\t\t\n\t<router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _form_builder_form_builder_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-builder/form-builder.module */ "./src/app/form-builder/form-builder.module.ts");
/* harmony import */ var _config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config-choices/config-choices.module */ "./src/app/config-choices/config-choices.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/projects/projects.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ngxUiLoaderConfig = {
    bgsColor: 'red',
    bgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["POSITION"].bottomCenter,
    bgsSize: 40,
    bgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["SPINNER"].rectangleBounce,
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["SPINNER"].rectangleBounce,
    pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["PB_DIRECTION"].leftToRight,
    pbThickness: 3,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_11__["ConfigChoicesModule"],
                _form_builder_form_builder_module__WEBPACK_IMPORTED_MODULE_10__["FormBuilderModule"],
                _projects_projects_module__WEBPACK_IMPORTED_MODULE_15__["ProjectsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_16__["CoreModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"].forRoot(),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__["NgxUiLoaderHttpModule"]
            ],
            providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config-choices/config-choice-form/config-choice-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/config-choices/config-choice-form/config-choice-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config-choices/config-choice-form/config-choice-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/config-choices/config-choice-form/config-choice-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div [formGroup]=\"choiceForm\"\n\t\t[ngClass]=\"{ 'is-invalid': choiceForm.invalid }\">\n\t\t\t<div dragula=\"sortableChoices\"\n\t\t\t\t[(dragulaModel)]=\"choices.controls\"\n\t\t\t\tformArrayName=\"choices\">\n\t\t\t\t<div *ngFor=\"let choice of choices.controls; let i = index\" \n\t\t\t\t\t[formGroupName]=\"i\" \n\t\t\t\t\tclass=\"sortable-item-contents\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tformControlName=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-sm\"\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': choice.get('text').invalid }\" />\n\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('text').invalid || choice.get('text').touched\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('text').errors?.required\">You did not enter a field</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('text').errors?.minlength\">Your field is too short</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tformControlName=\"value\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-sm\"\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': choice.get('value').invalid }\" />\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('value').invalid || choice.get('value').touched\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('value').errors?.required\">You did not enter a field</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"choice.get('value').errors?.minlength\">Your field is too short</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger btn-sm btn-block\" (click)=\"removeContent(i)\">\n\t\t\t\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<span class=\"element-handle\">\n\t\t\t\t\t\t\t\tmove\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t<button type=\"button\" (click)=\"cloneThis('value')\" class=\"btn btn-secondary btn-sm btn-block\">\n\t\t\t\t\t\tClone Text to Values\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t<button type=\"button\" (click)=\"cloneThis('text')\" class=\"btn btn-secondary btn-sm btn-block\">\n\t\t\t\t\t\tClone Values To Text\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"fast-entry\">Fast Entry</label>\n\t\t\t<textarea id=\"fast-entry\"\n\t\t\t\t[(ngModel)]=\"text\"\n\t\t\t\t(ngModelChange)=\"stringToElement()\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tstyle=\"resize: none; height: 210px;\"></textarea>\n\t\t</div>\n\t\t<div class=\"mt-2\" *ngIf=\"!parentFormGroup\">\n\t\t\t<div class=\"btn-group float-right\">\n\t\t\t\t<button class=\"btn btn-outline-primary\" (click)=\"back()\">Save</button>\n\t\t\t</div>\n\t\t</div>\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/config-choices/config-choice-form/config-choice-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/config-choices/config-choice-form/config-choice-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfigChoiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigChoiceFormComponent", function() { return ConfigChoiceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum */ "./src/app/shared/enum.ts");
/* harmony import */ var src_app_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var src_app_shared_services_content_choice_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/content-choice-item.service */ "./src/app/shared/services/content-choice-item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConfigChoiceFormComponent = /** @class */ (function () {
    function ConfigChoiceFormComponent(fb, contentService, contentChoiceItemService, route, dragulaService, location, modal) {
        this.fb = fb;
        this.contentService = contentService;
        this.contentChoiceItemService = contentChoiceItemService;
        this.route = route;
        this.dragulaService = dragulaService;
        this.location = location;
        this.modal = modal;
        this.contentChoiceItemIdToUpdate = null;
        this.contentChoiceId = -1;
        this.text = "";
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.emitData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        dragulaService.createGroup('sortableElements', {
            moves: function (el, container, handle) {
                return handle.classList.contains('element-handle');
            }
        });
    }
    ConfigChoiceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var choices = this.content.html.choices;
        this.dbops = src_app_shared_enum__WEBPACK_IMPORTED_MODULE_2__["DBOperation"].create;
        this.choiceForm = this.fb.group({
            'choices': this.fb.array([])
        });
        if (typeof this.parentFormGroup != 'undefined') {
            this.choiceForm = this.parentFormGroup.get('html');
        }
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var items = this.choiceForm.get('choices');
            items.push(this.getChoice(item.text, item.value));
        }
        this.subs.add(this.dragulaService.dropModel('sortableChoices').subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            _this.choices.controls = sourceModel;
            _this.text = _this.elementToString();
        }));
        this.text = this.elementToString();
        /*this.choiceForm = this.fb.group({
            'id': [''],
            'content_choice_id': ['', [
            ]],
            'text': ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2000)
            ]],
            'value': ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2000)
            ]]
        });
        this.route.params.subscribe(result => {
            this.contentChoiceId = result.id;
            this.choiceForm.patchValue({
                'content_choice_id': this.contentChoiceId
            });
            this.loadChoices();
        })*/
    };
    ConfigChoiceFormComponent.prototype.ngOnChanges = function () {
    };
    ConfigChoiceFormComponent.prototype.ngOnDestroy = function () {
        /*this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');*/
        this.dragulaService.destroy('sortableElements');
    };
    /*public loadChoices(){
        if(this.contentChoiceId != -1){
            let id = this.contentChoiceId;
            this.contentService.getContentChoicesById(id).subscribe(result => {
                if(result.success){
                    this.choices = result.data;
                    console.log(this.choices);
                }
            });
        }
    }

    public onSubmit(){
        switch(this.dbops){
            case DBOperation.create:
                this.contentChoiceItemService.storeContentChoiceItem(this.choiceForm.value)
                .subscribe(result => {
                    console.log(result);
                    if(result.success){
                        this.reset();
                        this.contentChoiceId = result.data.contentChoiceId;
                        this.choiceForm.patchValue({
                            'content_choice_id': result.data.contentChoiceId
                        });
                        this.loadChoices();
                    }
                });
            break;
            case DBOperation.update:
                const id = this.contentChoiceItemIdToUpdate;
                this.contentChoiceItemService.updateContentChoiceItem(id, this.choiceForm.value)
                .subscribe(result => {
                    console.log(result.data);
                    if(result.success){
                        this.reset();
                        this.loadChoices();
                    }
                });
            break;
        }
    }

    public create(){
        this.dbops = DBOperation.create;
        this.reset();
    }

    public savePosition(){
        let id = this.contentChoiceId;
        const orderedIds = this.choices.map(item => {
            return item.id;
        });
        this.contentService.updateContentChoicesPosition(id, orderedIds)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
            }
        });
    }

    public editContentChoice(id: number) {
        this.contentChoiceItemService.getContentChoiceItemById(id)
        .subscribe(result => {
            if(result.success){
                const content = result.data;
                this.dbops = DBOperation.update;
                this.contentChoiceItemIdToUpdate = content.id;
                this.choiceForm.setValue({
                    'id': content.id,
                    'content_choice_id': content.content_choice_id,
                    'text': content.text,
                    'value': content.value,
                });
            }
        });
    }

    public deleteContentChoiceItem(id: number) {
        this.contentChoiceItemService.deleteContentChoiceItem(id)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
                this.reset();
            }
        });
    }

    private reset() {
        this.contentChoiceItemIdToUpdate = null;
        const resetExcept: string[] = ['content_choice_id', 'choices', 'tag', 'category', 'label'];

        Object.keys(this.choiceForm.controls).forEach(key => {
            if (resetExcept.findIndex(q => q === key) === -1) {
                this.choiceForm.get(key).reset();
            }
        });
    }*/
    ConfigChoiceFormComponent.prototype.back = function () {
        //this.content.html.choices = this.choiceForm.value;
        //this.modal.close();        
        this.emitData.emit(this.choiceForm.value);
    };
    ConfigChoiceFormComponent.prototype.stringToElement = function () {
        if (this.text.length > 0) {
            var string = this.text.split('\n');
            var cloneChoices = JSON.parse(JSON.stringify(this.choices.value));
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
                this.choices.removeAt(i);
                if (typeof this.choices.controls[i] === 'undefined') {
                    this.choices.push(this.getChoice(text, value));
                }
                else {
                    this.choices.controls[i].patchValue({
                        text: text,
                        value: value
                    });
                }
            }
        }
        else {
            while (this.choices.length !== 0) {
                this.choices.removeAt(0);
            }
        }
    };
    ConfigChoiceFormComponent.prototype.removeContent = function ($index) {
        this.choices.removeAt($index);
        this.text = this.elementToString();
    };
    ConfigChoiceFormComponent.prototype.cloneThis = function (name) {
        var choicesLength = this.choices.value.length;
        if (choicesLength > 0) {
            var cloneThisObjectName = (name === 'value') ? 'text' : 'value';
            for (var i = 0; i < choicesLength; i++) {
                this.choices.value[i][name] = this.choices.value[i][cloneThisObjectName];
            }
            this.text = this.elementToString();
            this.stringToElement();
        }
    };
    ConfigChoiceFormComponent.prototype.elementToString = function () {
        var string = '';
        //fire the `valueChanges` manually
        this.choices.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        var e = this.choices.value;
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
    ConfigChoiceFormComponent.prototype.getChoice = function (text, value) {
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = ''; }
        return this.fb.group({
            text: [text, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2000)
                ]],
            value: [value, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2000)
                ]]
        });
    };
    Object.defineProperty(ConfigChoiceFormComponent.prototype, "f", {
        get: function () {
            return this.choiceForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigChoiceFormComponent.prototype, "choices", {
        get: function () {
            return this.f.get('choices');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfigChoiceFormComponent.prototype, "emitData", void 0);
    ConfigChoiceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-choice-form',
            template: __webpack_require__(/*! ./config-choice-form.component.html */ "./src/app/config-choices/config-choice-form/config-choice-form.component.html"),
            styles: [__webpack_require__(/*! ./config-choice-form.component.css */ "./src/app/config-choices/config-choice-form/config-choice-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"],
            src_app_shared_services_content_choice_item_service__WEBPACK_IMPORTED_MODULE_4__["ContentChoiceItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]])
    ], ConfigChoiceFormComponent);
    return ConfigChoiceFormComponent;
}());



/***/ }),

/***/ "./src/app/config-choices/config-choices-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/config-choices/config-choices-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigChoicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigChoicesRoutingModule", function() { return ConfigChoicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_choices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-choices.component */ "./src/app/config-choices/config-choices.component.ts");
/* harmony import */ var _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-choice-form/config-choice-form.component */ "./src/app/config-choices/config-choice-form/config-choice-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'config-choices', component: _config_choices_component__WEBPACK_IMPORTED_MODULE_2__["ConfigChoicesComponent"] },
    { path: 'config-choices/create', component: _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_3__["ConfigChoiceFormComponent"] },
    { path: 'config-choices/:id/edit', component: _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_3__["ConfigChoiceFormComponent"] }
];
var ConfigChoicesRoutingModule = /** @class */ (function () {
    function ConfigChoicesRoutingModule() {
    }
    ConfigChoicesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConfigChoicesRoutingModule);
    return ConfigChoicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/config-choices/config-choices.component.css":
/*!*************************************************************!*\
  !*** ./src/app/config-choices/config-choices.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config-choices/config-choices.component.html":
/*!**************************************************************!*\
  !*** ./src/app/config-choices/config-choices.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n\t<div class=\"border-bottom border-dark p-1 text-uppercase\" \n\t[ngStyle]=\"{ cursor: 'pointer' }\">\n\t\t<span class=\"text-right\">\n\t\t\t\n\t\t\tOption Group\n\t\t\t<!--a \n\t\t\t\t[routerLink]=\"['/config-choices', 'create']\"\n\t\t\t\n\t\t\t\t<small><i class=\"far fa-plus-square\"></i> create</small>\n\t\t\t</a-->\n\t\t\t<button \n\t\t\t(click)=\"edit()\"\n\t\t\tclass=\"btn btn-link\"\n\t\t\t>\n\t\t\t\t<small><i class=\"fas fa-plus-square\"></i> create </small>\n\t\t\t</button>\n\t\t</span>\n\t</div>\n\t<div class=\"border border-dark p-1 mt-1 dropdown\">\n\t\t<h6 class=\"text-center text-bold\">Select an Option Type</h6>\n\t\t<a href=\"javascript:void(0)\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-sm btn-block\">\n\t\t\t<h2 class=\"text-uppercase\"><i class=\"{{ toolType.icon }}\"></i> {{ toolType.type }}</h2>\n\t\t</a>\n\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t<li *ngFor=\"let toolType of toolTypes\" \n\t\t\tclass=\"dropdown-item p-3\" \n\t\t\t(click)=\"setToolType(toolType)\"\n\t\t\t[ngStyle]=\"{'cursor': 'pointer'}\">\n\t\t\t\t<h2 class=\"text-uppercase\"><i class=\"{{ toolType.icon }}\"></i> {{ toolType.type }}</h2>\n\t\t\t</li>\n\t\t</ul>    \n\t</div>\t\n\t<div \n\t\tdragula=\"contents\"\n\t\t[(dragulaModel)]=\"groups\"\n\t\tclass=\"menu-content-sortable no-gutters collapse m-1 show\"\n\t\taria-expanded=\"true\"\n\t>\n\t\t<div *ngFor=\"let content of groups; let contentIndex = index;\"\n\t\t\tclass=\"content-handle menu-content-sortable option-type-sortable\"\n\t\t\t[attr.data-content]=\"content | json\"\n\t\t\t[attr.data-option-type]=\"toolType.value\"\n\t\t>\n\t\t\t<!--a [routerLink]=\"['/config-choices', content.html.content_choice_id ,'edit']\"-->\n\t\t\t<button \n\t\t\tclass=\"btn btn-link\"\n\t\t\t(click)=\"edit(contentIndex)\">\n\t\t\t\t<small><i class=\"fas fa-pen-square\"></i> edit </small>\n\t\t\t</button>\n\t\t\t<ul class=\"text-dark text-capitalize content-handle\" [ngStyle]=\"{ 'cursor': 'move' }\">\n\t\t\t\t<li *ngFor=\"let choice of content.html.choices\" class=\" content-handle\">\n\t\t\t\t\t<small class=\"content-handle\">{{ choice.text }}</small>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\" border border-bottom\"></div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/config-choices/config-choices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/config-choices/config-choices.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigChoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigChoicesComponent", function() { return ConfigChoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/html-element.service */ "./src/app/shared/services/html-element.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-choice-form/config-choice-form.component */ "./src/app/config-choices/config-choice-form/config-choice-form.component.ts");
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
    function ConfigChoicesComponent(htmlElementService, dragulaService, router, modalService, cd) {
        this.htmlElementService = htmlElementService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.modalService = modalService;
        this.cd = cd;
        this.toolTypes = [{
                type: 'select',
                value: 3,
                icon: 'fas fa-box-open'
            }, {
                type: 'radio',
                icon: 'far fa-check-circle',
                value: 1
            }, {
                type: 'checkbox',
                icon: 'far fa-check-square',
                value: 2
            }];
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.toolType = this.toolTypes[1];
        this.groups = this.htmlElementService.getStaticOptionChoices();
        /*this.htmlElementService.getTools().subscribe(result => {
            if(result.success){
                this.groups = result.data.groups;
                console.log(this.groups);
            }
        });*/
    }
    ConfigChoicesComponent.prototype.ngOnInit = function () {
    };
    ConfigChoicesComponent.prototype.edit = function (index) {
        var _this = this;
        if (index === void 0) { index = null; }
        var data = {
            content: this.groups[index],
            index: index
        };
        console.log(data.content);
        var m = this.modalService.open(_config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_5__["ConfigChoiceFormComponent"], this.options);
        //m.componentInstance.data = data;
        console.log(this.groups[0]);
        var myAss = {
            html: {
                category: "form",
                choices: [],
                group: "",
                label: "Type your Text",
                tag: "radio"
            }
        };
        m.componentInstance.content = myAss;
        if (index != null) {
            m.componentInstance.content = this.groups[index];
            m.componentInstance.index = data.index;
        }
        console.log(this.groups.length);
        m.componentInstance.emitData.subscribe(function ($e) {
            if ($e.choices.length > 0) {
                var text = $e.choices.map(function (item) {
                    return item.text;
                }).join("|");
                if (index != null) {
                    _this.groups[index].html.choices = $e.choices;
                    _this.groups[index].html.group = text;
                }
                else {
                    myAss.html.group = text;
                    myAss.html.choices = $e.choices;
                    _this.groups.push(myAss);
                }
            }
            m.dismiss();
        });
    };
    ConfigChoicesComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');
        this.dragulaService.destroy('sortableElements');
    };
    ConfigChoicesComponent.prototype.setToolType = function (toolType) {
        this.toolType = {
            value: toolType.value,
            icon: toolType.icon,
            type: toolType.type
        };
    };
    ConfigChoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-choices',
            template: __webpack_require__(/*! ./config-choices.component.html */ "./src/app/config-choices/config-choices.component.html"),
            styles: [__webpack_require__(/*! ./config-choices.component.css */ "./src/app/config-choices/config-choices.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_1__["HtmlElementService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ConfigChoicesComponent);
    return ConfigChoicesComponent;
}());



/***/ }),

/***/ "./src/app/config-choices/config-choices.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/config-choices/config-choices.module.ts ***!
  \*********************************************************/
/*! exports provided: ConfigChoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigChoicesModule", function() { return ConfigChoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_choices_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-choices-routing.module */ "./src/app/config-choices/config-choices-routing.module.ts");
/* harmony import */ var _config_choices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-choices.component */ "./src/app/config-choices/config-choices.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-choice-form/config-choice-form.component */ "./src/app/config-choices/config-choice-form/config-choice-form.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConfigChoicesModule = /** @class */ (function () {
    function ConfigChoicesModule() {
    }
    ConfigChoicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _config_choices_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigChoicesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            exports: [_config_choices_component__WEBPACK_IMPORTED_MODULE_3__["ConfigChoicesComponent"], _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_6__["ConfigChoiceFormComponent"]],
            declarations: [_config_choices_component__WEBPACK_IMPORTED_MODULE_3__["ConfigChoicesComponent"], _config_choice_form_config_choice_form_component__WEBPACK_IMPORTED_MODULE_6__["ConfigChoiceFormComponent"]]
        })
    ], ConfigChoicesModule);
    return ConfigChoicesModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/core/header-bar/header-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var components = [
    _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBarComponent"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                components
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                components
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header-bar/header-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/header-bar/header-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header-bar/header-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/header-bar/header-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/form-builder', 2, 'edit']\">Salt</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/config-choices']\">Option Choices</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/spell-checker']\">Spell Checker</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"http://builtwithbootstrap.com/\" target=\"_blank\">Built With Bootstrap</a>\n                </li>\n                <li>\n                    <a class=\"nav-link\" href=\"https://blog.angular.io/\" target=\"_blank\">Built With Angular 6</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/header-bar/header-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/header-bar/header-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
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

var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/core/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.css */ "./src/app/core/header-bar/header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/core/model/column.model.ts":
/*!********************************************!*\
  !*** ./src/app/core/model/column.model.ts ***!
  \********************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
var Column = /** @class */ (function () {
    function Column() {
    }
    return Column;
}());



/***/ }),

/***/ "./src/app/core/model/html.model.ts":
/*!******************************************!*\
  !*** ./src/app/core/model/html.model.ts ***!
  \******************************************/
/*! exports provided: Html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
var Html = /** @class */ (function () {
    function Html(html) {
        if (html === void 0) { html = {}; }
        this.fields = [];
        this.choices = [];
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

/***/ "./src/app/core/model/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/model/index.ts ***!
  \*************************************/
/*! exports provided: Html, Table, Page, Row, Column, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.model */ "./src/app/core/model/page.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page_model__WEBPACK_IMPORTED_MODULE_0__["Page"]; });

/* harmony import */ var _row_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row.model */ "./src/app/core/model/row.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row_model__WEBPACK_IMPORTED_MODULE_1__["Row"]; });

/* harmony import */ var _column_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column.model */ "./src/app/core/model/column.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _column_model__WEBPACK_IMPORTED_MODULE_2__["Column"]; });

/* harmony import */ var _html_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html.model */ "./src/app/core/model/html.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return _html_model__WEBPACK_IMPORTED_MODULE_3__["Html"]; });

/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.model */ "./src/app/core/model/table.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table_model__WEBPACK_IMPORTED_MODULE_4__["Table"]; });

/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.model */ "./src/app/core/model/project.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _project_model__WEBPACK_IMPORTED_MODULE_5__["Project"]; });









/***/ }),

/***/ "./src/app/core/model/page.model.ts":
/*!******************************************!*\
  !*** ./src/app/core/model/page.model.ts ***!
  \******************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/core/model/project.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/model/project.model.ts ***!
  \*********************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/core/model/row.model.ts":
/*!*****************************************!*\
  !*** ./src/app/core/model/row.model.ts ***!
  \*****************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
var Row = /** @class */ (function () {
    function Row() {
    }
    return Row;
}());



/***/ }),

/***/ "./src/app/core/model/table.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/model/table.model.ts ***!
  \*******************************************/
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

module.exports = "\n<form class=\"card\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"dropdown\">\n                    <h6 class=\"text-center text-bold\">Select a Database Engine</h6>\n                    <a href=\"javascript:void(0)\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <img [src]=\"options.logo\" alt=\"{{ options.database }}\" class=\"img-fluid mx-auto d-block\">\n                    </a>\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n                        <li *ngFor=\"let db of database\" (click)=\"options.database = db.engine; options.logo = db.logo;\" class=\"dropdown-item p-3\" [ngStyle]=\"{'cursor': 'pointer'}\">\n                            <img [src]=\"db.logo\" alt=\"{{ db.engine }}\" class=\"img-fluid\"> \n                        </li>\n                    </ul>    \n                </div>\n            </div>\n        </div>\n        <textarea [(ngModel)]=\"string\"\n            name=\"string\"\n            [ngClass]=\"{ 'is-invalid' : errors.length > 0 }\"\n            class=\"form-control form-control-sm h-20 mt-4\"\n            rows=\"10\"\n        ></textarea>\n        <div *ngIf=\"errors\" class=\"invalid-feedback\">\n            <div *ngFor=\"let e of errors\">\n                {{ e }}\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"form_ct_grid\">Bootstrap Grid</label>\n            <input type=\"text\"\n                id=\"form_ct_grid\"\n                [(ngModel)]=\"gridModel\"\n                name=\"grid\"\n                [ngClass]=\"{ 'is-invalid': f.controls.grid?.invalid }\"\n                class=\"form-control form-control-sm\"\n                [ngStyle]=\"{ cursor: 'pointer' }\"\n                sumBeEqualsTo=\"12\"\n                minlength=\"2\"\n                pattern=\"[0-9 \\n\\t]+\"\n                required>\n            <div *ngIf=\"f.controls.grid?.invalid || f.controls.grid?.touched\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.controls.grid?.errors?.required \">* Enter with your grid.</div>\n                <div *ngIf=\"f.controls.grid?.errors?.pattern\">* Allows only numbers and space.</div>\n                <div *ngIf=\"f.controls.grid?.errors?.minlength\">* Min. Length is {{ f.controls.grid?.errors.minlength.requiredLength }}.</div>\n                <div *ngIf=\"f.controls.grid?.errors?.isSumInvalid\">* The sum must be equals to {{ f.controls.grid.errors?.sumBeEqualsTo }}.</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"btn btn-dark btn-block btn-sm\" \n        (click)=\"createTable()\" \n        [disabled]=\"f.controls.grid?.invalid\">Generate</button>\n    </div>\n</form>\n"

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
        this.tableNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.database = _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseEngine"].getDatabaseEngines();
        this.setDatabaseEngineLogo(this.options.database);
        this.string = [
            'create table if not exists random_table_1 (',
            'supplier_id number(10) not null primary key,',
            'supplier_name varchar2(50) not null,',
            'address varchar2(50),',
            'city varchar2(50),',
            'state varchar2(25),',
            'dat_now date,',
            'zip_code number(10),price number(10,2)',
            ');'
        ].join("\n");
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
        var ct = new _services_create_table_to_json_service__WEBPACK_IMPORTED_MODULE_1__["CreateTableToJsonService"](this.options.database.toUpperCase());
        ct.setString(this.string);
        ct.convert();
        this.errors = ct.getError();
        console.log(ct.hasError());
        if (!ct.hasError()) {
            var data = ct.getData();
            var bootstrapGridSystem = new _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_2__["BootstrapGridSystemService"](data, this.gridModel + "\n");
            bootstrapGridSystem.convert();
            var pages = bootstrapGridSystem.getPage();
            this.tableNameChange.emit(ct.getTableName());
            this.pageChange.emit(pages);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "tableName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "pageChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateTableToJsonComponent.prototype, "tableNameChange", void 0);
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

module.exports = "<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.table\">\n\t\t\t<label>\n\t\t\t\t<div class=\"checkbox-inline\">\n\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\tformControlName=\"nullable\"\n\t\t\t\t\t\tstyle=\"display: none;\" checked>\n\t\t\t\t\tRequired?\n\t\t\t\t\t<div [ngSwitch]=\"nullable.value\">\n\t\t\t\t\t\t<span *ngSwitchCase=\"true\"><i class=\"far fa-check-square\"></i> Yes</span>\n\t\t\t\t\t\t<span *ngSwitchCase=\"false\"><i class=\"far fa-square\"></i> No</span>\n\t\t\t\t\t\t<span *ngSwitchDefault><i class=\"far fa-square\"></i> No</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.html\">\n\t\t\t<label>Description:</label>\n\t\t\t<input type=\"text\"\n\t\t\t\tformControlName=\"label\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': label.invalid }\"\n\t\t\t/>\n\t\t\t<div *ngIf=\"label.invalid || label.touched\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"label.errors?.required\">You did not enter a field</div>\n\t\t\t\t<div *ngIf=\"label.errors?.minlength\">Your field is too short</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

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


var ConfigGeneralComponent = /** @class */ (function () {
    function ConfigGeneralComponent(fb) {
        this.fb = fb;
    }
    ConfigGeneralComponent.prototype.ngOnInit = function () {
        this.html.get('label').setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.html.patchValue({
            'label': this.content.html.label,
        });
        this.table.get('nullable').setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.table.patchValue({
            'nullable': this.content.table.nullable,
        });
    };
    Object.defineProperty(ConfigGeneralComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.get('html');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigGeneralComponent.prototype, "table", {
        get: function () {
            return this.parentFormGroup.get('table');
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigGeneralComponent.prototype, "content", void 0);
    ConfigGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-general',
            template: __webpack_require__(/*! ./config-general.component.html */ "./src/app/form-builder/config/config-general/config-general.component.html"),
            styles: [__webpack_require__(/*! ./config-general.component.css */ "./src/app/form-builder/config/config-general/config-general.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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

module.exports = "<div [formGroup]=\"parentFormGroup.controls.html\">\n    <div class=\"form-group\">\n      \t<textarea formControlName=\"data\" class=\"form-control h-100\" rows=\"10\"></textarea>\n    </div>\n</div>\n"

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


var ConfigHtmlEditorComponent = /** @class */ (function () {
    function ConfigHtmlEditorComponent() {
    }
    ConfigHtmlEditorComponent.prototype.ngOnInit = function () {
        this.data.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.html.patchValue({
            'data': this.content.html.data
        });
    };
    Object.defineProperty(ConfigHtmlEditorComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigHtmlEditorComponent.prototype, "data", {
        get: function () {
            return this.html.get('data');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], ConfigHtmlEditorComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigHtmlEditorComponent.prototype, "content", void 0);
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

module.exports = "<div class=\"form-group\" [formGroup]=\"parentFormGroup.controls.html\">\n\t<label for=\"title-text\">Image source</label>\n\t<input type=\"text\"\n\t\tid=\"img-src\"\n\t\tformControlName=\"src\"\n\t\tclass=\"form-control\"\n\t\t[ngClass]=\"{ 'is-invalid': src.invalid }\"\n\t/>\n\t<div *ngIf=\"src.invalid || src.touched\" class=\"invalid-feedback\">\n\t\t<div *ngIf=\"src.errors?.required\">You did not enter a field</div>\n\t\t<div *ngIf=\"src.errors?.minlength\">Your field is too short</div>\n\t</div>\n</div>\n"

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


var ConfigImgComponent = /** @class */ (function () {
    function ConfigImgComponent() {
    }
    ConfigImgComponent.prototype.ngOnInit = function () {
        this.tag.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.html.patchValue({
            'tag': this.content.html.tag
        });
        this.src.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.html.patchValue({
            'src': this.content.html.src
        });
    };
    Object.defineProperty(ConfigImgComponent.prototype, "tag", {
        get: function () {
            return this.html.get('tag');
        },
        enumerable: true,
        configurable: true
    });
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
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], ConfigImgComponent.prototype, "parentFormGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigImgComponent.prototype, "content", void 0);
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

module.exports = "\t<div class=\"card\">\n\t<div class=\"card-header\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<pre>{{ fields.value | json }}</pre>\n\n\t\t<div *ngIf=\"fields.value.length > 0\">\n\t\t\t<div ng-show=\"hasDuplicateName\" class=\"alert alert-danger\">\n\t\t\t\t<strong ng-bind=\"duplicatedName\" class=\"text-dark\"></strong> already exists! The name must be unique.\n\t\t\t</div>\n\t\t\t<table class=\"table table-condensed table-bordered\" *ngIf=\"fields.value.length > 0\">\n\t\t\t\t<thead class=\"thead-light\" ui-sortable>\n\t\t\t\t<tr>\n\t\t\t\t\t<th *ngFor=\"let f of keyFields; let fieldIndex = index;\">\n\t\t\t\t\t\t<div class=\"input-group input-group-sm\">\n\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t(focusin)=\"onFocusIn(keyFields[fieldIndex].text)\"\n\t\t\t\t\t\t\t\t(focusout)=\"onFocusOut()\"\n\t\t\t\t\t\t\t\t(input)=\"whileTyping($event)\"\n\t\t\t\t\t\t\t\t[value]=\"keyFields[fieldIndex].text\"\n\t\t\t\t\t\t\t\tclass=\"form-control form-control-sm\" />\n\t\t\t\t\t\t\t<div class=\"input-group-prepend input-group-sm\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"newColumn(fieldIndex)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-columns\" aria-hidden=\"true\"></i> New Column\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"deleteColumn(keyFields[fieldIndex].text)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash text-delete\" aria-hidden=\"true\"></i> Delete Column\n\t\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let field of fields.value; let fieldIndex = index;\">\n\t\t\t\t\t\t<td *ngFor=\"let f of keyFields\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"field[f.text] \">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"input-group-prepend input-group-sm\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"newLine(fieldIndex)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i> New Row\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"deleteLine(fieldIndex)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete Row\n\t\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<h6 class=\"alert alert-danger\" *ngIf=\"fields.value.length <= 0\">\n\t\t<i class=\"fa fa-exclamation-triangle\"></i> Empty Table\n\t\t</h6>\n\t</div>\n\t</div>\n"

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
        this.oldValue = '';
        this.newValue = '';
    }
    ConfigTableBuilderComponent.prototype.whileTyping = function (event) {
        this.newValue = event.target.value;
    };
    ConfigTableBuilderComponent.prototype.onFocusIn = function (oldValue) {
        this.oldValue = oldValue;
    };
    ConfigTableBuilderComponent.prototype.onFocusOut = function () {
        if (typeof this.newValue !== 'undefined' && this.newValue.trim() !== '' && this.oldValue !== '') {
            if (this.fields.value.length > 0 && this.oldValue != this.newValue) {
                var fields = this.fields.value;
                var newFields = JSON.parse(JSON.stringify(fields).replace(new RegExp("\"" + this.oldValue + "\":", "g"), "\"" + this.newValue + "\":"));
                for (var i = 0; i < fields.length; i++) {
                    //cria um novo item
                    //fields[i][this.newValue] = fields[i][this.oldValue];
                    //deleta o item antigo
                    //delete fields[i][this.oldValue];
                }
                this.fields.value = newFields;
                this.fields.updateValueAndValidity({ onlySelf: false, emitEvent: true });
                this.keyFields = Object.keys(newFields[0]).map(function (item) {
                    return { text: item };
                });
                this.oldValue = '';
                this.newValue = '';
            }
        }
    };
    ConfigTableBuilderComponent.prototype.newColumn = function (fieldIndex) {
        if (this.keyFields.length > 0) {
            var columnName = "column " + (this.keyFields.length + 1);
            this.keyFields.splice(fieldIndex + 1, 0, { text: columnName });
            for (var i = 0; i < this.fields.value.length; i++) {
                this.fields.value[i][columnName] = '';
            }
            this.fields.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        }
    };
    ConfigTableBuilderComponent.prototype.newLine = function (fieldIndex) {
        if (this.fields.value.length > 0) {
            var cloned = Object.assign({}, this.fields.value[0]);
            for (var key in cloned) {
                if (cloned.hasOwnProperty(key)) {
                    cloned[key] = '';
                }
            }
            this.fields.value.splice(fieldIndex + 1, 0, cloned);
        }
    };
    ConfigTableBuilderComponent.prototype.deleteColumn = function (keyName) {
        var _this = this;
        if (this.fields.value.length > 0) {
            this.fields.value.forEach(function (field) {
                if (typeof field[keyName] != 'undefined') {
                    _this.keyFields.map(function (item, index) {
                        if (item.text == keyName) {
                            _this.keyFields.splice(index, 1);
                        }
                    });
                    delete field[keyName];
                }
            });
            this.rebuildFieldsWhenEmpty();
        }
    };
    ConfigTableBuilderComponent.prototype.deleteLine = function (fieldIndex) {
        if (this.fields.value.length > 0) {
            this.fields.value.splice(fieldIndex, 1);
            this.rebuildFieldsWhenEmpty();
        }
    };
    ConfigTableBuilderComponent.prototype.ngOnInit = function () {
        this.keyFields = this.getKeyFields();
    };
    ConfigTableBuilderComponent.prototype.rebuildFieldsWhenEmpty = function () {
        if (this.fields.value[0] != null) {
            var keyFields = Object.keys(this.fields.value[0]);
            if (keyFields.length <= 0) {
                this.fields.value = [{
                        "Book ID": "",
                    }];
                this.keyFields = this.getKeyFields();
            }
        }
        else {
            this.fields.value = [{
                    "Book ID": "",
                }];
            this.keyFields = this.getKeyFields();
        }
    };
    ConfigTableBuilderComponent.prototype.getKeyFields = function () {
        if (this.fields.value.length > 0) {
            var fieldKeys = JSON.parse(JSON.stringify(this.fields.value[0]));
            return Object.keys(fieldKeys).map(function (item) {
                return { text: item };
            });
        }
        return [];
    };
    Object.defineProperty(ConfigTableBuilderComponent.prototype, "html", {
        get: function () {
            return this.parentFormGroup.controls.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigTableBuilderComponent.prototype, "fields", {
        get: function () {
            return this.html.get('fields');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigTableBuilderComponent.prototype, "parentFormGroup", void 0);
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

module.exports = "<div class=\"row\" [formGroup]=\"parentFormGroup.controls.html\">\n\t<div class=\"col-md-4\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"title-heading-type\">Heading Type</label>\n\t\t\t<select id=\"title-heading-type\" formControlName=\"tag\" class=\"form-control form-control-sm\">\n\t\t\t\t<option *ngFor=\"let h of headingTypes\" [value]=\"h\">{{ h }}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-8\">\n\t\t<div class=\"form-group\">\n\t\t<label for=\"title-text\">Title</label>\n\t\t\t<input type=\"text\"\n\t\t\t\tid=\"title-text\"\n\t\t\t\tformControlName=\"text\"\n\t\t\t\tclass=\"form-control form-control-sm\"\n\t\t\t\t[ngClass]=\"{ 'is-invalid': text.invalid }\" />\n\t\t\t<div *ngIf=\"text.invalid || text.touched\" class=\"invalid-feedback\">\n\t\t\t\t<div *ngIf=\"text.errors?.required\">You did not enter a field</div>\n\t\t\t\t<div *ngIf=\"text.errors?.minlength\">Your field is too short</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

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


var ConfigTitleComponent = /** @class */ (function () {
    function ConfigTitleComponent() {
    }
    ConfigTitleComponent.prototype.ngOnInit = function () {
        this.headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        this.text.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.html.patchValue({
            'text': this.content.html.text
        });
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
    ], ConfigTitleComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
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
    { path: 'form-builder/:projectId/edit', component: _form_builder_component__WEBPACK_IMPORTED_MODULE_2__["FormBuilderComponent"] }
];
var FormBuilderRoutingModule = /** @class */ (function () {
    function FormBuilderRoutingModule() {
    }
    FormBuilderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
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

module.exports = ".square::-webkit-scrollbar-track {\n    border-radius: 0 !important; \n}\n\n.square::-webkit-scrollbar-thumb {\n    border-radius: 0 !important; \n}\n\n.thin::-webkit-scrollbar {\n    width: 5px !important ; \n}\n\n.scrollbar-near-moon::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n    background-color: #F5F5F5;\n    border-radius: 10px; \n}\n\n.scrollbar-near-moon::-webkit-scrollbar {\n    width: 12px;\n    background-color: #F5F5F5; \n}\n\n.scrollbar-near-moon::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n    background-image: linear-gradient(to top, #34d8ed 0%, #349aed 100%); \n}\n\n.scrollbar-near-moon {\n    height: 100vh;\n    overflow-y: scroll;\n}"

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.html":
/*!**********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"tab-content\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-md-3\" [hidden]=\"config?.previewMode\" *ngIf=\"tabNumber == 1\">            \n            <div class=\"sticky-top scrollbar-near-moon thin square\">                     \n                <app-create-table-to-json \n                (pageChange)=\"getPages($event)\" \n                [(tableName)]=\"tableName\"></app-create-table-to-json>\n                <app-form-menu \n                (isNewPage)=\"isNewPage($event)\"\n                ></app-form-menu>\n            </div>\n        </div>\n        <div [ngClass]=\"{ 'col-md-12': config?.previewMode || tabNumber == 2, 'col-md-9': !config?.previewMode }\">\n            <div class=\"sticky-top\">\n                <div class=\"btn-group d-flex bg-white\" role=\"group\">\n                    <!--button (click)=\"save();\"\n                    class=\"btn btn-md w-100\" \n                    [ngClass]=\"{ \n                        'btn-success': tabNumber == 1 && !previewMode, \n                        'btn-outline-dark': tabNumber == 2 && previewMode \n                    }\"\n                    [ngStyle]=\"{ 'opacity': tabNumber == 2 && previewMode? 0.4 : 1 }\">\n                        <i class=\"fas fa-save\" [ngClass]=\"{ 'animated infinite heartBeat': tabNumber == 1 && !previewMode }\"></i> Save\n                    </button-->\n                    <button (click)=\"tabNumber = 1; previewMode = false; preview();\"\n                    class=\"btn btn-md w-100\" \n                    [ngClass]=\"{ \n                        'btn-primary': tabNumber == 1 && !previewMode, \n                        'btn-outline-dark': tabNumber == 2 && previewMode \n                    }\"\n                    [ngStyle]=\"{ 'opacity': tabNumber == 2 && previewMode? 0.4 : 1 }\">\n                        <i class=\"fas fa-edit\" [ngClass]=\"{ 'animated infinite heartBeat': tabNumber == 1 && !previewMode }\"></i> Editor\n                    </button>\n                    <button (click)=\"this.previewMode = !this.previewMode; preview(); tabNumber = 1;\" \n                    class=\"btn btn-md w-100\" \n                    [ngClass]=\"{ \n                        'btn-success': previewMode,\n                        'btn-outline-danger': !previewMode\n                    }\"\n                    [ngStyle]=\"{ 'opacity': tabNumber == 2 || !config?.previewMode? 0.4 : 1 }\">\n                        <i [ngClass]=\"{ 'fa-eye animated infinite heartBeat': previewMode, 'fa-eye-slash': !previewMode }\" class=\"fa fa-1x\"></i>\n                    </button>\n                    <button (click)=\"tabNumber = 2; previewMode = false; preview();\" \n                    class=\"btn btn-md w-100\" \n                    [ngClass]=\"{ 'btn-primary': tabNumber == 2, 'btn-outline-dark': tabNumber == 1 }\"\n                    [ngStyle]=\"{ 'opacity': tabNumber == 1? 0.4 : 1 }\">\n                        <i class=\"fas fa-edit\" [ngClass]=\"{ 'animated infinite heartBeat': tabNumber == 2 }\"></i> Faster entry\n                    </button>\n                </div>\n            </div>\n            <app-form-pages [(pages)]=\"pages\" *ngIf=\"tabNumber == 1\"></app-form-pages>\n            <app-form-info [(pages)]=\"pages\" *ngIf=\"tabNumber == 2\"></app-form-info>\n        </div>            \n    </div>\n</div>\n\n<ul class=\"list-group\"> \n    <li class=\"list-group-item\" >\n        <div class=\"row\">\n            <h3 \n                *ngFor=\"let list of mvcList; let listIndex = index;\"\n                class=\"col-md-3\" \n                [ngClass]=\"{ 'text-danger': list.isOpen }\" \n                (click)=\"list.isOpen = !list.isOpen\"\n            >\n                <div [ngStyle]=\"{ 'cursor': 'pointer' }\" class=\"text-uppercase\">\n                    <i class=\"fas\" [ngClass]=\"{ 'fa-minus text-danger': list.isOpen, 'fa-plus': !list.isOpen }\"></i> \n                    {{ list.name }}\n                </div>\n            </h3>\n        </div>\n    </li>\n    <li class=\"list-group-item\">\n        <div *ngIf=\"isTabMvcOpen(0)\">\n            <h1>MODEL</h1>\n            <textarea class=\"form-control\" rows=\"40\" >\n            class {{ tableName | snakeCaseToCamelCase }} extends ModelAuditable {\n                protected $table      = '{{ tableName }}';\n                protected $primaryKey = {{ laravel.primaryKey? (laravel.primaryKey.length > 1? \"[\" +  laravel.primaryKey + \"]\": laravel.primaryKey[0]) : [] }};\n                public $incrementing  = true; \n                public $sequence      = 'sga_{{ laravel.primaryKey? removeDoubleQuotes(laravel.primaryKey[0]) : '' }}_seq';  \n                \n                protected $fillable = {{ laravel.fillable }};\n            }\n            </textarea>            \n        </div>\n        <div *ngIf=\"isTabMvcOpen(1)\">\n            <h1>VIEW</h1>\n            <textarea class=\"form-control\" rows=\"40\">\n                @extends('Admin.layouts.app_index')\n\n                @section('css')\n                @endsection\n\n                @section('breadcrumb-manual')\n                <li></li>\n                @endsection\n\n                @section('pagina_header')\n                @endsection\n\n                @section('pagina_conteudo')    \n                    {{ bootstrap.table() }}\n\n                    <!-- MODAL CRUD -->\n                    {!! $HTML::modalOpen('mudar_aqui', 'Adicionar') !!}\n                        {!! $HTML::formOpen('form_mudar_aqui', $acao) !!}  \n                            {{ bootstrap.html() }}\n                        {!! $HTML::formClose() !!}\n                    {!! $HTML::modalClose(true, $HTML::modalBotoesSalvar('mudar_aqui')) !!}\n                @endsection   \n                    \n                @section('bibliotecascript')\n                    @include('bibliotecas.js.scripts.modalCrud')\n                @endsection\n\n                @section('script')    \n                    {{ bootstrap.script() }}\n                @endsection\n            </textarea>\n        </div>\n        <div *ngIf=\"isTabMvcOpen(2)\">\n            <h1>CONTROLLER</h1>\n            <textarea class=\"form-control\" rows=\"40\">\n            <?php\n\n            namespace App\\Http\\Controllers;\n            \n            use Illuminate\\Http\\Request;\n            \n            class {{ tableName | snakeCaseToCamelCase }}Controller extends Controller\n            {\n                /**\n                * Display a listing of the resource.\n                *\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function index()\n                {\n                    //\n                    $r = {{ tableName | snakeCaseToCamelCase }}::all();\n\n                    return view('shares.index', compact('r'));\n                }\n            \n                /**\n                * Show the form for creating a new resource.\n                *\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function create()\n                {\n                    //\n                    return view('mudar_aqui.create');\n                }\n            \n                /**\n                * Store a newly created resource in storage.\n                *\n                * @param  \\Illuminate\\Http\\Request  $request\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function store(Request $request)\n                {\n                    //\n                    $r = {{ tableName | snakeCaseToCamelCase }}::create({{ laravel.request }});\n\n\n                    return redirect('/path_mudar_aqui')->with('success', 'Stock has been added');\n                }\n            \n                /**\n                * Display the specified resource.\n                *\n                * @param  int  $id\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function show($id)\n                {\n                    //\n                    $r = {{ tableName | snakeCaseToCamelCase }}::find($id);\n\n                    return view('mudar_aqui.show', compact('r'));\n                }\n            \n                /**\n                * Show the form for editing the specified resource.\n                *\n                * @param  int  $id\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function edit($id)\n                {\n                    //\n                    $r = {{ tableName | snakeCaseToCamelCase }}::find($id);\n\n                    return view('mudar_aqui.edit', compact('r'));\n                }\n            \n                /**\n                * Update the specified resource in storage.\n                *\n                * @param  \\Illuminate\\Http\\Request  $request\n                * @param  int  $id\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function update(Request $request, $id)\n                {\n                    //\n                    \n\n                    $r = {{ tableName | snakeCaseToCamelCase }}::find($id)\n                    $r->update({{ laravel.request }});\n                }\n            \n                /**\n                * Remove the specified resource from storage.\n                *\n                * @param  int  $id\n                * @return \\Illuminate\\Http\\Response\n                */\n                public function destroy($id)\n                {\n                    //\n                    $r = {{ tableName | snakeCaseToCamelCase }}::find($id);\n                    $r->delete();\n            \n                    return redirect('/shares')->with('success', 'Stock has been deleted Successfully');\n                }\n            }\n            </textarea>\n        </div>\n        <div  *ngIf=\"isTabMvcOpen(3)\">\n            <h1>VALIDATION</h1>\n            <textarea class=\"form-control\" rows=\"40\">\n                /**\n                * Determine if the user is authorized to make this request.\n                *\n                * @return bool\n                */\n                public function authorize(){\n                    return true;\n                }\n            \n                public function rules(){\n                    $rules = [\n                        {{ laravel.rules }}\n                    ];\n                    return $rules;\n                }\n            \n                /**\n                * Get the validation rules that apply to the request.\n                *\n                * @return array\n                */\n                public function attributes(){\n                    $attributes = [\n                        {{ laravel.attributes }}\n                    ];\n                    return $attributes;\n                }\n            </textarea>\n        </div>\n    </li>    \n</ul>"

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
/* harmony import */ var _core_model_html_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/model/html.model */ "./src/app/core/model/html.model.ts");
/* harmony import */ var _core_model_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/model/table.model */ "./src/app/core/model/table.model.ts");
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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
        this.html = new _core_model_html_model__WEBPACK_IMPORTED_MODULE_3__["Html"](d.html);
        this.table = new _core_model_table_model__WEBPACK_IMPORTED_MODULE_4__["Table"](d.table);
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
        var request = '';
        var update = '';
        var fillable = [];
        var primaryKey = [];
        var hue = this.inputs.reduce(function (prev, curr) {
            _this.setParams(curr);
            _this.getValidator();
            if (curr.table.isPrimaryKey) {
                primaryKey.push("\"" + curr.table.columnName + "\"");
            }
            fillable.push(curr.table.columnName);
            request += "\"" + curr.table.columnName + "\" => $request->input('" + curr.table.columnName + "'),\n";
            return {
                rules: rules += _this.rules,
                attributes: attr += _this.attributes,
                fillable: JSON.stringify(fillable, null, "\t"),
                request: "[" + request + "]",
                th: "<th>" + curr.html.labelName + "</th>",
                primaryKey: primaryKey,
                table: ''
            };
        }, {});
        return hue;
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
        if (typeof this.inputs != 'undefined' && this.inputs.length > 0) {
            var th = this.inputs.map(function (item) {
                return "\n<th>" + item.html.label + "</th>";
            }, '').join('');
            return "\n            <table class=\"table table-striped\" id=\"" + this.tableName + "\">\n                <thead>\n                    <tr>\n                    " + th + "\n                    <th class=\"td_justo no-sort text-right\">\n                    {!! $HTML::iconeCriar(\n                        Auth::user()->can('admin.financeirodescontos.create'), \n                        '#', \n                        true, \n                        route('admin.financeirodescontos.store'))\n                    !!}\n                    </th>                \n                    </tr>\n                </thead>\n            </table>\n            ";
        }
        return '';
    };
    Bootstrap.prototype.script = function () {
        if (typeof this.inputs != 'undefined' && this.inputs.length > 0) {
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
            return "\n    <script>\n        /*---------------------Datatables--------------------------------*/\n        var table = $('#" + this.tableName + "').DataTable({\n            stateSave: true,\n            processing: true,\n            serverSide: true,\n            cache: true,\n            ajax: \"\",\n            columns: " + JSON.stringify(script, null, '\t') + "\n        });        \n        /*---------------------/Datatables-------------------------------*/\n        /*---------------------CRUD IN MODAL-------------------------*/\n        modalCrudConstruct('modal_mudar_aqui','form_mudar_aqui');\n        /*---------------------/Create Edit Show-------------------------*/\n    \n        /*---------------------Validation-----------------------------------*/\n        $(document).on('click', '#i_btn_salvar_modal_mudar_aqui',function(){\n            validationForm('#form_mudar_aqui');\n        });\n        /*---------------------/Validation-------------------------*/            \n    </script>";
        }
        return '';
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
    function FormBuilderComponent(formConfigService, bootstrap, validator, projectService, homeService, pageService, route, ngxLoader) {
        this.formConfigService = formConfigService;
        this.bootstrap = bootstrap;
        this.validator = validator;
        this.projectService = projectService;
        this.homeService = homeService;
        this.pageService = pageService;
        this.route = route;
        this.ngxLoader = ngxLoader;
        this.tableName = '';
        this.isTabAlreadyOpen = false;
        this.previewMode = false;
        this.mvcList = [{
                isOpen: false,
                name: 'Model'
            }, {
                isOpen: false,
                name: 'View'
            }, {
                isOpen: false,
                name: 'Controller'
            }, {
                isOpen: false,
                name: 'Validation'
            }];
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = [];
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        //this.pages = this.homeService.getHomeStatic();
        this.route.params.subscribe(function (r) {
            _this.project_id = r.projectId;
        });
        this.tabMVC = 1;
        this.tabNumber = 1;
        this.previewMode = false;
        this.preview();
        this.config = {
            previewMode: this.previewMode
        };
        this.loadFormBuilder();
    };
    FormBuilderComponent.prototype.loadFormBuilder = function () {
        this.ngxLoader.start();
        //this.homeService.getHome().subscribe((result: Array<Page>) => { this.pages = result; });
        this.pages = this.homeService.getHomeStatic();
        this.ngxLoader.stop();
        /*this.pageService.getPageByProjectId(this.project_id)
        .subscribe(result => {
            if(result.success){
                this.pages = result.data;
            }
            this.ngxLoader.stop();
        });*/
    };
    FormBuilderComponent.prototype.ngAfterViewInit = function () {
    };
    FormBuilderComponent.prototype.save = function () {
        /*this.pageService.createPage({
            project_id: this.project_id,
            pages: this.pages
        })
        .subscribe(result => {
            if(result.success){
                this.loadFormBuilder();
            }
        });*/
    };
    FormBuilderComponent.prototype.preview = function () {
        //this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    };
    FormBuilderComponent.prototype.isTabMvcOpen = function (tabNumber) {
        if (this.mvcList[tabNumber].isOpen) {
            this.bootstrap.setPages(this.pages);
            this.bootstrap.init();
            this.validator.setInputs(this.bootstrap.getInputs());
        }
        return this.mvcList[tabNumber].isOpen;
    };
    Object.defineProperty(FormBuilderComponent.prototype, "laravel", {
        get: function () {
            return this.validator.laravel();
        },
        enumerable: true,
        configurable: true
    });
    FormBuilderComponent.prototype.removeDoubleQuotes = function (word) {
        if (typeof word != 'undefined')
            return word.replace(/\"/g, "");
        return '';
    };
    FormBuilderComponent.prototype.isNewPage = function (newPage) {
        var _this = this;
        if (newPage) {
            this.pageService.createPage({
                project_id: this.project_id,
                name: "Page " + this.pages.length
            })
                .subscribe(function (result) {
                if (result.success) {
                    _this.pages = result.data;
                }
            });
            /*this.pages = [...this.pages, {
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            }];*/
            /*this.pages.push({
                name: 'Page ' + (this.pages.length + 1),
                rows: []
            });*/
        }
    };
    FormBuilderComponent.prototype.getPages = function (pages) {
        this.pages = this.pages.concat([pages]);
        //this.pages.push(pages);
    };
    FormBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.css */ "./src/app/form-builder/form-builder.component.css")],
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_5__["FormConfigService"],
            Bootstrap,
            Validator,
            _shared_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]])
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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _form_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
/* harmony import */ var _create_table_to_json_create_table_to_json_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../create-table-to-json/create-table-to-json.component */ "./src/app/create-table-to-json/create-table-to-json.component.ts");
/* harmony import */ var _form_menu_form_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-menu/form-menu.component */ "./src/app/form-builder/form-menu/form-menu.component.ts");
/* harmony import */ var _form_builder_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-builder-routing.module */ "./src/app/form-builder/form-builder-routing.module.ts");
/* harmony import */ var _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../form-builder/form-config/form-config.module */ "./src/app/form-builder/form-config/form-config.module.ts");
/* harmony import */ var _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../form-pages/form-pages.module */ "./src/app/form-pages/form-pages.module.ts");
/* harmony import */ var _form_info_form_info_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-info/form-info.module */ "./src/app/form-info/form-info.module.ts");
/* harmony import */ var _shared_directives_sum_be_equals_to_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/sum-be-equals-to.directive */ "./src/app/shared/directives/sum-be-equals-to.directive.ts");
/* harmony import */ var _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-pages/render-content/render-content.module */ "./src/app/form-pages/render-content/render-content.module.ts");
/* harmony import */ var _shared_pipes_snake_case_to_camel_case_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/pipes/snake-case-to-camel-case.pipe */ "./src/app/shared/pipes/snake-case-to-camel-case.pipe.ts");
/* harmony import */ var _config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config-choices/config-choices.module */ "./src/app/config-choices/config-choices.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"],
                _form_builder_routing_module__WEBPACK_IMPORTED_MODULE_6__["FormBuilderRoutingModule"],
                _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_11__["RenderContentModule"],
                _form_pages_form_pages_module__WEBPACK_IMPORTED_MODULE_8__["FormPagesModule"],
                _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_7__["FormConfigModule"],
                _form_info_form_info_module__WEBPACK_IMPORTED_MODULE_9__["FormInfoModule"],
                _config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_13__["ConfigChoicesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            exports: [
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"]
            ],
            declarations: [
                _create_table_to_json_create_table_to_json_component__WEBPACK_IMPORTED_MODULE_4__["CreateTableToJsonComponent"],
                _form_menu_form_menu_component__WEBPACK_IMPORTED_MODULE_5__["FormMenuComponent"],
                _form_builder_component__WEBPACK_IMPORTED_MODULE_3__["FormBuilderComponent"],
                _shared_pipes_snake_case_to_camel_case_pipe__WEBPACK_IMPORTED_MODULE_12__["SnakeCaseToCamelCasePipe"],
                _shared_directives_sum_be_equals_to_directive__WEBPACK_IMPORTED_MODULE_10__["SumBeEqualsToDirective"]
            ],
            providers: [],
            entryComponents: [
            //ConfigChoicesComponent
            ]
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

module.exports = "<!-- MODAL -->\n<form *ngIf=\"configForm\" [formGroup]=\"configForm\" (ngSubmit)=\"register()\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <app-render-content [content]=\"configForm.value\"></app-render-content>\n                <div *ngFor=\"let r of render.components\">\n                    <app-config-general \n                        [parentFormGroup]=\"configForm\"\n                        [content]=\"content\"\n                        *ngIf=\"r.componentName === 'app-config-general'\"></app-config-general>\n                    <app-config-img \n                        [parentFormGroup]=\"configForm\"\n                        [content]=\"content\"\n                        *ngIf=\"r.componentName === 'app-config-img'\"></app-config-img>\n                    <app-config-title\n                        [parentFormGroup]=\"configForm\"\n                        [content]=\"content\"\n                        *ngIf=\"r.componentName === 'app-config-title'\"></app-config-title>\n                    <app-config-html-editor\n                        [parentFormGroup]=\"configForm\"\n                        [content]=\"content\"\n                        *ngIf=\"r.componentName === 'app-config-html-editor'\"></app-config-html-editor>\n                    <app-config-choice-form\n                        [parentFormGroup]=\"configForm\"\n                        [content]=\"content\"\n                        *ngIf=\"r.componentName === 'app-config-choices'\"></app-config-choice-form>\n                    <hr>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" \n        class=\"btn btn-outline-dark\" \n        (click)=\"activeModal.close('Close click')\">Close</button>\n        <button type=\"submit\"\n        class=\"btn btn-outline-success\" \n        >Save </button>\n    </div>\n</form>"

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
/* harmony import */ var src_app_shared_services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/content.service */ "./src/app/shared/services/content.service.ts");
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
    function FormConfigComponent(formContentConfig, fb, contentService, activeModal) {
        this.formContentConfig = formContentConfig;
        this.fb = fb;
        this.contentService = contentService;
        this.activeModal = activeModal;
        this.emitData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClickedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormConfigComponent.prototype.ngOnInit = function () {
        /*this.contentService.showContent(this.content_id).subscribe(r => {
            if(r.success){
                this.content = r.data;
                this.content['id'] = this.content_id;
                const tag = this.content.html.tag;
                this.render = this.formContentConfig.render()[tag];
                this.configForm = this.fb.group({
                    id: [this.content_id,[]],
                    html: this.fb.group({
                        'tag': [this.content.html.tag,[]],
                        'content_choice_id': [this.content.html.content_choice_id,[]],
                        'category': [this.content.html.category,[]],
                        'fields': [this.content.html.fields,[]],
                        'label': [this.content.html.label,[]],
                        'src': [this.content.html.src,[]],
                        'text': [this.content.html.text,[]],
                        'data': [this.content.html.data]
                    }),
                    table: this.fb.group({
                        'columnName': [this.content.table.columnName,[]],
                        'type': [this.content.table.type,[]],
                        'size': [this.content.table.size,[]],
                        'nullable': [this.content.table.nullable]
                    })
                });
            }
        });*/
        //this.content['id'] = this.content.;
        var tag = this.content.html.tag;
        this.render = this.formContentConfig.render()[tag];
        this.configForm = this.fb.group({
            id: [this.content_id, []],
            html: this.fb.group({
                'tag': [this.content.html.tag, []],
                'content_choice_id': [this.content.html.content_choice_id, []],
                'choices': this.fb.array([]),
                'category': [this.content.html.category, []],
                'fields': [this.content.html.fields, []],
                'label': [this.content.html.label, []],
                'src': [this.content.html.src, []],
                'text': [this.content.html.text, []],
                'data': [this.content.html.data]
            }),
            table: this.fb.group({
                'columnName': [this.content.table.columnName, []],
                'type': [this.content.table.type, []],
                'size': [this.content.table.size, []],
                'nullable': [this.content.table.nullable]
            })
        });
    };
    FormConfigComponent.prototype.editContent = function (element) {
    };
    FormConfigComponent.prototype.register = function () {
        console.log(this.configForm.value);
        this.emitData.emit(this.configForm.value);
        //this.activeModal.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FormConfigComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormConfigComponent.prototype, "content_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "emitData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormConfigComponent.prototype, "isClickedChange", void 0);
    FormConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-config',
            template: __webpack_require__(/*! ./form-config.component.html */ "./src/app/form-builder/form-config/form-config.component.html"),
            styles: [__webpack_require__(/*! ./form-config.component.css */ "./src/app/form-builder/form-config/form-config.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_content_config_service__WEBPACK_IMPORTED_MODULE_1__["FormContentConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
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
/* harmony import */ var _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config/config-general/config-general.component */ "./src/app/form-builder/config/config-general/config-general.component.ts");
/* harmony import */ var _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config-html-editor/config-html-editor.component */ "./src/app/form-builder/config/config-html-editor/config-html-editor.component.ts");
/* harmony import */ var _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config/config-img/config-img.component */ "./src/app/form-builder/config/config-img/config-img.component.ts");
/* harmony import */ var _form_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-config.component */ "./src/app/form-builder/form-config/form-config.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config-table-builder/config-table-builder.component */ "./src/app/form-builder/config/config-table-builder/config-table-builder.component.ts");
/* harmony import */ var _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../form-pages/render-content/render-content.module */ "./src/app/form-pages/render-content/render-content.module.ts");
/* harmony import */ var _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/config-title/config-title.component */ "./src/app/form-builder/config/config-title/config-title.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/config-choices/config-choices.module */ "./src/app/config-choices/config-choices.module.ts");
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
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"],
                _form_pages_render_content_render_content_module__WEBPACK_IMPORTED_MODULE_8__["RenderContentModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                src_app_config_choices_config_choices_module__WEBPACK_IMPORTED_MODULE_11__["ConfigChoicesModule"]
            ],
            exports: [
                _form_config_component__WEBPACK_IMPORTED_MODULE_5__["FormConfigComponent"],
                _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_2__["ConfigGeneralComponent"],
                _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_3__["ConfigHtmlEditorComponent"],
                _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_4__["ConfigImgComponent"],
                _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_7__["ConfigTableBuilderComponent"],
                _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_9__["ConfigTitleComponent"]
            ],
            declarations: [
                _form_config_component__WEBPACK_IMPORTED_MODULE_5__["FormConfigComponent"],
                _config_config_general_config_general_component__WEBPACK_IMPORTED_MODULE_2__["ConfigGeneralComponent"],
                _config_config_html_editor_config_html_editor_component__WEBPACK_IMPORTED_MODULE_3__["ConfigHtmlEditorComponent"],
                _config_config_img_config_img_component__WEBPACK_IMPORTED_MODULE_4__["ConfigImgComponent"],
                _config_config_table_builder_config_table_builder_component__WEBPACK_IMPORTED_MODULE_7__["ConfigTableBuilderComponent"],
                _config_config_title_config_title_component__WEBPACK_IMPORTED_MODULE_9__["ConfigTitleComponent"]
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

module.exports = "\n<div class=\"card bg-white\">\n\t<div class=\"card-body\">\n\t\t<section id=\"page-menu\" class=\"pt-2\">\n\t\t\t<!--div dragula=\"pages\" [(dragulaModel)]=\"pageModel\" class=\"menu-page-sortable\"-->\n\t\t\t\t<button (click)=\"newPage()\" class=\"btn btn-dark btn-block btn-sm\">\n\t\t\t\t\t<i class=\"fa fa-file\"></i> New Page\n\t\t\t\t</button>\n\t\t\t<!--/div-->\n\t\t</section>\n\t\t<section id=\"grid-menu\" class=\"pt-2\">\n\t\t\t<h3 class=\"text-center\">Grid System</h3>\n\t\t\t<fieldset name=\"bootstrap_container\" dragula=\"rowSortable\" [(dragulaModel)]=\"bootstrap\" class=\"menu-row-sortable\">\n\t\t\t\t<div *ngFor=\"let b of bootstrap; let bIndex = index;\">\n\t\t\t\t\t<form #f=\"ngForm\">\n\t\t\t\t\t\t<div [hidden]=\"f.invalid\" [ngStyle]=\"{ cursor: 'move' }\">\n\t\t\t\t\t\t\t<div class=\"row-handle p-1 mx-1 mt-1 border-bottom border-dark\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-arrows-alt fa-1x row-handle\"></i><strong class=\"row-handle\"> GRID</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group input-group-sm\">\n\t\t\t\t\t\t\t<textarea type=\"text\"\n\t\t\t\t\t\t\t\t(blur)=\"change(bIndex)\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"b.grid\"\n\t\t\t\t\t\t\t\tname=\"grid\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': f.controls.grid?.invalid }\"\n\t\t\t\t\t\t\t\tclass=\"form-control form-control-sm\"\n\t\t\t\t\t\t\t\t[ngStyle]=\"{ cursor: 'pointer' }\"\n\t\t\t\t\t\t\t\tsumBeEqualsTo=\"12\"\n\t\t\t\t\t\t\t\tminlength=\"2\"\n\t\t\t\t\t\t\t\tpattern=\"^(\\s*(0?[1-9]|[1-9][0-9])+\\s*)+$\"\n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\trows=\"5\"\n\t\t\t\t\t\t\t></textarea>\n\t\t\t\t\t\t\t<div *ngIf=\"f.controls.grid?.invalid || f.controls.grid?.touched\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.controls.grid?.errors?.required \">* Enter with your grid.</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.controls.grid?.errors?.pattern\">* Allows only numbers (except only zero) and space.</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.controls.grid?.errors?.minlength\">* Min. Length is {{ f.controls.grid?.errors.minlength.requiredLength }}.</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.controls.grid?.errors?.isSumInvalid\">* The sum of the each line must be equals to {{ f.controls.grid.errors?.sumBeEqualsTo }}.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</fieldset>\n\t\t</section>\n\t\t<section id=\"tool-menu\" class=\"pt-2\">\n\t\t\t<h3 class=\"text-center\">Tools</h3>\n\t\t\t<div *ngFor=\"let tool of tools | groupBy: 'html.category'; let toolCategoryIndex = index;\">\n\t\t\t\t<div class=\"border-bottom border-dark p-1 text-uppercase\" [attr.data-toggle]=\"'collapse'\" [attr.data-target]=\"'#collapse-' + toolCategoryIndex\" [ngStyle]=\"{ cursor: 'pointer' }\">\n\t\t\t\t\t{{ tool.key }}\n\t\t\t\t</div>\n\t\t\t\t<div \n\t\t\t\t\tid=\"collapse-{{ toolCategoryIndex }}\" \n\t\t\t\t\tdragula=\"contents\"\n\t\t\t\t\t[(dragulaModel)]=\"tool.value\"\n\t\t\t\t\tclass=\"row menu-content-sortable no-gutters collapse m-1 show\"\n\t\t\t\t\t[ngClass]=\"{ }\"\n\t\t\t\t\taria-expanded=\"true\"\n\t\t\t\t\t[attr.data-parent]=\"'#accordion'\"\n\t\t\t\t\t>\n\t\t\t\t\t<div *ngFor=\"let t of tool.value\"\n\t\t\t\t\t\t[ngStyle]=\"{ 'cursor': 'move' }\"\n\t\t\t\t\t\tclass=\"text-white content-handle menu-content-sortable col-md-6 \"\n\t\t\t\t\t\t[attr.data-content]=\"t | json\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"p-1 mx-1 mt-1 border border-dark content-handle\">\n\t\t\t\t\t\t\t<span class=\"text-dark text-capitalize content-handle\">{{ t.html.tag }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<app-config-choices></app-config-choices>\n\t\t</section>\n\t</div>\n</div>"

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
/* harmony import */ var _shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/html-element.service */ "./src/app/shared/services/html-element.service.ts");
/* harmony import */ var _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bootstrap-grid-system.service */ "./src/app/services/bootstrap-grid-system.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config-choices/config-choices.component */ "./src/app/config-choices/config-choices.component.ts");
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
    function FormMenuComponent(htmlElementService, modalService) {
        this.htmlElementService = htmlElementService;
        this.modalService = modalService;
        this.optionType = 1;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
        this.isNewPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
        this.tools = [];
        this.grids = new _services_bootstrap_grid_system_service__WEBPACK_IMPORTED_MODULE_2__["BootstrapGridSystemService"]().getGrid();
        this.bootstrap = [{
                grid: [
                    "6 6",
                    "2 4 4 2",
                    "4 4 4",
                    "7 5"
                ].join("\n")
            }];
        this.tools = this.htmlElementService.getStaticTools();
        /*this.htmlElementService.getTools().subscribe(result => {
            if(result.success){
                this.categories = result.data.categories;
                this.tools = result.data.tools;
            }
        });*/
        this.pageModel = [{
                rows: [],
                name: "Salt - A tool for Lazy Developer"
            }];
    };
    FormMenuComponent.prototype.createChoices = function () {
        this.modalService.open(_config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_4__["ConfigChoicesComponent"], this.options);
    };
    FormMenuComponent.prototype.editChoices = function (content) {
        var m = this.modalService.open(_config_choices_config_choices_component__WEBPACK_IMPORTED_MODULE_4__["ConfigChoicesComponent"], this.options);
        m.componentInstance.content = content;
    };
    FormMenuComponent.prototype.newPage = function () {
        this.isNewPage.emit(true);
    };
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
        __metadata("design:paramtypes", [_shared_services_html_element_service__WEBPACK_IMPORTED_MODULE_1__["HtmlElementService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
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

module.exports = "<form  class=\"card\">\n    <div *ngFor=\"let page of pages; let pageIndex = index;\" class=\"px-2 py-2\">\n        <span>Page {{ pageIndex + 1 }}</span>\n        <hr />\n        <div *ngFor=\"let row of page.rows; let rowIndex = index;\">\n            <section *ngFor=\"let column of row.columns; let columnIndex = index;\">\n                <div *ngFor=\"let d of column.contents; let contentIndex = index;\">\n                    <section *ngIf=\"d.html?.category === 'form'\" class=\"row\">\n                        <div class=\"col-md-1\">\n                            <div class=\"form-group\">\n                                <div class=\"form-check\">\n                                    <input type=\"checkbox\" \n                                    [checked]=\"d.table.isPrimaryKey\" \n                                    [(ngModel)]=\"d.table.isPrimaryKey\"\n                                    [ngModelOptions]=\"{ standalone: true }\"\n                                    #isPrimaryKey=\"ngModel\"                                    \n                                    class=\"form-check-input\" \n                                    id=\"is-primary-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\">\n                                    <label class=\"form-check-label\" for=\"is-primary-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\">Primary Key?</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\" *ngIf=\"d.table.columnName.toLowerCase().indexOf('ind_') != -1 && d.table.columnName\">\n                                    <button (click)=\"buscaDominio(d.table.columnName)\" class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-search fa-1x\" aria-hidden=\"true\"></i>\n                                    </button>\n                                    <div class=\"dropdown-menu\" [ngStyle]=\"{ width: '100%' }\">\n                                        <a class=\"dropdown-item\" href=\"#\" ng-show=\"vm.loading\">\n                                            <i class=\"fa fa-cog fa-1x fa-spin\"></i> Loading...\n                                        </a>\n                                        <a class=\"dropdown-item\" href=\"#\" ng-show=\"!vm.loading && vm.dominio.error.has\">\n                                            <span class=\"text-danger\" ng-bind=\"vm.dominio.error.msg\"></span>\n                                        </a>\n                                        <a class=\"dropdown-item\" href=\"#\" ng-repeat=\"(dI, dom) in vm.dominio.data\" ng-if=\"vm.dominio.data.length > 0\">\n                                            <span ng-bind=\"dom.val_dominio_item\"></span> - <span ng-bind=\"dom.dsc_dominio_item\"></span>\n                                        </a>\n                                    </div>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': tableColumnName.invalid }\" \n                                name=\"table-column-name-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\"\n                                [(ngModel)]=\"d.table.columnName\" \n                                [ngModelOptions]=\"{ standalone: true }\"\n                                #tableColumnName=\"ngModel\"\n                                required\n                                >\n                                <div *ngIf=\"tableColumnName.invalid || tableColumnName.touched\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"tableColumnName.errors?.required\">This is required.</div>\n                                </div> \n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': htmlLabel.invalid }\" \n                            name=\"html-label-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\"                                 \n                            [(ngModel)]=\"d.html.label\" \n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #htmlLabel=\"ngModel\"\n                            required\n                            >                            \n                            <div *ngIf=\"htmlLabel.invalid || htmlLabel.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"htmlLabel.errors?.required\">This is required.</div>\n                            </div>   \n                        </div>\n                        <div class=\"col-md-2\" >\n                            <select class=\"form-control\" [ngClass]=\"{ 'is-invalid': htmlTag.invalid }\"\n                            name=\"input-type-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            [(ngModel)]=\"d.html.tag\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #htmlTag=\"ngModel\"\n                            required\n                            >\n                                <option value=\"\">Selecione</option>\n                                <option value=\"{{ tag }}\" *ngFor=\"let tag of tags\">{{ tag }}</option>\n                            </select>\n                            <div *ngIf=\"htmlTag.invalid || htmlTag.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"htmlTag.errors?.required\">This is required.</div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <select class=\"form-control text-uppercase\" [ngClass]=\"{ 'is-invalid': tableType.invalid }\"\n                            name=\"table-type-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            [(ngModel)]=\"d.table.type\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            #tableType=\"ngModel\"\n                            required\n                            >\n                                <option value=\"\">Selecione</option>\n                                <option *ngFor=\"let db of database; let columnName = index;\" [value]=\"db.toLowerCase()\">{{ db }}</option>\n                            </select>\n                            <div *ngIf=\"tableType.invalid || tableType.touched\" class=\"invalid-feedback\">\n                                <div *ngIf=\"tableType.errors?.required\">This is required.</div>\n                            </div>                            \n                        </div>\n                        <div class=\"col-md-1\">\n                            <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': tableSize.invalid }\"\n                            [(ngModel)]=\"d.table.size\"\n                            [ngModelOptions]=\"{ standalone: true }\"\n                            pattern=\"^[0-9]+(.[0-9])?$\"\n                            name=\"table-size-{{ pageIndex + rowIndex + columnIndex + contentIndex }}\" \n                            #tableSize=\"ngModel\"                            \n                            >\n                            <div *ngIf=\"tableSize.invalid || tableSize.touched\" class=\"invalid-feedback\">\n                            </div>                               \n                        </div>\n                        <div class=\"col-md-1\">\n                            <div class=\"row\">\n                                <label [ngClass]=\"{'badge-danger': d.table.nullable, 'badge-default' : !d.table.nullable}\"\n                                       class=\"badge col-md-12\"\n                                       [ngStyle]=\"{ 'cursor': 'pointer' }\">\n                                    nullable? {{ d.table.nullable? 'No' : 'Yes' }}\n                                    <input type=\"checkbox\" [(ngModel)]=\"d.table.nullable\" name=\"asd3\" class=\"checkbox\" [ngStyle]=\"{ display: 'none' }\">\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button type=\"button\" (click)=\"column.contents.splice(contentIndex, 1)\" class=\"btn btn-outline-danger btn-sm btn-block\"><i class=\"far fa-trash-alt\"></i></button>\n                        </div>\n                    </section>\n                </div>\n            </section>\n        </div>\n    </div>\n</form>\n"

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

module.exports = "<div\n    [attr.data-bootstrap-grid]=\"row.grid\"\n    dragula=\"columns\"\n\t[(dragulaModel)]=\"row.columns\"\n\tclass=\"row page-{{ pageIndex }}_row-{{ rowIndex }}\"\n\t[attr.data-current-row-id]=\"rowId\"\n>\n\t<div *ngFor=\"let column of row.columns; let columnIndex = index;\"\n\t\tclass=\"col-md-{{ colNumber(columnIndex) }}\"\n\t\t[attr.data-current-page-index]=\"pageIndex\"\n\t\t[attr.data-current-row-index]=\"rowIndex\"\n\t\t[attr.data-current-column-index]=\"columnIndex\"\n\t>\n\t\t<!--b>[{{ pageIndex }}][{{ rowIndex }}][{{ columnIndex }}]</b-->\n\t\t<div class=\"option-column\">\n\t\t\t<div [hidden]=\"config?.previewMode\">\n\t\t\t\t<small class=\"column-handle\" [ngStyle]=\"{ 'cursor': 'move' }\">\n\t\t\t\t\t<i class=\"fa fa-arrows-alt\"></i> col-md-{{ colNumber(columnIndex) }}\n\t\t\t\t</small>\n\t\t\t\t<div class=\"border-bottom border-danger\"></div>\n\t\t\t</div>\t\n\t\t\t<app-form-contents [column]=\"column\" \n\t\t\t[pageIndex]=\"pageIndex\" [rowIndex]=\"rowIndex\" [columnIndex]=\"columnIndex\"\n\t\t\t[pageId]=\"pageId\" [rowId]=\"rowId\" [columnId]=\"column.id\"\n\t\t\t></app-form-contents>\n\t\t</div>\n\t</div>\n</div>\n"

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
    function FormColumnsComponent(formConfigService, cd) {
        this.formConfigService = formConfigService;
        this.cd = cd;
    }
    FormColumnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormColumnsComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    FormColumnsComponent.prototype.colNumber = function (columnIndex) {
        return parseInt(this.row.grid.trim().split(' ')[columnIndex]);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormColumnsComponent.prototype, "rowId", void 0);
    FormColumnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-columns',
            template: __webpack_require__(/*! ./form-columns.component.html */ "./src/app/form-pages/form-columns/form-columns.component.html"),
            styles: [__webpack_require__(/*! ./form-columns.component.css */ "./src/app/form-pages/form-columns/form-columns.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "<div dragula=\"contents\"\n     [(dragulaModel)]=\"column.contents\"\n     [ngStyle]=\"{ 'min-height': '20px' }\"\n     [attr.data-current-page-id]=\"pageId\"\n     [attr.data-current-row-id]=\"rowId\"\n     [attr.data-current-column-id]=\"columnId\"\n     >\n    <div *ngFor=\"let content of column.contents; let contentIndex = index;\" class=\"mt-1\">\n        <div class=\"row\" [hidden]=\"config?.previewMode\">\n            <div class=\"col-md-12\">\n                <div class=\"float-left\">\n                    <small class=\"content-handle\" [ngStyle]=\"{ 'cursor': 'move' }\">\n                        <i class=\"fa fa-arrows-alt content-handle\"></i> move\n                    </small>\n                    <span (click)=\"sendDataToModal(column.contents, contentIndex)\" [ngStyle]=\"{ 'cursor': 'pointer' }\" class=\"badge btn-outline-primary\">\n                        <i class=\"fa fa-edit\"></i> edit\n                    </span>\n                    <span (click)=\"copyHtml(content)\" [ngStyle]=\"{ 'cursor': 'pointer' }\" class=\"badge btn-outline-primary\">\n                        <i class=\"fas fa-copy\"></i> copy html\n                    </span>                    \n                </div>\n                <div class=\"float-right\" role=\"group\" aria-label=\"Basic example\">\n                    <span (click)=\"deleteContent(contentIndex)\" class=\"badge btn-outline-danger col-md-12\" style=\"cursor: pointer;\">\n                        <i class=\"fas fa-window-close\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"content\">\n            <div [hidden]=\"config?.previewMode\">\n                <span *ngIf=\"content.html.tag\" class=\"badge badge-primary\">{{ content.html.tag }}</span>\n                <span *ngIf=\"content.table?.nullable && content.html.category === 'form'\" class=\"badge badge-success\">required</span>\n                <span *ngIf=\"!content.table?.nullable && content.html.category === 'form'\" class=\"badge badge-danger\">not required</span>\n            </div>\n            <app-render-content [content]=\"content\"></app-render-content>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _services_form_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-config.service */ "./src/app/services/form-config.service.ts");
/* harmony import */ var _services_render_html_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/render-html.service */ "./src/app/services/render-html.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _form_builder_form_config_form_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../form-builder/form-config/form-config.component */ "./src/app/form-builder/form-config/form-config.component.ts");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
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
    function FormContentsComponent(formConfigService, renderHtmlService, modalService, cd, contentService) {
        this.formConfigService = formConfigService;
        this.renderHtmlService = renderHtmlService;
        this.modalService = modalService;
        this.cd = cd;
        this.contentService = contentService;
        this.options = {
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            centered: true
        };
    }
    FormContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormContentsComponent.prototype.trackByFn = function (index, item) {
        return index;
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
    FormContentsComponent.prototype.sendDataToModal = function (contents, index) {
        var _this = this;
        var m = this.modalService.open(_form_builder_form_config_form_config_component__WEBPACK_IMPORTED_MODULE_4__["FormConfigComponent"], this.options);
        m.componentInstance.content_id = contents[index].id;
        m.componentInstance.content = contents[index];
        m.componentInstance.emitData.subscribe(function ($e) {
            contents[index] = $e;
            _this.cd.markForCheck();
            /*this.contentService.updateContent($e).subscribe(result => {
                console.log(result);
                if(result.success){
                    contents[index] = result.data;
                    this.cd.markForCheck();
                }
            });*/
        });
    };
    FormContentsComponent.prototype.deleteContent = function (contentIndex) {
        /*this.contentService.deleteContent(content.id)
        .subscribe(result =>{
            if(result.success){
                this.column.contents.forEach((cV, index) => {
                    if(cV.id == content.id){
                        this.column.contents.splice(index, 1);
                    }
                });
                this.cd.markForCheck();
            }
        });*/
        this.column.contents.splice(contentIndex, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "rowIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "columnIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "rowId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormContentsComponent.prototype, "columnId", void 0);
    FormContentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-contents',
            template: __webpack_require__(/*! ./form-contents.component.html */ "./src/app/form-pages/form-contents/form-contents.component.html"),
            styles: [__webpack_require__(/*! ./form-contents.component.css */ "./src/app/form-pages/form-contents/form-contents.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _services_render_html_service__WEBPACK_IMPORTED_MODULE_2__["RenderHtmlService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]])
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

module.exports = "<!--pre>{{ pages | json }}</pre-->\n<div \n    dragula=\"pages\"\n    [(dragulaModel)]=\"pages\"\n>\n    <div *ngFor=\"let page of pages; let pageIndex = index; \" class=\"mb-1\">\n        <div class=\"px-3 py-3\" [ngClass]=\"{ 'card bg-white text-dark': !config?.previewMode }\">\n            <div class=\"row\" [hidden]=\"config?.previewMode\">\n                <div class=\"col-md-12 page-handle\" [ngStyle]=\"{ cursor: 'move' }\">\n                    <div class=\"float-left\">\n                        <span class=\"page-handle\">{{ page.name }}</span>\n                    </div>\n                    <div class=\"float-right\">\n                        <small (click)=\"deletePage(pageIndex)\" class=\"badge btn-outline-danger\" [ngStyle]=\"{ cursor: 'pointer' }\">\n                            <i class=\"fas fa-window-close\"></i>\n                            <strong> page {{ pageIndex + 1 }}</strong>\n                        </small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"border-bottom border-secondary\" [hidden]=\"config?.previewMode\"></div>\n            <app-form-rows [(page)]=\"page\" [pageIndex]=\"pageIndex\" [pageId]=\"page.id\"></app-form-rows>\n        </div>\n    </div><!--/.ng-repeat-->\n</div>"

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
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var _shared_services_row_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/row.service */ "./src/app/shared/services/row.service.ts");
/* harmony import */ var _shared_services_column_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/column.service */ "./src/app/shared/services/column.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FormPagesComponent = /** @class */ (function () {
    function FormPagesComponent(formConfigService, dragulaService, pageService, cd, contentService, rowService, columnService, route, ngxLoader) {
        var _this = this;
        this.formConfigService = formConfigService;
        this.dragulaService = dragulaService;
        this.pageService = pageService;
        this.cd = cd;
        this.contentService = contentService;
        this.rowService = rowService;
        this.columnService = columnService;
        this.route = route;
        this.ngxLoader = ngxLoader;
        this.pagesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.optionType = -1;
        this.objOptionType = {
            1: 'radio',
            2: 'checkbox',
            3: 'select'
        };
        this.options = [];
        this.dropModelPageUpdated = false;
        this.options = Object.values(this.objOptionType).map(function (item) {
            return item;
        }, []);
        this.route.params.subscribe(function (result) {
            _this.project_id = result.projectId;
        });
        dragulaService.createGroup('pages', {
            copy: function (el, source) {
                return source.className === 'menu-page-sortable';
            },
            copyItem: function (el) {
                return el;
                //console.log(el);
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
            var currRowId = target.getAttribute('data-current-row-id');
            if (pageIndex != null && currRowIndex != null) {
                var gridArr = _this.pages[pageIndex].rows[currRowIndex].grid.split(" ");
                var aux = gridArr[sourceIndex];
                gridArr.splice(sourceIndex, 1);
                gridArr.splice(targetIndex, 0, aux);
                var newGrid = gridArr.join(" ").trim();
                _this.pages[pageIndex].rows[currRowIndex].grid = newGrid;
                var data = {
                    project_id: _this.project_id,
                    page: {
                        currRowId: parseInt(currRowId)
                    },
                    newGrid: newGrid,
                    columnPos: targetModel.map(function (item) {
                        return item.id;
                    })
                };
                /*this.columnService.updateColumn(data.page.currRowId, data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
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
                if (target.className !== 'menu-row-sortable') {
                    return true;
                }
                return false;
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
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var targetPageId = target.getAttribute('data-current-page-id');
            var currRowId = el.getAttribute('data-current-row-id');
            if (typeof item.grid != 'undefined' && typeof item.columns == 'undefined') { //gambiarra, mas funciona
                var rows = [];
                var lines = item.grid.trim().split("\n");
                delete item.grid;
                for (var i_1 = 0; i_1 < lines.length; i_1++) {
                    var line = lines[i_1].replace(/\s+/g, ' ').trim();
                    if (line != '') {
                        var arrNumbers = line.split(' ');
                        if (arrNumbers.length > 0) {
                            rows.push({
                                grid: line,
                                columns: []
                            });
                            for (var j = 0; j < arrNumbers.length; j++) {
                                rows[rows.length - 1].columns.push({
                                    contents: []
                                });
                            }
                        }
                    }
                }
                for (var i = 0; i < targetModel.length; i++) {
                    if (Object.keys(targetModel[i]).length <= 0) {
                        targetModel.splice(i, 1);
                    }
                }
                var numSeparators = rows.length;
                for (var i_2 = 0; i_2 < numSeparators; i_2++) {
                    targetModel.splice(targetIndex + (i_2), 0, rows[i_2]);
                }
                /* API
                const data = {
                    project_id: this.project_id,
                    page: {
                        targetPageId: parseInt(targetPageId)
                    },
                    rowsPos: targetModel.map(item => {
                        return item.id;
                    }),
                    rowTargetIndex: targetIndex,
                    rows: rows
                };

                if(rows.length > 0){
                    this.rowService.storeRow(data)
                    .subscribe(result => {
                        if(result.success){
                            this.loadFormBuilder();
                            this.dropModelPageUpdated = true;
                        }
                    });
                }
            } else {
                const data = {
                    project_id: this.project_id,
                    page: {
                        currRowId: parseInt(currRowId),
                        targetPageId: parseInt(targetPageId)
                    },
                    rowPos: targetModel.map(item => {
                        return item.id;
                    })
                };
                this.rowService.updateRow(data.page.targetPageId, data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
            }
            return item;
        }));
        dragulaService.createGroup('contents', {
            copy: function (el, source) {
                return source.classList.contains('menu-content-sortable');
            },
            copyItem: function (el) {
                console.log(el);
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
                var currentDataAttr = JSON.parse(original.getAttribute('data-content'));
                if (original.classList.contains('option-type-sortable')) {
                    var tag = currentDataAttr.html.tag;
                    if (_this.options.includes(tag)) {
                        var optionType = clone.getAttribute('data-option-type');
                        _this.optionType = parseInt(optionType);
                        currentDataAttr['html']['tag'] = _this.objOptionType[_this.optionType];
                    }
                }
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
            item['table'] = {};
            if (item.table && item.html) {
                var currRowId = target.getAttribute('data-current-row-id');
                var currPageId = target.getAttribute('data-current-page-id');
                var currcolumnId = target.getAttribute('data-current-column-id');
                if (typeof item.table.columnName === 'undefined' && item.html.category === 'form') {
                    var tag = item.html.tag;
                    if (_this.options.includes(tag)) {
                        item.html.tag = _this.objOptionType[_this.optionType];
                    }
                    item.table.columnName = 'name__' + new Date().getUTCMilliseconds();
                    item.table.size = '';
                }
                var data = {
                    project_id: _this.project_id,
                    page: {
                        currPageId: currPageId,
                        currRowId: currRowId,
                        currColumnId: currcolumnId
                    },
                    contentPos: targetModel.map(function (item) {
                        return item.id;
                    }),
                    html: item.html,
                    table: item.table
                };
                console.log(item);
                if (typeof item.id != 'undefined') {
                    data['id'] = item.id;
                }
                /*this.contentService.storeContent(data)
                .subscribe(result => {
                    if(result.success){
                        this.loadFormBuilder();
                        this.dropModelPageUpdated = true;
                    }
                });*/
            }
        }));
    }
    FormPagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = this.pages ? this.pages.length > 0 ? this.pages : [] : [];
        this.formConfigService.getConfig()
            .subscribe(function (data) {
            _this.config = __assign({}, data);
        });
    };
    FormPagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subs.add(this.dragulaService.dropModel("pages")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, item = _a.item, sourceModel = _a.sourceModel, targetModel = _a.targetModel, sourceIndex = _a.sourceIndex, targetIndex = _a.targetIndex;
            var data = {
                project_id: _this.project_id,
                pagesPos: targetModel.map(function (item) {
                    return item.id;
                }),
                pageTargetIndex: targetIndex,
            };
            _this.dropModelPageUpdated = true;
            /*this.pageService.updatePagesPosition(data.project_id, data)
            .subscribe(result => {
                console.log(result);
            });*/
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
        this.dragulaService.destroy('sortableElements');
        this.subs.unsubscribe();
    };
    FormPagesComponent.prototype.deletePage = function (pageIndex) {
        /*this.pageService.deletePage(page.id).subscribe(result => {
            if(result.success){
                this.pages.forEach((cV, index) => {
                    if(cV.id == page.id){
                        this.pages.splice(index, 1);
                    }
                });
                this.cd.markForCheck();
            }
        });*/
        //static
        this.pages.splice(pageIndex, 1);
    };
    FormPagesComponent.prototype.loadFormBuilder = function () {
        var _this = this;
        this.ngxLoader.start();
        this.pageService.getPageByProjectId(this.project_id)
            .subscribe(function (result) {
            if (result.success) {
                _this.pages = result.data;
            }
            _this.ngxLoader.stop();
        });
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
            styles: [__webpack_require__(/*! ./form-pages.component.css */ "./src/app/form-pages/form-pages.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_services_content_service__WEBPACK_IMPORTED_MODULE_6__["ContentService"],
            _shared_services_row_service__WEBPACK_IMPORTED_MODULE_7__["RowService"],
            _shared_services_column_service__WEBPACK_IMPORTED_MODULE_8__["ColumnService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderService"]])
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
/* harmony import */ var _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-builder/form-config/form-config.module */ "./src/app/form-builder/form-config/form-config.module.ts");
/* harmony import */ var _form_builder_form_config_form_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-builder/form-config/form-config.component */ "./src/app/form-builder/form-config/form-config.component.ts");
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
                _render_content_render_content_module__WEBPACK_IMPORTED_MODULE_7__["RenderContentModule"],
                _form_builder_form_config_form_config_module__WEBPACK_IMPORTED_MODULE_8__["FormConfigModule"]
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
            ],
            entryComponents: [
                _form_builder_form_config_form_config_component__WEBPACK_IMPORTED_MODULE_9__["FormConfigComponent"]
            ],
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

module.exports = "<div class=\"px-3 py-3 bg-danger text-white\" *ngIf=\"page.rows.length <= 0\">\n\tPlace Bootstrap grid columns here\n</div>\n<div\n\tdragula=\"rowSortable\"\n\t[(dragulaModel)]=\"page.rows\"\n\t[ngStyle]=\"{ 'min-height': '20px' }\"\n\t[attr.data-current-page-id]=\"pageId\"\n\tclass=\"row-sortable\"\n>\n<div *ngFor=\"let row of page.rows; let rowIndex = index;\"\n\t[attr.data-current-row-id]=\"row.id\"\n>\n\t<div class=\"row\" [hidden]=\"config?.previewMode\">\n\t\t<div class=\"col-md-12 row-handle\" [ngStyle]=\"{ cursor: 'move' }\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<small class=\"row-handle\">row {{ rowIndex + 1 }}</small>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<small (click)=\"deleteRow(rowIndex)\" class=\"badge btn-outline-danger\" [ngStyle]=\"{ cursor: 'pointer' }\">\n\t\t\t\t\t<i class=\"fas fa-window-close\"></i> row {{ rowIndex + 1 }}\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"border-bottom border-secondary\" [hidden]=\"config?.previewMode\"></div>\n\t\t<app-form-columns [row]=\"row\" [pageIndex]=\"pageIndex\" [rowIndex]=\"rowIndex\" [pageId]=\"pageId\" [rowId]=\"row.id\"></app-form-columns>\n\t</div>\n</div>\n"

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
/* harmony import */ var _shared_services_row_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/row.service */ "./src/app/shared/services/row.service.ts");
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
    function FormRowsComponent(formConfigService, cd, rowService) {
        this.formConfigService = formConfigService;
        this.cd = cd;
        this.rowService = rowService;
    }
    FormRowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formConfigService.getConfig().subscribe(function (data) {
            _this.config = data;
            _this.cd.markForCheck();
        });
    };
    FormRowsComponent.prototype.deleteRow = function (rowIndex) {
        /*this.rowService.deleteRow(row.id).subscribe(result => {
            if(result['success']){
                this.page.rows.forEach((cV, index) => {
                    if(cV.id == row.id){
                        this.page.rows.splice(index, 1);
                    }
                });
                this.cd.markForCheck();
            }
        });*/
        //static remove
        this.page.rows.splice(rowIndex, 1);
        this.cd.markForCheck();
    };
    FormRowsComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "pageIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRowsComponent.prototype, "pageId", void 0);
    FormRowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-rows',
            template: __webpack_require__(/*! ./form-rows.component.html */ "./src/app/form-pages/form-rows/form-rows.component.html"),
            styles: [__webpack_require__(/*! ./form-rows.component.css */ "./src/app/form-pages/form-rows/form-rows.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_services_row_service__WEBPACK_IMPORTED_MODULE_2__["RowService"]])
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
        this.mustRender = true;
        this.content = {
            html: {},
            table: {}
        };
    }
    RenderContentComponent.prototype.ngOnInit = function () {
    };
    RenderContentComponent.prototype.render = function () {
        if (typeof this.content !== 'undefined') {
            console.log('render');
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
            styles: [__webpack_require__(/*! ./render-content.component.css */ "./src/app/form-pages/render-content/render-content.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
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
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
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
    function HomeComponent(formConfigService, homeService, pageService) {
        this.formConfigService = formConfigService;
        this.homeService = homeService;
        this.pageService = pageService;
        this.pages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = {
            previewMode: true
        };
        this.formConfigService.setConfig(this.config);
        this.pageService.getPageByProjectId(14)
            .subscribe(function (result) {
            console.log(result);
            if (result.success) {
                _this.pages = result.data;
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_form_config_service__WEBPACK_IMPORTED_MODULE_1__["FormConfigService"],
            _shared_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
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

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 520px;\n    width: 100%;\n    line-height: 1.4;\n    text-align: center;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 200px;\n    margin: 0px auto 20px;\n    z-index: -1;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 236px;\n    font-weight: 200;\n    margin: 0px;\n    color: #211b19;\n    text-transform: uppercase;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound .notfound-404 h2 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 28px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #211b19;\n    background: #fff;\n    padding: 10px 5px;\n    margin: auto;\n    display: inline-block;\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n  }\n  \n  .notfound a {\n    font-family: 'Montserrat', sans-serif;\n    display: inline-block;\n    font-weight: 700;\n    text-decoration: none;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 13px 23px;\n    background: #ff6300;\n    font-size: 18px;\n    transition: 0.2s all;\n  }\n  \n  .notfound a:hover {\n    color: #ff6300;\n    background: #211b19;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 h1 {\n      font-size: 148px;\n    }\n  }\n  \n  @media only screen and (max-width: 480px) {\n    .notfound .notfound-404 {\n      height: 148px;\n      margin: 0px auto 10px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 86px;\n    }\n    .notfound .notfound-404 h2 {\n      font-size: 16px;\n    }\n    .notfound a {\n      padding: 7px 15px;\n      font-size: 14px;\n    }\n  }"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>Oops!</h1>\n\t\t\t\t<h2>404 - The Page can't be found</h2>\n\t\t\t</div>\n\t\t\t<a href=\"#\">Go TO Homepage</a>\n\t\t</div>\n\t</div>"

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

/***/ "./src/app/projects/project-form/project-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/project-form/project-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/project-form/project-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/projects/project-form/project-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label for=\"project_name\">Project Name</label>\n\t\t<input type=\"text\" id=\"project_name\" formControlName=\"name\" class=\"form-control\"\t[ngClass]=\"{ 'is-invalid': f.name.invalid }\" >\n\t</div>\n\t<div *ngIf=\"f.name.invalid || f.name.touched\" class=\"invalid-feedback\">\n\t\t<div *ngIf=\"f.name.errors?.required\">You did not enter a field</div>\n\t\t<div *ngIf=\"f.name.errors?.minlength\">Your field is too short</div>\n\t</div>\t\n    <button type=\"submit\" class=\"btn btn-outline-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/projects/project-form/project-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/project-form/project-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function() { return ProjectFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(projectService, fb, router, route) {
        this.projectService = projectService;
        this.fb = fb;
        this.router = router;
        this.route = route;
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectForm = this.fb.group({
            'id': [],
            'name': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
        this.route.params.subscribe(function (result) {
            var id = result.id;
            if (!id) {
                //this.router.navigate(['projects']);
                return;
            }
            _this.projectService.getProjectById(id)
                .subscribe(function (res) {
                if (res.success) {
                    _this.projectForm.patchValue({
                        id: id,
                        name: res.data.name
                    });
                }
            });
        });
    };
    ProjectFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formValue = this.projectForm.value;
        var p = this.projectForm.value;
        if (formValue.id) {
            this.projectService.updateProject(formValue.id, p)
                .subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['projects', formValue.id, 'edit']);
                }
            });
        }
        else {
            this.projectService.storeProject(p)
                .subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['projects']);
                }
            });
        }
    };
    Object.defineProperty(ProjectFormComponent.prototype, "f", {
        get: function () {
            return this.projectForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-form',
            template: __webpack_require__(/*! ./project-form.component.html */ "./src/app/projects/project-form/project-form.component.html"),
            styles: [__webpack_require__(/*! ./project-form.component.css */ "./src/app/projects/project-form/project-form.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-form/project-form.component */ "./src/app/projects/project-form/project-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'projects', component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
    { path: 'projects/create', component: _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_3__["ProjectFormComponent"] },
    { path: 'projects/:id', component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
    { path: 'projects/:id/edit', component: _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_3__["ProjectFormComponent"] },
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-stripped table-condensed table-bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">id</th>\n\t\t\t<th scope=\"col\">Name</th>\n\t\t\t<th scope=\"col\">Data de Criação</th>\n\t\t\t<th scope=\"col\">Última Atualização</th>\n\t\t\t<th scope=\"col\">\n\t\t\t\t<a [routerLink]=\"['/projects', 'create']\" class=\"btn btn-outline-primary btn-sm\">Create</a>\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let project of projects\">\n\t\t\t<td>{{ project.id }}</td>\n\t\t\t<td>{{ project.name }}</td>\n\t\t\t<td>{{ project.created_at | date: 'dd/MM/yyyy' }}</td>\n\t\t\t<td>{{ project.updated_at | date: 'dd/MM/yyyy' }}</td>\n\t\t\t<td>\n\t\t\t\t<a [routerLink]=\"['/form-builder', project.id, 'edit']\" class=\"btn btn-outline-dark btn-sm\">Form Builder</a>\n\t\t\t\t<a [routerLink]=\"['/projects', project.id, 'edit']\" class=\"btn btn-outline-dark btn-sm\">Edit</a>\n\t\t\t\t<button (click)=\"askToDelete(project)\" class=\"btn btn-outline-danger btn-sm\">Delete</button>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\t\t\n<app-modal [message]=\"message\" [isOpen]=\"showModal\" (handleNo)=\"closeModal()\" (handleYes)=\"deleteProject()\"></app-modal>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.message = '?';
        this.showModal = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (result) {
            console.log(result);
            if (result.success) {
                _this.projects = result.data;
            }
        });
    };
    ProjectsComponent.prototype.askToDelete = function (project) {
        this.showModal = true;
        this.projectToDelete = project;
        if (this.projectToDelete.name) {
            this.message = "Would you like to delete " + this.projectToDelete.name + "?";
        }
    };
    ProjectsComponent.prototype.closeModal = function () {
        this.showModal = false;
    };
    ProjectsComponent.prototype.deleteProject = function () {
        var _this = this;
        if (this.projectToDelete) {
            var id_1 = this.projectToDelete.id;
            this.projectService.deleteProject(id_1)
                .subscribe(function (result) {
                if (result.success) {
                    _this.projects = _this.projects.filter(function (item) {
                        return item.id != id_1;
                    });
                    _this.projectToDelete = null;
                    _this.closeModal();
                }
            });
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-form/project-form.component */ "./src/app/projects/project-form/project-form.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"]]
        })
    ], ProjectsModule);
    return ProjectsModule;
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
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/model */ "./src/app/core/model/index.ts");
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
    function CreateTableToJsonService(DB) {
        this._isTextareaWhenSizeEquals = 1000;
        this._wordIndex = 2;
        this.allowedDataTypes = ['null', 'not null', 'primary key', 'unique'];
        this.regex = {
            createTableSyntax: '',
            createTable: "\\s*create\\s+table(?:\\s+if\\s+not\\s+exists)?\\s+(\\w+)\\s*",
            onlyNumeric: "(([0-9]+(\\,[0-9]+)?)(\\.[0-9]+)?)",
            valueBtwParentheses: "\\(([^)]*)\\)",
            stringRestriction: "^[\\s\\w+\\_\\-\\,\\.()]*$",
        };
        this.html = new _core_model__WEBPACK_IMPORTED_MODULE_2__["Html"]();
        this.table = new _core_model__WEBPACK_IMPORTED_MODULE_2__["Table"]();
        this._data = [];
        this._errors = [];
        this._dataBase = _shared_services_database_engine_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseEngine"].get(DB);
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
    CreateTableToJsonService.prototype.createTableSyntax = function () {
        var dbKeys = Object.keys(this._dataBase).join("|");
        var allowedDataTypes = this.allowedDataTypes.map(function (item) {
            var newItem = item.toUpperCase().replace(/\s+/g, '\\s+');
            return "(?:" + newItem + "?)?";
        }).join("");
        var info = "\n        (\n            (\\w+)\\s*\n            (?:\n                (" + dbKeys + ")(\\s*)?\n                (\n                    ([(]" + this.regex.onlyNumeric + "[)])\n                )?\n            ) \n            (?:\n                \\s+" + allowedDataTypes + "\n            )?\n            (\n                \\s*(PRIMARY\\s+KEY)?\\s*\n            )?\n        )\n        ";
        var regexCreateTableSyntax = ("\n        " + this.regex.createTable + "\n        [(]\n            (\\s*\n                (\n                    \\s*" + info + "[,]\n                )*\n                (\n                    \\s*" + info + "\n                )\n            )\n        \\s*[)]\\s*([;])\n        ").toLowerCase().replace(/\s+/g, '').trim();
        return regexCreateTableSyntax;
    };
    CreateTableToJsonService.prototype.getDataTypeAndSize = function (str) {
        var secondMatch = str[1];
        var inputType, size = '';
        var dataType = secondMatch;
        var matchValBtwParen = secondMatch.match(new RegExp(this.regex.valueBtwParentheses));
        var hasValueBtwParen = false;
        if (matchValBtwParen !== null) {
            hasValueBtwParen = true;
            dataType = secondMatch.replace(matchValBtwParen[0], '');
        }
        else {
            //(2) probably the next element -thirdMatch- must have(or not) the size of the columnName (it must be an integer or float)
            if (str.length > 2) { //has more than 2 elements
                var thirdMatch = str[2];
                matchValBtwParen = thirdMatch.match(new RegExp(this.regex.valueBtwParentheses)); //get value between parentheses
                if (matchValBtwParen !== null) { // it goes to the next index if parentheses doesn't exists
                    hasValueBtwParen = true;
                    this._wordIndex = 3;
                }
            }
        }
        if (hasValueBtwParen) {
            var numeric = matchValBtwParen[1];
            var onlyNumericRegex = new RegExp("^" + this.regex.onlyNumeric + "$");
            if (!onlyNumericRegex.test(numeric)) {
                this._errors.push("`" + this.table.columnName + "`: " + numeric + " is not a number!");
            }
            size = numeric;
        }
        var database = this._dataBase[dataType.toUpperCase()];
        if (typeof database !== 'undefined' && dataType !== '') {
            inputType = database;
        }
        else {
            this._errors.push("Check the manual for the right syntax to use near '" + this.table.columnName + "'");
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
                this._errors.push("Check the manual for the right syntax to use near '" + this.table.columnName + "'");
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
                    this._errors.push("error: `" + currentWord + "` maybe `" + allowed[currentWord].correct + "` ? at line: " + this.table.columnName);
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
        var regex = new RegExp(this.regex.createTableSyntax);
        this._string = this._string.replace(/\s+/g, " ").toLowerCase();
        console.log(this._string);
        if (!regex.test(this._string)) {
            this._errors.push("Only allowed dot (.|,|A-Z|a-z|white space|underscore|( )", "You have an error in your SQL syntax:");
        }
        var createTable = (new RegExp(this.regex.createTable + "([^\\(]*(\\(.*\\))[^\\)])")).exec(this._string);
        var defineColumns = [];
        if (createTable) {
            this.tableName = createTable[1];
            defineColumns = createTable[3].replace(/^\((.+)\)$/, '$1')
                .replace(new RegExp(this.regex.valueBtwParentheses, "g"), function (string, first) {
                var regex = new RegExp(_this.regex.onlyNumeric, 'g');
                if (regex.test(first)) {
                    return "(" + first.replace(/,/g, '.') + ")";
                }
                return string;
            })
                .split(",")
                .reduce(function (previous, currentValue) {
                if (previous && currentValue !== '') {
                    previous.push(currentValue.replace(/\s+/g, " ")
                        .trim()
                        .toLowerCase());
                }
                return previous;
            }, []);
        }
        var i = 0;
        while (i < defineColumns.length /* && this._errors.length <= 0*/) {
            var currentDefineColumn = defineColumns[i];
            var eachWords = currentDefineColumn.split(' '); //break the define columns into words
            if (eachWords.length <= 1) {
                //this._errors.push(`Incompleted`);
            }
            else {
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
    CreateTableToJsonService.prototype.getTableName = function () {
        return this.tableName;
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
        var _this = this;
        return this._errors.filter(function (item, pos) {
            return _this._errors.indexOf(item) == pos;
        });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [String])
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
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/model */ "./src/app/core/model/index.ts");
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
        this.html = new _core_model__WEBPACK_IMPORTED_MODULE_1__["Html"](d.html);
        this.table = new _core_model__WEBPACK_IMPORTED_MODULE_1__["Table"](d.table);
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
                "" + (this.html.fields ? this.html.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.html.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') : []),
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
                "" + this.html.choices.map(function (element) { return "<option value=\"" + element.value + "\">" + element.text + "</option>"; }).join(''),
                "</select>",
                "</div>"],
            "checkbox": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.choices.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "radio": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.choices.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
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
        this.html = new _core_model__WEBPACK_IMPORTED_MODULE_1__["Html"](d.html);
        this.table = new _core_model__WEBPACK_IMPORTED_MODULE_1__["Table"](d.table);
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
                "" + (this.html.fields ? this.html.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.html.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') : []),
                "</table>"],
            "image": ["<img src=\"" + this.html.src + "\" class=\"img-fluid\">"],
            "textarea": ["{!! $HTML::textArea(" + this.html.grid + ", '" + this.table.columnName + "', " + (parseInt(this.table.size) > 0 ? "" + this.table.size : "''") + ", \"" + this.html.label + "\", " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "') !!}"],
            "select": ["{!! $HTML::selectDominio(" + this.html.grid + ", '" + this.table.columnName + "', '" + this.html.label + "', " + (this.table.nullable ? "true" : "false") + ", true, true, '', '" + this.table.columnName + "' ) !!}"],
            "checkbox": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.choices.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
                "</div>"],
            "radio": ["<div class=\"form-group\" id=\"div_" + this.table.columnName + "\">",
                "<label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>",
                "" + this.html.choices.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join(''),
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
        if (typeof control.value != 'undefined' && control.value != null) {
            var lines = control.value.trim().split("\n");
            for (var i = 0; i < lines.length; i++) {
                var sum = 0;
                var line = lines[i].replace(/\s+/g, ' ').trim();
                if (line != '') {
                    var currentValueArr = line.split(' ');
                    if (currentValueArr.length > 0) {
                        for (var j = 0; j < currentValueArr.length; j++) {
                            if (currentValueArr[j].trim() != '') {
                                var num = parseInt(currentValueArr[j]);
                                sum += num;
                            }
                        }
                        if (parseInt(this.sumBeEqualsTo) != sum) {
                            return {
                                'isSumInvalid': true,
                                'sumBeEqualsTo': this.sumBeEqualsTo
                            };
                        }
                    }
                }
            }
        }
        return null;
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

/***/ "./src/app/shared/enum.ts":
/*!********************************!*\
  !*** ./src/app/shared/enum.ts ***!
  \********************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
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

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        var _this = this;
        this.isOpen = false;
        this.handleYes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleNo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNo = function () {
            _this.handleNo.emit();
        };
        this.onYes = function () {
            _this.handleYes.emit();
        };
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.closeModal = function () {
        this.isOpen = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "handleYes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "handleNo", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: "\n<div class=\"modal fade\" [ngClass]=\"{ 'show': isOpen }\" [style.display]=\"isOpen ? 'block' : 'none'\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" (click)=\"onNo()\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                {{ message }}\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"onNo()\">No</button>\n                <button class=\"btn btn-primary\" (click)=\"onYes()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
        })
    ], ModalComponent);
    return ModalComponent;
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

/***/ "./src/app/shared/pipes/snake-case-to-camel-case.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pipes/snake-case-to-camel-case.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SnakeCaseToCamelCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeCaseToCamelCasePipe", function() { return SnakeCaseToCamelCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SnakeCaseToCamelCasePipe = /** @class */ (function () {
    function SnakeCaseToCamelCasePipe() {
    }
    SnakeCaseToCamelCasePipe.prototype.transform = function (value, args) {
        if (typeof value != 'undefined') {
            if (value.trim() != '') {
                var newString = value.replace(/_(\w)/g, function (m) {
                    return m.toUpperCase();
                }).replace(/_/g, "");
                return (newString.charAt(0).toUpperCase() + newString.slice(1)).trim();
            }
        }
        return '';
    };
    SnakeCaseToCamelCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'snakeCaseToCamelCase'
        })
    ], SnakeCaseToCamelCasePipe);
    return SnakeCaseToCamelCasePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/column.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/column.service.ts ***!
  \***************************************************/
/*! exports provided: ColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnService", function() { return ColumnService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnService = /** @class */ (function () {
    function ColumnService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/columns';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ColumnService.prototype.updateColumn = function (id, data) {
        return this.http.put(this.API_URL + "/" + id, data, this.httpOptions);
    };
    ColumnService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColumnService);
    return ColumnService;
}());



/***/ }),

/***/ "./src/app/shared/services/content-choice-item.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/content-choice-item.service.ts ***!
  \****************************************************************/
/*! exports provided: ContentChoiceItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentChoiceItemService", function() { return ContentChoiceItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentChoiceItemService = /** @class */ (function () {
    function ContentChoiceItemService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/contents_choices_items';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ContentChoiceItemService.prototype.storeContentChoiceItem = function (contentChoiceItem) {
        return this.http.post("" + this.API_URL, contentChoiceItem, this.httpOptions);
    };
    ContentChoiceItemService.prototype.updateContentChoiceItem = function (id, contentChoiceItem) {
        return this.http.put(this.API_URL + "/" + id, contentChoiceItem, this.httpOptions);
    };
    ContentChoiceItemService.prototype.deleteContentChoiceItem = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    ContentChoiceItemService.prototype.getContentChoiceItemById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    ContentChoiceItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentChoiceItemService);
    return ContentChoiceItemService;
}());



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/content.service.ts ***!
  \****************************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentService = /** @class */ (function () {
    function ContentService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/contents';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ContentService.prototype.showContent = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    ContentService.prototype.storeContent = function (data) {
        return this.http.post("" + this.API_URL, data, this.httpOptions);
    };
    ContentService.prototype.updateContent = function (content) {
        return this.http.put(this.API_URL + "/" + content.id, content, this.httpOptions);
    };
    ContentService.prototype.deleteContent = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    ContentService.prototype.getContentChoicesById = function (id) {
        return this.http.get(this.API_URL + "_choices/" + id);
    };
    ContentService.prototype.updateContentChoicesPosition = function (id, contentChoices) {
        return this.http.put(this.API_URL + "_choices/" + id + "/updatePosition", contentChoices, this.httpOptions);
    };
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentService);
    return ContentService;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function HomeService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api';
    }
    HomeService.prototype.getHome = function () {
        return this.http.get(this.API_URL + "/pages");
    };
    HomeService.prototype.getHomeStatic = function () {
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function HtmlElementService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/tools';
        this.category = 'form';
    }
    HtmlElementService.prototype.getTags = function () {
        var _this = this;
        var tags = this.getStatic().reduce(function (previous, current) {
            if (current.html.category) {
                if (current.html.category === _this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    };
    HtmlElementService.prototype.getTools = function () {
        return this.http.get("" + this.API_URL);
    };
    HtmlElementService.prototype.getStaticTools = function () {
        //return this.http.get<RegisterResponse>(`${this.API_URL}`);
        return [{ "html": { "content_html_id": 3, "content_html_tag_id": 3, "category_id": 1, "tag": "number", "category": "form", "label": "Number", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 4, "content_html_tag_id": 4, "category_id": 1, "tag": "date", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 5, "content_html_tag_id": 5, "category_id": 1, "tag": "text", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 6, "content_html_tag_id": 6, "category_id": 1, "tag": "textarea", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 7, "content_html_tag_id": 7, "category_id": 1, "tag": "file", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 9, "content_html_tag_id": 9, "category_id": 2, "tag": "html", "category": "html", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 10, "content_html_tag_id": 10, "category_id": 2, "tag": "image", "category": "html", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 11, "content_html_tag_id": 11, "category_id": 3, "tag": "h1", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 12, "content_html_tag_id": 12, "category_id": 3, "tag": "h2", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 13, "content_html_tag_id": 13, "category_id": 3, "tag": "h3", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 14, "content_html_tag_id": 14, "category_id": 3, "tag": "h4", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 15, "content_html_tag_id": 15, "category_id": 3, "tag": "h5", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 16, "content_html_tag_id": 16, "category_id": 3, "tag": "h6", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 17, "content_html_tag_id": 17, "category_id": 4, "tag": "legend", "category": "formatting", "label": "", "text": "Type your Text", "src": null, "choices": [] } }];
    };
    HtmlElementService.prototype.getStaticOptionChoices = function () {
        return [{ "html": { "content_choice_id": 91, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "Discordo Totalmente|NA (Não Aplicável)|Não Concordo|Nem Discordo|Concordo|Concordo Totalmente", "label": "Type your Text", "choices": [{ "id": 190, "content_choice_id": 91, "text": "Discordo Totalmente", "value": "1", "position": 0, "created_at": "2019-04-25 14:18:07", "updated_at": "2019-05-02 19:43:28" }, { "id": 195, "content_choice_id": 91, "text": "NA (Não Aplicável)", "value": "0", "position": 1, "created_at": "2019-04-25 14:19:08", "updated_at": "2019-05-06 15:34:57" }, { "id": 191, "content_choice_id": 91, "text": "Não Concordo", "value": "2", "position": 2, "created_at": "2019-04-25 14:18:23", "updated_at": "2019-05-06 15:34:57" }, { "id": 192, "content_choice_id": 91, "text": "Nem Discordo", "value": "3", "position": 3, "created_at": "2019-04-25 14:18:41", "updated_at": "2019-05-06 15:34:57" }, { "id": 193, "content_choice_id": 91, "text": "Concordo", "value": "4", "position": 4, "created_at": "2019-04-25 14:18:49", "updated_at": "2019-05-06 15:34:57" }, { "id": 194, "content_choice_id": 91, "text": "Concordo Totalmente", "value": "5", "position": 5, "created_at": "2019-04-25 14:18:58", "updated_at": "2019-05-06 15:34:57" }] } }, { "html": { "content_choice_id": 92, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "56645645654|papagaio|rterter", "label": "Type your Text", "choices": [{ "id": 196, "content_choice_id": 92, "text": "56645645654", "value": "657657567565", "position": 0, "created_at": "2019-04-25 19:54:51", "updated_at": "2019-05-02 19:23:31" }, { "id": 201, "content_choice_id": 92, "text": "papagaio", "value": "papagaio", "position": 1, "created_at": "2019-04-30 11:49:05", "updated_at": "2019-05-02 19:23:31" }, { "id": 197, "content_choice_id": 92, "text": "rterter", "value": "tertertert", "position": 2, "created_at": "2019-04-25 19:55:13", "updated_at": "2019-05-02 19:23:14" }] } }, { "html": { "content_choice_id": 93, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "7687768|hadoken|123221", "label": "Type your Text", "choices": [{ "id": 225, "content_choice_id": 93, "text": "7687768", "value": "78768768768768768678678678", "position": null, "created_at": "2019-05-02 20:25:35", "updated_at": "2019-05-02 20:25:35" }, { "id": 224, "content_choice_id": 93, "text": "hadoken", "value": "123213213123123", "position": 0, "created_at": "2019-05-02 20:25:25", "updated_at": "2019-05-02 20:25:42" }, { "id": 223, "content_choice_id": 93, "text": "123221", "value": "123123123123123", "position": 1, "created_at": "2019-05-02 20:25:21", "updated_at": "2019-05-02 20:25:29" }] } }, { "html": { "content_choice_id": 94, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "teste|Hadouken|Shoryuken", "label": "Type your Text", "choices": [{ "id": 202, "content_choice_id": 94, "text": "teste", "value": "teste", "position": null, "created_at": "2019-05-02 19:22:02", "updated_at": "2019-05-02 19:22:02" }, { "id": 203, "content_choice_id": 94, "text": "Hadouken", "value": "Hadouken", "position": null, "created_at": "2019-05-02 19:22:19", "updated_at": "2019-05-02 19:22:19" }, { "id": 204, "content_choice_id": 94, "text": "Shoryuken", "value": "Shoryuken", "position": null, "created_at": "2019-05-02 19:22:31", "updated_at": "2019-05-02 19:22:31" }] } }, { "html": { "content_choice_id": 95, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "Les Claypool|Flea|Geddy Lee|Chris Squire", "label": "Type your Text", "choices": [{ "id": 205, "content_choice_id": 95, "text": "Les Claypool", "value": "Les Claypool", "position": null, "created_at": "2019-05-02 19:52:15", "updated_at": "2019-05-02 19:52:15" }, { "id": 206, "content_choice_id": 95, "text": "Flea", "value": "Flea", "position": null, "created_at": "2019-05-02 19:52:21", "updated_at": "2019-05-02 19:52:21" }, { "id": 207, "content_choice_id": 95, "text": "Geddy Lee", "value": "Geddy Lee", "position": null, "created_at": "2019-05-02 19:52:30", "updated_at": "2019-05-02 19:52:30" }, { "id": 208, "content_choice_id": 95, "text": "Chris Squire", "value": "Chris Squire", "position": null, "created_at": "2019-05-02 19:52:41", "updated_at": "2019-05-02 19:52:41" }] } }];
    };
    HtmlElementService.prototype.getStaticTags = function () {
        var _this = this;
        var tags = this.getStatic().reduce(function (previous, current) {
            if (current.html.category) {
                if (current.html.category === _this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    };
    HtmlElementService.prototype.getStatic = function () {
        return [{ "html": { "content_html_tag_id": 1, "tag": "select", "category": "form", "content_choice_id": 1, "label": "Type your Text23", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 2, "tag": "radio", "category": "form", "content_choice_id": 1, "label": "Type your Text", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 3, "tag": "number", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 4, "tag": "date", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 5, "tag": "text", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 6, "tag": "textarea", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 7, "tag": "file", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 8, "tag": "checkbox", "category": "form", "content_choice_id": 1, "label": "Type your Text", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 9, "tag": "html", "category": "html", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 10, "tag": "image", "category": "html", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 11, "tag": "h1", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 12, "tag": "h2", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 13, "tag": "h3", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 14, "tag": "h4", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 15, "tag": "h5", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 16, "tag": "h6", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 17, "tag": "legend", "category": "formatting", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }];
    };
    HtmlElementService.prototype.get2 = function () {
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

/***/ "./src/app/shared/services/page.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/page.service.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/pages';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    PageService.prototype.getPages = function () {
        return this.http.get("" + this.API_URL);
    };
    PageService.prototype.getPageByProjectId = function (projectId) {
        return this.http.get(this.API_URL + "/" + projectId + "/project");
    };
    PageService.prototype.getPageById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    PageService.prototype.createPage = function (data) {
        return this.http.post(this.API_URL, data, this.httpOptions);
    };
    PageService.prototype.updatePagesPosition = function (id, data) {
        return this.http.put(this.API_URL + "/" + id + "/updatePosition", data, this.httpOptions);
    };
    PageService.prototype.deletePage = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/shared/services/project.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/project.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/projects';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get("" + this.API_URL);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.API_URL + "/" + id);
    };
    ProjectService.prototype.updateProject = function (id, data) {
        return this.http.put(this.API_URL + "/" + id, data, this.httpOptions);
    };
    ProjectService.prototype.storeProject = function (data) {
        return this.http.post("" + this.API_URL, data, this.httpOptions);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/row.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/row.service.ts ***!
  \************************************************/
/*! exports provided: RowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowService", function() { return RowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RowService = /** @class */ (function () {
    function RowService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/rows';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    RowService.prototype.storeRow = function (data) {
        return this.http.post("" + this.API_URL, data, this.httpOptions);
    };
    RowService.prototype.updateRow = function (id, data) {
        return this.http.put(this.API_URL + "/" + id, data, this.httpOptions);
    };
    RowService.prototype.deleteRow = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    RowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RowService);
    return RowService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/group-by.pipe */ "./src/app/shared/pipes/group-by.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.component */ "./src/app/shared/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var components = [
    _modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__["GroupByPipe"],
                _modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]
            ],
            exports: [
                _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__["GroupByPipe"],
                _modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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