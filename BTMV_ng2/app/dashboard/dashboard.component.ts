import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DashboardService } from './dashboard.service'
import { User } from '../models/userModel'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'   
})

export class DashboardComponent {

    // expect an id input here to fetch all user details and display
    //@Input() userId: number;
    userId: number;
    private sub: any;
    userDetails: User;

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService) {    
        console.log('Dashboard');        
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.userId = +params['id']; // (+) converts string 'id' to a number
        });

        console.log(this.userId);

        this.dashboardService.getUser(this.userId).subscribe(
            data => {
               // debugger;
                console.log(data); 
                //let firstName = data.userDetails.FirstName;
                //let lastName = data.userDetails.LastName;               
                
                // todo: map data to UI

                //this.userDetails.firstName = firstName;
                //this.userDetails.lastName = lastName;
               // this.userDetails = data.userDetails;
            },
            err => {
                alert("Something went wrong. Please try again after sometime");
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}