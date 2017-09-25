"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_service_1 = require("../_Services/dashboard.service");
var auth_service_1 = require("../_Services/auth.service");
var DashboardComponent = (function () {
    function DashboardComponent(route, dashboardService, router, auth) {
        this.route = route;
        this.dashboardService = dashboardService;
        this.router = router;
        this.auth = auth;
        //debugger;          
        console.log('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //debugger;
        //this.sub = this.route.params.subscribe(params => {
        //    this.userId = +params['id']; // (+) converts string 'id' to a number
        //});
        //console.log(this.userId);
        //this.dashboardService.getUser(this.userId).subscribe(
        //    data => {
        //        //debugger;
        //        console.log(data);
        //        //this.auth.checkAuthenticationStatus();
        //        this.userDetails = data['userDetails'];
        //       // this.userProfile = data.userDetails;              
        //        // todo: map data to UI
        //        this.userDetails.firstName = data.userDetails.FirstName;
        //        this.userDetails.lastName = data.userDetails.LastName;
        //        this.userDetails.roleName = data.userDetails.RoleName;
        //        this.userDetails.email = data.userDetails.Email;
        //        this.userDetails.cityName = data.userDetails.CityName;
        //        this.userDetails.stateName = data.userDetails.StateName;
        //        this.userDetails.occupationName = data.userDetails.OccupationName;
        //        this.userDetails.address = data.userDetails.Address;
        //        this.userDetails.phoneNumber = data.userDetails.PhoneNumber;
        //    },
        //    error => {
        //        //debugger;
        //        console.log(error.message);
        //        //alert("Something went wrong. Please try again after sometime");
        //        //this.router.navigate(['/home']);
        //        if (error.message === "403") {
        //            alert('Not authenticate User.');
        //            this.router.navigate(['/home']);
        //        }
        //    });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dashboard_service_1.DashboardService, router_1.Router, auth_service_1.AuthenticationService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map