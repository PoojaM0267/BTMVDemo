import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//import { User } from '../models/userModel';
import { BaseConfig } from '../common/baseConfig';
import { AuthenticationService } from './auth.service';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service'

@Injectable()
export class DashboardService {
    constructor(private http: Http,
        private baseConfig: BaseConfig,
        private authenticationService: AuthenticationService,
        private globalErrorHandler: GlobalErrorHandler) {
        console.log(this.authenticationService.token);
    }
    options = this.baseConfig.getBaseHttpConfiguration();

    getUser(userId: number): Observable<any> {
        //debugger;
        let params = { Id: userId };
        if (this.authenticationService.token)
        {
            this.options.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        }       

        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
            .map(response => {
                //debugger;
                var res = response.json();
                console.log(res);
                return res;
            })
            .catch(this.globalErrorHandler.handleError);
           // .catch(this.handleError);
            //.catch(error => {
            //    debugger;
            //    return Observable.throw(new Error(error.status));
           // })
    }

    //private handleError(error: Response) {
    //    return Observable.throw(error.statusText);
    //}
}




