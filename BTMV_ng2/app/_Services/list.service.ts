import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { State } from '../models/state';
import { City } from '../models/city';
import { Occupation } from '../models/occupation';
import { BaseConfig } from '../common/baseConfig';

@Injectable()
export class ListService {
    cities: City[];

    constructor(private http: Http, private baseConfig: BaseConfig) { }

    options = this.baseConfig.getBaseHttpConfiguration();

    // Get all states
    getStates() {
        //debugger;
        return this.http.get('/api/Common/GetAllStates').map(response => response.json());
    }

    // Get all cities based on state
    getCities(stateId: number) {
        try {
            let body = { stateId: stateId };
            
            return this.http.post('/api/Common/GetCitiesByState', JSON.stringify(body), this.options).map(response => response.json());
        }

        catch (Ex) {
            console.log(JSON.stringify(Ex));
        }

    }

    // Get all occupations
    getOccupations() {
        return this.http.get('/api/Common/GetAllOccupations').map(response => response.json());
    }

    // Get all departments
    getDepartments() {
        //debugger;
        return this.http.get('/api/Common/GetAllDepartments').map(response => response.json());
    }
}