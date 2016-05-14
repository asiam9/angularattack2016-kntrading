import {Component , OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {MarketService} from './pricing/Shared/market.service';

@Component({
    selector: 'stock-market',
    templateUrl: 'app/Market/market.component.html',
    styleUrls:  ['app/Market/market.component.css']
})


export class MatketComponent implements OnInit {
    market : Market;

    constructor(
        private router: Router,
        private marketService: MarketService) { }
    getMarketDetails() {
        this.marketService.getMarketDetails().then(market => this.market = market);
    }
    ngOnInit() {
        this.getMarketDetails();
    }

}

