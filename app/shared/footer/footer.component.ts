import {Component}  from  '@angular/core';
import { TickerDirective } from './ticker.directive';
@Component({
    selector: 'footer-app',
    templateUrl: 'app/shared/footer/footer.component.html',
    styleUrls:['app/shared/footer/footer.component.css'],
    directives: [TickerDirective]
})
export class FooterComponent {
    constructor() { }
}