import {Component} from "@angular/core";
import {Order} from '../shared/order';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';
import {OrdersService} from '../shared/orders.service';


@Component({
  selector: 'place-order',
  templateUrl: 'app/orders/place-order/place-order.component.html',
  providers:[SymbolsService,OrdersService]
})

export class PlaceOrderComponent {



  symbolId:string;
  price:number;
  quantity:number;


  constructor(private symbolService:SymbolsService,private ordersService:OrdersService) { }

  getTradeAmount(){
    return (this.quantity*this.price) | undefined;
  }
  resetValues(){
    this.symbolId=undefined;
    this.price=undefined;
    this.quantity=undefined;
  }

  addOrder(){
    let symbol:Symbol=this.symbolService.getSymbolById(this.symbolId);
    if(symbol){
        this.ordersService.addOrder(new Order(symbol,this.quantity,this.price,2))
        this.resetValues();
    }
  }


}
