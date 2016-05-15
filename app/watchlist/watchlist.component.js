System.register(['@angular/core', '../watchlist/watchlist', '../pricing/shared/market.service', './watchlist.service', 'ng2-bootstrap/ng2-bootstrap', '../shared/sequence-generator.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, watchlist_1, market_service_1, watchlist_service_1, ng2_bootstrap_1, sequence_generator_service_1;
    var WatchListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (watchlist_1_1) {
                watchlist_1 = watchlist_1_1;
            },
            function (market_service_1_1) {
                market_service_1 = market_service_1_1;
            },
            function (watchlist_service_1_1) {
                watchlist_service_1 = watchlist_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (sequence_generator_service_1_1) {
                sequence_generator_service_1 = sequence_generator_service_1_1;
            }],
        execute: function() {
            WatchListComponent = (function () {
                function WatchListComponent(watchlistService, marketService, sequenceGenerator) {
                    this.watchlistService = watchlistService;
                    this.marketService = marketService;
                    this.sequenceGenerator = sequenceGenerator;
                    this.formSubmitted = false;
                    this.isEdit = false;
                }
                WatchListComponent.prototype.getWatchlists = function () {
                    var _this = this;
                    this.watchlistService.getWatchlists().then(function (watchlistArr) { return _this.watchlistArr = watchlistArr; });
                };
                WatchListComponent.prototype.getSymbols = function () {
                    this.watchlistSymbols = this.marketService.getMarketSymbols();
                };
                WatchListComponent.prototype.ngOnInit = function () {
                    this.getWatchlists();
                    this.getSymbols();
                    $('[data-toggle="tooltip"]').tooltip();
                    this.watchlist = new watchlist_1.Watchlist(0, '', []);
                };
                WatchListComponent.prototype.deleteWatchlist = function (watchlist) {
                    _.remove(this.watchlistArr, function (currentWatchlist) {
                        return watchlist.id == currentWatchlist.id;
                    });
                };
                WatchListComponent.prototype.resetForm = function () {
                    this.watchlist = new watchlist_1.Watchlist(0, '', []);
                    this.watchlist.symbols = [];
                    this.selectedWatchListName = undefined;
                    this.formSubmitted = false;
                };
                WatchListComponent.prototype.hideModal = function () {
                    $('#watchListModal').modal('hide');
                };
                WatchListComponent.prototype.addWatchlist = function (watchlist, valid, form, isEdit) {
                    this.formSubmitted = true;
                    var watch = _.find(this.watchlistArr, ['id', watchlist.id]);
                    if (watch) {
                        watch.name = watchlist.name;
                        watch.symbols = watchlist.symbols;
                    }
                    else {
                        this.watchlist = new watchlist_1.Watchlist(this.sequenceGenerator.getNextSequence('watchlist'), watchlist.name, watchlist.symbols);
                        this.watchlistArr.push(this.watchlist);
                    }
                    this.resetForm();
                    this.hideModal();
                };
                WatchListComponent.prototype.typeaheadOnSelect = function (e) {
                    //if (!this.newWatchlistSymbols) {
                    //    this.newWatchlistSymbols = [];
                    //}
                    var symbol = _.find(this.watchlist.symbols, ['id', e.item.id]);
                    if (!symbol) {
                        this.watchlist.symbols.push(e.item);
                    }
                    this.selectedWatchListName = undefined;
                    //$("#watchlist-symbol").val('');
                    //e.item = {};
                    // this.selectedSymbols = [];
                };
                WatchListComponent.prototype.deleteSymbols = function (watchlist, symbol) {
                    var symbolCopy = Object.assign({}, symbol);
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
                };
                WatchListComponent.prototype.editWatchlist = function (watchlist) {
                    this.isEdit = true;
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
                };
                WatchListComponent.prototype.openAddModal = function () {
                    $('#watchListModal').on('shown.bs.modal', function (e) {
                        $("#watchListModalLabel").text("Add watchlist");
                        $("#watchlist-name").val('');
                        $("#watchlist-symbol").val('');
                        this.watchlist = new watchlist_1.Watchlist(0, '', []);
                    });
                };
                WatchListComponent = __decorate([
                    core_1.Component({
                        selector: 'watchlist',
                        templateUrl: 'app/watchlist/watchlist.component.html',
                        styleUrls: ['app/watchlist/watchlist.component.css'],
                        providers: [watchlist_service_1.WatchlistService, market_service_1.MarketService, sequence_generator_service_1.SequenceGeneratorService],
                        directives: [ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [watchlist_service_1.WatchlistService, market_service_1.MarketService, sequence_generator_service_1.SequenceGeneratorService])
                ], WatchListComponent);
                return WatchListComponent;
            }());
            exports_1("WatchListComponent", WatchListComponent);
        }
    }
});
//# sourceMappingURL=watchlist.component.js.map