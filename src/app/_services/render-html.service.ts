import { Injectable } from '@angular/core';
import { Html, Definition } from "./../_core/model";

export class BootstrapForm{
    definition: Definition;
    html: Html;

    constructor(d) { 
        this.html = new Html(d.html);
        this.definition = new Definition(d.definition);
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
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="txt_${this.definition.column_name}">${this.html.label}</label>`,
                `<textarea class="form-control" name="${this.definition.column_name}" id="txt_${this.definition.column_name}"  ${this.definition.nullable ? `` : `required`}></textarea>`,
            `</div>`],
            "select": 
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `<select class="form-control" name="${this.definition.column_name}" id="i_${this.definition.column_name}" ${this.definition.nullable ? `` : `required`}>`,
                    `<option value="">Selecione</option>`,
                    `${this.html.choices.map(element => `<option value="${element.value}">${element.text}</option>`).join('')}`,
                `</select>`,
            `</div>`],
            "checkbox":
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.definition.column_name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="radio"><label><input type="radio" name="${this.definition.column_name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "text": 
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `<input type="text" class="form-control" name="${this.definition.column_name}" id="i_${this.definition.column_name}" value=""  ${this.definition.nullable ? `` : `required`}>`,
            `</div>`],
            "number": 
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `<input type="number" class="form-control" name="${this.definition.column_name}" id="i_${this.definition.column_name}" value="" ${this.definition.nullable ? `` : `required`}>`,
            `</div>`],
            "date":
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `<input type="date" class="form-control" name="${this.definition.column_name}" id="i_${this.definition.column_name}" value="" ${this.definition.nullable ? `` : `required`}>`,
            `</div>`]
        }
        return typeof data[this.html.tag] !== 'undefined'? data[this.html.tag].join("\n") : '';
    }    
}

export class CustomForm{
    definition: Definition;
    html: Html;

    constructor(d) { 
        this.html = new Html(d.html);
        this.definition = new Definition(d.definition);
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
            [`{!! $HTML::textArea(${this.html.grid}, '${this.definition.column_name}', ${parseInt(this.definition.size) > 0? `${this.definition.size}` : `''`}, "${this.html.label}", ${this.definition.nullable? `true` : `false`}, true, true, '', '${this.definition.column_name}') !!}`],
            "select": 
            [`{!! $HTML::selectDominio(${this.html.grid}, '${this.definition.column_name}', '${this.html.label}', ${this.definition.nullable? `true` : `false`}, true, true, '', '${this.definition.column_name}' ) !!}`],
            "checkbox":
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.definition.column_name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.definition.column_name}">`,
                `<label for="i_${this.definition.column_name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="radio"><label><input type="radio" name="${this.definition.column_name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "text": 
            [`{!! $HTML::inputTexto(${this.html.grid}, '${this.definition.column_name}', ${parseInt(this.definition.size) > 0? `${this.definition.size}` : `''`}, '${this.html.label}', ${this.definition.nullable? `true` : `false`}, true, true, '', '${this.definition.column_name}') !!}`],
            "number": 
            [`{!! $HTML::inputNumero(${this.html.grid}, '${this.definition.size? (this.definition.size.indexOf('.') != -1? `decimal`: `inteiro`) : '' }', '${this.definition.column_name}', ${parseInt(this.definition.size) > 0? `${this.definition.size}` : `''`}, '${this.html.label}', ${this.definition.nullable? `true` : `false`}, true, true, '', '${this.definition.column_name}') !!}`],
            "date": 
            [`{!! $HTML::inputData(${this.html.grid}, '${this.definition.column_name}', '${this.html.label}', ${this.definition.nullable? `true` : `false`}, true, true, '', '${this.definition.column_name}') !!}`]
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
            code: this.bootstrapForm.get()
        }
    }
}
