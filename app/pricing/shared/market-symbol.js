System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MarketSymbol;
    return {
        setters:[],
        execute: function() {
            MarketSymbol = (function () {
                function MarketSymbol(id, name, bidPrice, bidSize, offerPrice, offerSize, lastPrice, change, changeDirection, changePercent, lastTradeQuantity, lastTradeTime) {
                    this.id = id;
                    this.name = name;
                    this.bidPrice = bidPrice;
                    this.bidSize = bidSize;
                    this.offerPrice = offerPrice;
                    this.offerSize = offerSize;
                    this.lastPrice = lastPrice;
                    this.change = change;
                    this.changeDirection = changeDirection;
                    this.changePercent = changePercent;
                    this.lastTradeQuantity = lastTradeQuantity;
                    this.lastTradeTime = lastTradeTime;
                }
                return MarketSymbol;
            }());
            exports_1("MarketSymbol", MarketSymbol);
        }
    }
});
//# sourceMappingURL=market-symbol.js.map