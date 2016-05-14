import {Component , OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {MarketService} from '../shared/market.service';
import {Market} from '../shared/market';

@Component({
    selector: 'stock-market',
    templateUrl: 'app/Market/market.component.html',
    styleUrls:  ['app/Market/market.component.css']
})


export class MarketComponent implements OnInit {
    market : Market;

    constructor(
        private router: Router,
        private marketService: MarketService) { }
    getMarketDetails() {
        this.marketService.getMarketData();
    }
    ngOnInit() {
        this.getMarketDetails();
    }

}
