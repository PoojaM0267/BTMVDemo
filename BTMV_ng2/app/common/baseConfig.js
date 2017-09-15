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
var BaseConfig = (function () {
    function BaseConfig() {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
    }
    BaseConfig.prototype.getBaseHttpConfiguration = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json', });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    BaseConfig = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BaseConfig);
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=baseConfig.js.map