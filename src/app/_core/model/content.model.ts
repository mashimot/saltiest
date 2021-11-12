export interface Content {
    id?: number;
    position?: number;
    name?: string;
    is_primary_key?: boolean;
    html?: {
        category?: string;
        content_choice_id?: number;
        tag?: string;
        label?: string;
        text?: string;
        class?: string;
        fields?: any[];
        src?: string;
        data?: string;
        required?: boolean;
        choices?: { 
            text: string, value: string 
        }[];
    };
    type?: {
        datatype: string,
        length?: string,
        width?: number,
        digits?: number,
        decimals?: number,
        values: Array<string>
    },
    options?: {
        nullable?: boolean,
        autoincrement?: boolean
    }
}