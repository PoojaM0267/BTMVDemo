import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'

import { UserLoginModel } from '../models/userLoginModel'
import { AccountService } from './account.service'
//import { validateEmail } from '../common/emailValidator'

@Component({
    selector: 'login-form',
    templateUrl: 'app/home/login.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 300px;}                 
    `]
})

export class LoginComponent {

    public userLogin : UserLoginModel;
    loginForm: FormGroup;

    email: FormControl;
    password: FormControl;

    isLoginSuccess: boolean;
    hasErrorMessage: boolean = false;
    errorMessage: string;

    constructor(private accountService: AccountService){}

    ngOnInit() {
       // this.email = new FormControl('', [Validators.required, validateEmail]);
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', Validators.required);

        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        });
    }
        

    loginUser(formValues) {
        //debugger;
        console.log(formValues);
       

        this.accountService.loginUser(formValues).subscribe(
            data => {
                console.log(data);
                let isUserValid = data.isUserValid;
                let message = data.message;

                if (isUserValid) {
                    this.isLoginSuccess = true;  
                    this.hasErrorMessage = false;
                    // redirect to dashboard here
                }
                else {                                 
                    this.isLoginSuccess = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;                    
                }                                  
            },
            err => {
                this.hasErrorMessage = true;
                this.errorMessage = "Something went wrong. Please try again after sometime"; 
            });       
    }

    resetForm() {
        this.loginForm.reset();
        this.hasErrorMessage = false;
    }
}