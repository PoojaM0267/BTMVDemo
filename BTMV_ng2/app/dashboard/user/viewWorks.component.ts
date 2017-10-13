import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { State } from '../../models/state';
import { City } from '../../models/city';
import { Department } from '../../models/department';
import { IWorkModel } from '../../models/workModel';
import { WorkService } from '../../_Services/index';

@Component({
    selector: 'viewWorks',
    templateUrl: 'app/dashboard/user/viewWorks.component.html',    
})
export class ViewWorkComponent {

    works: IWorkModel[];
    cols: any[];

    constructor(private workService: WorkService) { }

    ngOnInit() {
        this.cols = [
            { field: 'workTitle', header: 'Title' },
            { field: 'aim', header: 'Aim' },
            { field: 'departmentName', header: 'Department Name' },
            { field: 'workStatus', header: 'Status' },
            { field: 'fundRequired', header: 'Fund Required' },
            { field: 'fundGranted', header: 'Fund Granted' },
            { field: 'fundUsed', header: 'Fund Used' },
            { field: 'cityName', header: 'City' },
            { field: 'stateName', header: 'State' },
            { field: 'addedOn', header: 'Added On' },
        ];
        
        this.workService.getUserWorks().subscribe(           
             data => {
               // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;
                let userWorks = data.userWorks;

                if (isSuccess && userWorks != null) {
                    this.works = userWorks
                }
                else {
                   // show error
                }
            },
            err => {
               // show error
            });
    }
}
