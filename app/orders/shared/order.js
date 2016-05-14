System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters:[],
        execute: function() {
            Order = (function () {
                function Order(symbolo, quantity, price, id) {
                    this.symbolo = symbolo;
                    this.quantity = quantity;
                    this.price = price;
                    this.id = id;
                }
                ;
                return Order;
            }());
            exports_1("Order", Order);
        }
    }
});
//# sourceMappingURL=order.js.map