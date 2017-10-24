import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {
    UserRegisterModel,
    UserLoginModel,
    ChangePasswordModel
} from '../models/index';
import { BaseConfig } from '../common/baseConfig';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service';

@Injectable()
export class AccountService {
    constructor(private http: Http, private baseConfig: BaseConfig, private globalErrorHandler: GlobalErrorHandler) { }

    options = this.baseConfig.getBaseHttpConfiguration();

    registerUser(userInfo: UserRegisterModel): Observable<any> {
        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), this.options)
            .map(response => response.json())
            .catch(this.globalErrorHandler.handleError);
    }

    loginUser(userLoginInfo: UserLoginModel): Observable<any> {
        //debugger;
        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), this.options)
            .map(response => {
               // debugger;
                var res = response.json();
                console.log(res.jwtToken);  
                localStorage.setItem('BTMV_currentUser', JSON.stringify({
                    username: userLoginInfo.email,
                    token: res.jwtToken,
                    userId: res.id,
                    roleId: res.roleId,
                    roleName: res.roleName,
                    firstName: res.firstName,
                    lastName: res.lastName
                }));
                return res;
            })
            .catch(this.globalErrorHandler.handleError);
    }

    validateCurrentPassword(currentPassword: ChangePasswordModel)
    {
       // debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            currentPassword.userId = currentUser.userId;
        }

        return this.http.post('/api/Account/ValidateCurrentPassword', JSON.stringify(currentPassword), this.options)
            .map(response => response.json())
            .catch(this.globalErrorHandler.handleError);
    }

    changePassword(passwordDetails: ChangePasswordModel)
    {
        //debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            passwordDetails.userId = currentUser.userId;
        }

        return this.http.post('/api/Account/ChangePassword', JSON.stringify(passwordDetails), this.options)
            .map(response => response.json())
            .catch(this.globalErrorHandler.handleError);
    }

    deleteAccount(): Observable<any>
    {
       // debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        let param;
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);

            param = { Id: currentUser.userId };
        }

        return this.http.post('/api/Account/DeleteUserById', JSON.stringify(param), this.options)
            .map(response => {
              //  debugger;
                var res = response.json();
                return res;
            })
            .catch(this.globalErrorHandler.handleError);

    }
}


 


