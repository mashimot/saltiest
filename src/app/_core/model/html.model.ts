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