import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'editProfile',
    templateUrl: 'app/dashboard/common/editProfile.component.html'
})

export class EditProfileComponent {
    constructor() {
        console.log('Edit Profile');
    }
}