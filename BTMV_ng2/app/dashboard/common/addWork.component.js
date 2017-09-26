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
var forms_1 = require("@angular/forms");
var state_1 = require("../../models/state");
var department_1 = require("../../models/department");
var list_service_1 = require("../../_Services/list.service");
var AddWorkComponent = (function () {
    function AddWorkComponent(listService) {
        var _this = this;
        this.listService = listService;
        this.selectedState = new state_1.State(0, 'Select State');
        this.selectedDepartment = new department_1.Department(0, 'Select Department');
        this.isWorkAdded = false;
        this.hasErrorMessage = false;
        this.isSubmitted = false;
        debugger;
        console.log('Add Work');
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
        this.listService.getDepartments().subscribe(function (departments) { return _this.departments = departments; });
        console.log(this.departments);
    }
    AddWorkComponent.prototype.ngOnInit = function () {
        debugger;
        this.workTitle = new forms_1.FormControl('', forms_1.Validators.required);
        this.aim = new forms_1.FormControl('', forms_1.Validators.required);
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        this.departmentId = new forms_1.FormControl('', forms_1.Validators.required);
        this.fundRequired = new forms_1.FormControl('');
        this.addWorkForm = new forms_1.FormGroup({
            workTitle: this.workTitle,
            aim: this.aim,
            stateId: this.stateId,
            cityId: this.cityId,
            departmentId: this.departmentId,
            fundRequired: this.fundRequired
        });
    };
    AddWorkComponent.prototype.onSelect = function (stateId) {
        var _this = this;
        this.listService.getCities(stateId).subscribe(function (cities) { return _this.cities = cities; });
    };
    AddWorkComponent.prototype.addWork = function (formValues) {
        debugger;
        this.isSubmitted = true;
        console.log(formValues);
    };
    AddWorkComponent.prototype.resetForm = function () {
        this.addWorkForm.reset();
        this.isWorkAdded = false;
    };
    AddWorkComponent = __decorate([
        core_1.Component({
            selector: 'addWork',
            templateUrl: 'app/dashboard/common/addWork.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n    "],
            providers: [list_service_1.ListService]
        }),
        __metadata("design:paramtypes", [list_service_1.ListService])
    ], AddWorkComponent);
    return AddWorkComponent;
}());
exports.AddWorkComponent = AddWorkComponent;
//# sourceMappingURL=addWork.component.js.map