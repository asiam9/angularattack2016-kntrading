System.register(["@angular/core", './mock-orders'], function(exports_1, context_1) {
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
    var core_1, mock_orders_1;
    var OrderNumberSequence;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_orders_1_1) {
                mock_orders_1 = mock_orders_1_1;
            }],
        execute: function() {
            OrderNumberSequence = (function () {
                function OrderNumberSequence() {
                }
                OrderNumberSequence.prototype.getNextOrderNumber = function () {
                    var nextSequence = 1;
                    for (var index in mock_orders_1.ORDERS) {
                        nextSequence = mock_orders_1.ORDERS[index].id > nextSequence ? mock_orders_1.ORDERS[index].id : nextSequence;
                    }
                    return nextSequence + 1;
                };
                OrderNumberSequence = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OrderNumberSequence);
                return OrderNumberSequence;
            }());
            exports_1("OrderNumberSequence", OrderNumberSequence);
        }
    }
});
//# sourceMappingURL=order-number-sequence.service.js.map