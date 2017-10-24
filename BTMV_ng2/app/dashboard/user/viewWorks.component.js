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
var primeng_1 = require("primeng/primeng");
var ViewWorkComponent = /** @class */ (function () {
    function ViewWorkComponent(workService, router, confirmationService) {
        this.workService = workService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.hasErrorMessage = false;
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
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // show error
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    // Delete selected work
    ViewWorkComponent.prototype.deleteWork = function (work) {
        var _this = this;
        //debugger;
        alert('delete Work');
        console.log(work);
        this.workService.deleteWork(work.id).subscribe(function (data) {
            //debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            alert(message);
            if (isSuccess) {
                // debugger;
                _this.ngOnInit();
                //this.router.navigate(['/works']);
            }
        }, function (error) {
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    ViewWorkComponent.prototype.confirmDelete = function (work) {
        var _this = this;
        //debugger;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this work?',
            accept: function () {
                _this.deleteWork(work);
            }
        });
    };
    ViewWorkComponent = __decorate([
        core_1.Component({
            selector: 'viewWorks',
            templateUrl: 'app/dashboard/user/viewWorks.component.html',
        }),
        __metadata("design:paramtypes", [index_1.WorkService, router_1.Router, primeng_1.ConfirmationService])
    ], ViewWorkComponent);
    return ViewWorkComponent;
}());
exports.ViewWorkComponent = ViewWorkComponent;
//# sourceMappingURL=viewWorks.component.js.map