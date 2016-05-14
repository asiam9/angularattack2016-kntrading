import {Component,OnInit} from '@angular/core';
import {SymbolsService} from '../../shared/symbol.service';
import {Symbol} from '../../shared/symbol';

declare var Rainbow: any;

@Component({
  selector: 'heatmap',
  templateUrl : 'app/pricing/heatmap/heatmap.component.html',
  providers: [SymbolsService]
})


export class HeatMapComponent implements OnInit {
rainbow : any;
boxHeight : number = 20;
boxWidth : number = 20;
symbolsList :Symbol[];
constructor(private symbolService: SymbolsService) {
  this.rainbow = new Rainbow();
  symbolService.getSymbolsList().then(symbolsList => this.symbolsList = symbolsList);
}
ngOnInit() {
  this.rainbow.setSpectrum('#FF0000','#FFFFFF', '#00FF00');
  this.rainbow.setNumberRange(0,this.symbolsList.length);
}
zoomIn(){
  if(this.boxHeight > 100){
    this.boxHeight = this.boxHeight+20;
  }
  if(this.boxWidth > 100){
    this.boxWidth = this.boxWidth+20;
  }
}
zoomOut(){
  if(this.boxHeight > 20){
    this.boxHeight = this.boxHeight-20;
  }
  if(this.boxWidth > 20){
    this.boxWidth = this.boxWidth-20;
  }
}
}
