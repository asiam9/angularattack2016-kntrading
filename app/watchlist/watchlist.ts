/**
 * Created by mmsadek on 5/14/2016.
 */
import { MarketSymbol } from '../pricing/shared/market-symbol';

export class Watchlist {
    id:number;
    name: string;
    symbols: MarketSymbol[];
    constructor(id:number,name:string,symbols:MarketSymbol[])
    {
        this.id=id;
        this.name=name;
        this.symbols=symbols;
    }
}
