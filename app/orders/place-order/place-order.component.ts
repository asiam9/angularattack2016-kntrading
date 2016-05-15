import {Component,ElementRef,OnInit} from "@angular/core";
import {Order} from '../shared/order';
import {MarketSymbol} from '../../pricing/shared/market-symbol';
import {MarketService} from '../../pricing/shared/market.service';
import {OrdersService} from '../shared/orders.service';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {SequenceGeneratorService} from '../../shared/sequence-generator.service';

declare var jQuery:any;

@Component({
  selector: '[place-order]',
  templateUrl: 'app/orders/place-order/place-order.component.html',
  styleUrls:['app/orders/place-order/place-order.component.css'],
  directives:[TYPEAHEAD_DIRECTIVES],
  providers:[MarketService,OrdersService,SequenceGeneratorService]
})

export class PlaceOrderComponent implements OnInit{

  symbolId:string;
  price:number;
  quantity:number;
  selectedSymbol:MarketSymbol;
  formSubmitted:boolean=false;
  symbolsList:MarketSymbol[];

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    this.symbolsList=this.marketService.getMarketSymbols();
  }

  constructor(private marketService:MarketService,private ordersService:OrdersService,private sequenceGenerator:SequenceGeneratorService) {

 }

  getTradeAmount(){
    let tradeAmount=this.quantity*this.price;
    return (!isNaN(tradeAmount) && tradeAmount>0 ?tradeAmount:'');
  }
  resetValues(){
    this.symbolId=undefined;
    this.selectedSymbol=undefined;
    this.price=undefined;
    this.quantity=undefined;
  }

  symbolSelected(element:any){
      this.selectedSymbol=element.item;
  }

  hideModal(){
    jQuery('#myModal').modal('hide');
  }

  addOrder(isBus:boolean){
    this.formSubmitted=true;
    if(this.selectedSymbol){
      this.ordersService.addOrder(new Order(this.selectedSymbol,this.quantity,this.price,isBus,this.sequenceGenerator.getNextSequence('order')))
      this.resetValues();
      this.hideModal();
    }
  }


}
