import {Injectable} from "@angular/core";
import {ORDERS} from './mock-orders';

@Injectable()
export class OrderNumberSequence {
  constructor() { }

  getNextOrderNumber(){
    let nextSequence:number=1;
    for (var index in ORDERS) {
      nextSequence=ORDERS[index].id>nextSequence?ORDERS[index].id:nextSequence;
    }
    return nextSequence+1;

  }

}
