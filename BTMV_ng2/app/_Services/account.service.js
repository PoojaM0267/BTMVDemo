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
var Rx_1 = require("rxjs/Rx");
var baseConfig_1 = require("../common/baseConfig");
var AccountService = (function () {
    function AccountService(http, baseConfig) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.options = this.baseConfig.getBaseHttpConfiguration();
    }
    AccountService.prototype.registerUser = function (userInfo) {
        return this.http.post('/api/Account/Register', JSON.stringify(userInfo), this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return Rx_1.Observable.of(false);
        });
    };
    AccountService.prototype.loginUser = function (userLoginInfo) {
        // debugger;
        return this.http.post('/api/Account/Login', JSON.stringify(userLoginInfo), this.options)
            .map(function (response) {
            //debugger;
            var res = response.json();
            console.log(res.jwtToken);
            localStorage.setItem('BTMV_currentUser', res.jwtToken);
            //Cookie.set('BTMV_currentUser', res.jwtToken, 0.0138889, "/", "http://localhost:54745", true);
            return res;
        })
            .catch(function (error) {
            return Rx_1.Observable.of(false);
        });
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map