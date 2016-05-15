System.register(['@angular/core', '@angular/router-deprecated', '../shared/market.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, market_service_1;
    var MarketComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (market_service_1_1) {
                market_service_1 = market_service_1_1;
            }],
        execute: function() {
            MarketComponent = (function () {
                function MarketComponent(router, marketService) {
                    this.router = router;
                    this.marketService = marketService;
                }
                MarketComponent.prototype.getMarketDetails = function () {
                    this.marketService.getMarketData();
                };
                MarketComponent.prototype.ngOnInit = function () {
                    this.getMarketDetails();
                };
                MarketComponent = __decorate([
                    core_1.Component({
                        selector: 'stock-market',
                        templateUrl: 'app/pricing/market/market.component.html',
                        styleUrls: ['app/pricing/market/market.component.css'],
                        providers: [market_service_1.MarketService]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, market_service_1.MarketService])
                ], MarketComponent);
                return MarketComponent;
            }());
            exports_1("MarketComponent", MarketComponent);
        }
    }
});
//# sourceMappingURL=market.component.ts.LOCAL.js.map