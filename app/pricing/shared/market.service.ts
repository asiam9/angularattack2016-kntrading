import {Market} from './pricing/Shared/market';
import { MarketData } from './pricing/Shared/mock-market';
import { Injectable } from '@angular/core';

@Injectable()
export class MarketService {

    getMarketDetails() {
        return MarketData
    }


}