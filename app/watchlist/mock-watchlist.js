System.register(['../pricing/shared/fliker-item', '../pricing/shared/market-symbol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var fliker_item_1, market_symbol_1;
    var WATCHLISTS;
    return {
        setters:[
            function (fliker_item_1_1) {
                fliker_item_1 = fliker_item_1_1;
            },
            function (market_symbol_1_1) {
                market_symbol_1 = market_symbol_1_1;
            }],
        execute: function() {
            exports_1("WATCHLISTS", WATCHLISTS = [
                { id: 1, name: "WatchList 1", symbols: [
                        new market_symbol_1.MarketSymbol('MMM', '3M', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('AXP', 'American Express', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                    ] },
                { id: 2, name: "WatchList 2", symbols: [new market_symbol_1.MarketSymbol('AAPL', 'Apple', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('BA', 'Boeing', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('CAT', 'Caterpillar', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),] },
                { id: 3, name: "WatchList 3", symbols: [
                        new market_symbol_1.MarketSymbol('V', 'Visa', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('WMT', 'Wal-Mart', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('MMM', '3M', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                        new market_symbol_1.MarketSymbol('AXP', 'American Express', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                    ] }
            ]);
        }
    }
});
//# sourceMappingURL=mock-watchlist.js.map