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
var auth_service_1 = require("../_Services/auth.service");
var DashboardService = (function () {
    function DashboardService(http, baseConfig, authenticationService) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.authenticationService = authenticationService;
        this.options = this.baseConfig.getBaseHttpConfiguration();
        console.log(this.authenticationService.token);
    }
    DashboardService.prototype.getUser = function (userId) {
        //debugger;
        var params = { Id: userId };
        this.options.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        return this.http.post('/api/Account/GetUserDetailsById', JSON.stringify(params), this.options)
            .map(function (response) {
            // debugger;
            var res = response.json();
            return res;
        })
            .catch(function (error) {
            return null;
        });
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig, auth_service_1.AuthenticationService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map