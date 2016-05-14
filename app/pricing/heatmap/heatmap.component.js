System.register(['@angular/core', '../../shared/symbol.service'], function(exports_1, context_1) {
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
    var HeatMapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (symbol_service_1_1) {
                symbol_service_1 = symbol_service_1_1;
            }],
        execute: function() {
            HeatMapComponent = (function () {
                function HeatMapComponent(symbolService) {
                    var _this = this;
                    this.symbolService = symbolService;
                    this.boxHeight = 20;
                    this.boxWidth = 20;
                    this.rainbow = new Rainbow();
                    symbolService.getSymbolsList().then(function (symbolsList) { return _this.symbolsList = symbolsList; });
                }
                HeatMapComponent.prototype.ngOnInit = function () {
                    this.rainbow.setSpectrum('#FF0000', '#FFFFFF', '#00FF00');
                    this.rainbow.setNumberRange(0, 100);
                };
                HeatMapComponent.prototype.zoomIn = function () {
                    if (this.boxHeight > 100) {
                        this.boxHeight = this.boxHeight + 20;
                    }
                    if (this.boxWidth > 100) {
                        this.boxWidth = this.boxWidth + 20;
                    }
                };
                HeatMapComponent.prototype.zoomOut = function () {
                    if (this.boxHeight > 20) {
                        this.boxHeight = this.boxHeight - 20;
                    }
                    if (this.boxWidth > 20) {
                        this.boxWidth = this.boxWidth - 20;
                    }
                };
                HeatMapComponent = __decorate([
                    core_1.Component({
                        selector: 'heatmap',
                        templateUrl: 'heatmap.component.html',
                        providers: [symbol_service_1.SymbolsService]
                    }), 
                    __metadata('design:paramtypes', [symbol_service_1.SymbolsService])
                ], HeatMapComponent);
                return HeatMapComponent;
            }());
            exports_1("HeatMapComponent", HeatMapComponent);
        }
    }
});
//# sourceMappingURL=heatmap.component.js.map