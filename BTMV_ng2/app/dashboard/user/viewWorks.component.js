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
var index_1 = require("../../_Services/index");
var ViewWorkComponent = /** @class */ (function () {
    function ViewWorkComponent(workService) {
        this.workService = workService;
    }
    ViewWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'workTitle', header: 'Title' },
            { field: 'aim', header: 'Aim' },
            { field: 'departmentName', header: 'Department Name' },
            { field: 'workStatus', header: 'Status' },
            { field: 'fundRequired', header: 'Fund Required' },
            { field: 'fundGranted', header: 'Fund Granted' },
            { field: 'fundUsed', header: 'Fund Used' },
            { field: 'cityName', header: 'City' },
            { field: 'stateName', header: 'State' },
            { field: 'addedOn', header: 'Added On' },
        ];
        this.workService.getUserWorks().subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            var userWorks = data.userWorks;
            if (isSuccess && userWorks != null) {
                _this.works = userWorks;
            }
            else {
                // show error
            }
        }, function (err) {
            // show error
        });
    };
    ViewWorkComponent = __decorate([
        core_1.Component({
            selector: 'viewWorks',
            templateUrl: 'app/dashboard/user/viewWorks.component.html',
        }),
        __metadata("design:paramtypes", [index_1.WorkService])
    ], ViewWorkComponent);
    return ViewWorkComponent;
}());
exports.ViewWorkComponent = ViewWorkComponent;
//# sourceMappingURL=viewWorks.component.js.map