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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        console.log('profile');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.profileService.getUserProfile().subscribe(function (data) {
            debugger;
            console.log(data);
            _this.userDetails = data['userDetails'];
            // this.userProfile = data.userDetails; 
            _this.userDetails.firstName = data.userDetails.FirstName;
            _this.userDetails.lastName = data.userDetails.LastName;
            _this.userDetails.roleName = data.userDetails.RoleName;
            _this.userDetails.email = data.userDetails.Email;
            _this.userDetails.cityName = data.userDetails.CityName;
            _this.userDetails.stateName = data.userDetails.StateName;
            _this.userDetails.occupationName = data.userDetails.OccupationName;
            _this.userDetails.address = data.userDetails.Address;
            _this.userDetails.phoneNumber = data.userDetails.Phone;
            _this.userDetails.dob = data.userDetails.DOB;
            _this.userDetails.gender = data.userDetails.Gender;
        }, function (error) {
            debugger;
            console.log(error.message);
            alert('Something went wrong. Please try again later.');
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: 'app/dashboard/profile.component.html'
        }),
        __metadata("design:paramtypes", [index_1.ProfileService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map