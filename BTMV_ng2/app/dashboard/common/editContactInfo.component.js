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
var router_1 = require("@angular/router");
var index_1 = require("../../models/index");
var index_2 = require("../../_Services/index");
var EditContactInfoComponent = /** @class */ (function () {
    function EditContactInfoComponent(listService, profileService, router) {
        var _this = this;
        this.listService = listService;
        this.profileService = profileService;
        this.router = router;
        this.selectedState = new index_1.State(0, 'Select State');
        this.isContactInfoEditSuccess = false;
        this.hasErrorMessage = false;
        console.log('Edit Basic Info');
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
    }
    EditContactInfoComponent.prototype.ngOnInit = function () {
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        this.address = new forms_1.FormControl('');
        this.phone = new forms_1.FormControl();
        this.contactInfoEditForm = new forms_1.FormGroup({
            stateId: this.stateId,
            cityId: this.cityId,
            address: this.address,
            phone: this.phone
        });
    };
    EditContactInfoComponent.prototype.onSelect = function (stateId) {
        var _this = this;
        this.listService.getCities(stateId).subscribe(function (cities) { return _this.cities = cities; });
    };
    EditContactInfoComponent.prototype.editContactInfo = function (formValues) {
        var _this = this;
        console.log(formValues);
        var result = this.profileService.editContactInfo(formValues).subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                // debugger;
                _this.isContactInfoEditSuccess = true;
                _this.hasErrorMessage = false;
                _this.successMessage = message;
                _this.router.navigate(['/profile']);
            }
            else {
                //debugger;
                _this.isContactInfoEditSuccess = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // debugger;
            alert('Something went wrong. Please try again later.');
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    // Reset form
    EditContactInfoComponent.prototype.resetForm = function () {
        this.contactInfoEditForm.reset();
        this.isContactInfoEditSuccess = false;
        this.hasErrorMessage = false;
    };
    EditContactInfoComponent = __decorate([
        core_1.Component({
            selector: 'edit-contactInfo',
            templateUrl: 'app/dashboard/common/editContactInfo.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n       .modal-body {  min-height: 500px;}\n    "],
            providers: [index_2.ListService]
        }),
        __metadata("design:paramtypes", [index_2.ListService, index_2.ProfileService, router_1.Router])
    ], EditContactInfoComponent);
    return EditContactInfoComponent;
}());
exports.EditContactInfoComponent = EditContactInfoComponent;
//# sourceMappingURL=editContactInfo.component.js.map