import {Component,OnInit,ElementRef} from '@angular/core';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';


declare var Rainbow: any;
declare var jQuery: any;

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


constructor(private symbolService: SymbolsService ,public element:ElementRef) {
  this.rainbow = new Rainbow();
  symbolService.getSymbolsList().then(symbolsList => this.symbolsList = symbolsList);
  this.zoomDegree = 1;
  this.boxMargin = .9;
}
ngOnInit() {
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

  if(this.zoomDegree !== 13)
  {
    this.boxHeight = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
    this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
  }else{

    console.log(jQuery(".bodyContainer").height() * .95);

    this.boxHeight = jQuery(".bodyContainer").height() * .95 ;
    this.boxWidth = (window.innerWidth * this.boxMargin) / ( 13 / this.zoomDegree);
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
}
