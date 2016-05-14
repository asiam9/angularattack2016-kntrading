import {Component,OnInit} from '@angular/core';

declare var Rainbow: any;

@Component({
  selector: 'heatmap',
  templateUrl : 'heatmap.component.html'
})


export class HeatMapComponent implements OnInit {
rainbow : any;
constructor() {
  this.rainbow = new Rainbow();
}
ngOnInit() {
  this.rainbow.setSpectrum('#FF0000','#FFFFFF', '#00FF00');
  this.rainbow.setNumberRange(0,100);
}
}
