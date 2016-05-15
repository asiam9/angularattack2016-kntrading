import {Component,OnInit,ElementRef} from '@angular/core';
import {MarketService} from '../shared/market.service';
import {MarketSymbol} from '../shared/market-symbol';
import {StockTimer} from '../shared/StockTimer';
import {OrderBy} from './orderby.pipe';



declare var Rainbow: any;
declare var jQuery: any;
declare var CanvasJS: any;

@Component({
  selector: 'heatmap',
  templateUrl : 'app/pricing/heatmap/heatmap.component.html',
  styleUrls:  ['app/pricing/heatmap/heatmap.component.css'],
  providers: [MarketService],
  pipes: [OrderBy]
})


export class HeatMapComponent implements OnInit {
  stockTimer:StockTimer;
  rainbow : any;
  boxHeight : number = 33.5;
  boxWidth : number = 33.5;
  symbolsList :MarketSymbol[];
  zoomDegree : number;
  jQuery: any;
  boxMargin:number;
  chart:any;

  constructor(private symbolService: MarketService ,public element:ElementRef) {
    this.rainbow = new Rainbow();
    this.symbolsList = symbolService.getMarketSymbols();
    this.zoomDegree = 1;
    this.boxMargin = .9;
  }
  ngOnInit() {
    this.symbolsList.sort(function(a, b) {
      return b.changePercent - a.changePercent;
    });
    this.rainbow.setSpectrum('#00d96e','#FFFFFF', '#FF0000');
    this.rainbow.setNumberRange(0,this.symbolsList.length);
    this.boxHeight = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    this.stockTimer = new StockTimer(this.symbolsList);
    this.stockTimer.start();
  }
  zoomIn(){
    if(this.zoomDegree === 1)
      this.zoomDegree = 3;
    else if( this.zoomDegree === 3)
      this.zoomDegree = 13;
    else
      return;
    if(this.zoomDegree !== 13){
      this.boxHeight = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
      this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    }else{
      this.boxHeight = jQuery(".bodyContainer").height() * .95 ;
      this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
      let vm = this;
      setTimeout(function(){
      for(let i = 0; i < vm.symbolsList.length;i++){
        vm.chart = new CanvasJS.Chart(vm.symbolsList[i].name+i, {
          theme: "theme2",
          title:{
          text: vm.symbolsList[i].name
          },
          animationEnabled: true,
          axisX: {
            valueFormatString: "MMM",
            interval:1,
            intervalType: "month"
          },
          axisY:{
          includeZero: false
        },data: [
          {
            type: "line",
            //lineThickness: 3,
            dataPoints: [
            { x: new Date(2012, 0, 1), y: 450 },
            { x: new Date(2012, 1, 1), y: 414},
            { x: new Date(2012, 2, 1), y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle"},
            { x: new Date(2012, 3, 1), y: 460 },
            { x: new Date(2012, 4, 1), y: 450 },
            { x: new Date(2012, 5, 1), y: 500 },
            { x: new Date(2012, 6, 1), y: 480 },
            { x: new Date(2012, 7, 1), y: 480 },
            { x: new Date(2012, 8, 1), y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
            { x: new Date(2012, 9, 1), y: 500 },
            { x: new Date(2012, 10, 1), y: 480 },
            { x: new Date(2012, 11, 1), y: 510 }
            ]
          }]});
          vm.chart.render();
        }
      },200);
    }
  }
  zoomOut(){
    if(this.zoomDegree === 13)
    this.zoomDegree = 3;
    else if( this.zoomDegree === 3)
    this.zoomDegree = 1;
    else
    return;
    this.boxHeight = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
  }

  getChange(symbol : MarketSymbol){
    if(symbol.changeDirection === 1)
    return "app/img/up.png";
    else if (symbol.changeDirection === 0)
    return "app/img/down.png";
  }
}
