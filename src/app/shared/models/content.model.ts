import { IHtml } from "./html.model";
import { ITable } from "./table.model";

export interface Content {
    html?: IHtml;
    table?: ITable; //optional
}