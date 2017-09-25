import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'addWork',
    templateUrl: 'app/dashboard/common/addWork.component.html'
})

export class AddWorkComponent {
    constructor() {
        console.log('Add Work');
    }
}