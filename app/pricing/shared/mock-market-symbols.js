System.register(['./market-symbol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var market_symbol_1;
    var SYMBOLS;
    return {
        setters:[
            function (market_symbol_1_1) {
                market_symbol_1 = market_symbol_1_1;
            }],
        execute: function() {
            exports_1("SYMBOLS", SYMBOLS = [
                new market_symbol_1.MarketSymbol('MMM', '3M', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('AXP', 'American Express', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('AAPL', 'Apple', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('BA', 'Boeing', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('CAT', 'Caterpillar', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('CVX', 'Chevron', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('CSCO', 'Cisco', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('KO', 'Coca-Cola', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('DIS', 'Disney', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('DD', 'E I du Pont de Nemours and Co', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('XOM', 'Exxon Mobil', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('GE', 'General Electric', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('GS', 'Goldman Sachs', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('HD', 'Home Depot', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('IBM', 'IBM', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('INTC', 'Intel', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('JNJ', 'Johnson & Johnson', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('JPM', 'JPMorgan Chase', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('MCD', 'McDonalds', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('MRK', 'Merck', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('MSFT', 'Microsoft', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('NKE', 'Nike', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('PFE', 'Pfizer', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('PG', 'Procter & Gamble', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('TRV', 'Travelers Companies Inc', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('UTX', 'United Technologies', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('UNH', 'UnitedHealth', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('VZ', 'Verizon', 1, 2, 3, 4, 5, 6, 0, 8, 9, 10),
                new market_symbol_1.MarketSymbol('V', 'Visa', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10),
                new market_symbol_1.MarketSymbol('WMT', 'Wal-Mart', 1, 2, 3, 4, 5, 6, 1, 8, 9, 10)
            ]);
        }
    }
});
//# sourceMappingURL=mock-market-symbols.js.map