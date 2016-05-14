import {Injectable} from '@angular/core';
import {Order} from './order';
import {ORDERS} from './mock-orders';

@Injectable()
export class OrdersService {

  constructor() { }

  addOrder(order:Order){
    ORDERS.push(order);
  }

  getOrders(){
    return Promise.resolve(ORDERS);
  }

}
