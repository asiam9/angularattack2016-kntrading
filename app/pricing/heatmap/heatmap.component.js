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
                function HeatMapComponent(symbolService, element) {
                    var _this = this;
                    this.symbolService = symbolService;
                    this.element = element;
                    this.boxHeight = 33.5;
                    this.boxWidth = 33.5;
                    this.rainbow = new Rainbow();
                    symbolService.getSymbolsList().then(function (symbolsList) { return _this.symbolsList = symbolsList; });
                    this.zoomDegree = 1;
                    this.boxMargin = .9;
                }
                HeatMapComponent.prototype.ngOnInit = function () {
                    this.rainbow.setSpectrum('#00FF00', '#FFFFFF', '#FF0000');
                    this.rainbow.setNumberRange(0, this.symbolsList.length);
                    this.boxHeight = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                    this.boxWidth = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                };
                HeatMapComponent.prototype.zoomIn = function () {
                    if (this.zoomDegree === 1)
                        this.zoomDegree = 3;
                    else if (this.zoomDegree === 3)
                        this.zoomDegree = 13;
                    else
                        return;
                    if (this.zoomDegree !== 13) {
                        this.boxHeight = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                        this.boxWidth = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                    }
                    else {
                        console.log(jQuery(".bodyContainer").height() * .95);
                        this.boxHeight = jQuery(".bodyContainer").height() * .95;
                        this.boxWidth = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                    }
                };
                HeatMapComponent.prototype.zoomOut = function () {
                    if (this.zoomDegree === 13)
                        this.zoomDegree = 3;
                    else if (this.zoomDegree === 3)
                        this.zoomDegree = 1;
                    else
                        return;
                    this.boxHeight = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                    this.boxWidth = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                };
                HeatMapComponent = __decorate([
                    core_1.Component({
                        selector: 'heatmap',
                        templateUrl: 'app/pricing/heatmap/heatmap.component.html',
                        styleUrls: ['app/pricing/heatmap/heatmap.component.css'],
                        providers: [symbol_service_1.SymbolsService]
                    }), 
                    __metadata('design:paramtypes', [symbol_service_1.SymbolsService, core_1.ElementRef])
                ], HeatMapComponent);
                return HeatMapComponent;
            }());
            exports_1("HeatMapComponent", HeatMapComponent);
        }
    }
});
//# sourceMappingURL=heatmap.component.js.map