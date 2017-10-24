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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var baseConfig_1 = require("../common/baseConfig");
var globalErrorHandler_service_1 = require("../common/globalErrorHandler.service");
var AccountService = /** @class */ (function () {
    function AccountService(http, baseConfig, globalErrorHandler) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.globalErrorHandler = globalErrorHandler;
        this.options = this.baseConfig.getBaseHttpConfiguration();
    }
    AccountService.prototype.registerUser = function (userInfo) {
        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), this.options)
            .map(function (response) { return response.json(); })
            .catch(this.globalErrorHandler.handleError);
    };
    AccountService.prototype.loginUser = function (userLoginInfo) {
        //debugger;
        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), this.options)
            .map(function (response) {
            // debugger;
            var res = response.json();
            console.log(res.jwtToken);
            localStorage.setItem('BTMV_currentUser', JSON.stringify({
                username: userLoginInfo.email,
                token: res.jwtToken,
                userId: res.id,
                roleId: res.roleId,
                roleName: res.roleName,
                firstName: res.firstName,
                lastName: res.lastName
            }));
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    AccountService.prototype.validateCurrentPassword = function (currentPassword) {
        // debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            currentPassword.userId = currentUser.userId;
        }
        return this.http.post('/api/Account/ValidateCurrentPassword', JSON.stringify(currentPassword), this.options)
            .map(function (response) { return response.json(); })
            .catch(this.globalErrorHandler.handleError);
    };
    AccountService.prototype.changePassword = function (passwordDetails) {
        //debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            passwordDetails.userId = currentUser.userId;
        }
        return this.http.post('/api/Account/ChangePassword', JSON.stringify(passwordDetails), this.options)
            .map(function (response) { return response.json(); })
            .catch(this.globalErrorHandler.handleError);
    };
    AccountService.prototype.deleteAccount = function () {
        // debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        var param;
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            param = { Id: currentUser.userId };
        }
        return this.http.post('/api/Account/DeleteUserById', JSON.stringify(param), this.options)
            .map(function (response) {
            //  debugger;
            var res = response.json();
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig, globalErrorHandler_service_1.GlobalErrorHandler])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map