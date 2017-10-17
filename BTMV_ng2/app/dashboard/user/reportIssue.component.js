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
var forms_1 = require("@angular/forms");
//import { State } from '../../models/state';
//import { City } from '../../models/city';
//import { Department } from '../../models/department';
var index_1 = require("../../models/index");
var index_2 = require("../../_Services/index");
var ReportIssueComponent = /** @class */ (function () {
    function ReportIssueComponent(router, listService, workService) {
        var _this = this;
        this.router = router;
        this.listService = listService;
        this.workService = workService;
        //departments: Department[];
        this.selectedState = new index_1.State(0, 'Select State');
        this.isIssueAdded = false;
        this.hasErrorMessage = false;
        console.log('Report an Issue ');
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //);
    }
    ReportIssueComponent.prototype.ngOnInit = function () {
        this.issueTitle = new forms_1.FormControl('', forms_1.Validators.required);
        this.issueDetails = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        //this.departmentId = new FormControl('', Validators.required);
        this.reportIssueForm = new forms_1.FormGroup({
            issueTitle: this.issueTitle,
            issueDetails: this.issueDetails,
            stateId: this.stateId,
            cityId: this.cityId,
        });
    };
    ReportIssueComponent.prototype.onSelect = function (stateId) {
        var _this = this;
        this.listService.getCities(stateId).subscribe(function (cities) { return _this.cities = cities; });
    };
    // Add Reported Issue
    ReportIssueComponent.prototype.addIssue = function (formValues) {
        var _this = this;
        var result = this.workService.addReportedProblem(formValues).subscribe(function (data) {
            //debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                //debugger;
                _this.isIssueAdded = true;
                _this.successMessage = message;
                _this.hasErrorMessage = false;
                _this.resetForm();
            }
            else {
                _this.isIssueAdded = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    // Reset form
    ReportIssueComponent.prototype.resetForm = function () {
        this.reportIssueForm.reset();
        this.isIssueAdded = false;
        this.hasErrorMessage = false;
    };
    ReportIssueComponent = __decorate([
        core_1.Component({
            selector: 'reportIssue',
            templateUrl: 'app/dashboard/user/reportIssue.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n    "],
            providers: [index_2.ListService]
        }),
        __metadata("design:paramtypes", [router_1.Router, index_2.ListService, index_2.WorkService])
    ], ReportIssueComponent);
    return ReportIssueComponent;
}());
exports.ReportIssueComponent = ReportIssueComponent;
//# sourceMappingURL=reportIssue.component.js.map