import {Component} from "@angular/core";
import {Order} from '../shared/order';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';


@Component({
  selector: 'place-order',
  templateUrl: 'app/orders/place-order/place-order.component.html',
  providers:[SymbolsService]
})

export class PlaceOrderComponent {



  symbolId:string;
  price:number;
  quantity:number;

  constructor(private symbolService:SymbolsService) { }

  addOrder(){
    let symbol:Symbol=this.symbolService.getSymbolById(this.symbolId);
    if(symbol){

    }
  }


}
