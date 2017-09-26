import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BaseConfig } from '../common/baseConfig';
import { AuthenticationService } from './auth.service';
import { GlobalErrorHandler } from '../common/globalErrorHandler.service';

@Injectable()
export class WorkService {
    constructor(private http: Http, private baseConfig: BaseConfig, private authenticationService: AuthenticationService, private globalErrorHandler: GlobalErrorHandler) {
        
    }

    options = this.baseConfig.getBaseHttpConfiguration();
}
