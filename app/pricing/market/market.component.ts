import {Component , OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {StockTimer} from '../shared/StockTimer';
import {MarketService} from '../shared/market.service';
import {Market} from '../shared/market';

@Component({
    selector: 'stock-market',
    templateUrl: 'app/pricing/market/market.component.html',
    styleUrls:  ['app/pricing/market/market.component.css'],
    providers: [MarketService]
})


export class MarketComponent implements OnInit {

    stockTimer:StockTimer;
    market : Market;

    constructor(
        private router: Router,
        private marketService: MarketService) {

        }
    getMarketDetails() {
        this.market =this.marketService.getMarketData();
    }

    ChangeDirectionClass(changeDirection:number)
    {
      let classes =  {
       red : changeDirection ===0,
       green: changeDirection ===1

     }
 return classes;

    }

    ChangeDirectionImage(changeDirection:number)
    {

      return (changeDirection ===0) ? './down.png':'./up.png';
       }

    ngOnInit() {
        this.getMarketDetails();
          this.stockTimer = new StockTimer(this.market.symbols);
          this.stockTimer.start();
    }

}
