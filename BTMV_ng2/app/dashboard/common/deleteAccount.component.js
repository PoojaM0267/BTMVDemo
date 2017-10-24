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
var index_1 = require("../../_Services/index");
var DeleteAccountComponent = /** @class */ (function () {
    function DeleteAccountComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        console.log('Delete Account');
    }
    DeleteAccountComponent.prototype.ngOnInit = function () {
    };
    DeleteAccountComponent = __decorate([
        core_1.Component({
            selector: 'edit-Work',
            templateUrl: 'app/dashboard/common/deleteAccount.component.html',
            //styles: [`
            //    em{ float: right; color: #E05C65; padding-left: 10px}
            //   .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
            //   .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
            //   .modal-body {  min-height: 550px;}
            //`],
            providers: [index_1.AccountService]
        }),
        __metadata("design:paramtypes", [index_1.AccountService, router_1.Router])
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());
exports.DeleteAccountComponent = DeleteAccountComponent;
//# sourceMappingURL=deleteAccount.component.js.map