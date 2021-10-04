import { Injectable } from '@angular/core';
import { IHtml, IDefinition } from "./../_core/model";
import { Page } from "./../_core/model/page.model";
import { Content } from "./../_core/model/content.model";

@Injectable({
    providedIn: 'root'
})
export class VueHtmlTemplate{
    definition: IDefinition;
    html: IHtml;
    choices?: {
        radio: Array<string>,
        checkbox: Array<string>,
        select: Array<string>
    }

    public get(content: Content) {
        this.html = content.html;
        this.definition = content.definition;
        var nullable = '';
        if(this.definition.options){
            nullable = this.definition.options.nullable? `` : `required`
        }
   
        if(typeof this.html.choices != 'undefined'){
            this.choices = this.html.choices.reduce((acc, el) => {
                var input = {
                    radio: `<div class="radio"><label><input type="radio" v-model="form.${this.definition.name}" name="${this.definition.name}" :value="${el.value}"> ${el.text}</label></div>`,
                    checkbox: `<div class="checkbox"><label><input type="checkbox" v-model="form.${this.definition.name}" name="${this.definition.name}" :value="${el.value}"> ${el.text}</label></div>`,
                    select: `<option :value="${el.value}">${el.text}</option>`
                };

                Object.keys(input).forEach((item) => {
                    if(typeof acc[item] == 'undefined'){
                        acc[item] = [input[item]];
                    }
                    
                    acc[item].push(input[item]);
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
            "table": [
            `<table class="table">`,
                `${this.html.fields? this.html.fields.map((field, key) => (`<tr>${Object.keys(this.html.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('') : []}`,
            `</table>`  
            ],
            "image": [`<img src="${this.html.src}" class="img-fluid">`],
            "textarea": 
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `<textarea
                    v-model="form.${this.definition.name}"
                    name="${this.definition.name}"
                    id="${this.definition.name}"
                    class="form-control"
                    ${nullable ? `` : `required`}
                ></textarea>`,
            `</div>`],
            "select": 
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `<select
                    v-model="form.${this.definition.name}"
                    name="${this.definition.name}"
                    id="${this.definition.name}"
                    class="form-control"
                    ${nullable ? `` : `required`}
                >`,
                    `<option value="">Selecione</option>`,
                    `${this.choices? this.choices.select.join(''): ''}`,
                `</select>`,
            `</div>`],
            "checkbox":
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `${this.choices? this.choices.checkbox.join(''): ''}`,
            `</div>`],
            "radio": 
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `${this.choices? this.choices.radio.join(''): ''}`,
            `</div>`],
            "text": 
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `<input type="text" v-model="form.${this.definition.name}" class="form-control" name="${this.definition.name}" id="${this.definition.name}"  ${nullable}>`,
            `</div>`],
            "number": 
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `<input type="number" v-model="form.${this.definition.name}" class="form-control" name="${this.definition.name}" id="${this.definition.name}" ${nullable}>`,
            `</div>`],
            "date":
            [`<div class="form-group">`,
                `<label for="${this.definition.name}">${this.html.label}</label>`,
                `<input type="date" v-model="form.${this.definition.name}" class="form-control" name="${this.definition.name}" id="${this.definition.name}" ${nullable}>`,
            `</div>`]
        }

        return typeof data[this.html.tag] !== 'undefined'
            ? data[this.html.tag].join("\n")
            : '';
    }

    public getTemplate(pages: Array<Page>) :string{
        var htmlPages = [];
        var t = "\n\t";
        var inputs = [];

        pages.forEach((page, pageNumber) => {
            htmlPages.push(`\n<section class="page-${pageNumber + 1}">`);
                var tabNum = 1;
                t = this.tabSpace(tabNum);
                page.rows.forEach(row => {
                    let grid = row.grid.split(' ');
                    htmlPages.push(`${t}<div class="row">`);
                    tabNum++;
                    t = this.tabSpace(tabNum);
                        row.columns.forEach((column, j) => {
                            htmlPages.push(`${t}<div class="col-md-${grid[j]}">`);
                            column.contents.forEach(content => {
                                if (content.html.category === 'form') {
                                    inputs.push(content);
                                }
                                content.html['grid'] = grid[j];
                                htmlPages.push(t + this.get(content));
                            });
                            htmlPages.push(`${t}</div>`);
                        });
                    tabNum--;
                    t = this.tabSpace(tabNum);
                    htmlPages.push(`${t}</div>`);
                });
            htmlPages.push(`</section>`);
        });

        return `
        <template>
            <div>
                ${htmlPages.join('\n')}
            </div>
        </template>
        <script>
            export default {
                data() {
                    return {
                        loading: false,
                        form: {
                            ${
                                inputs.map(item => {
                                    return `${item.definition.name}: ''`
                                })
                            }
                        }
                    }
                },
                methods: {
                    
                }
            }
        </script>
        `;
    }

    private tabSpace(tabNum : number) : string{
        var tab = "\t";
        var newTab = "";
        for(var i = 0; i < tabNum; i++){
            newTab += tab;
        }
        return newTab;
    }
}