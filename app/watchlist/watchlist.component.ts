import {Component,OnInit} from '@angular/core';
import { Watchlist } from '../watchlist/watchlist';
import {Symbol} from '../shared/symbol';
import { WatchlistService } from './watchlist.service';



@Component({
    selector: 'watchlist',
    templateUrl: 'app/watchlist/watchlist.component.html',
    styleUrls:  ['app/watchlist/watchlist.component.css'],
    providers : [WatchlistService]
})
export class WatchListComponent implements OnInit{

    watchlist:Watchlist;
    watchlistArr:Watchlist[];
    watchlistSymbols:Symbol [];
    selectedWatchlist: Watchlist;
    symbols: Symbol [];
    constructor(private watchlistService: WatchlistService) { }

    getWatchlists() {
            this.watchlistService.getWatchlists().then(
                    watchlistArr => this.watchlistArr = watchlistArr
            );
    }
    ngOnInit() {
        this.getWatchlists();
    }


    deleteWatchlist(watchlist:Watchlist){

        _.remove(this.watchlistArr, function(currentWatchlist) {
            return watchlist.id  == currentWatchlist.id;
        });

    }
   /* addWatchlist(name:string,symbols:string,valid:boolean,form:Object) {
        if(valid){
            this.symbols=symbols.split(',');
          //  this.watchlist = new Watchlist(name,this.symbols);
            this.watchlistArr.push(this.watchlist);
        }
    }*/
   /* getWatchlistSymbols(watchlist: Watchlist){
        this.selectedWatchlist=watchlist;
      //  this.watchlistSymbols=this.selectedWatchlist.symbols;
    }*/

}
