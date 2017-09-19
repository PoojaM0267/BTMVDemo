//import { Http, Headers, Response, RequestOptions } from '@angular/http'
//import { Injectable, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Rx'
//import { State } from '../models/state'
//import { City } from '../models/city'
//import { Occupation } from '../models/occupation'
//@Injectable()
//export class ListService {  
//    cities: City[];
//    constructor(private http: Http) { }     
//    getStates() {
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//        return this.http.get('/api/Account/GetAllStates').map(response => response.json());               
//    }
//    getCities(stateId: number) {
//        try {
//            let headers = new Headers({ 'Content-Type': 'application/json' });
//            let options = new RequestOptions({ headers: headers });
//            let body = { stateId: stateId }
//            // return this.http.get('/api/Account/GetAllCities').map(response => response.json());
//            return this.http.post('/api/Account/GetCitiesByState', JSON.stringify(body), options).map(response => response.json());
//        }
//        catch (Ex) {
//            console.log(JSON.stringify(Ex));
//        }
//    }
//    getOccupations() {
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//        return this.http.get('/api/Account/GetAllOccupations').map(response => response.json()); 
//    }
//} 
//# sourceMappingURL=list.service.js.map