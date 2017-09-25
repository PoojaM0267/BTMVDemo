import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DashboardService } from '../_Services/dashboard.service';
import { UserRegisterModel } from '../models/userRegisterModel';
import { IUserProfile } from '../models/userProfile';
import { AuthenticationService } from '../_Services/auth.service';

@Component({
    selector: 'user-layout',
    templateUrl: 'app/dashboard/userLayout.component.html'
})

export class UserLayoutComponent {
    userId: number;
    private sub: any;
    userDetails: UserRegisterModel;

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private router: Router, private auth: AuthenticationService)
    {
        console.log('layout');
    }

    ngOnInit() {
        debugger;
        this.sub = this.route.params.subscribe(params => {
            this.userId = +params['id']; // (+) converts string 'id' to a number
        });

        console.log(this.userId);

        this.dashboardService.getUser(this.userId).subscribe(
            data => {
               // debugger;
                console.log(data);
                //this.auth.checkAuthenticationStatus();
                this.userDetails = data['userDetails'];
                // this.userProfile = data.userDetails;              

                // todo: map data to UI

                this.userDetails.firstName = data.userDetails.FirstName;
                this.userDetails.lastName = data.userDetails.LastName;
                this.userDetails.roleName = data.userDetails.RoleName;
                this.userDetails.email = data.userDetails.Email;

                //this.userDetails.cityName = data.userDetails.CityName;
                //this.userDetails.stateName = data.userDetails.StateName;
                //this.userDetails.occupationName = data.userDetails.OccupationName;
                //this.userDetails.address = data.userDetails.Address;
                //this.userDetails.phoneNumber = data.userDetails.PhoneNumber;


                //var res = response.json();
                // return res;

                this.router.navigate(['/profile']);
                //this.router.navigate([{ outlets: { 'pooja' : ['/profile']}}]);
                //this.router.navigate([{ outlets: { 'pooja': ['/profile'] }]);
            },
            error => {
                //debugger;
                console.log(error.message);
                //alert("Something went wrong. Please try again after sometime");
                //this.router.navigate(['/home']);

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}