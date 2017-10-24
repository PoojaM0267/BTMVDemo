import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { IWorkModel } from '../../models/index';
import { AccountService } from '../../_Services/index';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'changePassword',
    templateUrl: 'app/dashboard/common/changePassword.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
        .ui-steps.steps-custom { margin-bottom: 30px; }
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
    providers: [AccountService]
})

export class ChangePasswordComponent {

    changePasswordForm: FormGroup;
    checkCurrentPasswordForm: FormGroup;

    currentPassword: FormControl;
    newPassword: FormControl;
    confirmNewPassword: FormControl;

    isCurrentPasswordValid: boolean = false;
    isPasswordChanged: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;

    items: MenuItem[];
    activeIndex: number = 0;

    constructor(private accountService: AccountService, private router: Router) {
        debugger;
        console.log('Change Password');
    }

    ngOnInit() {
        //debugger;
        this.currentPassword = new FormControl('', Validators.required);
        this.newPassword = new FormControl('', Validators.required);
        this.confirmNewPassword = new FormControl('', Validators.required);

        this.checkCurrentPasswordForm = new FormGroup({
            currentPassword: this.currentPassword        
        });

        this.changePasswordForm = new FormGroup({
            newPassword: this.newPassword,
            confirmNewPassword: this.confirmNewPassword
        });

        this.items = [
            {
                label: 'Validate Current Password',                
                command: (event: any) => {

                },
                
            },
            {
                label: 'Update New Password'
            }
        ];
    }

    checkCurrentPassword(formValues)
    {
        let result = this.accountService.validateCurrentPassword(formValues).subscribe(
            data => {
                //debugger;
                console.log(data);
                let isPasswordValid = data.isValid;

                if (isPasswordValid) {
                   // debugger;
                    this.isCurrentPasswordValid = true;
                    this.hasErrorMessage = false;
                    this.resetCurrentPasswordForm();
                    // todo: take to step 2
                    this.activeIndex = 1;
                }
                else {
                    // debugger;                
                    this.hasErrorMessage = true;
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

    changePassword(formValues)
    {
        debugger;
        let result = this.accountService.changePassword(formValues).subscribe(
            data => {
               // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                   // debugger;
                    this.isPasswordChanged = true;
                    this.hasErrorMessage = false;
                    this.successMessage = message;
                    this.resetChangePasswordForm();
                }
                else {
                    // debugger;  
                    this.isPasswordChanged = false;              
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

    resetCurrentPasswordForm() {
        this.checkCurrentPasswordForm.reset();
        this.hasErrorMessage = false;
        this.isCurrentPasswordValid= false;
    }

    resetChangePasswordForm() {
        this.changePasswordForm.reset();
        this.hasErrorMessage = false;
        this.isCurrentPasswordValid = false;
    }    
}
