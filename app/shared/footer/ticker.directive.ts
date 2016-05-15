import { Directive, ElementRef, OnInit} from '@angular/core';
declare var jQuery:any;
@Directive({ selector: '[myTicker]' })
export class TickerDirective implements OnInit{
    private  el:ElementRef;
    constructor(el: ElementRef) {
        this.el = el;

    }

    ngOnInit():any{
        jQuery(this.el.nativeElement).webTicker();
    }
}