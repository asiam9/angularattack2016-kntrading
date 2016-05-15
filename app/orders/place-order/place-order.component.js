System.register(["@angular/core", '../shared/order', '../../pricing/shared/market.service', '../shared/orders.service', 'ng2-bootstrap/ng2-bootstrap', '../../shared/sequence-generator.service'], function(exports_1, context_1) {
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
    var core_1, order_1, market_service_1, orders_service_1, ng2_bootstrap_1, sequence_generator_service_1;
    var PlaceOrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (order_1_1) {
                order_1 = order_1_1;
            },
            function (market_service_1_1) {
                market_service_1 = market_service_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (sequence_generator_service_1_1) {
                sequence_generator_service_1 = sequence_generator_service_1_1;
            }],
        execute: function() {
            PlaceOrderComponent = (function () {
                function PlaceOrderComponent(marketService, ordersService, sequenceGenerator) {
                    this.marketService = marketService;
                    this.ordersService = ordersService;
                    this.sequenceGenerator = sequenceGenerator;
                    this.formSubmitted = false;
                }
                PlaceOrderComponent.prototype.ngOnInit = function () {
                    jQuery('[data-toggle="tooltip"]').tooltip();
                    this.symbolsList = this.marketService.getMarketSymbols();
                };
                PlaceOrderComponent.prototype.getTradeAmount = function () {
                    var tradeAmount = this.quantity * this.price;
                    return (!isNaN(tradeAmount) && tradeAmount > 0 ? tradeAmount : '');
                };
                PlaceOrderComponent.prototype.resetValues = function () {
                    this.symbolId = undefined;
                    this.selectedSymbol = undefined;
                    this.price = undefined;
                    this.quantity = undefined;
                    this.formSubmitted = false;
                };
                PlaceOrderComponent.prototype.symbolSelected = function (element) {
                    this.selectedSymbol = element.item;
                };
                PlaceOrderComponent.prototype.hideModal = function () {
                    jQuery('#myModal').modal('hide');
                };
                PlaceOrderComponent.prototype.addOrder = function (isBus) {
                    this.formSubmitted = true;
                    if (this.selectedSymbol) {
                        this.ordersService.addOrder(new order_1.Order(this.selectedSymbol, this.quantity, this.price, isBus, this.sequenceGenerator.getNextSequence('order')));
                        this.resetValues();
                        this.hideModal();
                    }
                };
                PlaceOrderComponent = __decorate([
                    core_1.Component({
                        selector: '[place-order]',
                        templateUrl: 'app/orders/place-order/place-order.component.html',
                        styleUrls: ['app/orders/place-order/place-order.component.css'],
                        directives: [ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES],
                        providers: [market_service_1.MarketService, orders_service_1.OrdersService, sequence_generator_service_1.SequenceGeneratorService]
                    }), 
                    __metadata('design:paramtypes', [market_service_1.MarketService, orders_service_1.OrdersService, sequence_generator_service_1.SequenceGeneratorService])
                ], PlaceOrderComponent);
                return PlaceOrderComponent;
            }());
            exports_1("PlaceOrderComponent", PlaceOrderComponent);
        }
    }
});
//# sourceMappingURL=place-order.component.js.map