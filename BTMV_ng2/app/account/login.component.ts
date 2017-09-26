import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../_Services/account.service';
import { AuthenticationService } from '../_Services/auth.service';
//import { validateEmail } from '../common/emailValidator';

@Component({
    selector: 'login-form',
    templateUrl: 'app/account/login.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 300px;}                 
    `]
})

export class LoginComponent {
    
    loginForm: FormGroup;

    email: FormControl;
    password: FormControl;

    isLoginSuccess: boolean;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    

    @ViewChild('closeLoginModal') closeBtn: ElementRef;
    constructor(private accountService: AccountService, private router: Router, private authService: AuthenticationService){}

    ngOnInit() {
       // this.email = new FormControl('', [Validators.required, validateEmail]);
        this.email = new FormControl('pooja@test.in', [Validators.required, Validators.email]);
        this.password = new FormControl('Pooja123@', Validators.required);

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
                //debugger;
                console.log(data);
                let isUserValid = data.isUserValid;
                let message = data.message;
                let userId = data.id;


                if (isUserValid) {
                    this.isLoginSuccess = true;  
                    this.hasErrorMessage = false;
                    this.closeModal();                    
                   // this.router.navigate(['/dashboard', userId]);
                    this.router.navigate(['/dashboard']);
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
        this.isLoginSuccess = false;
    }

    closeModal() {
        this.closeBtn.nativeElement.click();
    }
    
}