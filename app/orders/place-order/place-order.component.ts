import {Component,ElementRef,OnInit} from "@angular/core";
import {Order} from '../shared/order';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';
import {OrdersService} from '../shared/orders.service';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {SequenceGeneratorService} from '../../shared/sequence-generator.service';

declare var jQuery:any;

@Component({
  selector: '[place-order]',
  templateUrl: 'app/orders/place-order/place-order.component.html',
  styleUrls:['app/orders/place-order/place-order.component.css'],
  directives:[TYPEAHEAD_DIRECTIVES],
  providers:[SymbolsService,OrdersService,SequenceGeneratorService]
})

export class PlaceOrderComponent implements OnInit{

  symbolId:string;
  price:number;
  quantity:number;
  selectedSymbol:Symbol;
  invalidSymbol:boolean=false;
  formSubmitted:boolean=false;
  symbolsList:Symbol[];

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    this.symbolService.getSymbolsList().then(symbols=>this.symbolsList=symbols);
  }

  constructor(private symbolService:SymbolsService,private ordersService:OrdersService,private sequenceGenerator:SequenceGeneratorService) {

 }

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
      this.ordersService.addOrder(new Order(this.selectedSymbol,this.quantity,this.price,isBus,this.sequenceGenerator.getNextSequence('order')))
      this.resetValues();
      this.hideModal();
    }else{
      this.invalidSymbol=true;
    }
  }


}
