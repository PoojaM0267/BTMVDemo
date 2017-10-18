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
var router_1 = require("@angular/router");
var index_1 = require("../../models/index");
var index_2 = require("../../_Services/index");
var EditWorkComponent = /** @class */ (function () {
    function EditWorkComponent(listService, workService, router) {
        var _this = this;
        this.listService = listService;
        this.workService = workService;
        this.router = router;
        this.selectedState = new index_1.State(0, 'Select State');
        // departments: Department[];
        this.isWorkEdited = false;
        this.hasErrorMessage = false;
        console.log('Edit Work');
        this.listService.getStates().subscribe(function (states) { return _this.states = states; });
        //this.listService.getDepartments().subscribe(
        //    departments => this.departments = departments
        //); 
    }
    EditWorkComponent.prototype.ngOnInit = function () {
        this.workTitle = new forms_1.FormControl('', forms_1.Validators.required);
        this.aim = new forms_1.FormControl('', forms_1.Validators.required);
        this.stateId = new forms_1.FormControl('', forms_1.Validators.required);
        this.cityId = new forms_1.FormControl('', forms_1.Validators.required);
        // this.departmentId = new FormControl('', Validators.required);
        this.fundRequired = new forms_1.FormControl('');
        this.id = new forms_1.FormControl('');
        this.workEditForm = new forms_1.FormGroup({
            workTitle: this.workTitle,
            aim: this.aim,
            stateId: this.stateId,
            cityId: this.cityId,
            // departmentId: this.departmentId,
            fundRequired: this.fundRequired
        });
    };
    EditWorkComponent.prototype.editWork = function (formValues) {
        var _this = this;
        debugger;
        alert('edit Work');
        var result = this.workService.editWork(formValues).subscribe(function (data) {
            //debugger;
            console.log(data);
            var isSuccess = data.isSuccess;
            var message = data.message;
            if (isSuccess) {
                //debugger;
                _this.isWorkEdited = true;
                _this.successMessage = message;
                _this.hasErrorMessage = false;
                _this.resetForm();
            }
            else {
                // debugger;                    
                _this.isWorkEdited = false;
                _this.hasErrorMessage = true;
                _this.errorMessage = message;
            }
        }, function (error) {
            // show error msg
            _this.hasErrorMessage = true;
            _this.errorMessage = 'Something went wrong. Please try again later.';
            if (error.message === "403") {
                alert('Not authenticate User.');
                _this.router.navigate(['/home']);
            }
        });
    };
    EditWorkComponent.prototype.deleteWork = function (work) {
        alert('delete Work');
        console.log(work);
    };
    EditWorkComponent.prototype.resetForm = function () {
        //debugger;
        this.workEditForm.reset();
        this.isWorkEdited = false;
        this.hasErrorMessage = false;
    };
    EditWorkComponent = __decorate([
        core_1.Component({
            selector: 'edit-Work',
            templateUrl: 'app/dashboard/user/editWork.component.html',
            styles: ["\n        em{ float: right; color: #E05C65; padding-left: 10px}\n       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }\n       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }\n       .modal-body {  min-height: 550px;}\n    "],
            providers: [index_2.ListService]
        }),
        __metadata("design:paramtypes", [index_2.ListService, index_2.WorkService, router_1.Router])
    ], EditWorkComponent);
    return EditWorkComponent;
}());
exports.EditWorkComponent = EditWorkComponent;
//# sourceMappingURL=editWork.component.js.map