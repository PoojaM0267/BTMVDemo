import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { IUserProfile } from '../models/userProfile'


@Injectable()
export class AuthenticationService {

    public currentUser: any;
    //public token: string;
    //public currentUsername: string; 

    constructor(private http: Http, private router: Router) { 
       // debugger;       
        let user = localStorage.getItem('BTMV_currentUser');
        this.currentUser = JSON.parse(user);
        console.log(this.currentUser);

        //this.token = this.currentUser.token;
        //this.currentUsername = this.currentUser.username;
    }

    checkAuthenticationStatus() {
        let user = localStorage.getItem('BTMV_currentUser');
        this.currentUser = JSON.parse(user);
        console.log(this.currentUser);
    }

    isAuthenticated() {
        let user = localStorage.getItem('BTMV_currentUser');
        this.currentUser = JSON.parse(user);
        return !!this.currentUser;
    }

    logout(): void {
        this.currentUser = null;
        localStorage.removeItem('BTMV_currentUser');
        this.router.navigate(['/home']);
    }
}