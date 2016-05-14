/**
 * Created by mmsadek on 5/14/2016.
 */
import { Symbol } from '../shared/symbol';
export class Watchlist {
    name: string;
    symbols: Symbol[];
    constructor(watchlistName: string,watchlistSymbols:Symbol[])
    {
        this.name=watchlistName;
        this.symbols=watchlistSymbols;
    }
}
