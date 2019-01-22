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
var RenderHtmlService = /** @class */ (function () {
    function RenderHtmlService() {
    }
    RenderHtmlService.prototype.setParams = function (d) {
        if (d) {
            if (d.table) {
                this.name = typeof d.table.columnName === 'undefined' ? '' : d.table.columnName;
                this.nullable = typeof d.table.nullable === 'undefined' ? '' : d.table.nullable;
                this.size = typeof d.table.size === 'undefined' ? '' : d.table.size;
            }
            if (d.html) {
                this.labelName = typeof d.html.label === 'undefined' ? '' : d.html.label;
                this.htmlData = typeof d.html.data === 'undefined' ? '' : d.html.data;
                this.imgSrc = typeof d.html.src === 'undefined' ? '' : d.html.src;
                this.inputType = typeof d.html.tag === 'undefined' ? '' : d.html.tag;
                this.text = typeof d.html.text === 'undefined' ? '' : d.html.text;
                this.fields = typeof d.html.fields === 'undefined' ? [] : d.html.fields;
                this.elements = typeof d.html.elements === 'undefined' ? [] : d.html.elements;
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
            code: this.code()
        };
    };
    RenderHtmlService.prototype.html = function () {
        var _this = this;
        switch (this.inputType) {
            case "html": return "" + this.htmlData;
            case "legend": return "<legend>" + this.text + "</legend>";
            case "h1": return "<h1>" + this.text + "</h1>";
            case "h2": return "<h2>" + this.text + "</h2>";
            case "h3": return "<h3>" + this.text + "</h3>";
            case "h4": return "<h4>" + this.text + "</h4>";
            case "h5": return "<h5>" + this.text + "</h5>";
            case "h6": return "<h6>" + this.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.imgSrc + "\" class=\"img-fluid\">";
            case "textarea": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"txt_" + this.name + "\">" + this.labelName + "</label>\n            <textarea class=\"form-control\" name=\"" + this.name + "\" id=\"txt_" + this.name + "\"  " + (this.nullable ? "" : "required") + ">{{ (old('" + this.name + "') != null) ? old('" + this.name + "') : '$mudarAqui->" + this.name + "' }}</textarea>\n        </div>\n        <!-- end " + this.name + " -->";
            case "select":
                return "\n        <!-- start " + this.name + " -->\n            {!! $HTML::selectDominio(4, '" + this.name + "', '" + this.labelName + "', false, false, false, '', '" + this.name + "' ) !!}\n        <!-- end " + this.name + " -->";
            case "checkbox":
                return "\n          <!-- start " + this.name + " -->\n          <div class=\"form-group\" id=\"div_" + this.name + "\">\n              <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n              " + this.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.name + " -->";
            case "radio": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            " + this.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.name + " -->";
            case "text": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group {{ $errors->has('" + this.name + "') ? ' has-error' : '' }}\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"text\" class=\"form-control inputEdicao\" name=\"" + this.name + "\" id=\"i_" + this.name + "\" value=\"{{ (old('" + this.name + "') != null) ? old('" + this.name + "') : '$mudarAqui->" + this.name + "' }}\" " + (this.size > 0 ? "maxlength=\"" + this.size + "\"" : "") + "  >\n        </div>\n        <!-- end " + this.name + " -->";
            case "number": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"text\" class=\"form-control " + (this.size > 0 ? "int" + this.size : "") + " inputEdicao\" name=\"" + this.name + "\" id=\"i_" + this.name + "\"  value=\"{{ (old('" + this.name + "') != null) ? old('" + this.name + "') : '$mudarAqui->" + this.name + "' }}\"  " + (this.nullable ? "" : "required") + " " + (this.size > 0 ? "maxlength=\"" + this.size + "\"" : "") + ">\n        </div>                    \n        <!-- end " + this.name + " -->";
            case "date": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"text\" class=\"form-control date inputEdicao\" name=\"" + this.name + "\" id=\"i_" + this.name + "\"  value=\"{{ (old('" + this.name + "') != null) ? old('" + this.name + "') : '$mudarAqui->" + this.name + "' }}\"  " + (this.nullable ? "" : "required") + ">\n        </div>\n        <!-- end " + this.name + " -->";
        }
    };
    RenderHtmlService.prototype.code = function () {
        var _this = this;
        switch (this.inputType) {
            case "html": return "" + this.htmlData;
            case "legend": return "<legend>" + this.text + "</legend>";
            case "h1": return "<h1>" + this.text + "</h1>";
            case "h2": return "<h2>" + this.text + "</h2>";
            case "h3": return "<h3>" + this.text + "</h3>";
            case "h4": return "<h4>" + this.text + "</h4>";
            case "h5": return "<h5>" + this.text + "</h5>";
            case "h6": return "<h6>" + this.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.imgSrc + "\" class=\"img-fluid\">";
            case "textarea": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"txt_" + this.name + "\">" + this.labelName + "</label>\n            <textarea class=\"form-control\" name=\"" + this.name + "\" id=\"txt_" + this.name + "\"  " + (this.nullable ? "" : "required") + ">{{ (old('" + this.name + "') != null) ? old('" + this.name + "') : '$mudarAqui->" + this.name + "' }}</textarea>\n        </div>        \n        <!-- end " + this.name + " -->";
            case "select":
                return "\n            {!! $HTML::selectDominio(4, '" + this.name + "', '" + this.labelName + "', false, false, false, '', '" + this.name + "' ) !!}\n        ";
            case "checkbox":
                return "\n          <!-- start " + this.name + " -->\n          <div class=\"form-group\" id=\"div_" + this.name + "\">\n              <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n              " + this.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.name + " -->";
            case "radio": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            " + this.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.name + " -->";
            case "text": return "\n            {!! $HTML::inputTexto(4, '" + this.name + "', " + (this.size > 0 ? "" + this.size : "''") + ", '" + this.labelName + "', false, false, false, '', '" + this.name + "') !!}\n        ";
            case "number": return "\n            {!! $HTML::inputNumero(3, 'inteiro', '" + this.name + "', " + (this.size > 0 ? "" + this.size : "''") + ", '" + this.labelName + "', true, true, true, '', '" + this.name + "') !!}                \n        ";
            case "date": return "\n            {!! $HTML::inputData(4, '" + this.name + "', '" + this.labelName + "', true, true, true, '', '" + this.name + "') !!}\n        ";
        }
    };
    RenderHtmlService.prototype.htmlBackup = function () {
        var _this = this;
        switch (this.inputType) {
            case "html": return "" + this.htmlData;
            case "legend": return "<legend>" + this.text + "</legend>";
            case "h1": return "<h1>" + this.text + "</h1>";
            case "h2": return "<h2>" + this.text + "</h2>";
            case "h3": return "<h3>" + this.text + "</h3>";
            case "h4": return "<h4>" + this.text + "</h4>";
            case "h5": return "<h5>" + this.text + "</h5>";
            case "h6": return "<h6>" + this.text + "</h6>";
            case "table": return "\n         <table class=\"table\">\n          " + this.fields.map(function (field, key) { return ("<tr>" + Object.keys(_this.fields[0]).map(function (f, k) { return "<td>" + field[f] + "</td>"; }).join('') + "</tr>"); }).join('') + "\n         </table>";
            case "image": return "<img src=\"" + this.imgSrc + "\" class=\"img-fluid\">";
            case "textarea": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"txt_" + this.name + "\">" + this.labelName + "</label>\n            <textarea class=\"form-control\" name=\"" + this.name + "\" id=\"txt_" + this.name + "\"  " + (this.nullable ? "" : "required") + "></textarea>\n        </div>\n        <!-- end " + this.name + " -->";
            case "select":
                return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <select class=\"form-control\" name=\"" + this.name + "\" id=\"i_" + this.name + "\"  " + (this.nullable ? "" : "required") + ">\n                <option value=\"\">Selecione</option>\n                " + this.elements.map(function (element) { return "<option value=\"" + element.value + "\">" + element.text + "</option>"; }).join('') + "\n            </select>\n        </div>\n        <!-- end " + this.name + " -->";
            case "checkbox":
                return "\n          <!-- start " + this.name + " -->\n          <div class=\"form-group\" id=\"div_" + this.name + "\">\n              <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n              " + this.elements.map(function (element) { return "<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n          </div>\n          <!-- end " + this.name + " -->";
            case "radio": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            " + this.elements.map(function (element) { return "<div class=\"radio\"><label><input type=\"radio\" name=\"" + _this.name + "\" value=\"" + element.value + "\"> " + element.text + "</label></div>"; }).join('') + "\n        </div>\n        <!-- end " + this.name + " -->";
            case "text": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"text\" class=\"form-control\" name=\"" + this.name + "\" id=\"i_" + this.name + "\" value=\"\"  " + (this.nullable ? "" : "required") + ">\n        </div>                \n        <!-- end " + this.name + " -->";
            case "number": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"number\" class=\"form-control\" name=\"" + this.name + "\" id=\"i_" + this.name + "\" value=\"\" " + (this.nullable ? "" : "required") + ">\n        </div>                    \n        <!-- end " + this.name + " -->";
            case "date": return "\n        <!-- start " + this.name + " -->\n        <div class=\"form-group\" id=\"div_" + this.name + "\">\n            <label for=\"i_" + this.name + "\">" + this.labelName + "</label>\n            <input type=\"date\" class=\"form-control\" name=\"" + this.name + "\" id=\"i_" + this.name + "\" value=\"\" " + (this.nullable ? "" : "required") + ">\n        </div>\n        <!-- end " + this.name + " -->";
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