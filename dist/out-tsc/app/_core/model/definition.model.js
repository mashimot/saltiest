var Definition = /** @class */ (function () {
    function Definition(definition) {
        if (definition === void 0) { definition = {}; }
        this.column_name = '';
        this.is_primary_key = false;
        this.type = '';
        this.nullable = false;
        this.size = '';
        for (var key in definition) {
            if (definition.hasOwnProperty(key)) {
                var value = definition[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
    return Definition;
}());
export { Definition };
//# sourceMappingURL=definition.model.js.map