System.register(['@angular/core', '@angular/router-deprecated', './pricing/market/market.component', './pricing/heatmap/heatmap.component', './watchlist/watchlist.component', './orders/place-order/place-order.component', './orders/order-monitor/order-monitor.component', './shared/footer/footer.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, market_component_1, heatmap_component_1, watchlist_component_1, place_order_component_1, order_monitor_component_1, footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (market_component_1_1) {
                market_component_1 = market_component_1_1;
            },
            function (heatmap_component_1_1) {
                heatmap_component_1 = heatmap_component_1_1;
            },
            function (watchlist_component_1_1) {
                watchlist_component_1 = watchlist_component_1_1;
            },
            function (place_order_component_1_1) {
                place_order_component_1 = place_order_component_1_1;
            },
            function (order_monitor_component_1_1) {
                order_monitor_component_1 = order_monitor_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    jQuery('[data-toggle="tooltip"]').tooltip();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, place_order_component_1.PlaceOrderComponent, footer_component_1.FooterComponent]
                    }),
                    router_deprecated_1.RouteConfig([{
                            path: '/market',
                            name: 'Market',
                            component: market_component_1.MarketComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heatmap',
                            name: 'HeatMap',
                            component: heatmap_component_1.HeatMapComponent
                        },
                        {
                            path: '/watchlist',
                            name: 'Watchlist',
                            component: watchlist_component_1.WatchListComponent
                        },
                        {
                            path: '/orders',
                            name: 'Orders',
                            component: order_monitor_component_1.OrderMonitorComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map