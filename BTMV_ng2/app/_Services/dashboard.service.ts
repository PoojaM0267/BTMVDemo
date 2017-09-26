import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//import { User } from '../models/userModel';
import { BaseConfig } from '../common/baseConfig';
import { AuthenticationService } from './auth.service';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service';

@Injectable()
export class DashboardService {
    constructor(private http: Http, private baseConfig: BaseConfig,
        private authenticationService: AuthenticationService, private globalErrorHandler: GlobalErrorHandler) {

        console.log(this.authenticationService.currentUser);

    }

    options = this.baseConfig.getBaseHttpConfiguration();

    getUser(userId: number): Observable<any> {
        debugger;
        let params = { Id: userId };

        let user = localStorage.getItem('BTMV_currentUser');
        if (user)
        {
            let currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }       

        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
            .map(response => {
                debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);          
    }   
}




