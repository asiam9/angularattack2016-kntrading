import {Component,OnInit} from '@angular/core';
import { Watchlist } from '../watchlist/watchlist';

import { WatchlistService } from './wahtchlist.service';
@Component({
    selector: 'watchlist',
    templateUrl: 'app/watchlist.component.html',
    styleUrls:  ['app/watchlist.component.css'],
    providers : [WatchlistService]
})
export class WatchListComponent implements OnInit{
    watchlist:Watchlist;
    watchlistArr:Watchlist[];
    watchlistSymbols:string [];
    selectedWatchlist: Watchlist;
    symbols: string [];
    constructor(private watchlistService: WatchlistService) { }

    getWatchlists() {
        this.watchlistService.getWatchlists().then(watchlistArr => this.watchlistArr = watchlistArr);
    }
    ngOnInit() {
        this.getWatchlists();
    }
    addWatchlist(name:string,symbols:string,valid:boolean,form:Object) {
        if(valid){
            this.symbols=symbols.split(',');
          //  this.watchlist = new Watchlist(name,this.symbols);
            this.watchlistArr.push(this.watchlist);

            /*form.controls.name._pristine=true;
             form.controls.symbols._pristine=true;*/
            /* form.controls.forEach((name, control) => {
             control.updateValue('');
             control.setErrors(null);
             });*/
        }
    }
    getWatchlistSymbols(watchlist: Watchlist){
        this.selectedWatchlist=watchlist;
      //  this.watchlistSymbols=this.selectedWatchlist.symbols;
        /*this.watchlistService.getWatchlistSymbols(this.selectedWatchlist).then(
         watchlistSymbols => this.watchlistSymbols=watchlistSymbols.symbols);*/
    }

}
