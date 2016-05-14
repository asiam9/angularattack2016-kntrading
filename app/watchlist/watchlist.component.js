System.register(['@angular/core', './watchlist.service'], function(exports_1, context_1) {
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
    var core_1, watchlist_service_1;
    var WatchListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (watchlist_service_1_1) {
                watchlist_service_1 = watchlist_service_1_1;
            }],
        execute: function() {
            WatchListComponent = (function () {
                function WatchListComponent(watchlistService) {
                    this.watchlistService = watchlistService;
                }
                WatchListComponent.prototype.getWatchlists = function () {
                    var _this = this;
                    this.watchlistService.getWatchlists().then(function (watchlistArr) { return _this.watchlistArr = watchlistArr; });
                };
                WatchListComponent.prototype.ngOnInit = function () {
                    this.getWatchlists();
                };
                WatchListComponent.prototype.deleteWatchlist = function (watchlist) {
                    _.remove(this.watchlistArr, function (currentWatchlist) {
                        return watchlist.id == currentWatchlist.id;
                    });
                };
                WatchListComponent = __decorate([
                    core_1.Component({
                        selector: 'watchlist',
                        templateUrl: 'app/watchlist/watchlist.component.html',
                        styleUrls: ['app/watchlist/watchlist.component.css'],
                        providers: [watchlist_service_1.WatchlistService]
                    }), 
                    __metadata('design:paramtypes', [watchlist_service_1.WatchlistService])
                ], WatchListComponent);
                return WatchListComponent;
            }());
            exports_1("WatchListComponent", WatchListComponent);
        }
    }
});
//# sourceMappingURL=watchlist.component.js.map