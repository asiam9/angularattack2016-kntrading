import {MarketSymbol} from '../../pricing/shared/market-symbol';


export class Order {

    constructor(public symbol:MarketSymbol,public quantity:number,public price:number,public isBuy:boolean,public id:number){

    };

}
