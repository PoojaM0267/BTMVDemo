import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BaseConfig } from '../common/baseConfig';
import { AuthenticationService } from './auth.service';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service';
import { IUserProfile } from '../models/index';

@Injectable()
export class ProfileService {
    constructor(private http: Http, private baseConfig: BaseConfig,
        private authenticationService: AuthenticationService, private globalErrorHandler: GlobalErrorHandler) { }

    options = this.baseConfig.getBaseHttpConfiguration();

    // Get user profile details
    getUserProfile(): Observable<any> {
        debugger;
        let param;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            param = { Id: currentUser.userId };
        }

        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(param), this.options)
            .map(response => {
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);
    } 

    // Edit profile details
    editProfile(userInfo: IUserProfile): Observable<any> {

        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userInfo.userId = currentUser.userId ;
        }

        return this.http.post('/api/Account/EditProfile', JSON.stringify(userInfo), this.options)
            .map(response => {
                //debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);        
    }

    //Edit Basic Profile Details
    editBasicInfo(userBasicInfo: IUserProfile): Observable<any>
    {
        //debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userBasicInfo.userId = currentUser.userId;
        }

        return this.http.post('/api/Account/EditBasicInfo', JSON.stringify(userBasicInfo), this.options)
            .map(response => {
                debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);         
    }

    // Edit Contact Details
    editContactInfo(userContactInfo: IUserProfile): Observable<any>
    {
        //debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userContactInfo.userId = currentUser.userId;
        }

        return this.http.post('/api/Account/EditContactInfo', JSON.stringify(userContactInfo), this.options)
            .map(response => {
                debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);
    }
}