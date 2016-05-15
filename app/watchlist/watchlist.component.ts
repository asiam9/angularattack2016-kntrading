import{Component, OnInit} from '@angular/core';
import{Watchlist} from '../watchlist/watchlist';
import {MarketSymbol} from '../pricing/shared/market-symbol';
import {MarketService} from '../pricing/shared/market.service';
import{WatchlistService} from './watchlist.service';
import{TYPEAHEAD_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {SequenceGeneratorService} from '../shared/sequence-generator.service';
//import {SeqaunceGeneratorService} from '../shared/sequance-generator.service';

declare var $:any;


@Component({
    selector: 'watchlist',
    templateUrl: 'app/watchlist/watchlist.component.html',
    styleUrls: ['app/watchlist/watchlist.component.css'],
    providers: [WatchlistService,MarketService,SequenceGeneratorService],
    directives: [TYPEAHEAD_DIRECTIVES]
})
export class WatchListComponent implements OnInit {

    watchlist: Watchlist;
    watchlist1: Watchlist;
    watchlistArr:Watchlist[];
    selectedWatchListName:string;
    watchlistSymbols:MarketSymbol [];
    formSubmitted:boolean=false;
    selectedWatchlist:Watchlist;
    symbols:MarketSymbol [];
    newWatchlistSymbols:MarketSymbol[];
    isEdit:boolean=false;
    constructor(private watchlistService:WatchlistService, private marketService:MarketService,private sequenceGenerator:SequenceGeneratorService) {
    }

    getWatchlists() {
        this.watchlistService.getWatchlists().then(
                watchlistArr => this.watchlistArr = watchlistArr
        );
    }

    getSymbols() {
        this.watchlistSymbols=this.marketService.getMarketSymbols();
    }

    ngOnInit() {
        this.getWatchlists();
        this.getSymbols();
          $('[data-toggle="tooltip"]').tooltip();
        this.watchlist=new Watchlist(0,'',[]);
    }

    deleteWatchlist(watchlist:Watchlist) {
        _.remove(this.watchlistArr, function (currentWatchlist) {
            return watchlist.id == currentWatchlist.id;
        });

    }

    resetForm(){
        this.watchlist=new Watchlist(0,'',[]);
        this.watchlist.symbols=[];
        this.selectedWatchListName=undefined;
        this.formSubmitted=false;
    }

    hideModal(){
      $('#watchListModal').modal('hide');
    }

    addWatchlist(watchlist:Watchlist, valid:boolean, form:Object,isEdit:boolean) {
      this.formSubmitted=true;
        var watch = _.find(this.watchlistArr, ['id', watchlist.id]);
        if(watch){
            watch.name = watchlist.name;
            watch.symbols = watchlist.symbols;
        }else {
            this.watchlist = new Watchlist(this.sequenceGenerator.getNextSequence('watchlist'), watchlist.name, watchlist.symbols);
            this.watchlistArr.push(this.watchlist);
        }
        this.resetForm();
        this.hideModal();
    }

    typeaheadOnSelect(e:any) {
        //if (!this.newWatchlistSymbols) {
        //    this.newWatchlistSymbols = [];
        //}
        let symbol= _.find(this.watchlist.symbols, ['id', e.item.id]);
        if(!symbol){
          this.watchlist.symbols.push(e.item);
        }
        this.selectedWatchListName=undefined;
        //$("#watchlist-symbol").val('');
        //e.item = {};
       // this.selectedSymbols = [];
    }

    deleteSymbols(watchlist:Watchlist,symbol:MarketSymbol) {
        var symbolCopy=Object.assign({}, symbol);
        _.remove(watchlist.symbols, function (currentSymbol) {
            return symbolCopy.id == currentSymbol.id;
        });

        //for(var i = 0; i<= this.watchlistArr.length ; i++){
        //    if(watchlist.id === this.watchlistArr[i].id){
        //        for(var s = 0;s<this.watchlistArr[i].symbols.length; s++){
        //            if(this.watchlistArr[i].symbols[s].id === symbol.id){
        //                var index = this.watchlistArr[i].symbols.indexOf(this.watchlistArr[i].symbols[s]);
        //                if (index > -1) {
        //                    this.watchlistArr[i].symbols.splice(index, 1);
        //                }
        //            }
        //        }
        //    }
        //}
    }

    editWatchlist(watchlist:Watchlist) {
        this.isEdit=true;
        this.watchlist = watchlist;
        $('#watchListModal').modal('show');
        $('#watchListModal').on('shown.bs.modal', function (e) {
            $("#watchListModalLabel").text("Edit watchlist");
            $("#watchlist-name").val(watchlist.name);

            //this.watchlist = watchlist;


            /*this.newWatchlistSymbols = watchlist.symbols;
            this.selectedSymbols = watchlist.symbols;*/

            // do something...

        });


    }
    openAddModal(){
        $('#watchListModal').on('shown.bs.modal', function (e) {
            $("#watchListModalLabel").text("Add watchlist");
            $("#watchlist-name").val('');
            $("#watchlist-symbol").val('');
            this.watchlist=new Watchlist(0,'',[]);
        });
    }
    /* getWatchlistSymbols(watchlist: Watchlist){
     this.selectedWatchlist=watchlist;
     //  this.watchlistSymbols=this.selectedWatchlist.symbols;
     }*/

}
