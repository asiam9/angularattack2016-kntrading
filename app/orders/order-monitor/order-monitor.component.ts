import {Component,OnInit} from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import {Order} from '../shared/order';

@Component({
  selector: 'order-monitor',
  templateUrl: 'app/orders/order-monitor/order-monitor.component.html',
  providers:[OrdersService]
})

export class OrderMonitorComponent implements OnInit{

  private orderList:Order[];

  ngOnInit(){
    this.ordersService.getOrders().then(orders=>this.orderList=orders);
  }

  constructor(private ordersService:OrdersService) {}




}
