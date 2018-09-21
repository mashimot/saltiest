import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HtmlElementService {
    category: string;

    constructor() {
        this.category = 'form';
    }

    getTags() {
        const tags = this.get().reduce((previous, current) => {
            if (current.html.category) {
                if (current.html.category === this.category) {
                    previous[current.html.tag] = null;
                }
            }
            return previous;
        }, {});
        return Object.keys(tags);
    }
    get() {
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
