import {Symbol} from '../../shared/symbol';

export class Order {


    constructor(public symbol:Symbol,public quantity:number,public price:number,public isBuy:boolean,public id:number){

    };

}
