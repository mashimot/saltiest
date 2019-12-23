var Definition = /** @class */ (function () {
    function Definition() {
        this.column_name = '';
        this.is_primary_key = false;
        this.type = '';
        this.nullable = false;
        this.size = '';
        /*constructor(definition: IDefinition = {}){
            for (let key in definition)
            {
                if (definition.hasOwnProperty(key))
                {
                    let value = definition[key];
                    if (typeof value !== "undefined")
                        this[key] = value;
                }
            }
        }*/
    }
    return Definition;
}());
export { Definition };
//# sourceMappingURL=definition.model.js.map