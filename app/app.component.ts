import {Component}  from  '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {MarketComponent} from './pricing/market/market.component';
import {HeatMapComponent} from './pricing/heatmap/heatmap.component';
import {WatchListComponent} from './watchlist/watchlist.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  providers:[ROUTER_PROVIDERS],
  directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([{
  path:'/market',
  name:'Market',
  component:MarketComponent
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
}
])
export class AppComponent {
  constructor() { }
}
