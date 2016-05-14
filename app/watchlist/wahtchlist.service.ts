/**
 * Created by mmsadek on 5/14/2016.
 */
import { Injectable } from '@angular/core';
import { Watchlist } from './watchlist';
import { WATCHLISTS } from './mock-watchlists';
@Injectable()
export class WatchlistService {
    getWatchlists() {
        return Promise.resolve(WATCHLISTS);
    }
}