export interface IDefinition {
    column_name?: string;
    is_primary_key?: boolean;
    type?: string;
    nullable?: boolean;
    size?: string; 
}
export class Definition {
    column_name: string = '';
    is_primary_key: boolean = false;
    type: string = '';
    nullable: boolean = false;
    size?: string = ''; 

    constructor(definition: IDefinition = {}){
        for (let key in definition)
        {
            if (definition.hasOwnProperty(key))
            {
                let value = definition[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
}