import { IHtml } from "./html.model";
import { IDefinition } from "./definition.model";

export interface Content {
    id?: number;
    position?: number;
    html?: IHtml;
    definition?: IDefinition; //optional
}