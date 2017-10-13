import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        //debugger;
        if (localStorage.getItem('BTMV_currentUser')) {
            // user logged in so return true
            return true;
        }

        //if user is not logged in so redirect to login page
        this.router.navigate(['/home']);
        return false;
    }
}