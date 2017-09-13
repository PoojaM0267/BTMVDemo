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
var dashboard_service_1 = require("./dashboard.service");
var DashboardComponent = (function () {
    function DashboardComponent(route, dashboardService) {
        this.route = route;
        this.dashboardService = dashboardService;
        console.log('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = +params['id']; // (+) converts string 'id' to a number
        });
        console.log(this.userId);
        this.dashboardService.getUser(this.userId).subscribe(function (data) {
            // debugger;
            console.log(data);
            //let firstName = data.userDetails.FirstName;
            //let lastName = data.userDetails.LastName;               
            // todo: map data to UI
            //this.userDetails.firstName = firstName;
            //this.userDetails.lastName = lastName;
            // this.userDetails = data.userDetails;
        }, function (err) {
            alert("Something went wrong. Please try again after sometime");
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map