import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
    
@Injectable()
export class BaseConfig {
    constructor() {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
    }        

    getBaseHttpConfiguration() {
         let headers = new Headers({ 'Content-Type': 'application/json'});
         //let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json', });
         let options = new RequestOptions({ headers: headers });

         return options;
    }   
}

