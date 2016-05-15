import {Component,OnInit} from '@angular/core';
import { Watchlist } from '../watchlist/watchlist';
import {Symbol} from '../shared/symbol';
import {SymbolsService} from '../shared/symbol.service'
import { WatchlistService } from './watchlist.service';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
//declare var typeahead: any;

@Component({
    selector: 'watchlist',
    templateUrl: 'app/watchlist/watchlist.component.html',
    styleUrls:  ['app/watchlist/watchlist.component.css'],
    providers : [WatchlistService,SymbolsService],
    directives: [TYPEAHEAD_DIRECTIVES]
})
export class WatchListComponent implements OnInit{

    watchlist:Watchlist;
    watchlistArr:Watchlist[];
    watchlistSymbols:Symbol [];
    selectedWatchlist: Watchlist;
    symbols: Symbol [];
    constructor(private watchlistService: WatchlistService,private symbolsService: SymbolsService) { }

    getWatchlists() {
            this.watchlistService.getWatchlists().then(
                    watchlistArr => this.watchlistArr = watchlistArr
            );
    }
    getSymbols(){
        this.symbolsService.getSymbolsList().then(watchlistSymbols => this.watchlistSymbols = watchlistSymbols );
    }
    ngOnInit() {
        this.getWatchlists();
        this.getSymbols();
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
