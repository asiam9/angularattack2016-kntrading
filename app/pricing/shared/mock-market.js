System.register(['./mock-market-symbols'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_market_symbols_1;
    var MarketData;
    return {
        setters:[
            function (mock_market_symbols_1_1) {
                mock_market_symbols_1 = mock_market_symbols_1_1;
            }],
        execute: function() {
            exports_1("MarketData", MarketData = {
                "id": "DAUBI",
                "name": "Mr. Nice",
                "marketStatusUrl": "../app/pricing/market/status.png",
                "marketImageUrl": "../app/pricing/market/market.png",
                "summary": {
                    "mainIndexValue": 686112,
                    "mainIndexDirectionUrl": "../app/pricing/market/down.png",
                    "change": 20.04,
                    "changePercentage": 0.29,
                    "changeDirection": "-",
                    "turnOver": 154029350313,
                    "totalVolumeTraded": 5029858765,
                    "numberOfTrades": 5951,
                    "traded": 32,
                    "up": 22,
                    "down": 9
                },
                "symbols": mock_market_symbols_1.SYMBOLS
            });
        }
    }
});
//# sourceMappingURL=mock-market.js.map