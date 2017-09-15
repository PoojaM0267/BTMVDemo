import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    constructor(private http: Http) {        
        // set token if saved in local storage
        let currentUser = localStorage.getItem('BTMV_currentUser');
        console.log(currentUser);
        this.token = currentUser;
    }

    // TODO: place login service here


    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('BTMV_currentUser');
    }
}