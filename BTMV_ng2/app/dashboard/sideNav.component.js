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
var primeng_1 = require("primeng/primeng");
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(accountService, router, confirmationService) {
        this.accountService = accountService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.hasErrorMessage = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        // debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.basicUserInfo = currentUser;
        }
    };
    SideNavComponent.prototype.confirmDeleteAccount = function () {
        var _this = this;
        //  debugger;
        console.log('Delete Account');
        alert('Delete Account');
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete your account?',
            accept: function () {
                // this.deleteAccount();
                _this.accountService.deleteAccount().subscribe(function (data) {
                    // debugger;
                    console.log(data);
                    var isSuccess = data.isSuccess;
                    var message = data.message;
                    alert(message);
                    if (isSuccess) {
                        //debugger;
                        _this.router.navigate(['/home']);
                    }
                }, function (error) {
                    _this.hasErrorMessage = true;
                    _this.errorMessage = 'Something went wrong. Please try again later.';
                    if (error.message === "403") {
                        alert('Not authenticate User.');
                        _this.router.navigate(['/home']);
                    }
                });
            }
        });
    };
    SideNavComponent = __decorate([
        core_1.Component({
            selector: 'sideNavigation',
            templateUrl: 'app/dashboard/sideNav.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AccountService, router_1.Router, primeng_1.ConfirmationService])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=sideNav.component.js.map