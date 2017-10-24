import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { AccountService } from '../_Services/index';
import { BasicUserInfoModel } from '../models/index';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'sideNavigation',
    templateUrl: 'app/dashboard/sideNav.component.html'
})

export class SideNavComponent {

    hasErrorMessage: boolean = false;
    errorMessage: string;
    basicUserInfo: BasicUserInfoModel;

    constructor(private accountService: AccountService, private router: Router, private confirmationService: ConfirmationService) { }

    ngOnInit() {
       // debugger;
            let user = localStorage.getItem('BTMV_currentUser');
            if (user) {              
                let currentUser = JSON.parse(user);
                this.basicUserInfo = currentUser;
            } 
    }

    confirmDeleteAccount() {
      //  debugger;
        console.log('Delete Account');
        alert('Delete Account');

        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete your account?',
            accept: () => {
               // this.deleteAccount();
                this.accountService.deleteAccount().subscribe(
                    data => {
                       // debugger;
                        console.log(data);
                        let isSuccess = data.isSuccess;
                        let message = data.message;
                        alert(message);
                        if (isSuccess) {
                            //debugger;
                            this.router.navigate(['/home']);
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
        });

    }
}