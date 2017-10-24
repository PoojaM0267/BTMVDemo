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
var WorkRequestsComponent = /** @class */ (function () {
    function WorkRequestsComponent(workService, router, confirmationService) {
        this.workService = workService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.hasErrorMessage = false;
    }
    WorkRequestsComponent.prototype.ngOnInit = function () {
        this.refreshWorkRequests();
        //    this.cols = [
        //        { field: 'workTitle', header: 'Title' },
        //        { field: 'aim', header: 'Aim' },
        //        { field: 'departmentName', header: 'Department Name' },
        //        { field: 'fundRequired', header: 'Fund Required' },
        //        { field: 'fundUsed', header: 'Fund Used' },
        //        { field: 'cityName', header: 'City' },
        //        { field: 'stateName', header: 'State' },
        //        { field: 'addedOn', header: 'Added On' },
        //        { field: 'addedBy', header: 'Added By' },
        //    ];    
        //this.workService.getWorkRequests().subscribe(
        //data => {
        //     debugger;
        //    console.log(data);
        //    let isSuccess = data.isSuccess;
        //    let message = data.message;
        //    let workRequests = data.workRequests;
        //    if (isSuccess && workRequests != null) {
        //        this.works = workRequests
        //    }
        //    else {
        //        // show error
        //        this.hasErrorMessage = true;
        //        this.errorMessage = message;
        //    }
        //},
        //error => {
        //    // show error
        //    this.hasErrorMessage = true;
        //    this.errorMessage = 'Something went wrong. Please try again later.';
        //    if (error.message === "403") {
        //        alert('Not authenticate User.');
        //        this.router.navigate(['/home']);
        //    }
        //});
    };
    WorkRequestsComponent.prototype.confirmRejectWork = function (work) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to reject this work?',
            accept: function () {
                _this.rejectWork(work);
            }
        });
    };
    WorkRequestsComponent.prototype.rejectWork = function (work) {
        var _this = this;
        this.workService.rejectWorkRequest(work.id).subscribe(function (data) {
            //debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            alert(message);
            if (isSuccess) {
                _this.ngOnInit();
                //this.refreshWorkRequests();
            }
        }, function (error) {
            //  debugger;
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    WorkRequestsComponent.prototype.approveWork = function () {
    };
    WorkRequestsComponent.prototype.refreshWorkRequests = function () {
        var _this = this;
        //debugger;
        this.cols = [
            { field: 'workTitle', header: 'Title' },
            { field: 'aim', header: 'Aim' },
            { field: 'departmentName', header: 'Department Name' },
            { field: 'fundRequired', header: 'Fund Required' },
            { field: 'fundUsed', header: 'Fund Used' },
            { field: 'cityName', header: 'City' },
            { field: 'stateName', header: 'State' },
            { field: 'addedOn', header: 'Added On' },
            { field: 'addedBy', header: 'Added By' },
        ];
        this.workService.getWorkRequests().subscribe(function (data) {
            // debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            var workRequests = data.workRequests;
            if (isSuccess && workRequests != null) {
                _this.works = workRequests;
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
    WorkRequestsComponent = __decorate([
        core_1.Component({
            selector: 'workRequests',
            templateUrl: 'app/dashboard/admin/workRequests.component.html',
        }),
        __metadata("design:paramtypes", [index_1.WorkService, router_1.Router, primeng_1.ConfirmationService])
    ], WorkRequestsComponent);
    return WorkRequestsComponent;
}());
exports.WorkRequestsComponent = WorkRequestsComponent;
//# sourceMappingURL=workRequests.component.js.map