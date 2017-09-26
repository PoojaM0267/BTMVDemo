import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { State } from '../../models/state';
import { City } from '../../models/city';
import { Department } from '../../models/department';
import { ListService } from '../../_Services/list.service';
import { IWorkModel } from '../../models/workModel';

@Component({
    selector: 'addWork',
    templateUrl: 'app/dashboard/common/addWork.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
    `],
    providers: [ListService]
})

export class AddWorkComponent {

    addWorkForm: FormGroup; 

    workTitle: FormControl;
    aim: FormControl;
    stateId: FormControl;
    cityId: FormControl;
    departmentId: FormControl;
    fundRequired: FormControl;
    selectedState: State = new State(0, 'Select State');
    selectedDepartment: Department = new Department(0, 'Select Department');
    states: State[];
    cities: City[];
    departments: Department[];

    isWorkAdded: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;
    isSubmitted = false;

    constructor(private listService: ListService) {
        debugger;
        console.log('Add Work');

        this.listService.getStates().subscribe(
            states => this.states = states
        );

        this.listService.getDepartments().subscribe(
            departments => this.departments = departments
        );

        console.log(this.departments); 
    }


    ngOnInit() {
        debugger;
        this.workTitle = new FormControl('', Validators.required);
        this.aim = new FormControl('', Validators.required);
        this.stateId = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);
        this.departmentId = new FormControl('', Validators.required);
        this.fundRequired = new FormControl('');        

        this.addWorkForm = new FormGroup({
            workTitle: this.workTitle,
            aim: this.aim,
            stateId: this.stateId,
            cityId: this.cityId,
            departmentId: this.departmentId,
            fundRequired: this.fundRequired
        });
    }

    onSelect(stateId) {
        this.listService.getCities(stateId).subscribe(cities => this.cities = cities);
    }

    addWork(formValues)
    {
        debugger;
        this.isSubmitted = true;
        console.log(formValues)
    }

    resetForm() {
        this.addWorkForm.reset();
        this.isWorkAdded = false;
    }
}