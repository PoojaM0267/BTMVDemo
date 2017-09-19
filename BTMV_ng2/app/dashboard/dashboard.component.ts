import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

//import { DashboardService } from './dashboard.service'
import { DashboardService } from '../_Services/dashboard.service'
import { User } from '../models/userModel'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'   
})

export class DashboardComponent {

    userId: number;
    private sub: any;
    userDetails: User;
   // userDetails: User = new User();  

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private router: Router) {    
        console.log('Dashboard');        
    }

    ngOnInit() {
        debugger;
        this.sub = this.route.params.subscribe(params => {
            this.userId = +params['id']; // (+) converts string 'id' to a number
        });

        console.log(this.userId);
       // console.log(this.userDetails);

        this.dashboardService.getUser(this.userId).subscribe(
            data => {
                //debugger;
                console.log(data);
                //this.userDetails = new User(
                //    this.userDetails.firstName = data.userDetails.FirstName,
                //    this.userDetails.lastName = data.userDetails.LastName,
                //    this.userDetails.email = data.userDetails.Email
                //);
                
                 
                let firstName = data.userDetails.FirstName;
                let lastName = data.userDetails.LastName;               
                
                // todo: map data to UI

                this.userDetails.firstName = firstName;
                this.userDetails.lastName = lastName;
               // this.userDetails = data.userDetails;
            },
            error => {
               // debugger;
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