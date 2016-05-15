/**
 * Created by mmsadek on 5/14/2016.
 */
import { Symbol } from '../shared/symbol';
export class Watchlist {
    id:number;
    name: string;
    symbols: Symbol[];
    constructor(id:number,name:string,symbols:Symbol[])
    {
        this.id=id;
        this.name=name;
        this.symbols=symbols;
    }
}
