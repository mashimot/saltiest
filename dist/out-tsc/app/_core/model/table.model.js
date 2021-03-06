var Table = /** @class */ (function () {
    function Table(table) {
        if (table === void 0) { table = {}; }
        this.column_name = '';
        this.is_primary_key = false;
        this.type = '';
        this.nullable = false;
        this.size = '';
        for (var key in table) {
            if (table.hasOwnProperty(key)) {
                var value = table[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
    return Table;
}());
export { Table };
//# sourceMappingURL=table.model.js.map