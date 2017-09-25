import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'app/dashboard/profile.component.html'
})

export class ProfileComponent {
    constructor() {
        console.log('profile');
        alert('ok');
    }

}