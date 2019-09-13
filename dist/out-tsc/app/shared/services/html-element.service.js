var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
var HtmlElementService = /** @class */ (function () {
    function HtmlElementService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api/tools';
        this.API_URL2 = 'http://127.0.0.1:8000/api/contents_choices';
        this.category = 'form';
    }
    HtmlElementService.prototype.getTags = function () {
        var _this = this;
        var tags = this.getStatic().reduce(function (previous, current) {
            if (current.html.category) {
                if (current.html.category === _this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    };
    HtmlElementService.prototype.queryParams = function (query) {
        var httpOptions = {
            params: __assign({}, query)
        };
        return of({ "success": true, "message": "any", "tools": { "form": [{ "html": { "content_html_id": 31, "content_html_tag_id": 3, "category_id": 1, "tag": "number", "category": "form", "label": "Type your Text", "text": null, "src": null } }, { "html": { "content_html_id": 32, "content_html_tag_id": 4, "category_id": 1, "tag": "date", "category": "form", "label": "Type your Text", "text": null, "src": null } }, { "html": { "content_html_id": 33, "content_html_tag_id": 5, "category_id": 1, "tag": "text", "category": "form", "label": "Type your Text", "text": null, "src": null } }], "html": [{ "html": { "content_html_id": 34, "content_html_tag_id": 9, "category_id": 2, "tag": "html", "category": "html", "label": null, "text": null, "src": null } }, { "html": { "content_html_id": 35, "content_html_tag_id": 10, "category_id": 2, "tag": "image", "category": "html", "label": null, "text": null, "src": "http:\/\/i.imgur.com\/AVqsATi.gif" } }], "headings": [{ "html": { "content_html_id": 36, "content_html_tag_id": 11, "category_id": 3, "tag": "h1", "category": "headings", "label": null, "text": "<h1>Title<\/h1>", "src": null } }, { "html": { "content_html_id": 37, "content_html_tag_id": 12, "category_id": 3, "tag": "h2", "category": "headings", "label": null, "text": "<h2>Title<\/h2>", "src": null } }, { "html": { "content_html_id": 38, "content_html_tag_id": 13, "category_id": 3, "tag": "h3", "category": "headings", "label": null, "text": "<h3>Title<\/h3>", "src": null } }, { "html": { "content_html_id": 39, "content_html_tag_id": 14, "category_id": 3, "tag": "h4", "category": "headings", "label": null, "text": "<h4>Title<\/h4>", "src": null } }, { "html": { "content_html_id": 40, "content_html_tag_id": 15, "category_id": 3, "tag": "h5", "category": "headings", "label": null, "text": "<h5>Title<\/h5>", "src": null } }, { "html": { "content_html_id": 41, "content_html_tag_id": 16, "category_id": 3, "tag": "h6", "category": "headings", "label": null, "text": "<h6>Title<\/h6>", "src": null } }], "formatting": [{ "html": { "content_html_id": 42, "content_html_tag_id": 17, "category_id": 4, "tag": "legend", "category": "formatting", "label": null, "text": "<legend>Legend<\/legend>", "src": null } }] } });
        //return '{"success":true,"message":"any","tools":{"form":[{"html":{"content_html_id":31,"content_html_tag_id":3,"category_id":1,"tag":"number","category":"form","label":"Type your Text","text":null,"src":null}},{"html":{"content_html_id":32,"content_html_tag_id":4,"category_id":1,"tag":"date","category":"form","label":"Type your Text","text":null,"src":null}},{"html":{"content_html_id":33,"content_html_tag_id":5,"category_id":1,"tag":"text","category":"form","label":"Type your Text","text":null,"src":null}}],"html":[{"html":{"content_html_id":34,"content_html_tag_id":9,"category_id":2,"tag":"html","category":"html","label":null,"text":null,"src":null}},{"html":{"content_html_id":35,"content_html_tag_id":10,"category_id":2,"tag":"image","category":"html","label":null,"text":null,"src":"http:\/\/i.imgur.com\/AVqsATi.gif"}}],"headings":[{"html":{"content_html_id":36,"content_html_tag_id":11,"category_id":3,"tag":"h1","category":"headings","label":null,"text":"<h1>Title<\/h1>","src":null}},{"html":{"content_html_id":37,"content_html_tag_id":12,"category_id":3,"tag":"h2","category":"headings","label":null,"text":"<h2>Title<\/h2>","src":null}},{"html":{"content_html_id":38,"content_html_tag_id":13,"category_id":3,"tag":"h3","category":"headings","label":null,"text":"<h3>Title<\/h3>","src":null}},{"html":{"content_html_id":39,"content_html_tag_id":14,"category_id":3,"tag":"h4","category":"headings","label":null,"text":"<h4>Title<\/h4>","src":null}},{"html":{"content_html_id":40,"content_html_tag_id":15,"category_id":3,"tag":"h5","category":"headings","label":null,"text":"<h5>Title<\/h5>","src":null}},{"html":{"content_html_id":41,"content_html_tag_id":16,"category_id":3,"tag":"h6","category":"headings","label":null,"text":"<h6>Title<\/h6>","src":null}}],"formatting":[{"html":{"content_html_id":42,"content_html_tag_id":17,"category_id":4,"tag":"legend","category":"formatting","label":null,"text":"<legend>Legend<\/legend>","src":null}}]}}';
        return this.http.get(this.API_URL2, httpOptions);
    };
    HtmlElementService.prototype.getTools = function () {
        return this.http.get("" + this.API_URL);
    };
    HtmlElementService.prototype.getContentChoices = function () {
        return this.http.get("" + this.API_URL2);
    };
    HtmlElementService.prototype.getStaticTools = function () {
        //return this.http.get<RegisterResponse>(`${this.API_URL}`);
        return [{ "html": { "content_html_id": 3, "content_html_tag_id": 3, "category_id": 1, "tag": "number", "category": "form", "label": "Number", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 4, "content_html_tag_id": 4, "category_id": 1, "tag": "date", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 5, "content_html_tag_id": 5, "category_id": 1, "tag": "text", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 6, "content_html_tag_id": 6, "category_id": 1, "tag": "textarea", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 7, "content_html_tag_id": 7, "category_id": 1, "tag": "file", "category": "form", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 9, "content_html_tag_id": 9, "category_id": 2, "tag": "html", "category": "html", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 10, "content_html_tag_id": 10, "category_id": 2, "tag": "image", "category": "html", "label": "Type your Text", "text": "", "src": null, "choices": [] } }, { "html": { "content_html_id": 11, "content_html_tag_id": 11, "category_id": 3, "tag": "h1", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 12, "content_html_tag_id": 12, "category_id": 3, "tag": "h2", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 13, "content_html_tag_id": 13, "category_id": 3, "tag": "h3", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 14, "content_html_tag_id": 14, "category_id": 3, "tag": "h4", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 15, "content_html_tag_id": 15, "category_id": 3, "tag": "h5", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 16, "content_html_tag_id": 16, "category_id": 3, "tag": "h6", "category": "headings", "label": "", "text": "Type your Text", "src": null, "choices": [] } }, { "html": { "content_html_id": 17, "content_html_tag_id": 17, "category_id": 4, "tag": "legend", "category": "formatting", "label": "", "text": "Type your Text", "src": null, "choices": [] } }];
    };
    HtmlElementService.prototype.getStaticOptionChoices = function () {
        return [{ "html": { "content_choice_id": 91, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "Discordo Totalmente|NA (Não Aplicável)|Não Concordo|Nem Discordo|Concordo|Concordo Totalmente", "label": "Type your Text", "choices": [{ "id": 190, "content_choice_id": 91, "text": "Discordo Totalmente", "value": "1", "position": 0, "created_at": "2019-04-25 14:18:07", "updated_at": "2019-05-02 19:43:28" }, { "id": 195, "content_choice_id": 91, "text": "NA (Não Aplicável)", "value": "0", "position": 1, "created_at": "2019-04-25 14:19:08", "updated_at": "2019-05-06 15:34:57" }, { "id": 191, "content_choice_id": 91, "text": "Não Concordo", "value": "2", "position": 2, "created_at": "2019-04-25 14:18:23", "updated_at": "2019-05-06 15:34:57" }, { "id": 192, "content_choice_id": 91, "text": "Nem Discordo", "value": "3", "position": 3, "created_at": "2019-04-25 14:18:41", "updated_at": "2019-05-06 15:34:57" }, { "id": 193, "content_choice_id": 91, "text": "Concordo", "value": "4", "position": 4, "created_at": "2019-04-25 14:18:49", "updated_at": "2019-05-06 15:34:57" }, { "id": 194, "content_choice_id": 91, "text": "Concordo Totalmente", "value": "5", "position": 5, "created_at": "2019-04-25 14:18:58", "updated_at": "2019-05-06 15:34:57" }] } }, { "html": { "content_choice_id": 92, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "56645645654|papagaio|rterter", "label": "Type your Text", "choices": [{ "id": 196, "content_choice_id": 92, "text": "56645645654", "value": "657657567565", "position": 0, "created_at": "2019-04-25 19:54:51", "updated_at": "2019-05-02 19:23:31" }, { "id": 201, "content_choice_id": 92, "text": "papagaio", "value": "papagaio", "position": 1, "created_at": "2019-04-30 11:49:05", "updated_at": "2019-05-02 19:23:31" }, { "id": 197, "content_choice_id": 92, "text": "rterter", "value": "tertertert", "position": 2, "created_at": "2019-04-25 19:55:13", "updated_at": "2019-05-02 19:23:14" }] } }, { "html": { "content_choice_id": 93, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "7687768|hadoken|123221", "label": "Type your Text", "choices": [{ "id": 225, "content_choice_id": 93, "text": "7687768", "value": "78768768768768768678678678", "position": null, "created_at": "2019-05-02 20:25:35", "updated_at": "2019-05-02 20:25:35" }, { "id": 224, "content_choice_id": 93, "text": "hadoken", "value": "123213213123123", "position": 0, "created_at": "2019-05-02 20:25:25", "updated_at": "2019-05-02 20:25:42" }, { "id": 223, "content_choice_id": 93, "text": "123221", "value": "123123123123123", "position": 1, "created_at": "2019-05-02 20:25:21", "updated_at": "2019-05-02 20:25:29" }] } }, { "html": { "content_choice_id": 94, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "teste|Hadouken|Shoryuken", "label": "Type your Text", "choices": [{ "id": 202, "content_choice_id": 94, "text": "teste", "value": "teste", "position": null, "created_at": "2019-05-02 19:22:02", "updated_at": "2019-05-02 19:22:02" }, { "id": 203, "content_choice_id": 94, "text": "Hadouken", "value": "Hadouken", "position": null, "created_at": "2019-05-02 19:22:19", "updated_at": "2019-05-02 19:22:19" }, { "id": 204, "content_choice_id": 94, "text": "Shoryuken", "value": "Shoryuken", "position": null, "created_at": "2019-05-02 19:22:31", "updated_at": "2019-05-02 19:22:31" }] } }, { "html": { "content_choice_id": 95, "content_html_tag_id": 2, "category": "form", "tag": "radio", "group": "Les Claypool|Flea|Geddy Lee|Chris Squire", "label": "Type your Text", "choices": [{ "id": 205, "content_choice_id": 95, "text": "Les Claypool", "value": "Les Claypool", "position": null, "created_at": "2019-05-02 19:52:15", "updated_at": "2019-05-02 19:52:15" }, { "id": 206, "content_choice_id": 95, "text": "Flea", "value": "Flea", "position": null, "created_at": "2019-05-02 19:52:21", "updated_at": "2019-05-02 19:52:21" }, { "id": 207, "content_choice_id": 95, "text": "Geddy Lee", "value": "Geddy Lee", "position": null, "created_at": "2019-05-02 19:52:30", "updated_at": "2019-05-02 19:52:30" }, { "id": 208, "content_choice_id": 95, "text": "Chris Squire", "value": "Chris Squire", "position": null, "created_at": "2019-05-02 19:52:41", "updated_at": "2019-05-02 19:52:41" }] } }];
    };
    HtmlElementService.prototype.getStaticTags = function () {
        var _this = this;
        var tags = this.getStatic().reduce(function (previous, current) {
            if (current.html.category) {
                if (current.html.category === _this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    };
    HtmlElementService.prototype.getStatic = function () {
        return [{ "html": { "content_html_tag_id": 1, "tag": "select", "category": "form", "content_choice_id": 1, "label": "Type your Text23", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 2, "tag": "radio", "category": "form", "content_choice_id": 1, "label": "Type your Text", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 3, "tag": "number", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 4, "tag": "date", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 5, "tag": "text", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 6, "tag": "textarea", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 7, "tag": "file", "category": "form", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 8, "tag": "checkbox", "category": "form", "content_choice_id": 1, "label": "Type your Text", "text": "", "elements": [{ "id": 1, "text": "Radio 1", "value": "Radio 1" }, { "id": 2, "text": "Radio 2", "value": "Radio 2" }, { "id": 3, "text": "Radio 3", "value": "Radio 3" }] } }, { "html": { "content_html_tag_id": 9, "tag": "html", "category": "html", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 10, "tag": "image", "category": "html", "content_choice_id": null, "label": "Type your Text", "text": "", "elements": [] } }, { "html": { "content_html_tag_id": 11, "tag": "h1", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 12, "tag": "h2", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 13, "tag": "h3", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 14, "tag": "h4", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 15, "tag": "h5", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 16, "tag": "h6", "category": "headings", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }, { "html": { "content_html_tag_id": 17, "tag": "legend", "category": "formatting", "content_choice_id": null, "label": "", "text": "Type your Text", "elements": [] } }];
    };
    HtmlElementService.prototype.get2 = function () {
        return [{
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'select',
                    elements: [{
                            value: 'Select 1',
                            text: 'Select 1'
                        }, {
                            value: 'Select 2',
                            text: 'Select 2'
                        }, {
                            value: 'Select 3',
                            text: 'Select 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    tag: 'html',
                    category: 'html',
                    data: '<h1>HTML</h1>'
                },
                table: {}
            }, {
                html: {
                    tag: 'image',
                    category: 'html',
                    src: 'http://i.imgur.com/AVqsATi.gif'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'text'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'radio',
                    elements: [{
                            value: 'Radio 1',
                            text: 'Radio 1'
                        }, {
                            value: 'Radio 2',
                            text: 'Radio 2'
                        }, {
                            value: 'Radio 3',
                            text: 'Radio 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'textarea'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'number'
                },
                table: {}
            }, {
                html: {
                    label: 'Choose file',
                    category: 'form',
                    tag: 'file'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'date'
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'form',
                    tag: 'checkbox',
                    elements: [{
                            value: 'Checkbox 1',
                            text: 'Checkbox 1'
                        }, {
                            value: 'Checkbox 2',
                            text: 'Checkbox 2'
                        }, {
                            value: 'Checkbox 3',
                            text: 'Checkbox 3'
                        }]
                },
                table: {}
            }, {
                html: {
                    label: 'Type your Text',
                    category: 'headings',
                    tag: 'h1',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h2',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h3',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h4',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h5',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'headings',
                    tag: 'h6',
                    text: 'Add Your Title',
                    class: 'text-center'
                },
                table: {}
            }, {
                html: {
                    category: 'formatting',
                    tag: 'legend',
                    text: 'Legend text'
                },
                table: {}
            }, {
                html: {
                    category: 'table',
                    tag: 'table',
                    fields: [
                        {
                            "Book Name": "Computer Architecture",
                            "Category": "Computers",
                            "Price": "125.60",
                            "Book ID": "1"
                        },
                        {
                            "Book ID": "2",
                            "Book Name": "Asp.Net 4 Blue Book",
                            "Category": "Programming",
                            "Price": "56.00"
                        },
                        {
                            "Book ID": "3",
                            "Book Name": "Popular Science",
                            "Category": "Science",
                            "Price": "210.40"
                        }
                    ]
                },
                table: {}
            }];
    };
    HtmlElementService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HtmlElementService);
    return HtmlElementService;
}());
export { HtmlElementService };
//# sourceMappingURL=html-element.service.js.map