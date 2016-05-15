import {MarketSymbol} from './market-symbol';


export class StockTimer {

private timer: any;
symbols: MarketSymbol[];

constructor(symbolsList: MarketSymbol[])
{
  this.symbols = symbolsList;
}


start(){
  this.timer =  setInterval(function() {this.generateFeed();}.bind(this), 500);
}

stop(){
  clearInterval(this.timer);
}

generateFeed(){

  for (var n = 1; n <= 3; n++)
   {
    var symbolIndex:number = this.getRandomInt(29);
    if(!this.symbols[symbolIndex]){
      continue;
    }
    this.symbols[symbolIndex].bidPrice.setFlicketValue(this.getRandomFloat(1000)) ;
    this.symbols[symbolIndex].bidSize.setFlicketValue(this.getRandomInt(50000));
    this.symbols[symbolIndex].offerPrice.setFlicketValue(this.getRandomFloat(1000));
    this.symbols[symbolIndex].offerSize.setFlicketValue(this.getRandomInt(50000));
    this.symbols[symbolIndex].lastPrice.setFlicketValue(this.getRandomFloat(1000));

    this.symbols[symbolIndex].change = this.getRandomFloat(1000);
    this.symbols[symbolIndex].changePercent = this.getRandomFloat(100);
      this.symbols[symbolIndex].changeDirection = this.getRandomInt(1);

      this.symbols[symbolIndex].lastTradeTime = new Date();
   }
}


getRandomInt(max: number): number {
 return Math.floor(Math.random() * (max + 1));
}

getRandomFloat(max: number): number {
 return parseInt((Math.random() * (max + 1)).toFixed(3));
}


}
