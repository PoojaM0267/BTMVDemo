import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

    public currentUser: any;
    //private authStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    //set authenticated(status: boolean) {
    //    this.authStatus$.next(status);
    //}

    //get isAuthenticated(): Observable<boolean> {
    //    return this.authStatus$.asObservable();
    //}

    constructor(private http: Http, private router: Router) { 
        //debugger;       
        let user = localStorage.getItem('BTMV_currentUser');
        this.currentUser = JSON.parse(user);
        console.log(this.currentUser);
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
        //this.authStatus$.next(false);
        this.router.navigate(['/home']);
    }
}

//return !!this.currentUser;