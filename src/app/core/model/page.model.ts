import { Row } from "./row.model";

export class Page {
    id?: number;
    position?: number;
    name?: string;
    rows?: Array<Row>;
}