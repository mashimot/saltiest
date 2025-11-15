import { Injectable } from "@angular/core";
import { Content } from "./../_core/model";
import { Page } from "./../_core/model/page.model";

@Injectable({
  providedIn: "root",
})
export class BootstrapHtmlTemplate {
  content: Content;
  choices?: {
    radio: Array<string>;
    checkbox: Array<string>;
    select: Array<string>;
  };

  public get(content: Content) {
    this.content = content || {};
    let nullable = "";
    if (typeof this.content.options != "undefined") {
      nullable = this.content.options.nullable ? `` : `required`;
    }

    if (typeof this.content.html.choices != "undefined") {
      this.choices = this.content.html.choices.reduce(
        (acc, el) => {
          var input = {
            radio: `<div class="radio"><label><input type="radio" name="${this.content.name}" value="${el.value}"> ${el.text}</label></div>`,
            checkbox: `<div class="checkbox"><label><input type="checkbox" name="${this.content.name}" value="${el.value}"> ${el.text}</label></div>`,
            select: `<option value="${el.value}">${el.text}</option>`,
          };

          Object.keys(input).forEach((item) => {
            if (typeof acc[item] == "undefined") {
              acc[item] = [input[item]];
            }

            acc[item].push(input[item]);
          });

          return acc;
        },
        {
          radio: [],
          checkbox: [],
          select: [],
        },
      );
    }

    var data = {
      html: [`${this.content.html.data}`],
      legend: [`<legend>${this.content.html.text}</legend>`],
      h1: [`<h1>${this.content.html.text}</h1>`],
      h2: [`<h2>${this.content.html.text}</h2>`],
      h3: [`<h3>${this.content.html.text}</h3>`],
      h4: [`<h4>${this.content.html.text}</h4>`],
      h5: [`<h5>${this.content.html.text}</h5>`],
      h6: [`<h6>${this.content.html.text}</h6>`],
      table: [
        `<table class="table">`,
        //`${this.content.html.fields? this.content.html.fields.map((field, key) => (`<tr>${Object.keys(this.content.html.fields[0]).map((f, k) => `<td>${field[f]}</td>`).join('')}</tr>`)).join('') : []}`,
        `</table>`,
      ],
      image: [`<img src="${this.content.html.src}" class="img-fluid">`],
      textarea: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `<textarea class="form-control" name="${this.content.name}" id="${this.content.name}"  ${nullable ? `` : `required`}></textarea>`,
        `</div>`,
      ],
      select: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `<select class="form-control" name="${this.content.name}" id="${this.content.name}" ${nullable ? `` : `required`}>`,
        `<option value="">Selecione</option>`,
        `${this.choices ? this.choices.select.join("") : ""}`,
        `</select>`,
        `</div>`,
      ],
      checkbox: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `${this.choices ? this.choices.checkbox.join("") : ""}`,
        `</div>`,
      ],
      radio: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `${this.choices ? this.choices.radio.join("") : ""}`,
        `</div>`,
      ],
      text: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `<input type="text" class="form-control" name="${this.content.name}" id="${this.content.name}" value=""  ${nullable}>`,
        `</div>`,
      ],
      number: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `<input type="number" class="form-control" name="${this.content.name}" id="${this.content.name}" value="" ${nullable}>`,
        `</div>`,
      ],
      date: [
        `<div class="form-group">`,
        `<label for="${this.content.name}">${this.content.html.label}</label>`,
        `<input type="date" class="form-control" name="${this.content.name}" id="${this.content.name}" value="" ${nullable}>`,
        `</div>`,
      ],
    };

    return typeof data[this.content.html.tag] !== "undefined"
      ? data[this.content.html.tag].join("\n")
      : "";
  }

  public getTemplate(pages: Page[]): string {
    var htmlPages = [];
    var addTabSpace = "\n\t";
    var inputs = [];

    pages.forEach((page: Page, pageNumber) => {
      htmlPages.push(`\n<section class="page-${pageNumber + 1}">`);
      var tabNum = 1;
      addTabSpace = this.tabSpace(tabNum);
      page.rows.forEach((row) => {
        let grid = row.grid.split(" ");
        htmlPages.push(`${addTabSpace}<div class="row">`);
        tabNum++;
        addTabSpace = this.tabSpace(tabNum);
        row.columns.forEach((column, j) => {
          htmlPages.push(`${addTabSpace}<div class="col-md-${grid[j]}">`);
          column.contents.forEach((content) => {
            if (content.html.category === "form") {
              inputs.push(content);
            }
            content.html["grid"] = grid[j];
            htmlPages.push(addTabSpace + this.get(content));
          });
          htmlPages.push(`${addTabSpace}</div>`);
        });
        tabNum--;
        addTabSpace = this.tabSpace(tabNum);
        htmlPages.push(`${addTabSpace}</div>`);
      });
      htmlPages.push(`</section>`);
    });

    return htmlPages.join("\n");
  }

  private tabSpace(tabNum: number): string {
    const tab = "\t";
    var newTab = "";

    for (let i = 0; i < tabNum; i++) {
      newTab += tab;
    }

    return newTab;
  }
}
