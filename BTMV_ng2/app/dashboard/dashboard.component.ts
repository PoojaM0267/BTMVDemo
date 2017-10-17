import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { DashboardService } from '../_Services/dashboard.service';
//import { AuthenticationService } from '../_Services/auth.service';
import { UserRegisterModel } from '../models/userRegisterModel';
import { AuthenticationService, DashboardService } from '../_Services/index';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'   
})

export class DashboardComponent {

    userId: number;
    userDetails: UserRegisterModel;

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private router: Router, private auth: AuthenticationService) {
        console.log('Dashboard');        
    }

    ngOnInit() {
        debugger;
        let user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            let currentUser = JSON.parse(user);
            this.userId = currentUser.userId;
        }  
           
        console.log(this.userId);

        this.dashboardService.getUser(this.userId).subscribe(
            data => {
                //debugger;
                console.log(data);
                this.userDetails = data['userDetails'];
               // this.userDetails = data.userDetails;
                
                this.userDetails.firstName = data.userDetails.FirstName;
                this.userDetails.lastName = data.userDetails.LastName;
                this.userDetails.roleName = data.userDetails.RoleName;
                this.userDetails.email = data.userDetails.Email;

                this.userDetails.cityName = data.userDetails.CityName;
                this.userDetails.stateName = data.userDetails.StateName;
                this.userDetails.occupationName = data.userDetails.OccupationName;
                this.userDetails.address = data.userDetails.Address;
                this.userDetails.phoneNumber = data.userDetails.Phone;
            },
            error => {
                //debugger;
                console.log(error.message);
                alert("Something went wrong. Please try again after sometime");

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }
}