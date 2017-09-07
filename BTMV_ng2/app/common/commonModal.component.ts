import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Component({
    selector: 'common-modal',
    template: `
        <div id="common-modal" #modalContainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title"> {{title}} </h4>
                    </div>
                    <div class="modal-body">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body {  min-height: 680px;}
    `]
})

export class CommonModalComponent {
    @Input() title: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor( @Inject(JQ_TOKEN) private $: any) { }

    //closeModal() {
    //    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
    //        this.$(this.containerEl.nativeElement).modal('hide');
    //    }
    //}
}