export interface IHtml {
    category?: string;
    content_choice_id?: number;
    tag?: string;
    grid?: string;
    label?: string;
    text?: string;
    class?: string;
    fields?: Array<any>;
    src?: string;
    data?: string;
    choices?: Array<{ text: string, value: string }>;
}

export class Html {
    category: string;
    content_choice_id: number;
    tag: string;
    grid: string;
    label: string;
    text: string;
    class: string;
    fields: Array<any> = [];
    src: string;
    data: string;
    choices: Array<{ text: string, value: string }> = [];

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