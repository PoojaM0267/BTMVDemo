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
//import { User } from '../models/userModel';
var baseConfig_1 = require("../common/baseConfig");
var auth_service_1 = require("./auth.service");
var globalErrorHandler_service_1 = require("../common/globalErrorHandler.service");
var DashboardService = (function () {
    function DashboardService(http, baseConfig, authenticationService, globalErrorHandler) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.authenticationService = authenticationService;
        this.globalErrorHandler = globalErrorHandler;
        this.options = this.baseConfig.getBaseHttpConfiguration();
        console.log(this.authenticationService.currentUser);
    }
    DashboardService.prototype.getUser = function (userId) {
        //debugger;
        var params = { Id: userId };
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
            .map(function (response) {
            // debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
        // .catch(this.handleError);
        //.catch(error => {
        //    debugger;
        //    return Observable.throw(new Error(error.status));
        // })
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig,
            auth_service_1.AuthenticationService, globalErrorHandler_service_1.GlobalErrorHandler])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map