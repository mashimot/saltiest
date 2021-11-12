import { Injectable } from '@angular/core';
import { Content } from "./../_core/model";

export class BootstrapForm{
    content: Content;
    choices?: {
        radio: string[],
        checkbox: string[],
        select: string[]
    }

    constructor(content: Content) { 
        this.content = content || {};
    }
    
    get() {
        let nullable = '';
        if(typeof this.content.options != 'undefined'){
            nullable = this.content.options.nullable
                ? ``
                : `required`
        }
   
        if(typeof this.content.html.choices != 'undefined'){
            this.choices = this.content.html.choices.reduce((acc, el) => {
                var input = {
                    radio: [
                        `<div class="radio">`, 
                        `<label><input type="radio" name="${this.content.name}" value="${el.value}"> ${el.text}</label>`,
                        `</div>`
                    ].join("\n"),
                    checkbox: [
                        `<div class="checkbox">`,
                        `<label><input type="checkbox" name="${this.content.name}" value="${el.value}"> ${el.text}</label>`,
                        `</div>`
                    ].join("\n"),
                    select: `<option value="${el.value}">${el.text}</option>`
                };

                Object.keys(input).forEach((item) => {
                    if(typeof acc[item] != 'undefined'){
                        acc[item].push(input[item]);
                    }

                    acc[item] = [input[item]];
                }, {});

                return acc;
            }, {
                radio: [],
                checkbox: [],
                select: []
            });
        }          

        var data = {
            "html": [`${this.content.html.data}`],
            "legend": [`<legend>${this.content.html.text}</legend>`],
            "h1": [`<h1>${this.content.html.text}</h1>`],
            "h2": [`<h2>${this.content.html.text}</h2>`],
            "h3": [`<h3>${this.content.html.text}</h3>`],
            "h4": [`<h4>${this.content.html.text}</h4>`],
            "h5": [`<h5>${this.content.html.text}</h5>`],
            "h6": [`<h6>${this.content.html.text}</h6>`],
            "table": 
            [`<table class="table">`,
                //`${this.content.html.fields? this.content.html.fields.map((field, key) => (`<tr>${Object.keys(this.content.html.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('') : []}`,
            `</table>`],
            "image": [`<img src="${this.content.html.src}" class="img-fluid">`],
            "textarea": 
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="txt_${this.content.name}">${this.content.html.label}</label>`,
                `<textarea class="form-control" name="${this.content.name}" id="txt_${this.content.name}"  ${nullable ? `` : `required`}></textarea>`,
            `</div>`],
            "select": 
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `<select class="form-control" name="${this.content.name}" id="i_${this.content.name}" ${nullable ? `` : `required`}>`,
                    `<option value="">Selecione</option>`,
                    `${this.choices? this.choices.select.join(''): ''}`,
                `</select>`,
            `</div>`],
            "checkbox":
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `${this.choices? this.choices.checkbox.join(''): ''}`,
            `</div>`],
            "radio": 
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `${this.choices? this.choices.radio.join(''): ''}`,
            `</div>`],
            "text": 
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `<input type="text" class="form-control" name="${this.content.name}" id="i_${this.content.name}" value=""  ${nullable}>`,
            `</div>`],
            "number": 
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `<input type="number" class="form-control" name="${this.content.name}" id="i_${this.content.name}" value="" ${nullable}>`,
            `</div>`],
            "date":
            [`<div class="form-group" id="div_${this.content.name}">`,
                `<label for="i_${this.content.name}">${this.content.html.label}</label>`,
                `<input type="date" class="form-control" name="${this.content.name}" id="i_${this.content.name}" value="" ${nullable}>`,
            `</div>`]
        }

        return typeof data[this.content.html.tag] !== 'undefined'
            ? data[this.content.html.tag].join("\n")
            : '';
    }    
}

@Injectable({
    providedIn: 'root'
})
export class RenderHtmlService {
    bootstrapForm: BootstrapForm;
    //customForm: CustomForm;

    constructor() {}

    setParams(content: Content) {
        this.bootstrapForm = new BootstrapForm(content);
        //this.customForm = new CustomForm(content);
    }

    get() {
        return {
            html: this.bootstrapForm.get(),
            code: this.bootstrapForm.get()
        }
    }
}
