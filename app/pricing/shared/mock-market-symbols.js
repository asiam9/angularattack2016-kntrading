System.register(['./market-symbol', './fliker-item'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var market_symbol_1, fliker_item_1;
    var SYMBOLS;
    return {
        setters:[
            function (market_symbol_1_1) {
                market_symbol_1 = market_symbol_1_1;
            },
            function (fliker_item_1_1) {
                fliker_item_1 = fliker_item_1_1;
            }],
        execute: function() {
            exports_1("SYMBOLS", SYMBOLS = [
                new market_symbol_1.MarketSymbol('MMM', '3M', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('AXP', 'American Express', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('AAPL', 'Apple', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('BA', 'Boeing', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('CAT', 'Caterpillar', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('CVX', 'Chevron', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('CSCO', 'Cisco', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('KO', 'Coca-Cola', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('DIS', 'Disney', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('DD', 'E I du Pont de Nemours and Co', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('XOM', 'Exxon Mobil', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('GE', 'General Electric', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('GS', 'Goldman Sachs', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('HD', 'Home Depot', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('IBM', 'IBM', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('INTC', 'Intel', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('JNJ', 'Johnson & Johnson', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('JPM', 'JPMorgan Chase', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('MCD', 'McDonalds', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('MRK', 'Merck', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('MSFT', 'Microsoft', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('NKE', 'Nike', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('PFE', 'Pfizer', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('PG', 'Procter & Gamble', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('TRV', 'Travelers Companies Inc', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('UTX', 'United Technologies', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('UNH', 'UnitedHealth', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('VZ', 'Verizon', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 0, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('V', 'Visa', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00")),
                new market_symbol_1.MarketSymbol('WMT', 'Wal-Mart', new fliker_item_1.FlikerItem(1), new fliker_item_1.FlikerItem(12), new fliker_item_1.FlikerItem(3), new fliker_item_1.FlikerItem(4), new fliker_item_1.FlikerItem(5), 6, 1, 8, 9, new Date("2015-03-25T12:00:00"))
            ]);
        }
    }
});
//# sourceMappingURL=mock-market-symbols.js.map