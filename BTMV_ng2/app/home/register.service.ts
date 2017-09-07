import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'

import { User } from '../models/userModel'

@Injectable()
export class RegisterService {
    constructor(private http: Http) { }

    registerUser(userInfo : User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), options).do(resp => {
            if (resp.ok) {
                debugger;
                alert("user registered");
                console.log('user registered');
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }
}


