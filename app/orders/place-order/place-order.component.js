System.register(["@angular/core", '../shared/order', '../../shared/symbol.service', '../shared/orders.service'], function(exports_1, context_1) {
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
    var core_1, order_1, symbol_service_1, orders_service_1;
    var PlaceOrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (order_1_1) {
                order_1 = order_1_1;
            },
            function (symbol_service_1_1) {
                symbol_service_1 = symbol_service_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            }],
        execute: function() {
            PlaceOrderComponent = (function () {
                function PlaceOrderComponent(symbolService, ordersService) {
                    this.symbolService = symbolService;
                    this.ordersService = ordersService;
                }
                PlaceOrderComponent.prototype.getTradeAmount = function () {
                    return (this.quantity * this.price) | undefined;
                };
                PlaceOrderComponent.prototype.resetValues = function () {
                    this.symbolId = undefined;
                    this.price = undefined;
                    this.quantity = undefined;
                };
                PlaceOrderComponent.prototype.addOrder = function (isBus) {
                    var symbol = this.symbolService.getSymbolById(this.symbolId);
                    if (symbol) {
                        this.ordersService.addOrder(new order_1.Order(symbol, this.quantity, this.price, isBus, 2));
                        this.resetValues();
                    }
                };
                PlaceOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'place-order',
                        templateUrl: 'app/orders/place-order/place-order.component.html',
                        providers: [symbol_service_1.SymbolsService, orders_service_1.OrdersService]
                    }), 
                    __metadata('design:paramtypes', [symbol_service_1.SymbolsService, orders_service_1.OrdersService])
                ], PlaceOrderComponent);
                return PlaceOrderComponent;
            }());
            exports_1("PlaceOrderComponent", PlaceOrderComponent);
        }
    }
});
//# sourceMappingURL=place-order.component.js.map