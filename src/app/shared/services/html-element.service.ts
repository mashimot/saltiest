import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pageable } from '../interface/register-response';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HtmlElementService {
    category: string;
    API_URL: string = 'http://127.0.0.1:8000/api/tools';
    API_URL2: string = 'http://127.0.0.1:8000/api/contents_choices';


    constructor(private http: HttpClient) {
        this.category = 'form';
    }

    getTags() {
        const tags = this.getStatic().reduce((previous, current) => {
            if (current.html.category) {
                if (current.html.category === this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    }
    
    queryParams(query){
        const httpOptions = {
            params: { ...query}
        };        
    
        return this.http.get<Pageable>(
            this.API_URL2, httpOptions
        );
    }

    getTools(){
        return this.http.get<any>(`${this.API_URL}`);
    }

    getContentChoices(){
        return this.http.get<Pageable>(`${this.API_URL2}`);
    }

    getStaticTools(){
        return of(
            {"success":true,"message":"any","tools":{"form":[{"html":{"content_html_id":31,"content_html_tag_id":3,"category_id":1,"tag":"number","category":"form","label":"Type your Text","text":null,"src":null}},{"html":{"content_html_id":32,"content_html_tag_id":4,"category_id":1,"tag":"date","category":"form","label":"Type your Text","text":null,"src":null}},{"html":{"content_html_id":43,"content_html_tag_id":4,"category_id":1,"tag":"textarea","category":"form","label":"Type your Text","text":null,"src":null}},{"html":{"content_html_id":33,"content_html_tag_id":5,"category_id":1,"tag":"text","category":"form","label":"Type your Text","text":null,"src":null}}],"html":[{"html":{"content_html_id":34,"content_html_tag_id":9,"category_id":2,"tag":"html","category":"html","label":null,"text":null,"src":null}},{"html":{"content_html_id":35,"content_html_tag_id":10,"category_id":2,"tag":"image","category":"html","label":null,"text":null,"src":"http:\/\/i.imgur.com\/AVqsATi.gif"}}],"headings":[{"html":{"content_html_id":36,"content_html_tag_id":11,"category_id":3,"tag":"h1","category":"headings","label":null,"text":"<h1>Title<\/h1>","src":null}},{"html":{"content_html_id":37,"content_html_tag_id":12,"category_id":3,"tag":"h2","category":"headings","label":null,"text":"<h2>Title<\/h2>","src":null}},{"html":{"content_html_id":38,"content_html_tag_id":13,"category_id":3,"tag":"h3","category":"headings","label":null,"text":"<h3>Title<\/h3>","src":null}},{"html":{"content_html_id":39,"content_html_tag_id":14,"category_id":3,"tag":"h4","category":"headings","label":null,"text":"<h4>Title<\/h4>","src":null}},{"html":{"content_html_id":40,"content_html_tag_id":15,"category_id":3,"tag":"h5","category":"headings","label":null,"text":"<h5>Title<\/h5>","src":null}},{"html":{"content_html_id":41,"content_html_tag_id":16,"category_id":3,"tag":"h6","category":"headings","label":null,"text":"<h6>Title<\/h6>","src":null}}],"formatting":[{"html":{"content_html_id":42,"content_html_tag_id":17,"category_id":4,"tag":"legend","category":"formatting","label":null,"text":"<legend>Legend<\/legend>","src":null}}]}}
        );
    }
    
    getStaticOptionChoices(){
        return of(
            {"success":true,"message":"any","paginate":{"current_page":1,"data":[{"description":"Escala Likert","html":{"content_choice_id":1,"content_html_tag_id":2,"category":"form","tag":"radio","label":"Type your Text","choices":[{"id":1,"content_choice_id":1,"text":"Discordo Totalmente","value":"1","position":1},{"id":2,"content_choice_id":1,"text":"Discordo","value":"2","position":2},{"id":3,"content_choice_id":1,"text":"Discordo Totalmente e Nem Discordo","value":"3","position":3},{"id":4,"content_choice_id":1,"text":"Concordo","value":"4","position":4},{"id":5,"content_choice_id":1,"text":"Concordo Totalmente","value":"5","position":5},{"id":6,"content_choice_id":1,"text":"NA (N\u00e3o Aplic\u00e1vel)","value":"0","position":6}]}},{"description":"Bass Players","html":{"content_choice_id":2,"content_html_tag_id":2,"category":"form","tag":"radio","label":"Type your Text","choices":[{"id":7,"content_choice_id":2,"text":"Les Claypool","value":"1","position":1},{"id":8,"content_choice_id":2,"text":"Geddy Lee","value":"2","position":2}]}}],"first_page_url":"http:\/\/127.0.0.1:8000\/api\/contents_choices?page=1","from":1,"last_page":2,"last_page_url":"http:\/\/127.0.0.1:8000\/api\/contents_choices?page=2","next_page_url":"http:\/\/127.0.0.1:8000\/api\/contents_choices?page=2","path":"http:\/\/127.0.0.1:8000\/api\/contents_choices","per_page":99999999999999999,"prev_page_url":null,"to":2,"total":3}}
        );
    }

    getStaticTags() {
        const tags = this.getStatic().reduce((previous, current) => {
            if (current.html.category) {
                if (current.html.category === this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    }

    getStatic(){
        return [{"html":{"content_html_tag_id":1,"tag":"select","category":"form","content_choice_id":1,"label":"Type your Text23","text":"","elements":[{"id":1,"text":"Radio 1","value":"Radio 1"},{"id":2,"text":"Radio 2","value":"Radio 2"},{"id":3,"text":"Radio 3","value":"Radio 3"}]}},{"html":{"content_html_tag_id":2,"tag":"radio","category":"form","content_choice_id":1,"label":"Type your Text","text":"","elements":[{"id":1,"text":"Radio 1","value":"Radio 1"},{"id":2,"text":"Radio 2","value":"Radio 2"},{"id":3,"text":"Radio 3","value":"Radio 3"}]}},{"html":{"content_html_tag_id":3,"tag":"number","category":"form","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":4,"tag":"date","category":"form","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":5,"tag":"text","category":"form","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":6,"tag":"textarea","category":"form","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":7,"tag":"file","category":"form","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":8,"tag":"checkbox","category":"form","content_choice_id":1,"label":"Type your Text","text":"","elements":[{"id":1,"text":"Radio 1","value":"Radio 1"},{"id":2,"text":"Radio 2","value":"Radio 2"},{"id":3,"text":"Radio 3","value":"Radio 3"}]}},{"html":{"content_html_tag_id":9,"tag":"html","category":"html","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":10,"tag":"image","category":"html","content_choice_id":null,"label":"Type your Text","text":"","elements":[]}},{"html":{"content_html_tag_id":11,"tag":"h1","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":12,"tag":"h2","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":13,"tag":"h3","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":14,"tag":"h4","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":15,"tag":"h5","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":16,"tag":"h6","category":"headings","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}},{"html":{"content_html_tag_id":17,"tag":"legend","category":"formatting","content_choice_id":null,"label":"","text":"Type your Text","elements":[]}}];
    }

    get2() {
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
    }
}
