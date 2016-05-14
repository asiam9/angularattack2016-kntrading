System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StockTimer;
    return {
        setters:[],
        execute: function() {
            StockTimer = (function () {
                function StockTimer(symbolsList) {
                    this.symbols = symbolsList;
                }
                StockTimer.prototype.start = function () {
                    this.timer = setInterval(function () { this.generateFeed(); }.bind(this), 100);
                };
                StockTimer.prototype.stop = function () {
                    clearInterval(this.timer);
                };
                StockTimer.prototype.generateFeed = function () {
                    for (var n = 1; n <= 3; n++) {
                        var symbolIndex = this.getRandomInt(30);
                        this.symbols[symbolIndex].bidPrice.setFlicketValue(this.getRandomFloat(1000));
                        this.symbols[symbolIndex].bidSize.setFlicketValue(this.getRandomInt(50000));
                        this.symbols[symbolIndex].offerPrice.setFlicketValue(this.getRandomFloat(1000));
                        this.symbols[symbolIndex].offerSize.setFlicketValue(this.getRandomInt(50000));
                        this.symbols[symbolIndex].lastPrice.setFlicketValue(this.getRandomFloat(1000));
                        this.symbols[symbolIndex].change = this.getRandomFloat(1000);
                        this.symbols[symbolIndex].changePercent = this.getRandomFloat(100);
                        this.symbols[symbolIndex].changeDirection = this.getRandomInt(1);
                        this.symbols[symbolIndex].lastTradeTime = new Date();
                    }
                };
                StockTimer.prototype.getRandomInt = function (max) {
                    return Math.floor(Math.random() * (max + 1));
                };
                StockTimer.prototype.getRandomFloat = function (max) {
                    return parseInt((Math.random() * (max + 1)).toFixed(3));
                };
                return StockTimer;
            }());
            exports_1("StockTimer", StockTimer);
        }
    }
});
//# sourceMappingURL=StockTimer.js.map