System.register(['./order', '../../pricing/shared/market-symbol', '../../pricing/shared/fliker-item'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var order_1, market_symbol_1, fliker_item_1;
    var ORDERS;
    return {
        setters:[
            function (order_1_1) {
                order_1 = order_1_1;
            },
            function (market_symbol_1_1) {
                market_symbol_1 = market_symbol_1_1;
            },
            function (fliker_item_1_1) {
                fliker_item_1 = fliker_item_1_1;
            }],
        execute: function() {
            exports_1("ORDERS", ORDERS = [
                new order_1.Order(new market_symbol_1.MarketSymbol('MMM', '3M', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")), 2, 3, true, 100),
                new order_1.Order(new market_symbol_1.MarketSymbol('CAT', 'Caterpillar', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")), 2, 4, false, 101),
                new order_1.Order(new market_symbol_1.MarketSymbol('MMM', '3M', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")), 22, 33, false, 102)
            ]);
        }
    }
});
//# sourceMappingURL=mock-orders.js.map