System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Watchlist;
    return {
        setters:[],
        execute: function() {
            Watchlist = (function () {
                function Watchlist(watchListID, watchlistName, watchlistSymbols) {
                    this.id = watchListID;
                    this.name = watchlistName;
                    this.symbols = watchlistSymbols;
                }
                return Watchlist;
            }());
            exports_1("Watchlist", Watchlist);
        }
    }
});
//# sourceMappingURL=watchlist.js.map