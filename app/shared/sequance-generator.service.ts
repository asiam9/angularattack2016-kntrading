import {Injectable} from '@angular/core';
import {ORDERS} from '../orders/shared/mock-orders';
import {WATCHLISTS} from '../watchlist/mock-watchlist';


@Injectable()
export class SequanceGeneratorService {
  constructor() { }

getNextSequence(entity:string){
  let nextSequence:number=0;
  if(entity==='place-order'){
    for (var index in ORDERS) {
      nextSequence=ORDERS[index].id>nextSequence?ORDERS[index].id:nextSequence;
    }

  }
  if(entity==='watchlist'){
    for (var index in WATCHLISTS) {
  //    nextSequence=WATCHLISTS[index].id>nextSequence?WATCHLISTS[index].id:nextSequence;
    }

  }

  return nextSequence+1;
}


}
