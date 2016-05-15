System.register(['@angular/core', '../watchlist/watchlist', '../shared/symbol.service', './watchlist.service', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, watchlist_1, symbol_service_1, watchlist_service_1, ng2_bootstrap_1;
    var WatchListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (watchlist_1_1) {
                watchlist_1 = watchlist_1_1;
            },
            function (symbol_service_1_1) {
                symbol_service_1 = symbol_service_1_1;
            },
            function (watchlist_service_1_1) {
                watchlist_service_1 = watchlist_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            WatchListComponent = (function () {
                function WatchListComponent(watchlistService, symbolsService) {
                    this.watchlistService = watchlistService;
                    this.symbolsService = symbolsService;
                }
                WatchListComponent.prototype.getWatchlists = function () {
                    var _this = this;
                    this.watchlistService.getWatchlists().then(function (watchlistArr) { return _this.watchlistArr = watchlistArr; });
                };
                WatchListComponent.prototype.getSymbols = function () {
                    var _this = this;
                    this.symbolsService.getSymbolsList().then(function (watchlistSymbols) { return _this.watchlistSymbols = watchlistSymbols; });
                };
                WatchListComponent.prototype.ngOnInit = function () {
                    this.getWatchlists();
                    this.getSymbols();
                };
                WatchListComponent.prototype.deleteWatchlist = function (watchlist) {
                    _.remove(this.watchlistArr, function (currentWatchlist) {
                        return watchlist.id == currentWatchlist.id;
                    });
                };
                WatchListComponent.prototype.addWatchlist = function (currentName, valid, form) {
                    // if(valid) {
                    var newWatchlist = new watchlist_1.Watchlist(1, currentName, this.newWatchlistSymbols);
                    this.watchlistArr.push(newWatchlist);
                    //    }
                };
                WatchListComponent.prototype.typeaheadOnSelect = function (e) {
                    if (!this.newWatchlistSymbols) {
                        this.newWatchlistSymbols = [];
                    }
                    this.newWatchlistSymbols.push(e.item);
                    e.item = {};
                    this.selectedSymbols = [];
                };
                WatchListComponent.prototype.deleteSymbols = function (symbol) {
                    _.remove(this.newWatchlistSymbols, function (currentSymbol) {
                        return symbol.id == currentSymbol.id;
                    });
                };
                WatchListComponent.prototype.editWatchlist = function (watchlist) {
                    $('#watchListModal').modal('show');
                    $('#watchListModal').on('shown.bs.modal', function (e) {
                        console.log(e);
                        $("#watchlist-name").val(watchlist.name);
                        this.newWatchlistSymbols = watchlist.symbols;
                        // do something...
                    });
                };
                WatchListComponent = __decorate([
                    core_1.Component({
                        selector: 'watchlist',
                        templateUrl: 'app/watchlist/watchlist.component.html',
                        styleUrls: ['app/watchlist/watchlist.component.css'],
                        providers: [watchlist_service_1.WatchlistService, symbol_service_1.SymbolsService],
                        directives: [ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [watchlist_service_1.WatchlistService, symbol_service_1.SymbolsService])
                ], WatchListComponent);
                return WatchListComponent;
            }());
            exports_1("WatchListComponent", WatchListComponent);
        }
    }
});
//# sourceMappingURL=watchlist.component.js.map