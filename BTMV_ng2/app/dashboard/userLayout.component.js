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
var UserLayoutComponent = (function () {
    function UserLayoutComponent(route, dashboardService, router, auth) {
        this.route = route;
        this.dashboardService = dashboardService;
        this.router = router;
        this.auth = auth;
        console.log('layout');
    }
    UserLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = +params['id']; // (+) converts string 'id' to a number
        });
        console.log(this.userId);
        this.dashboardService.getUser(this.userId).subscribe(function (data) {
            // debugger;
            console.log(data);
            //this.auth.checkAuthenticationStatus();
            _this.userDetails = data['userDetails'];
            // this.userProfile = data.userDetails;              
            // todo: map data to UI
            _this.userDetails.firstName = data.userDetails.FirstName;
            _this.userDetails.lastName = data.userDetails.LastName;
            _this.userDetails.roleName = data.userDetails.RoleName;
            _this.userDetails.email = data.userDetails.Email;
            //this.userDetails.cityName = data.userDetails.CityName;
            //this.userDetails.stateName = data.userDetails.StateName;
            //this.userDetails.occupationName = data.userDetails.OccupationName;
            //this.userDetails.address = data.userDetails.Address;
            //this.userDetails.phoneNumber = data.userDetails.PhoneNumber;
            //var res = response.json();
            // return res;
            _this.router.navigate(['/profile']);
            //this.router.navigate([{ outlets: { 'pooja' : ['/profile']}}]);
            //this.router.navigate([{ outlets: { 'pooja': ['/profile'] }]);
        }, function (error) {
            //debugger;
            console.log(error.message);
            //alert("Something went wrong. Please try again after sometime");
            //this.router.navigate(['/home']);
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    UserLayoutComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserLayoutComponent = __decorate([
        core_1.Component({
            selector: 'user-layout',
            templateUrl: 'app/dashboard/userLayout.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dashboard_service_1.DashboardService, router_1.Router, auth_service_1.AuthenticationService])
    ], UserLayoutComponent);
    return UserLayoutComponent;
}());
exports.UserLayoutComponent = UserLayoutComponent;
//# sourceMappingURL=userLayout.component.js.map