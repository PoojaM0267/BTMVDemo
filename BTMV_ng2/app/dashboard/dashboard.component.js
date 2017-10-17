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
var index_1 = require("../_Services/index");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, dashboardService, router, auth) {
        this.route = route;
        this.dashboardService = dashboardService;
        this.router = router;
        this.auth = auth;
        console.log('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.userId = currentUser.userId;
        }
        console.log(this.userId);
        this.dashboardService.getUser(this.userId).subscribe(function (data) {
            //debugger;
            console.log(data);
            _this.userDetails = data['userDetails'];
            // this.userDetails = data.userDetails;
            _this.userDetails.firstName = data.userDetails.FirstName;
            _this.userDetails.lastName = data.userDetails.LastName;
            _this.userDetails.roleName = data.userDetails.RoleName;
            _this.userDetails.email = data.userDetails.Email;
            _this.userDetails.cityName = data.userDetails.CityName;
            _this.userDetails.stateName = data.userDetails.StateName;
            _this.userDetails.occupationName = data.userDetails.OccupationName;
            _this.userDetails.address = data.userDetails.Address;
            _this.userDetails.phoneNumber = data.userDetails.Phone;
        }, function (error) {
            //debugger;
            console.log(error.message);
            alert("Something went wrong. Please try again after sometime");
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, index_1.DashboardService, router_1.Router, index_1.AuthenticationService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map