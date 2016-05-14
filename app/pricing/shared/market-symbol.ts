import {FlikerItem} from './fliker-item';
export class MarketSymbol {
    id: string;
    name: string;
    bidPrice: FlikerItem;
    bidSize: FlikerItem;
    offerPrice: FlikerItem;
    offerSize: FlikerItem;
    lastPrice: FlikerItem;
    change: number;
    changeDirection : number;
    changePercent: number;
    lastTradeQuantity: number;
    lastTradeTime: Date;


    constructor(id:string , name:string , bidPrice:FlikerItem , bidSize:FlikerItem ,offerPrice:FlikerItem  ,offerSize:FlikerItem
     , lastPrice:FlikerItem  , change:number , changeDirection:number  , changePercent:number  , lastTradeQuantity:number  ,
     lastTradeTime:Date  ){
        this.id= id;
        this.name= name;
        this.bidPrice= bidPrice;
        this.bidSize=bidSize;
        this.offerPrice= offerPrice;
        this.offerSize=offerSize;
        this.lastPrice= lastPrice;
        this.change= change;
        this.changeDirection = changeDirection;
        this.changePercent= changePercent;
        this.lastTradeQuantity= lastTradeQuantity;
        this.lastTradeTime= lastTradeTime;
  }

}
