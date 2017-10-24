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
var ListService = /** @class */ (function () {
    function ListService(http, baseConfig) {
        this.http = http;
        this.baseConfig = baseConfig;
        this.options = this.baseConfig.getBaseHttpConfiguration();
    }
    // Get all states
    ListService.prototype.getStates = function () {
        //debugger;
        return this.http.get('/api/Common/GetAllStates').map(function (response) { return response.json(); });
    };
    // Get all cities based on state
    ListService.prototype.getCities = function (stateId) {
        try {
            var body = { stateId: stateId };
            return this.http.post('/api/Common/GetCitiesByState', JSON.stringify(body), this.options).map(function (response) { return response.json(); });
        }
        catch (Ex) {
            console.log(JSON.stringify(Ex));
        }
    };
    // Get all occupations
    ListService.prototype.getOccupations = function () {
        return this.http.get('/api/Common/GetAllOccupations').map(function (response) { return response.json(); });
    };
    // Get all departments
    ListService.prototype.getDepartments = function () {
        //debugger;
        return this.http.get('/api/Common/GetAllDepartments').map(function (response) { return response.json(); });
    };
    ListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, baseConfig_1.BaseConfig])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map