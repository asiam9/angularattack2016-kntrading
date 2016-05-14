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
                { name: "WatchList 1", symbols: [mock_symbol_1.SYMBOLS[0], mock_symbol_1.SYMBOLS[1]] },
                { name: "WatchList 2", symbols: [mock_symbol_1.SYMBOLS[2], mock_symbol_1.SYMBOLS[3]] },
                { name: "WatchList 3", symbols: [mock_symbol_1.SYMBOLS[4], mock_symbol_1.SYMBOLS[5]] },
                { name: "WatchList 4", symbols: [mock_symbol_1.SYMBOLS[6], mock_symbol_1.SYMBOLS[7]] }
            ]);
        }
    }
});
//# sourceMappingURL=mock-watchlist.js.map