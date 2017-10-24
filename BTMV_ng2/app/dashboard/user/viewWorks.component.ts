import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { City, Department, State, IWorkModel } from '../../models/index';
import { WorkService } from '../../_Services/index';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'viewWorks',
    templateUrl: 'app/dashboard/user/viewWorks.component.html',    
})
export class ViewWorkComponent {

    works: IWorkModel[];
    cols: any[];
    hasErrorMessage: boolean = false;
    errorMessage: string;

    constructor(private workService: WorkService, private router: Router, private confirmationService: ConfirmationService) { }

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
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }
            },
             error => {
               // show error
                this.hasErrorMessage = true;
                this.errorMessage = 'Something went wrong. Please try again later.';

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }    

    // Delete selected work
    deleteWork(work: IWorkModel) {
        //debugger;
        alert('delete Work');
        console.log(work);
        this.workService.deleteWork(work.id).subscribe(
            data => {
                //debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;
                alert(message);
                if (isSuccess)
                {
                   // debugger;
                    this.ngOnInit();
                    //this.router.navigate(['/works']);
                }
            },
            error => {
                this.hasErrorMessage = true;
                this.errorMessage = 'Something went wrong. Please try again later.';

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    confirmDelete(work: IWorkModel)
    {
        //debugger;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this work?',
            accept: () => {
                this.deleteWork(work);
            }
        });
    }
}
