import { Watchlist } from './watchlist';
import {SYMBOLS} from '../shared/mock-symbol';
import {FlikerItem} from '../pricing/shared/fliker-item';
import {MarketSymbol} from '../pricing/shared/market-symbol';

export var WATCHLISTS: Watchlist[] = [
    {id:1,name: "WatchList 1",symbols:[
      new MarketSymbol('MMM','3M',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,0,8,9,new Date("2015-03-25T12:00:00")),
      new MarketSymbol('AXP','American Express',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),
    ]},
    {id:2,name: "WatchList 2",symbols:[new MarketSymbol('AAPL','Apple',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,0,8,9,new Date("2015-03-25T12:00:00")),
    new MarketSymbol('BA','Boeing',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),
    new MarketSymbol('CAT','Caterpillar',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),]},
    {id:3,name: "WatchList 3",symbols:[
      new MarketSymbol('V','Visa',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),
      new MarketSymbol('WMT','Wal-Mart',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),
      new MarketSymbol('MMM','3M',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,0,8,9,new Date("2015-03-25T12:00:00")),
      new MarketSymbol('AXP','American Express',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),

    ]}
];
