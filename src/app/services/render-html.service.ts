import { Injectable } from '@angular/core';
import { Html } from "./../shared/models/html.model";
import { Table } from "./../shared/models/table.model";

@Injectable({
    providedIn: 'root'
})
export class RenderHtmlService {

    name?: string;
    grid?: number;
    fields?: any[];

    table: Table;
    html: Html;

    constructor() { 
        this.html = new Html;
        this.table = new Table;
    }

    setParams(d) {
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
    }

    getTags() {
        return [{
            category: 'form'
        }];
    }

    get() {
        return {
            html: this.htmlBackup(),
            code: this.code()
        }
    }

    code2() {
        switch (this.html.tag) {
            case "html": return `${this.html.data}`;
            case "legend": return `<legend>${this.html.text}</legend>`;
            case "h1": return `<h1>${this.html.text}</h1>`;
            case "h2": return `<h2>${this.html.text}</h2>`;
            case "h3": return `<h3>${this.html.text}</h3>`;
            case "h4": return `<h4>${this.html.text}</h4>`;
            case "h5": return `<h5>${this.html.text}</h5>`;
            case "h6": return `<h6>${this.html.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.html.src}" class="img-fluid">`;
            case "textarea": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="txt_${this.table.columnName}">${this.html.label}</label>
            <textarea class="form-control" name="${this.table.columnName}" id="txt_${this.table.columnName}"  ${this.table.nullable ? `` : `required`}>{{ (old('${this.table.columnName}') != null) ? old('${this.table.columnName}') : '$mudarAqui->${this.table.columnName}' }}</textarea>
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "select":
                return `
        <!-- start ${this.table.columnName} -->
            {!! $HTML::selectDominio(4, '${this.table.columnName}', '${this.html.label}', true, true, true, '', '${this.table.columnName}' ) !!}
        <!-- end ${this.table.columnName} -->`;
            case "checkbox":
                return `
          <!-- start ${this.table.columnName} -->
          <div class="form-group" id="div_${this.table.columnName}">
              <label for="i_${this.table.columnName}">${this.html.label}</label>
              ${this.html.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.table.columnName} -->`;
            case "radio": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            ${this.html.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "text": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group {{ $errors->has('${this.table.columnName}') ? ' has-error' : '' }}" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="text" class="form-control inputEdicao" name="${this.table.columnName}" id="i_${this.table.columnName}" value="{{ (old('${this.table.columnName}') != null) ? old('${this.table.columnName}') : '$mudarAqui->${this.table.columnName}' }}" ${this.table.size > 0 ? `maxlength="${this.table.size}"` : `` }  >
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "number": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="text" class="form-control ${this.table.size > 0 ? `int${this.table.size}` : ``} inputEdicao" name="${this.table.columnName}" id="i_${this.table.columnName}"  value="{{ (old('${this.table.columnName}') != null) ? old('${this.table.columnName}') : '$mudarAqui->${this.table.columnName}' }}"  ${this.table.nullable ? `` : `required`} ${this.table.size > 0 ? `maxlength="${this.table.size}"` : ``}>
        </div>                    
        <!-- end ${this.table.columnName} -->`;
            case "date": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="text" class="form-control date inputEdicao" name="${this.table.columnName}" id="i_${this.table.columnName}"  value="{{ (old('${this.table.columnName}') != null) ? old('${this.table.columnName}') : '$mudarAqui->${this.table.columnName}' }}"  ${this.table.nullable ? `` : `required`}>
        </div>
        <!-- end ${this.table.columnName} -->`;
        }
    }
    
    code() {
        switch (this.html.tag) {
            case "html": return `${this.html.data}`;
            case "legend": return `<legend>${this.html.text}</legend>`;
            case "h1": return `<h1>${this.html.text}</h1>`;
            case "h2": return `<h2>${this.html.text}</h2>`;
            case "h3": return `<h3>${this.html.text}</h3>`;
            case "h4": return `<h4>${this.html.text}</h4>`;
            case "h5": return `<h5>${this.html.text}</h5>`;
            case "h6": return `<h6>${this.html.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.html.src}" class="img-fluid">`;
            case "textarea": return `
            {!! $HTML::textArea(${this.grid}, '${this.table.columnName}', ${this.table.size > 0? `${this.table.size}` : `''`}, "${this.html.label}", true, true, true, '', '${this.table.columnName}') !!}
            `;
            case "select":
                return `
            {!! $HTML::selectDominio(${this.grid}, '${this.table.columnName}', '${this.html.label}', true, true, true, '', '${this.table.columnName}' ) !!}
        `;
            case "checkbox":
                return `
          <!-- start ${this.table.columnName} -->
          <div class="form-group" id="div_${this.table.columnName}">
              <label for="i_${this.table.columnName}">${this.html.label}</label>
              ${this.html.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.table.columnName} -->`;
            case "radio": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            ${this.html.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "text": return `
            {!! $HTML::inputTexto(${this.grid}, '${this.table.columnName}', ${this.table.size > 0? `${this.table.size}` : `''`}, '${this.html.label}', true, true, true, '', '${this.table.columnName}') !!}
        `;
            case "number": return `
            {!! $HTML::inputNumero(${this.grid}, 'inteiro', '${this.table.columnName}', ${this.table.size > 0? `${this.table.size}` : `''`}, '${this.html.label}', true, true, true, '', '${this.table.columnName}') !!}                
        `;
            case "date": return `
            {!! $HTML::inputData(${this.grid}, '${this.table.columnName}', '${this.html.label}', true, true, true, '', '${this.table.columnName}') !!}
        `;
        }
    }

    htmlBackup() {
        switch (this.html.tag) {
            case "html": return `${this.html.data}`;
            case "legend": return `<legend>${this.html.text}</legend>`;
            case "h1": return `<h1>${this.html.text}</h1>`;
            case "h2": return `<h2>${this.html.text}</h2>`;
            case "h3": return `<h3>${this.html.text}</h3>`;
            case "h4": return `<h4>${this.html.text}</h4>`;
            case "h5": return `<h5>${this.html.text}</h5>`;
            case "h6": return `<h6>${this.html.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.html.src}" class="img-fluid">`;
            case "textarea": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="txt_${this.table.columnName}">${this.html.label}</label>
            <textarea class="form-control" name="${this.table.columnName}" id="txt_${this.table.columnName}"  ${this.table.nullable ? `` : `required`}></textarea>
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "select":
                return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <select class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}"  ${this.table.nullable ? `` : `required`}>
                <option value="">Selecione</option>
                ${this.html.elements.map(element => `<option value="${element.value}">${element.text}</option>`).join('')}
            </select>
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "checkbox":
                return `
          <!-- start ${this.table.columnName} -->
          <div class="form-group" id="div_${this.table.columnName}">
              <label for="i_${this.table.columnName}">${this.html.label}</label>
              ${this.html.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.table.columnName} -->`;
            case "radio": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            ${this.html.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.table.columnName}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.table.columnName} -->`;
            case "text": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="text" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value=""  ${this.table.nullable ? `` : `required`}>
        </div>                
        <!-- end ${this.table.columnName} -->`;
            case "number": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="number" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value="" ${this.table.nullable ? `` : `required`}>
        </div>                    
        <!-- end ${this.table.columnName} -->`;
            case "date": return `
        <!-- start ${this.table.columnName} -->
        <div class="form-group" id="div_${this.table.columnName}">
            <label for="i_${this.table.columnName}">${this.html.label}</label>
            <input type="date" class="form-control" name="${this.table.columnName}" id="i_${this.table.columnName}" value="" ${this.table.nullable ? `` : `required`}>
        </div>
        <!-- end ${this.table.columnName} -->`;
        }
    }
}
