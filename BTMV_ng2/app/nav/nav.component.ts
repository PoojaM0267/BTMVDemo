import { Component } from '@angular/core'

import { AuthenticationService } from '../_Services/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav.component.html'
})

export class NavComponent {
    constructor(private auth: AuthenticationService){}
}