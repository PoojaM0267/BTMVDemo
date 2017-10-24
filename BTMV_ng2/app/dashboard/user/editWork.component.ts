import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IWorkModel, Department, State, City } from '../../models/index';
import { ListService, WorkService } from '../../_Services/index';

@Component({
    selector: 'edit-Work',
    templateUrl: 'app/dashboard/user/editWork.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 550px;}
    `],
    providers: [ListService]
})

export class EditWorkComponent
{
    workEditForm: FormGroup;

    id: FormControl;
    workTitle: FormControl;
    aim: FormControl;
    stateId: FormControl;
    cityId: FormControl;
    // departmentId: FormControl;
    fundRequired: FormControl;
    selectedState: State = new State(0, 'Select State');
    states: State[];
    cities: City[];
   // departments: Department[];

    isWorkEdited: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;

    constructor(private listService: ListService, private workService: WorkService, private router: Router) {
        console.log('Edit Work');
        this.listService.getStates().subscribe(
            states => this.states = states
        );

        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //); 
    }

    ngOnInit() {
        this.workTitle = new FormControl('', Validators.required);
        this.aim = new FormControl('', Validators.required);
        this.stateId = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);
        // this.departmentId = new FormControl('', Validators.required);
        this.fundRequired = new FormControl('');
        this.id = new FormControl(''); 


        this.workEditForm = new FormGroup({
            workTitle: this.workTitle,
            aim: this.aim,
            stateId: this.stateId,
            cityId: this.cityId,
            // departmentId: this.departmentId,
            fundRequired: this.fundRequired,
            id: this.id
        });
    }

    editWork(formValues) {
        //debugger;
        alert('edit Work');
        let result = this.workService.editWork(formValues).subscribe(
            data => {
                //debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                    //debugger;
                    this.isWorkEdited = true;
                    this.successMessage = message;
                    this.hasErrorMessage = false;
                    this.resetForm();
                    
                }
                else {
                    // debugger;                    
                    this.isWorkEdited = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }
            },
            error => {
                // show error msg
                this.hasErrorMessage = true;
                this.errorMessage = 'Something went wrong. Please try again later.';

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    resetForm() {
        //debugger;
        this.workEditForm.reset();
        this.isWorkEdited = false;
        this.hasErrorMessage = false;
    }

}