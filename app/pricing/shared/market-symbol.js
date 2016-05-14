System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MarketSymbol;
    return {
        setters:[],
        execute: function() {
            MarketSymbol = (function () {
                // id: string;
                // name: string;
                // bidPrice: number;
                // bidSize: number;
                // offerPrice: number;
                // offerSize: number;
                // lastPrice: number;
                // change: number;
                // changeDirection : string;
                // changePercent: number;
                // lastTradeQuantity: number;
                // lastTradeTime: string;
                function MarketSymbol(id, name, bidPrice, bidSize, offerPrice, offerSize, lastPrice, change, changeDirection, changePercent, lastTradeQuantity, lastTradeTime) {
                }
                return MarketSymbol;
            }());
            exports_1("MarketSymbol", MarketSymbol);
        }
    }
});
//# sourceMappingURL=market-symbol.js.map