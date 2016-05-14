import {MarketSummary} from './market-summary';
import {MarketSymbol} from './market-symbol';

export class Market {
    id: string;
    name: string;
    marketSummary: MarketSummary;
    symbols: MarketSymbol[];
}
