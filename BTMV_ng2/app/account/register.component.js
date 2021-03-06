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
var index_1 = require("../_Services/index");
var index_2 = require("../models/index");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, listService) {
        var _this = this;
        this.accountService = accountService;
        this.listService = listService;
        // confirmPassword: FormControl;
        this.selectedState = new index_2.State(0, 'Select State');
        //departments: Department[];
        this.isRegistrationSuccess = false;
        //isSuccess: boolean;
        this.hasErrorMessage = false;
        this.isSubmitted = false;
        //debugger;
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
        this.listService.getOccupations().subscribe(function (occupations) { return _this.occupations = occupations; });
        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_1.FormControl('', forms_1.Validators.required);
        this.lastName = new forms_1.FormControl('', forms_1.Validators.required);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        this.occupationId = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        // this.confirmPassword = new FormControl('', Validators.required, matchPassword)     
        // this.departmentId = new FormControl('', Validators.required);   
        this.registrationForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            stateId: this.stateId,
            cityId: this.cityId,
            occupationId: this.occupationId,
            password: this.password,
        });
    };
    RegisterComponent.prototype.onSelect = function (stateId) {
        var _this = this;
        //debugger;
        this.listService.getCities(stateId).subscribe(function (cities) { return _this.cities = cities; });
    };
    RegisterComponent.prototype.registerUser = function (formValues) {
        var _this = this;
        // debugger;
        this.isSubmitted = true;
        console.log(formValues);
        var result = this.accountService.registerUser(formValues).subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                // debugger;
                _this.isRegistrationSuccess = true;
                _this.hasErrorMessage = false;
            }
            else {
                // debugger;                    
                _this.isRegistrationSuccess = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // show error msg
        });
    };
    RegisterComponent.prototype.resetForm = function () {
        this.registrationForm.reset();
        this.isRegistrationSuccess = false;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-form',
            templateUrl: 'app/account/register.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n    "],
            providers: [index_1.ListService]
        }),
        __metadata("design:paramtypes", [index_1.AccountService, index_1.ListService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map