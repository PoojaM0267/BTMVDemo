import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BaseConfig } from '../common/baseConfig';
import { IWorkModel } from '../models/workModel';
import { AuthenticationService } from './auth.service';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service';

@Injectable()
export class WorkService {

    constructor(private http: Http, private baseConfig: BaseConfig, private authenticationService: AuthenticationService, private globalErrorHandler: GlobalErrorHandler) {}

    options = this.baseConfig.getBaseHttpConfiguration();

    // Add new work
    addWork(workDetails: IWorkModel): Observable<any> {
        debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            workDetails.userId = currentUser.userId;
        }  

        return this.http.post('/api/User/AddWork', JSON.stringify(workDetails), this.options)
            .map(response => {
                debugger;
                var res = response.json();                
                return res;
            })
            .catch(error => {
                return Observable.of(false);
            })
    }

    // Get individual works
    getUserWorks(): Observable<any> {
        //debugger;
        let user = localStorage.getItem('BTMV_currentUser'); 
        let param;     
        if (user) {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            param = { Id: currentUser.userId };
        }

        return this.http.post('/api/User/GetUserWorks', JSON.stringify(param), this.options)
            .map(response => {
                //debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(error => {
                return Observable.of(false);
            }) 
    }
}
