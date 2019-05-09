import { IHtml } from "./html.model";
import { ITable } from "./table.model";

export interface Content {
    id?: number;
    position?: number;
    html?: IHtml;
    table?: ITable; //optional
}