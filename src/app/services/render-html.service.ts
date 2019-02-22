import { Injectable } from '@angular/core';
import { Html } from "./../shared/models/html.model";
import { Table } from "./../shared/models/table.model";

export class BootstrapForm{
    table: Table;
    html: Html;

    constructor(d) { 
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    }
    
    get() {
        var data = {
            "html": [`${this.html.data}`],
            "legend": [`<legend>${this.html.text}</legend>`],
            "h1": [`<h1>${this.html.text}</h1>`],
            "h2": [`<h2>${this.html.text}</h2>`],
            "h3": [`<h3>${this.html.text}</h3>`],
            "h4": [`<h4>${this.html.text}</h4>`],
            "h5": [`<h5>${this.html.text}</h5>`],
            "h6": [`<h6>${this.html.text}</h6>`],
            "table": 
            [`<table class="table">`,
                `${this.html.fields? this.html.fields.map((field, key) => (`<tr>${Object.keys(this.html.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('') : []}`,
            `</table>`],
            "image": [`<img src="${this.html.src}" class="img-fluid">`],
            "textarea": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="txt_${this.table.columnName}">${this.html.label}</label>`,
                `<textarea class="form-control" name="${this.table.columnName}" id="txt_${this.table.columnName}"  ${this.table.nullable ? `` : `required`}></textarea>`,
            `</div>`],
            "select": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `<select class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" ${this.table.nullable ? `` : `required`}>`,
                    `<option value="">Selecione</option>`,
                    `${this.html.elements.map(element => `<option value="${element.value}">${element.text}</option>`).join('')}`,
                `</select>`,
            `</div>`],
            "checkbox":
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `${this.html.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `${this.html.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "text": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `<input type="text" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value=""  ${this.table.nullable ? `` : `required`}>`,
            `</div>`],
            "number": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `<input type="number" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value="" ${this.table.nullable ? `` : `required`}>`,
            `</div>`],
            "date":
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `<input type="date" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value="" ${this.table.nullable ? `` : `required`}>`,
            `</div>`]
        }
        return typeof data[this.html.tag] !== 'undefined'? data[this.html.tag].join("\n") : '';
    }    
}

export class CustomForm{
    table: Table;
    html: Html;

    constructor(d) { 
        this.html = new Html(d.html);
        this.table = new Table(d.table);
    }
    
    get() {
        var data = {
            "html": [`${this.html.data}`],
            "legend": [`<legend>${this.html.text}</legend>`],
            "h1": [`<h1>${this.html.text}</h1>`],
            "h2": [`<h2>${this.html.text}</h2>`],
            "h3": [`<h3>${this.html.text}</h3>`],
            "h4": [`<h4>${this.html.text}</h4>`],
            "h5": [`<h5>${this.html.text}</h5>`],
            "h6": [`<h6>${this.html.text}</h6>`],
            "table": 
            [`<table class="table">`,
                `${this.html.fields? this.html.fields.map((field, key) => (`<tr>${Object.keys(this.html.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('') : []}`,
            `</table>`],
            "image": [`<img src="${this.html.src}" class="img-fluid">`],
            "textarea": 
            [`{!! $HTML::textArea(${this.html.grid}, '${this.table.columnName}', ${parseInt(this.table.size) > 0? `${this.table.size}` : `''`}, "${this.html.label}", ${this.table.nullable? `true` : `false`}, true, true, '', '${this.table.columnName}') !!}`],
            "select": 
            [`{!! $HTML::selectDominio(${this.html.grid}, '${this.table.columnName}', '${this.html.label}', ${this.table.nullable? `true` : `false`}, true, true, '', '${this.table.columnName}' ) !!}`],
            "checkbox":
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `${this.html.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.table.columnName}">`,
                `<label for="i_${this.table.columnName}">${this.html.label}</label>`,
                `${this.html.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "text": 
            [`{!! $HTML::inputTexto(${this.html.grid}, '${this.table.columnName}', ${parseInt(this.table.size) > 0? `${this.table.size}` : `''`}, '${this.html.label}', ${this.table.nullable? `true` : `false`}, true, true, '', '${this.table.columnName}') !!}`],
            "number": 
            [`{!! $HTML::inputNumero(${this.html.grid}, '${this.table.size? (this.table.size.indexOf('.') != -1? `decimal`: `inteiro`) : '' }', '${this.table.columnName}', ${parseInt(this.table.size) > 0? `${this.table.size}` : `''`}, '${this.html.label}', ${this.table.nullable? `true` : `false`}, true, true, '', '${this.table.columnName}') !!}`],
            "date": 
            [`{!! $HTML::inputData(${this.html.grid}, '${this.table.columnName}', '${this.html.label}', ${this.table.nullable? `true` : `false`}, true, true, '', '${this.table.columnName}') !!}`]
        }
        return typeof data[this.html.tag] !== 'undefined'? data[this.html.tag].join("\n") : '';
    }    
}


@Injectable({
    providedIn: 'root'
})
export class RenderHtmlService {
    fields?: any[];

    bootstrapForm: BootstrapForm;
    customForm: CustomForm;

    constructor() {}

    setParams(d) {
        this.bootstrapForm = new BootstrapForm(d);
        this.customForm = new CustomForm(d);
    }

    get() {
        return {
            html: this.bootstrapForm.get(),
            code: this.customForm.get()
        }
    }
}
