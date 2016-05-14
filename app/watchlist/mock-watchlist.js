System.register(['../shared/mock-symbol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_symbol_1;
    var WATCHLISTS;
    return {
        setters:[
            function (mock_symbol_1_1) {
                mock_symbol_1 = mock_symbol_1_1;
            }],
        execute: function() {
            exports_1("WATCHLISTS", WATCHLISTS = [
                { id: "1", name: "WatchList 1", symbols: mock_symbol_1.SYMBOLS },
                { id: "2", name: "WatchList 2", symbols: mock_symbol_1.SYMBOLS },
                { id: "3", name: "WatchList 3", symbols: mock_symbol_1.SYMBOLS },
                { id: "4", name: "WatchList 4", symbols: mock_symbol_1.SYMBOLS }
            ]);
        }
    }
});
//# sourceMappingURL=mock-watchlist.js.map