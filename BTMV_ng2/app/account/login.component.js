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
var account_service_1 = require("../_Services/account.service");
var auth_service_1 = require("../_Services/auth.service");
//import { validateEmail } from '../common/emailValidator';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountService, router, authService) {
        this.accountService = accountService;
        this.router = router;
        this.authService = authService;
        this.hasErrorMessage = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.email = new FormControl('', [Validators.required, validateEmail]);
        this.email = new forms_1.FormControl('pooja@test.in', [forms_1.Validators.required, forms_1.Validators.email]);
        this.password = new forms_1.FormControl('Pooja123@', forms_1.Validators.required);
        this.loginForm = new forms_1.FormGroup({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.loginUser = function (formValues) {
        var _this = this;
        debugger;
        console.log(formValues);
        this.accountService.loginUser(formValues).subscribe(function (data) {
            debugger;
            console.log(data);
            var isUserValid = data.isUserValid;
            var message = data.message;
            var userId = data.id;
            if (isUserValid) {
                _this.isLoginSuccess = true;
                _this.hasErrorMessage = false;
                _this.closeModal();
                // this.router.navigate(['/dashboard', userId]);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.isLoginSuccess = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (err) {
            _this.hasErrorMessage = true;
            _this.errorMessage = "Something went wrong. Please try again after sometime";
        });
    };
    LoginComponent.prototype.resetForm = function () {
        this.loginForm.reset();
        this.hasErrorMessage = false;
        this.isLoginSuccess = false;
    };
    LoginComponent.prototype.closeModal = function () {
        this.closeBtn.nativeElement.click();
    };
    __decorate([
        core_1.ViewChild('closeLoginModal'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "closeBtn", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/account/login.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n       .modal-body {  min-height: 300px;}                 \n    "]
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router, auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map