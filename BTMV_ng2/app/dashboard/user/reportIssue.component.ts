import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

//import { State } from '../../models/state';
//import { City } from '../../models/city';
//import { Department } from '../../models/department';
import { City, State, Department } from '../../models/index';
import { ListService, WorkService } from '../../_Services/index';

@Component({
    selector: 'reportIssue',
    templateUrl: 'app/dashboard/user/reportIssue.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
    `],
    providers: [ListService]
})

export class ReportIssueComponent {

    reportIssueForm: FormGroup;
    issueTitle: FormControl;
    issueDetails: FormControl;
    stateId: FormControl;
    cityId: FormControl;
    //departmentId: FormControl;
    states: State[];
    cities: City[];
    //departments: Department[];
    selectedState: State = new State(0, 'Select State');

    isIssueAdded: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;

    constructor(private router: Router, private listService: ListService, private workService: WorkService) {
        console.log('Report an Issue ');

        this.listService.getStates().subscribe(
            states => this.states = states
        );

        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //);
    }

    ngOnInit() {
        this.issueTitle = new FormControl('', Validators.required);
        this.issueDetails = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);
        this.stateId = new FormControl('', Validators.required);
        //this.departmentId = new FormControl('', Validators.required);

        this.reportIssueForm = new FormGroup({
            issueTitle: this.issueTitle,
            issueDetails: this.issueDetails,
            stateId: this.stateId,
            cityId: this.cityId,
            //departmentId: this.departmentId
        });
    }

    onSelect(stateId) {
        this.listService.getCities(stateId).subscribe(cities => this.cities = cities);
    }

    // Add Reported Issue
    addIssue(formValues)
    {
        let result = this.workService.addReportedProblem(formValues).subscribe(
            data => {
                //debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                    //debugger;
                    this.isIssueAdded = true;
                    this.successMessage = message;
                    this.hasErrorMessage = false;
                    this.resetForm();
                }
                else {
                    this.isIssueAdded = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }
            },
            error => {
                this.hasErrorMessage = true;
                this.errorMessage = 'Something went wrong.';

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            }              
        );
    }

    // Reset form
    resetForm() {
        this.reportIssueForm.reset();
        this.isIssueAdded = false;
        this.hasErrorMessage = false;
    }
}