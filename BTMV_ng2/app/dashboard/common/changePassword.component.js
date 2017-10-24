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
var forms_1 = require("@angular/forms");
var index_1 = require("../../_Services/index");
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.isCurrentPasswordValid = false;
        this.isPasswordChanged = false;
        this.hasErrorMessage = false;
        this.activeIndex = 0;
        debugger;
        console.log('Change Password');
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        //debugger;
        this.currentPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.newPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.confirmNewPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.checkCurrentPasswordForm = new forms_1.FormGroup({
            currentPassword: this.currentPassword
        });
        this.changePasswordForm = new forms_1.FormGroup({
            newPassword: this.newPassword,
            confirmNewPassword: this.confirmNewPassword
        });
        this.items = [
            {
                label: 'Validate Current Password',
                command: function (event) {
                },
            },
            {
                label: 'Update New Password'
            }
        ];
    };
    ChangePasswordComponent.prototype.checkCurrentPassword = function (formValues) {
        var _this = this;
        var result = this.accountService.validateCurrentPassword(formValues).subscribe(function (data) {
            //debugger;
            console.log(data);
            var isPasswordValid = data.isValid;
            if (isPasswordValid) {
                // debugger;
                _this.isCurrentPasswordValid = true;
                _this.hasErrorMessage = false;
                _this.resetCurrentPasswordForm();
                // todo: take to step 2
                _this.activeIndex = 1;
            }
            else {
                // debugger;                
                _this.hasErrorMessage = true;
            }
        }, function (error) {
            // show error msg
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    ChangePasswordComponent.prototype.changePassword = function (formValues) {
        var _this = this;
        debugger;
        var result = this.accountService.changePassword(formValues).subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                // debugger;
                _this.isPasswordChanged = true;
                _this.hasErrorMessage = false;
                _this.successMessage = message;
                _this.resetChangePasswordForm();
            }
            else {
                // debugger;  
                _this.isPasswordChanged = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // show error msg
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    ChangePasswordComponent.prototype.resetCurrentPasswordForm = function () {
        this.checkCurrentPasswordForm.reset();
        this.hasErrorMessage = false;
        this.isCurrentPasswordValid = false;
    };
    ChangePasswordComponent.prototype.resetChangePasswordForm = function () {
        this.changePasswordForm.reset();
        this.hasErrorMessage = false;
        this.isCurrentPasswordValid = false;
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'changePassword',
            templateUrl: 'app/dashboard/common/changePassword.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n        .ui-steps.steps-custom { margin-bottom: 30px; }\n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n            height: 10px;\n            padding: 0 1em;\n        }\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n            background-color: #0081c2;\n            color: #FFFFFF;\n            display: inline-block;\n            width: 36px;\n            border-radius: 50%;\n            margin-top: -14px;\n            margin-bottom: 10px;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n    "],
            providers: [index_1.AccountService]
        }),
        __metadata("design:paramtypes", [index_1.AccountService, router_1.Router])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=changePassword.component.js.map