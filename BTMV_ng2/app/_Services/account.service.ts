import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//import { Cookie } from 'ng2-cookies';

import { UserRegisterModel } from '../models/userRegisterModel';
import { UserLoginModel } from '../models/userLoginModel';
import { BaseConfig } from '../common/baseConfig';

@Injectable()
export class AccountService {
    constructor(private http: Http, private baseConfig: BaseConfig) { }

    options = this.baseConfig.getBaseHttpConfiguration();

    registerUser(userInfo: UserRegisterModel): Observable<any> {
        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), this.options)
            .map(response => response.json())
            .catch(error => {
                return Observable.of(false);
            })
    }

    loginUser(userLoginInfo: UserLoginModel): Observable<any> {
        debugger;
        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), this.options)
            .map(response => {
                //debugger;
                var res = response.json();
                console.log(res.jwtToken);  
                //localStorage.setItem('BTMV_currentUser', res.jwtToken);
                localStorage.setItem('BTMV_currentUser', JSON.stringify({ username: userLoginInfo.email, token: res.jwtToken, userId : res.id }));
                return res;
            })
            .catch(error => {
                return Observable.of(false);
            })
    }
}


 


