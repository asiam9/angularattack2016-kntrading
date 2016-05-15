import {Order} from './order';
import {MarketSymbol} from '../../pricing/shared/market-symbol';
import {FlikerItem} from '../../pricing/shared/fliker-item';
export var ORDERS:Order[]=[
  new Order(new MarketSymbol('MMM','3M',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,0,8,9,new Date("2015-03-25T12:00:00")),2,3,true,100),
  new Order(new MarketSymbol('CAT','Caterpillar',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,1,8,9,new Date("2015-03-25T12:00:00")),2,4,false,101),
  new Order(new MarketSymbol('MMM','3M',new FlikerItem(1) ,new FlikerItem(12),new FlikerItem(3),new FlikerItem(4),new FlikerItem(5),6,0,8,9,new Date("2015-03-25T12:00:00")),22,33,false,102)
];
