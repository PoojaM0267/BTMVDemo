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
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(router) {
        this.router = router;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        // debugger;
        console.log(error.statusText);
        //TODO: Handle errors here based on error codes   
        //if (error.status === 403)
        //{
        //    alert('Not authenticate User.');
        //    //todo: navigate user to home or login
        //    //this.router.navigate(['/home']);
        //}
        return Rx_1.Observable.throw(new Error(error.status));
    };
    GlobalErrorHandler = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());
exports.GlobalErrorHandler = GlobalErrorHandler;
//# sourceMappingURL=globalErrorHandler.service.js.map