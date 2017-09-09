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
       .modal-body {  min-height: 250px;}           
    `]
})

export class LoginComponent {

    public userLogin : UserLoginModel;
    loginForm: FormGroup;

    email: FormControl
    password: FormControl

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

    isSubmitted = false;

    loginUser(formValues) {
        debugger;
        console.log(formValues);

        this.accountService.loginUser(formValues).subscribe();
        console.log('login successfull');
        // redirect to dashboard here or in component.ts file
    }

    resetForm() {
        this.loginForm.reset();
    }
}