import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'

import { User } from '../models/userModel'
import { UserLoginModel } from '../models/userLoginModel'

@Injectable()
export class AccountService {
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

    loginUser(userLoginInfo: UserLoginModel)
    {
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), options).do(resp => {
            //if (resp.ok) {
                debugger;
                alert("user logged in");
                console.log(resp);
          //  }
        }).catch(error => {
            return Observable.of(false);
        })
    }
}


