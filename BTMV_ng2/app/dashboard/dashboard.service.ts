import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'

import { User } from '../models/userModel'
import { BaseConfig } from '../common/baseConfig'

@Injectable()
export class DashboardService {
    constructor(private http: Http, private baseConfig: BaseConfig) { }
    options = this.baseConfig.getBaseHttpConfiguration();   

    getUser(userId: number) : Observable<any>
    {
       // debugger;
        let params = { Id: userId }

        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
            .map(response => {
               // debugger;
                var res = response.json();
                return res;
            })
            .catch(error => {
                return null;
            }) 
    }
}




