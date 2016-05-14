/**
 * Created by mmsadek on 5/14/2016.
 */
import { Symbol } from '../shared/symbol';
export class Watchlist {
    id:string;
    name: string;
    symbols: Symbol[];
    constructor(watchListID:string,watchlistName:string,watchlistSymbols:Symbol[])
    {
        this.id=watchListID;
        this.name=watchlistName;
        this.symbols=watchlistSymbols;
    }
}
