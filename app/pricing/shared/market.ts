import {MarketSummary} from './pricing/Shared/market-summary';
import {Symbol} from './pricing/Shared/symbol';

export class Market {
    id: string;
    name: string;
    marketSummary: MarketSummary;
    symbols: Symbol[];
}