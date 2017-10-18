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
var index_1 = require("../../_Services/index");
var EditBasicInfoComponent = /** @class */ (function () {
    //@Input() userDetails: UserRegisterModel;
    function EditBasicInfoComponent(listService, profileService, router) {
        var _this = this;
        this.listService = listService;
        this.profileService = profileService;
        this.router = router;
        this.isBasicInfoEditSuccess = false;
        this.hasErrorMessage = false;
        this.genders = [
            { value: 'Female', display: 'Female' },
            { value: 'Male', display: 'Male' }
        ];
        console.log('Edit Basic Info');
        //console.log(this.userDetails);
        this.listService.getOccupations().subscribe(function (occupations) { return _this.occupations = occupations; });
    }
    EditBasicInfoComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_1.FormControl('', forms_1.Validators.required);
        this.lastName = new forms_1.FormControl('', forms_1.Validators.required);
        //this.email = new FormControl('', [Validators.required, Validators.email]);
        this.occupationId = new forms_1.FormControl('', forms_1.Validators.required);
        this.dob = new forms_1.FormControl();
        this.gender = new forms_1.FormControl();
        //this.gender = new FormControl(this.genders[0].value);
        this.basicInfoEditForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            //email: this.email,
            occupationId: this.occupationId,
            dob: this.dob,
            gender: this.gender
        });
    };
    EditBasicInfoComponent.prototype.editBasicInfo = function (formValues) {
        var _this = this;
        console.log(formValues);
        var result = this.profileService.editBasicInfo(formValues).subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                debugger;
                _this.isBasicInfoEditSuccess = true;
                _this.hasErrorMessage = false;
                _this.successMessage = message;
                _this.router.navigate(['/profile']);
            }
            else {
                debugger;
                _this.isBasicInfoEditSuccess = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            debugger;
            alert('Something went wrong. Please try again later.');
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    // Reset form
    EditBasicInfoComponent.prototype.resetForm = function () {
        this.basicInfoEditForm.reset();
        this.isBasicInfoEditSuccess = false;
        this.hasErrorMessage = false;
    };
    EditBasicInfoComponent = __decorate([
        core_1.Component({
            selector: 'edit-basicInfo',
            templateUrl: 'app/dashboard/common/editBasicInfo.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n       .modal-body {  min-height: 550px;}\n    "],
            providers: [index_1.ListService]
        }),
        __metadata("design:paramtypes", [index_1.ListService, index_1.ProfileService, router_1.Router])
    ], EditBasicInfoComponent);
    return EditBasicInfoComponent;
}());
exports.EditBasicInfoComponent = EditBasicInfoComponent;
//# sourceMappingURL=editbasicInfo.component.js.map