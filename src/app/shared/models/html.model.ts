export interface IHtml {
    category?: string;
    tag?: string;
    grid?: string;
    label?: string;
    text?: string;
    class?: string;
    fields?: Array<any>;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

export class Html {
    category: string;
    tag: string;
    grid: string;
    label: string;
    text: string;
    class: string;
    fields: Array<any> = [];
    src: string;
    data: string;
    elements: Array<{ text: string, value: string }> = [];

    constructor(html: IHtml = {}){
        for (let key in html)
        {
            if (html.hasOwnProperty(key))
            {
                let value = html[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
}