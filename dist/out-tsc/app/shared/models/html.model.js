var Html = /** @class */ (function () {
    function Html(html) {
        if (html === void 0) { html = {}; }
        this.fields = [];
        this.elements = [];
        for (var key in html) {
            if (html.hasOwnProperty(key)) {
                var value = html[key];
                if (typeof value !== "undefined")
                    this[key] = value;
            }
        }
    }
    return Html;
}());
export { Html };
//# sourceMappingURL=html.model.js.map