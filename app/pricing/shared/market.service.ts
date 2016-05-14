
import { MarketData } from './mock-market';
import {SYMBOLS} from './mock-market-symbols';
import {MarketSummary} from './market-summary';
import {MarketSymbol} from './market-symbol';
import { Injectable } from '@angular/core';

@Injectable()
export class MarketService {

    getMarketData() {
        return MarketData
    }

    getMarketSymbols() {
        return SYMBOLS
    }


}
