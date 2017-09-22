import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[commonModal-trigger]'  // this is an attribute and not an element
})

export class CommonModalTriggerDirective {

    private el: HTMLElement;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }
    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#common-modal').modal({})
        });
    }
}