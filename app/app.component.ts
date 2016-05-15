import {Component,OnInit}  from  '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {MarketComponent} from './pricing/market/market.component';
import {HeatMapComponent} from './pricing/heatmap/heatmap.component';
import {WatchListComponent} from './watchlist/watchlist.component';
import {PlaceOrderComponent} from './orders/place-order/place-order.component';
import {OrderMonitorComponent} from './orders/order-monitor/order-monitor.component';

declare var jQuery:any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  providers:[ROUTER_PROVIDERS],
  directives:[ROUTER_DIRECTIVES,PlaceOrderComponent]
})
@RouteConfig([{
  path:'/market',
  name:'Market',
  component:MarketComponent,
  useAsDefault:true
},
{
  path:'/heatmap',
  name:'HeatMap',
  component:HeatMapComponent
},
{
  path:'/watchlist',
  name:'Watchlist',
  component:WatchListComponent
},
{
  path:'/orders',
  name:'Orders',
  component:OrderMonitorComponent
}
])
export class AppComponent implements OnInit{

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  constructor() { }
}
