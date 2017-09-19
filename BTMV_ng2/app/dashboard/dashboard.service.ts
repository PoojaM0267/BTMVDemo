//import { Http, Headers, Response, RequestOptions } from '@angular/http';
//import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';

//import { User } from '../models/userModel';
//import { BaseConfig } from '../common/baseConfig';
//import { AuthenticationService } from '../_Services/auth.service';

//@Injectable()
//export class DashboardService {
//    constructor(private http: Http, private baseConfig: BaseConfig, private authenticationService: AuthenticationService) {
//        console.log(this.authenticationService.token);
//    }
//    options = this.baseConfig.getBaseHttpConfiguration();   

//    getUser(userId: number) : Observable<any>
//    {
//        //debugger;
//        let params = { Id: userId }; 
//        this.options.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

//        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
//            .map(response => {
//               // debugger;
//                var res = response.json();
//                return res;
//            })
//            .catch(error => {
//                return null;
//            }) 
//    }
//}




