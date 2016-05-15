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
                    this.symbolsList.sort(function (a, b) {
                        return b.changePercent - a.changePercent;
                    });
                    this.rainbow.setSpectrum('#00d96e', '#FFFFFF', '#FF0000');
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
                        this.boxHeight = jQuery(".bodyContainer").height() * .95;
                        this.boxWidth = (window.innerWidth * this.boxMargin) / (13 / this.zoomDegree);
                        var vm_1 = this;
                        setTimeout(function () {
                            for (var i = 0; i < vm_1.symbolsList.length; i++) {
                                vm_1.chart = new CanvasJS.Chart(vm_1.symbolsList[i].name + i, {
                                    theme: "theme2",
                                    title: {
                                        text: vm_1.symbolsList[i].name
                                    },
                                    animationEnabled: true,
                                    axisX: {
                                        valueFormatString: "MMM",
                                        interval: 1,
                                        intervalType: "month"
                                    },
                                    axisY: {
                                        includeZero: false
                                    }, data: [
                                        {
                                            type: "line",
                                            //lineThickness: 3,
                                            dataPoints: [
                                                { x: new Date(2012, 0, 1), y: 450 },
                                                { x: new Date(2012, 1, 1), y: 414 },
                                                { x: new Date(2012, 2, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
                                                { x: new Date(2012, 3, 1), y: 460 },
                                                { x: new Date(2012, 4, 1), y: 450 },
                                                { x: new Date(2012, 5, 1), y: 500 },
                                                { x: new Date(2012, 6, 1), y: 480 },
                                                { x: new Date(2012, 7, 1), y: 480 },
                                                { x: new Date(2012, 8, 1), y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                                                { x: new Date(2012, 9, 1), y: 500 },
                                                { x: new Date(2012, 10, 1), y: 480 },
                                                { x: new Date(2012, 11, 1), y: 510 }
                                            ]
                                        }] });
                                vm_1.chart.render();
                            }
                        }, 200);
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
                HeatMapComponent.prototype.getChange = function (symbol) {
                    if (symbol.changeDirection == '+')
                        return "app/img/up.png";
                    else if (symbol.changeDirection == '-')
                        return "app/img/down.png";
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