import {Component,ElementRef,OnInit} from "@angular/core";
import {Order} from '../shared/order';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';
import {OrdersService} from '../shared/orders.service';

declare var jQuery:any;

@Component({
  selector: 'place-order',
  templateUrl: 'app/orders/place-order/place-order.component.html',
  styleUrls:['app/orders/place-order/place-order.component.css'],
  providers:[SymbolsService,OrdersService]
})

export class PlaceOrderComponent implements OnInit{

  symbolId:string;
  price:number;
  quantity:number;
  selectedSymbol:Symbol;
  invalidSymbol:boolean=false;
  formSubmitted:boolean=false;

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  constructor(private symbolService:SymbolsService,private ordersService:OrdersService,private elementRef: ElementRef) { }

  getTradeAmount(){
    let tradeAmount=this.quantity*this.price;
    return (!isNaN(tradeAmount) && tradeAmount>0 ?tradeAmount:'');
  }
  resetValues(){
    this.symbolId=undefined;
    this.price=undefined;
    this.quantity=undefined;
  }

  hideModal(){
    jQuery('#myModal').modal('hide');
  }

  addOrder(isBus:boolean){
    this.formSubmitted=true;
    this.selectedSymbol=this.symbolService.getSymbolById(this.symbolId);
    if(this.selectedSymbol){
      this.invalidSymbol=false;
      this.ordersService.addOrder(new Order(this.selectedSymbol,this.quantity,this.price,isBus,2))
      this.resetValues();
      this.hideModal();
    }else{
      this.invalidSymbol=true;
    }
  }


}
