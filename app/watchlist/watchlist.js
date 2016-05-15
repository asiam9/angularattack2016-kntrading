System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Watchlist;
    return {
        setters:[],
        execute: function() {
            Watchlist = (function () {
                function Watchlist(id, name, symbols) {
                    this.id = id;
                    this.name = name;
                    this.symbols = symbols;
                }
                return Watchlist;
            }());
            exports_1("Watchlist", Watchlist);
        }
    }
});
//# sourceMappingURL=watchlist.js.map