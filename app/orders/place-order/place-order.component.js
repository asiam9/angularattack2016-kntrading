System.register(["@angular/core", '../../shared/symbol.service'], function(exports_1, context_1) {
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
    var core_1, symbol_service_1;
    var PlaceOrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (symbol_service_1_1) {
                symbol_service_1 = symbol_service_1_1;
            }],
        execute: function() {
            PlaceOrderComponent = (function () {
                function PlaceOrderComponent(symbolService) {
                    this.symbolService = symbolService;
                }
                PlaceOrderComponent.prototype.addOrder = function () {
                    var symbol = this.symbolService.getSymbolById(this.symbolId);
                    if (symbol) {
                    }
                };
                PlaceOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'place-order',
                        templateUrl: 'app/orders/place-order/place-order.component.html',
                        providers: [symbol_service_1.SymbolsService]
                    }), 
                    __metadata('design:paramtypes', [symbol_service_1.SymbolsService])
                ], PlaceOrderComponent);
                return PlaceOrderComponent;
            }());
            exports_1("PlaceOrderComponent", PlaceOrderComponent);
        }
    }
});
//# sourceMappingURL=place-order.component.js.map