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
import { Html, Table } from "./../core/model";
var BootstrapForm = /** @class */ (function () {
    function BootstrapForm(d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
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
export { BootstrapForm };
var CustomForm = /** @class */ (function () {
    function CustomForm(d) {
        this.html = new Html(d.html);
        this.table = new Table(d.table);
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
export { CustomForm };
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
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RenderHtmlService);
    return RenderHtmlService;
}());
export { RenderHtmlService };
//# sourceMappingURL=render-html.service.js.map