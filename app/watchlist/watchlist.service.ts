/**
 * Created by mmsadek on 5/14/2016.
 */
import { Injectable } from '@angular/core';
import { Watchlist } from './watchlist/watchlist';
import { WATCHLISTS } from './watchlist/mock-watchlists';
import {SYMBOLS} from './shared/mock-symbols';
import {Symbol} form './shared/symbol';
@Injectable()
export class WatchlistService {
    getWatchlists() {
        return Promise.resolve(WATCHLISTS);
    }
}