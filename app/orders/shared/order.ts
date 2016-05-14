import {Symbol} from '../../shared/symbol';

export class Order {


    constructor(private symbol:Symbol,private quantity:number,private price:number,private isBuy:boolean,private id:number){

    };

}
