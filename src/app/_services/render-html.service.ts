import { Injectable } from '@angular/core';
import { IHtml, IDefinition } from "./../_core/model";

export class BootstrapForm{
    definition: IDefinition;
    html: IHtml;
    choices?: {
        radio: Array<string>,
        checkbox: Array<string>,
        select: Array<string>
    }

    constructor(d) { 
        this.html = d.html;
        this.definition = d.definition || {};
    }
    
    get() {
        var nullable = '';
        if(typeof this.definition.options != 'undefined'){
            nullable = this.definition.options.nullable? `` : `required`
        }
   
        if(typeof this.html.choices != 'undefined'){
            this.choices = this.html.choices.reduce((acc, el) => {
                var input = {
                    radio: `<div class="radio"><label><input type="radio" name="${this.definition.name}" value="${el.value}"> ${el.text}</label></div>`,
                    checkbox: `<div class="checkbox"><label><input type="checkbox" name="${this.definition.name}" value="${el.value}"> ${el.text}</label></div>`,
                    select: `<option value="${el.value}">${el.text}</option>`
                };

                Object.keys(input).forEach((item) => {
                    if(typeof acc[item] != 'undefined'){
                        acc[item].push(input[item]);
                    } else {
                        acc[item] = [input[item]];
                    }
                }, {});

                return acc;
            }, {
                radio: [],
                checkbox: [],
                select: []
            });
        }          

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
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="txt_${this.definition.name}">${this.html.label}</label>`,
                `<textarea class="form-control" name="${this.definition.name}" id="txt_${this.definition.name}"  ${nullable ? `` : `required`}></textarea>`,
            `</div>`],
            "select": 
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `<select class="form-control" name="${this.definition.name}" id="i_${this.definition.name}" ${nullable ? `` : `required`}>`,
                    `<option value="">Selecione</option>`,
                    `${this.choices? this.choices.select.join(''): ''}`,
                `</select>`,
            `</div>`],
            "checkbox":
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `${this.choices? this.choices.checkbox.join(''): ''}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `${this.choices? this.choices.radio.join(''): ''}`,
            `</div>`],
            "text": 
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `<input type="text" class="form-control" name="${this.definition.name}" id="i_${this.definition.name}" value=""  ${nullable}>`,
            `</div>`],
            "number": 
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `<input type="number" class="form-control" name="${this.definition.name}" id="i_${this.definition.name}" value="" ${nullable}>`,
            `</div>`],
            "date":
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `<input type="date" class="form-control" name="${this.definition.name}" id="i_${this.definition.name}" value="" ${nullable}>`,
            `</div>`]
        }
        return typeof data[this.html.tag] !== 'undefined'? data[this.html.tag].join("\n") : '';
    }    
}

export class CustomForm{
    definition: IDefinition;
    html: IHtml;

    constructor(d) { 
        this.html = d.html;
        this.definition = d.definition;
    }
    
    get() {
        var nullable = '';
        var choices = '';
        if(this.definition.options){
            nullable = this.definition.options.nullable? `` : `required`
        }
      
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
            [`{!! $HTML::textArea(${this.html.grid}, '${this.definition.name}', ${parseInt(this.definition.type.length) > 0? `${this.definition.type.length}` : `''`}, "${this.html.label}", ${nullable? `true` : `false`}, true, true, '', '${this.definition.name}') !!}`],
            "select": 
            [`{!! $HTML::selectDominio(${this.html.grid}, '${this.definition.name}', '${this.html.label}', ${nullable? `true` : `false`}, true, true, '', '${this.definition.name}' ) !!}`],
            "checkbox":
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.definition.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.definition.name}">`,
                `<label for="i_${this.definition.name}">${this.html.label}</label>`,
                `${this.html.choices.map(element => `<div class="radio"><label><input type="radio" name="${this.definition.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}`,
            `</div>`],
            "text": 
            [`{!! $HTML::inputTexto(${this.html.grid}, '${this.definition.name}', ${parseInt(this.definition.type.length) > 0? `${this.definition.type.length}` : `''`}, '${this.html.label}', ${nullable? `true` : `false`}, true, true, '', '${this.definition.name}') !!}`],
            "number": 
            [`{!! $HTML::inputNumero(${this.html.grid}, '${this.definition.type.length? (this.definition.type.length.indexOf('.') != -1? `decimal`: `inteiro`) : '' }', '${this.definition.name}', ${parseInt(this.definition.type.length) > 0? `${this.definition.type.length}` : `''`}, '${this.html.label}', ${nullable? `true` : `false`}, true, true, '', '${this.definition.name}') !!}`],
            "date": 
            [`{!! $HTML::inputData(${this.html.grid}, '${this.definition.name}', '${this.html.label}', ${nullable? `true` : `false`}, true, true, '', '${this.definition.name}') !!}`]
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
