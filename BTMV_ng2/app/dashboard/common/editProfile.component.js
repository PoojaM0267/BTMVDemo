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
var forms_1 = require("@angular/forms");
var index_1 = require("../../models/index");
var index_2 = require("../../_Services/index");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(listService, profileService) {
        var _this = this;
        this.listService = listService;
        this.profileService = profileService;
        this.selectedState = new index_1.State(0, 'Select State');
        this.isProfileEditSuccess = false;
        this.hasErrorMessage = false;
        console.log('Edit Profile');
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
        this.listService.getOccupations().subscribe(function (occupations) { return _this.occupations = occupations; });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_1.FormControl('', forms_1.Validators.required);
        this.lastName = new forms_1.FormControl('', forms_1.Validators.required);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        this.occupationId = new forms_1.FormControl('', forms_1.Validators.required);
        this.editProfileForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            stateId: this.stateId,
            cityId: this.cityId,
            occupationId: this.occupationId
        });
    };
    EditProfileComponent.prototype.onSelect = function (stateId) {
        var _this = this;
        this.listService.getCities(stateId).subscribe(function (cities) { return _this.cities = cities; });
    };
    EditProfileComponent.prototype.editProfile = function (formValues) {
        var _this = this;
        var result = this.profileService.editProfile(formValues).subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                // debugger;
                _this.isProfileEditSuccess = true;
                _this.hasErrorMessage = false;
            }
            else {
                // debugger;                    
                _this.isProfileEditSuccess = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // show error msg
        });
    };
    // Reset form
    EditProfileComponent.prototype.resetForm = function () {
        this.editProfileForm.reset();
        this.isProfileEditSuccess = false;
        this.hasErrorMessage = false;
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            //selector: 'editProfile',
            selector: 'edit-profile',
            templateUrl: 'app/dashboard/common/editProfile.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n       .modal-body {  min-height: 500px;}\n    "],
            providers: [index_2.ListService]
        }),
        __metadata("design:paramtypes", [index_2.ListService, index_2.ProfileService])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
//# sourceMappingURL=editProfile.component.js.map