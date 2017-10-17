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
var auth_service_1 = require("./auth.service");
var globalErrorHandler_service_1 = require("../common/globalErrorHandler.service");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, baseConfig, authenticationService, globalErrorHandler) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.authenticationService = authenticationService;
        this.globalErrorHandler = globalErrorHandler;
        this.options = this.baseConfig.getBaseHttpConfiguration();
    }
    // Get user profile details
    ProfileService.prototype.getUserProfile = function () {
        debugger;
        var param;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            param = { Id: currentUser.userId };
        }
        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(param), this.options)
            .map(function (response) {
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    // Edit profile details
    ProfileService.prototype.editProfile = function (userInfo) {
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userInfo.userId = currentUser.userId;
        }
        return this.http.post('/api/Account/EditProfile', JSON.stringify(userInfo), this.options)
            .map(function (response) {
            //debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    //Edit Basic Profile Details
    ProfileService.prototype.editBasicInfo = function (userBasicInfo) {
        //debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userBasicInfo.userId = currentUser.userId;
        }
        return this.http.post('/api/Account/EditBasicInfo', JSON.stringify(userBasicInfo), this.options)
            .map(function (response) {
            debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    // Edit Contact Details
    ProfileService.prototype.editContactInfo = function (userContactInfo) {
        //debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            userContactInfo.userId = currentUser.userId;
        }
        return this.http.post('/api/Account/EditContactInfo', JSON.stringify(userContactInfo), this.options)
            .map(function (response) {
            debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig,
            auth_service_1.AuthenticationService, globalErrorHandler_service_1.GlobalErrorHandler])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map