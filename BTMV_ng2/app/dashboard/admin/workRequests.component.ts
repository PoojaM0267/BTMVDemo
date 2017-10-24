import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City, Department, State, IWorkModel } from '../../models/index';
import { WorkService } from '../../_Services/index';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'workRequests',
    templateUrl: 'app/dashboard/admin/workRequests.component.html',
})

export class WorkRequestsComponent {
    works: IWorkModel[];
    cols: any[];
    hasErrorMessage: boolean = false;
    errorMessage: string;

    constructor(private workService: WorkService, private router: Router, private confirmationService: ConfirmationService) { }

    ngOnInit() {

        this.refreshWorkRequests();

    //    this.cols = [
    //        { field: 'workTitle', header: 'Title' },
    //        { field: 'aim', header: 'Aim' },
    //        { field: 'departmentName', header: 'Department Name' },
    //        { field: 'fundRequired', header: 'Fund Required' },
    //        { field: 'fundUsed', header: 'Fund Used' },
    //        { field: 'cityName', header: 'City' },
    //        { field: 'stateName', header: 'State' },
    //        { field: 'addedOn', header: 'Added On' },
    //        { field: 'addedBy', header: 'Added By' },
    //    ];    

    //this.workService.getWorkRequests().subscribe(
    //data => {
    //     debugger;
    //    console.log(data);
    //    let isSuccess = data.isSuccess;
    //    let message = data.message;
    //    let workRequests = data.workRequests;

    //    if (isSuccess && workRequests != null) {
    //        this.works = workRequests
    //    }
    //    else {
    //        // show error
    //        this.hasErrorMessage = true;
    //        this.errorMessage = message;
    //    }
    //},
    //error => {
    //    // show error
    //    this.hasErrorMessage = true;
    //    this.errorMessage = 'Something went wrong. Please try again later.';

    //    if (error.message === "403") {
    //        alert('Not authenticate User.');
    //        this.router.navigate(['/home']);
    //    }
    //});
    }

    confirmRejectWork(work: IWorkModel)
    {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to reject this work?',
            accept: () => {
                this.rejectWork(work);
            }
        });
    }

    rejectWork(work)
    {
        this.workService.rejectWorkRequest(work.id).subscribe(
            data => {
                //debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;
                alert(message);
                if (isSuccess) {
                   this.ngOnInit();
                    //this.refreshWorkRequests();
                }
            },
            error => {
              //  debugger;
                this.hasErrorMessage = true;
                this.errorMessage = 'Something went wrong. Please try again later.';

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    approveWork() {

    }

    refreshWorkRequests() {
        //debugger;
        this.cols = [
            { field: 'workTitle', header: 'Title' },
            { field: 'aim', header: 'Aim' },
            { field: 'departmentName', header: 'Department Name' },
            { field: 'fundRequired', header: 'Fund Required' },
            { field: 'fundUsed', header: 'Fund Used' },
            { field: 'cityName', header: 'City' },
            { field: 'stateName', header: 'State' },
            { field: 'addedOn', header: 'Added On' },
            { field: 'addedBy', header: 'Added By' },
        ];

        this.workService.getWorkRequests().subscribe(
            data => {
               // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;
                let workRequests = data.workRequests;

                if (isSuccess && workRequests != null) {
                    this.works = workRequests
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
}