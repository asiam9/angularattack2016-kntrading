/**
 * Created by mmsadek on 5/14/2016.
 */
import { Injectable } from '@angular/core';
import { Watchlist } from './watchlist';
import { WATCHLISTS } from './mock-watchlist';
import {SYMBOLS} from '../shared/mock-symbol';
import {Symbol} from '../shared/symbol';
@Injectable()
export class WatchlistService {
    getWatchlists() {
        return Promise.resolve(WATCHLISTS);
    }
}
