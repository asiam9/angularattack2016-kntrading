import
{
    Component, OnInit
}
from
'@angular/core';
import
{
    Watchlist
}
from
'../watchlist/watchlist';
import
{
    Symbol
}
from
'../shared/symbol';
import
{
    SymbolsService
}
from
'../shared/symbol.service'
import
{
    WatchlistService
}
from
'./watchlist.service';
import
{
    TYPEAHEAD_DIRECTIVES
}
from
'ng2-bootstrap/ng2-bootstrap';
declare var $:any;

@
Component({
    selector: 'watchlist',
    templateUrl: 'app/watchlist/watchlist.component.html',
    styleUrls: ['app/watchlist/watchlist.component.css'],
    providers: [WatchlistService, SymbolsService],
    directives: [TYPEAHEAD_DIRECTIVES]
})
export class WatchListComponent implements OnInit {

    watchlist:Watchlist;
    watchlistArr:Watchlist[];
    watchlistSymbols:Symbol [];
    selectedWatchlist:Watchlist;
    symbols:Symbol [];
    selectedSymbols:Symbol[];
    newWatchlistSymbols:Symbol[];

    constructor(private watchlistService:WatchlistService, private symbolsService:SymbolsService) {
    }

    getWatchlists() {
        this.watchlistService.getWatchlists().then(
                watchlistArr => this.watchlistArr = watchlistArr
        );
    }

    getSymbols() {
    //    this.symbolsService.getSymbolsList().then(watchlistSymbols => this.watchlistSymbols = watchlistSymbols);
    }

    ngOnInit() {
        this.getWatchlists();
        this.getSymbols();
    }

    deleteWatchlist(watchlist:Watchlist) {

        _.remove(this.watchlistArr, function (currentWatchlist) {
            return watchlist.id == currentWatchlist.id;
        });

    }

    addWatchlist(currentName:string, valid:boolean, form:Object) {
        // if(valid) {
        var newWatchlist = new Watchlist(1, currentName, this.newWatchlistSymbols);
        this.watchlistArr.push(newWatchlist);
        //    }

    }

    typeaheadOnSelect(e:any) {
        if (!this.newWatchlistSymbols) {
            this.newWatchlistSymbols = [];
        }
        this.newWatchlistSymbols.push(e.item);
        e.item = {};
        this.selectedSymbols = [];
    }

    deleteSymbols(symbol:Symbol) {
        _.remove(this.newWatchlistSymbols, function (currentSymbol) {
            return symbol.id == currentSymbol.id;
        });
    }

    editWatchlist(watchlist:Watchlist) {
        $('#watchListModal').modal('show');
        $('#watchListModal').on('shown.bs.modal', function (e) {
            console.log(e);
            $("#watchlist-name").val(watchlist.name);
            this.newWatchlistSymbols = watchlist.symbols;

            // do something...

        });


    }

    /* getWatchlistSymbols(watchlist: Watchlist){
     this.selectedWatchlist=watchlist;
     //  this.watchlistSymbols=this.selectedWatchlist.symbols;
     }*/

}
