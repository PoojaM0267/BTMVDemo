import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegisterModel } from '../models/index';
import { ProfileService } from '../_Services/index'

@Component({
    selector: 'profile',
    templateUrl: 'app/dashboard/profile.component.html'
})

export class ProfileComponent {

    public userDetails: UserRegisterModel;

    constructor(private profileService: ProfileService, private router: Router) {
        console.log('profile');
    }

    ngOnInit() {
        debugger;
        this.profileService.getUserProfile().subscribe(
            data => {
                debugger;
                console.log(data);
                this.userDetails = data['userDetails'];
                // this.userProfile = data.userDetails; 

                this.userDetails.firstName = data.userDetails.FirstName;
                this.userDetails.lastName = data.userDetails.LastName;
                this.userDetails.roleName = data.userDetails.RoleName;
                this.userDetails.email = data.userDetails.Email;

                this.userDetails.cityName = data.userDetails.CityName;
                this.userDetails.stateName = data.userDetails.StateName;
                this.userDetails.occupationName = data.userDetails.OccupationName;
                this.userDetails.address = data.userDetails.Address;
                this.userDetails.phoneNumber = data.userDetails.Phone;
                this.userDetails.dob = data.userDetails.DOB;
                this.userDetails.gender = data.userDetails.Gender;
            },
            error => {
                debugger;
                console.log(error.message);
                alert('Something went wrong. Please try again later.');

                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);                   
                }
            });
    }
}