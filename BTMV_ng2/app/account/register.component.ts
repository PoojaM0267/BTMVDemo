import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//import { User } from '../models/userModel';
import { matchPassword } from '../common/matchPasswordValidation';
import { AccountService, ListService } from '../_Services/index';
import { City, Department, Occupation, State } from '../models/index';

@Component({
    selector: 'register-form',
    templateUrl: 'app/account/register.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
    `],
    providers : [ListService]
})

export class RegisterComponent {

    registrationForm: FormGroup;

    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    stateId: FormControl;
    cityId: FormControl;
    //departmentId: FormControl;
    occupationId: FormControl;
    password: FormControl;
   // confirmPassword: FormControl;
    selectedState: State = new State(0, 'Select State');
    states: State[];
    cities: City[];
    occupations: Occupation[];
    //departments: Department[];

    isRegistrationSuccess: boolean = false;
    //isSuccess: boolean;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    isSubmitted = false;

    constructor(private accountService: AccountService, private listService: ListService) {
        //debugger;
        this.listService.getStates().subscribe(
            states => this.states = states            
        );

        this.listService.getOccupations().subscribe(
            occupations => this.occupations = occupations
        );    

        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //);
    }

    ngOnInit() {       
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.stateId = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);
        this.occupationId = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
       // this.confirmPassword = new FormControl('', Validators.required, matchPassword)     
       // this.departmentId = new FormControl('', Validators.required);   

        this.registrationForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            stateId: this.stateId,
            cityId: this.cityId,
            occupationId: this.occupationId,
            password: this.password,
           // confirmPassword: this.confirmPassword
           // departmentId: this.departmentId,
        },
             //matchPassword('confirmPassword','password')           
        );
    }

    onSelect(stateId) {
        //debugger;
        this.listService.getCities(stateId).subscribe(cities => this.cities = cities);           
    }    

    registerUser(formValues) {
        // debugger;
        this.isSubmitted = true;
        console.log(formValues);

        let result = this.accountService.registerUser(formValues).subscribe(
            data =>
            {  
               // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                   // debugger;
                    this.isRegistrationSuccess = true;
                    this.hasErrorMessage = false;
                }
                else {
                   // debugger;                    
                    this.isRegistrationSuccess = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }                  
                
            },
            error =>
            {
                // show error msg
            });       
    }

    resetForm() {
        this.registrationForm.reset();
        this.isRegistrationSuccess= false;
    }
}