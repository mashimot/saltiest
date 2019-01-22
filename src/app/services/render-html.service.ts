import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RenderHtmlService {

    name?: string;
    nullable?: boolean;
    labelName: string;
    grid?: number;
    size?: number;
    inputType: string;
    fields?: any[];
    htmlData?: string;
    imgSrc?: string;
    headingType?: string;
    text?: string;
    elements?: any[];

    constructor() { }

    setParams(d) {
        if (d) {
            if (d.table) {
                this.name = typeof d.table.columnName === 'undefined' ? '' : d.table.columnName;
                this.nullable = typeof d.table.nullable === 'undefined' ? '' : d.table.nullable;
                this.size = typeof d.table.size === 'undefined' ? '' : d.table.size;
            }
            if (d.html) {
                this.grid = typeof d.html.grid === 'undefined' ? '' : d.html.grid;
                this.labelName = typeof d.html.label === 'undefined' ? '' : d.html.label;
                this.htmlData = typeof d.html.data === 'undefined' ? '' : d.html.data;
                this.imgSrc = typeof d.html.src === 'undefined' ? '' : d.html.src;
                this.inputType = typeof d.html.tag === 'undefined' ? '' : d.html.tag;
                this.text = typeof d.html.text === 'undefined' ? '' : d.html.text;
                this.fields = typeof d.html.fields === 'undefined' ? [] : d.html.fields;
                this.elements = typeof d.html.elements === 'undefined' ? [] : d.html.elements;
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
            code: this.htmlBackup()
        }
    }

    html() {
        switch (this.inputType) {
            case "html": return `${this.htmlData}`;
            case "legend": return `<legend>${this.text}</legend>`;
            case "h1": return `<h1>${this.text}</h1>`;
            case "h2": return `<h2>${this.text}</h2>`;
            case "h3": return `<h3>${this.text}</h3>`;
            case "h4": return `<h4>${this.text}</h4>`;
            case "h5": return `<h5>${this.text}</h5>`;
            case "h6": return `<h6>${this.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.imgSrc}" class="img-fluid">`;
            case "textarea": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="txt_${this.name}">${this.labelName}</label>
            <textarea class="form-control" name="${this.name}" id="txt_${this.name}"  ${this.nullable ? `` : `required`}>{{ (old('${this.name}') != null) ? old('${this.name}') : '$mudarAqui->${this.name}' }}</textarea>
        </div>
        <!-- end ${this.name} -->`;
            case "select":
                return `
        <!-- start ${this.name} -->
            {!! $HTML::selectDominio(4, '${this.name}', '${this.labelName}', true, true, true, '', '${this.name}' ) !!}
        <!-- end ${this.name} -->`;
            case "checkbox":
                return `
          <!-- start ${this.name} -->
          <div class="form-group" id="div_${this.name}">
              <label for="i_${this.name}">${this.labelName}</label>
              ${this.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.name} -->`;
            case "radio": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            ${this.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.name} -->`;
            case "text": return `
        <!-- start ${this.name} -->
        <div class="form-group {{ $errors->has('${this.name}') ? ' has-error' : '' }}" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="text" class="form-control inputEdicao" name="${this.name}" id="i_${this.name}" value="{{ (old('${this.name}') != null) ? old('${this.name}') : '$mudarAqui->${this.name}' }}" ${this.size > 0 ? `maxlength="${this.size}"` : `` }  >
        </div>
        <!-- end ${this.name} -->`;
            case "number": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="text" class="form-control ${this.size > 0 ? `int${this.size}` : ``} inputEdicao" name="${this.name}" id="i_${this.name}"  value="{{ (old('${this.name}') != null) ? old('${this.name}') : '$mudarAqui->${this.name}' }}"  ${this.nullable ? `` : `required`} ${this.size > 0 ? `maxlength="${this.size}"` : ``}>
        </div>                    
        <!-- end ${this.name} -->`;
            case "date": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="text" class="form-control date inputEdicao" name="${this.name}" id="i_${this.name}"  value="{{ (old('${this.name}') != null) ? old('${this.name}') : '$mudarAqui->${this.name}' }}"  ${this.nullable ? `` : `required`}>
        </div>
        <!-- end ${this.name} -->`;
        }
    }
    
    code() {
        switch (this.inputType) {
            case "html": return `${this.htmlData}`;
            case "legend": return `<legend>${this.text}</legend>`;
            case "h1": return `<h1>${this.text}</h1>`;
            case "h2": return `<h2>${this.text}</h2>`;
            case "h3": return `<h3>${this.text}</h3>`;
            case "h4": return `<h4>${this.text}</h4>`;
            case "h5": return `<h5>${this.text}</h5>`;
            case "h6": return `<h6>${this.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.imgSrc}" class="img-fluid">`;
            case "textarea": return `
            {!! $HTML::textArea(${this.grid}, '${this.name}', ${this.size > 0? `${this.size}` : `''`}, "${this.labelName}", true, true, true, '', '${this.name}') !!}
            `;
            case "select":
                return `
            {!! $HTML::selectDominio(${this.grid}, '${this.name}', '${this.labelName}', true, true, true, '', '${this.name}' ) !!}
        `;
            case "checkbox":
                return `
          <!-- start ${this.name} -->
          <div class="form-group" id="div_${this.name}">
              <label for="i_${this.name}">${this.labelName}</label>
              ${this.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.name} -->`;
            case "radio": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            ${this.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.name} -->`;
            case "text": return `
            {!! $HTML::inputTexto(${this.grid}, '${this.name}', ${this.size > 0? `${this.size}` : `''`}, '${this.labelName}', true, true, true, '', '${this.name}') !!}
        `;
            case "number": return `
            {!! $HTML::inputNumero(${this.grid}, 'inteiro', '${this.name}', ${this.size > 0? `${this.size}` : `''`}, '${this.labelName}', true, true, true, '', '${this.name}') !!}                
        `;
            case "date": return `
            {!! $HTML::inputData(${this.grid}, '${this.name}', '${this.labelName}', true, true, true, '', '${this.name}') !!}
        `;
        }
    }

    htmlBackup() {
        switch (this.inputType) {
            case "html": return `${this.htmlData}`;
            case "legend": return `<legend>${this.text}</legend>`;
            case "h1": return `<h1>${this.text}</h1>`;
            case "h2": return `<h2>${this.text}</h2>`;
            case "h3": return `<h3>${this.text}</h3>`;
            case "h4": return `<h4>${this.text}</h4>`;
            case "h5": return `<h5>${this.text}</h5>`;
            case "h6": return `<h6>${this.text}</h6>`;
            case "table": return `
         <table class="table">
          ${this.fields.map((field, key) => (`<tr>${Object.keys(this.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('')}
         </table>`;
            case "image": return `<img src="${this.imgSrc}" class="img-fluid">`;
            case "textarea": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="txt_${this.name}">${this.labelName}</label>
            <textarea class="form-control" name="${this.name}" id="txt_${this.name}"  ${this.nullable ? `` : `required`}></textarea>
        </div>
        <!-- end ${this.name} -->`;
            case "select":
                return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <select class="form-control" name="${this.name}" id="i_${this.name}"  ${this.nullable ? `` : `required`}>
                <option value="">Selecione</option>
                ${this.elements.map(element => `<option value="${element.value}">${element.text}</option>`).join('')}
            </select>
        </div>
        <!-- end ${this.name} -->`;
            case "checkbox":
                return `
          <!-- start ${this.name} -->
          <div class="form-group" id="div_${this.name}">
              <label for="i_${this.name}">${this.labelName}</label>
              ${this.elements.map(element => `<div class="checkbox"><label><input type="checkbox" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
          </div>
          <!-- end ${this.name} -->`;
            case "radio": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            ${this.elements.map(element => `<div class="radio"><label><input type="radio" name="${this.name}" value="${element.value}"> ${element.text}</label></div>`).join('')}
        </div>
        <!-- end ${this.name} -->`;
            case "text": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="text" class="form-control" name="${this.name}" id="i_${this.name}" value=""  ${this.nullable ? `` : `required`}>
        </div>                
        <!-- end ${this.name} -->`;
            case "number": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="number" class="form-control" name="${this.name}" id="i_${this.name}" value="" ${this.nullable ? `` : `required`}>
        </div>                    
        <!-- end ${this.name} -->`;
            case "date": return `
        <!-- start ${this.name} -->
        <div class="form-group" id="div_${this.name}">
            <label for="i_${this.name}">${this.labelName}</label>
            <input type="date" class="form-control" name="${this.name}" id="i_${this.name}" value="" ${this.nullable ? `` : `required`}>
        </div>
        <!-- end ${this.name} -->`;
        }
    }
}
