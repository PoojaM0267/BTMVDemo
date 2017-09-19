import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//import { Cookie } from 'ng2-cookies';

import { User } from '../models/userModel';
import { UserLoginModel } from '../models/userLoginModel';
import { BaseConfig } from '../common/baseConfig';

@Injectable()
export class AccountService {
    constructor(private http: Http, private baseConfig: BaseConfig) { }

    options = this.baseConfig.getBaseHttpConfiguration();

    registerUser(userInfo: User): Observable<any> {
        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), this.options)
            .map(response => response.json())

            .catch(error => {
                return Observable.of(false);
            })
    }

    loginUser(userLoginInfo: UserLoginModel): Observable<any> {
        // debugger;
        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), this.options)
            .map(response => {
                //debugger;
                var res = response.json();
                console.log(res.jwtToken);
                localStorage.setItem('BTMV_currentUser', res.jwtToken);
                //Cookie.set('BTMV_currentUser', res.jwtToken, 0.0138889, "/", "http://localhost:54745", true);
                return res;
            })
            .catch(error => {
                return Observable.of(false);
            })
    }
}


