System.register(['@angular/core', '../shared/orders.service'], function(exports_1, context_1) {
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
    var core_1, orders_service_1;
    var OrderMonitorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            }],
        execute: function() {
            OrderMonitorComponent = (function () {
                function OrderMonitorComponent(ordersService) {
                    this.ordersService = ordersService;
                }
                OrderMonitorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ordersService.getOrders().then(function (orders) { return _this.orderList = orders; });
                };
                OrderMonitorComponent = __decorate([
                    core_1.Component({
                        selector: 'order-monitor',
                        templateUrl: 'app/orders/order-monitor/order-monitor.component.html',
                        providers: [orders_service_1.OrdersService]
                    }), 
                    __metadata('design:paramtypes', [orders_service_1.OrdersService])
                ], OrderMonitorComponent);
                return OrderMonitorComponent;
            }());
            exports_1("OrderMonitorComponent", OrderMonitorComponent);
        }
    }
});
//# sourceMappingURL=order-monitor.component.js.map