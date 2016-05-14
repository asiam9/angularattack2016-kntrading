System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlikerItem;
    return {
        setters:[],
        execute: function() {
            FlikerItem = (function () {
                function FlikerItem(value) {
                    this.value = value;
                    this.changeDirection = 0;
                    this.changeDirectionImage = '../app/pricing/market/down.png';
                }
                FlikerItem.prototype.setFlicketValue = function (newValue) {
                    this.updateChangeValue(this.value, newValue);
                    this.value = newValue;
                };
                FlikerItem.prototype.updateChangeValue = function (oldValue, newValue) {
                    if (oldValue < newValue) {
                        this.changeDirection = 0;
                        this.changeDirectionImage = '../app/pricing/market/down.png';
                    }
                    else if (oldValue > newValue) {
                        this.changeDirection = 1;
                        this.changeDirectionImage = '../app/pricing/market/up.png';
                    }
                };
                return FlikerItem;
            }());
            exports_1("FlikerItem", FlikerItem);
        }
    }
});
//# sourceMappingURL=fliker-item.js.map