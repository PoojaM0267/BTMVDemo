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
var WorkService = /** @class */ (function () {
    function WorkService(http, baseConfig, authenticationService, globalErrorHandler) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.authenticationService = authenticationService;
        this.globalErrorHandler = globalErrorHandler;
        this.options = this.baseConfig.getBaseHttpConfiguration();
    }
    // Add new work
    WorkService.prototype.addWork = function (workDetails) {
        debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            workDetails.userId = currentUser.userId;
        }
        return this.http.post('/api/User/AddWork', JSON.stringify(workDetails), this.options)
            .map(function (response) {
            debugger;
            var res = response.json();
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    // Get individual works
    WorkService.prototype.getUserWorks = function () {
        //debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        var param;
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            param = { Id: currentUser.userId };
        }
        return this.http.post('/api/User/GetUserWorks', JSON.stringify(param), this.options)
            .map(function (response) {
            //debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    // Add Reported Problems
    WorkService.prototype.addReportedProblem = function (reportedIssueDetails) {
        debugger;
        var user = localStorage.getItem('BTMV_currentUser');
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
            reportedIssueDetails.userId = currentUser.userId;
        }
        return this.http.post('/api/User/AddReportedIssue', JSON.stringify(reportedIssueDetails), this.options)
            .map(function (response) {
            debugger;
            var res = response.json();
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    //  Edit Work details
    WorkService.prototype.editWork = function (workDetails) {
        var user = localStorage.getItem('BTMV_currentUser');
        //let param;
        if (user) {
            var currentUser = JSON.parse(user);
            this.options.headers.delete('Authorization');
            this.options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return this.http.post('/api/User/EditUserWork', JSON.stringify(workDetails), this.options)
            .map(function (response) {
            //debugger;
            var res = response.json();
            console.log(res);
            return res;
        })
            .catch(this.globalErrorHandler.handleError);
    };
    WorkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig, auth_service_1.AuthenticationService, globalErrorHandler_service_1.GlobalErrorHandler])
    ], WorkService);
    return WorkService;
}());
exports.WorkService = WorkService;
//# sourceMappingURL=work.service.js.map