export interface IDefinition {
    name?: string;
    is_primary_key?: boolean;
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
