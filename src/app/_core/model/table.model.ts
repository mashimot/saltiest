export interface ITable {
    column_name?: string;
    is_primary_key?: boolean;
    type?: string;
    nullable?: boolean;
    size?: string; 
}
export class Table {
    column_name: string = '';
    is_primary_key: boolean = false;
    type: string = '';
    nullable: boolean = false;
    size?: string = ''; 

    constructor(table: ITable = {}){
        for (let key in table)
        {
            if (table.hasOwnProperty(key))
            {
                let value = table[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
}