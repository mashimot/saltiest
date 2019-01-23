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
import { Html } from "./../shared/models/html.model";
import { Table } from "./../shared/models/table.model";
var RenderHtmlService = /** @class */ (function () {
    function RenderHtmlService() {
        this.html = new Html;
        this.table = new Table;
    }
    RenderHtmlService.prototype.setParams = function (d) {
        if (d) {
            if (d.table) {
                this.table.columnName = typeof d.table.columnName === 'undefined' ? '' : d.table.columnName;
                this.table.nullable = typeof d.table.nullable === 'undefined' ? '' : d.table.nullable;
                this.table.size = typeof d.table.size === 'undefined' ? '' : (d.table.size);
            }
            if (d.html) {
                this.grid = typeof d.html.grid === 'undefined' ? '' : d.html.grid;
                this.html.label = typeof d.html.label === 'undefined' ? '' : d.html.label;
                this.html.data = typeof d.html.data === 'undefined' ? '' : d.html.data;
                this.html.src = typeof d.html.src === 'undefined' ? '' : d.html.src;
                this.html.tag = typeof d.html.tag === 'undefined' ? '' : d.html.tag;
                this.html.text = typeof d.html.text === 'undefined' ? '' : d.html.text;
                this.fields = typeof d.fields === 'undefined' ? [] : d.fields;
                this.html.elements = typeof d.html.elements === 'undefined' ? [] : d.html.elements;
            }
        }
    };
    RenderHtmlService.prototype.getTags = function () {
        return [{
                category: 'form'
            }];
    };
    RenderHtmlService.prototype.get = function () {
        return {
            html: this.htmlBackup(),
            code: this.htmlBackup()
        };
    };
    RenderHtmlService.prototype.code2 = function () {
        var _this = this;
        switch (this.html.tag) {
            case "html": return "" + this.html.data;
            case "legend": return "<legend>" + this.html.text + "</legend>";
            case "h1": return "<h1>" + this.html.text + "</h1>";
            case "h2": return "<h2>" + this.html.text + "</h2>";
            case "h3": return "<h3>" + this.html.text + "</h3>";
            case "h4": return "<h4>" + this.html.text + "</h4>";
            case "h5": return "<h5>" + this.html.text + "</h5>";
            case "h6": return "<h6>" + this.html.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.html.src + "\" class=\"img-fluid\">";
            case "textarea": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"txt_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <textarea class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"txt_" + this.table.columnName + "\"  " + (this.table.nullable ? "" : "required") + ">{{ (old('" + this.table.columnName + "') != null) ? old('" + this.table.columnName + "') : '$mudarAqui->" + this.table.columnName + "' }}</textarea>\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "select":
                return "\n        <!-- start " + this.table.columnName + " -->\n            {!! $HTML::selectDominio(4, '" + this.table.columnName + "', '" + this.html.label + "', true, true, true, '', '" + this.table.columnName + "' ) !!}\n        <!-- end " + this.table.columnName + " -->";
            case "checkbox":
                return "\n          <!-- start " + this.table.columnName + " -->\n          <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n              <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n              " + this.html.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.table.columnName + " -->";
            case "radio": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            " + this.html.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "text": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group {{ $errors->has('" + this.table.columnName + "') ? ' has-error' : '' }}\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"text\" class=\"form-control inputEdicao\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"{{ (old('" + this.table.columnName + "') != null) ? old('" + this.table.columnName + "') : '$mudarAqui->" + this.table.columnName + "' }}\" " + (this.table.size > 0 ? "maxlength=\"" + this.table.size + "\"" : "") + "  >\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "number": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"text\" class=\"form-control " + (this.table.size > 0 ? "int" + this.table.size : "") + " inputEdicao\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\"  value=\"{{ (old('" + this.table.columnName + "') != null) ? old('" + this.table.columnName + "') : '$mudarAqui->" + this.table.columnName + "' }}\"  " + (this.table.nullable ? "" : "required") + " " + (this.table.size > 0 ? "maxlength=\"" + this.table.size + "\"" : "") + ">\n        </div>                    \n        <!-- end " + this.table.columnName + " -->";
            case "date": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"text\" class=\"form-control date inputEdicao\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\"  value=\"{{ (old('" + this.table.columnName + "') != null) ? old('" + this.table.columnName + "') : '$mudarAqui->" + this.table.columnName + "' }}\"  " + (this.table.nullable ? "" : "required") + ">\n        </div>\n        <!-- end " + this.table.columnName + " -->";
        }
    };
    RenderHtmlService.prototype.code = function () {
        var _this = this;
        switch (this.html.tag) {
            case "html": return "" + this.html.data;
            case "legend": return "<legend>" + this.html.text + "</legend>";
            case "h1": return "<h1>" + this.html.text + "</h1>";
            case "h2": return "<h2>" + this.html.text + "</h2>";
            case "h3": return "<h3>" + this.html.text + "</h3>";
            case "h4": return "<h4>" + this.html.text + "</h4>";
            case "h5": return "<h5>" + this.html.text + "</h5>";
            case "h6": return "<h6>" + this.html.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.html.src + "\" class=\"img-fluid\">";
            case "textarea": return "\n            {!! $HTML::textArea(" + this.grid + ", '" + this.table.columnName + "', " + (this.table.size > 0 ? "" + this.table.size : "''") + ", \"" + this.html.label + "\", true, true, true, '', '" + this.table.columnName + "') !!}\n            ";
            case "select":
                return "\n            {!! $HTML::selectDominio(" + this.grid + ", '" + this.table.columnName + "', '" + this.html.label + "', true, true, true, '', '" + this.table.columnName + "' ) !!}\n        ";
            case "checkbox":
                return "\n          <!-- start " + this.table.columnName + " -->\n          <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n              <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n              " + this.html.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.table.columnName + " -->";
            case "radio": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            " + this.html.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "text": return "\n            {!! $HTML::inputTexto(" + this.grid + ", '" + this.table.columnName + "', " + (this.table.size > 0 ? "" + this.table.size : "''") + ", '" + this.html.label + "', true, true, true, '', '" + this.table.columnName + "') !!}\n        ";
            case "number": return "\n            {!! $HTML::inputNumero(" + this.grid + ", 'inteiro', '" + this.table.columnName + "', " + (this.table.size > 0 ? "" + this.table.size : "''") + ", '" + this.html.label + "', true, true, true, '', '" + this.table.columnName + "') !!}                \n        ";
            case "date": return "\n            {!! $HTML::inputData(" + this.grid + ", '" + this.table.columnName + "', '" + this.html.label + "', true, true, true, '', '" + this.table.columnName + "') !!}\n        ";
        }
    };
    RenderHtmlService.prototype.htmlBackup = function () {
        var _this = this;
        switch (this.html.tag) {
            case "html": return "" + this.html.data;
            case "legend": return "<legend>" + this.html.text + "</legend>";
            case "h1": return "<h1>" + this.html.text + "</h1>";
            case "h2": return "<h2>" + this.html.text + "</h2>";
            case "h3": return "<h3>" + this.html.text + "</h3>";
            case "h4": return "<h4>" + this.html.text + "</h4>";
            case "h5": return "<h5>" + this.html.text + "</h5>";
            case "h6": return "<h6>" + this.html.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.html.src + "\" class=\"img-fluid\">";
            case "textarea": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"txt_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <textarea class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"txt_" + this.table.columnName + "\"  " + (this.table.nullable ? "" : "required") + "></textarea>\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "select":
                return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <select class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\"  " + (this.table.nullable ? "" : "required") + ">\n                <option value=\"\">Selecione</option>\n                " + this.html.elements.map(function (element) { return "<option value=\"" + element.value + "\">" + element.text + "</option>"; }).join('') + "\n            </select>\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "checkbox":
                return "\n          <!-- start " + this.table.columnName + " -->\n          <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n              <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n              " + this.html.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.table.columnName + " -->";
            case "radio": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            " + this.html.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.table.columnName + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.table.columnName + " -->";
            case "text": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"text\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\"  " + (this.table.nullable ? "" : "required") + ">\n        </div>                \n        <!-- end " + this.table.columnName + " -->";
            case "number": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"number\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\" " + (this.table.nullable ? "" : "required") + ">\n        </div>                    \n        <!-- end " + this.table.columnName + " -->";
            case "date": return "\n        <!-- start " + this.table.columnName + " -->\n        <div class=\"form-group\" id=\"div_" + this.table.columnName + "\">\n            <label for=\"i_" + this.table.columnName + "\">" + this.html.label + "</label>\n            <input type=\"date\" class=\"form-control\" name=\"" + this.table.columnName + "\" id=\"i_" + this.table.columnName + "\" value=\"\" " + (this.table.nullable ? "" : "required") + ">\n        </div>\n        <!-- end " + this.table.columnName + " -->";
        }
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