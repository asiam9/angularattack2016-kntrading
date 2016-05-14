import {Component,OnInit,ElementRef} from '@angular/core';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';


declare var Rainbow: any;
declare var jQuery: any;
declare var CanvasJS: any;

@Component({
  selector: 'heatmap',
  templateUrl : 'app/pricing/heatmap/heatmap.component.html',
  styleUrls:  ['app/pricing/heatmap/heatmap.component.css'],
  providers: [SymbolsService]
})


export class HeatMapComponent implements OnInit {
  rainbow : any;
  boxHeight : number = 33.5;
  boxWidth : number = 33.5;
  symbolsList :Symbol[];
  zoomDegree : number;
  jQuery: any;
  boxMargin:number;
  chart:any;

  constructor(private symbolService: SymbolsService ,public element:ElementRef) {
    this.rainbow = new Rainbow();
    symbolService.getSymbolsList().then(symbolsList => this.symbolsList = symbolsList);
    this.zoomDegree = 1;
    this.boxMargin = .9;
  }
  ngOnInit() {
    this.symbolsList.sort(function(a, b) {
      return b.changePercent - a.changePercent;
    });
    this.rainbow.setSpectrum('#00FF00','#FFFFFF', '#FF0000');
    this.rainbow.setNumberRange(0,this.symbolsList.length);
    this.boxHeight = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
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

  getChange(symbol : Symbol){
    if(symbol.changeDirection == '+')
    return "app/img/up.png";
    else if (symbol.changeDirection == '-')
    return "app/img/down.png";
  }
}
