"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_routes_1 = require("./dashboard.routes");
var dashboard_component_1 = require("./dashboard.component");
var addWork_component_1 = require("./common/addWork.component");
var sideNav_component_1 = require("./sideNav.component");
var profile_component_1 = require("./profile.component");
var userLayout_component_1 = require("./userLayout.component");
var editProfile_component_1 = require("./common/editProfile.component");
var dashboard_service_1 = require("../_Services/dashboard.service");
var list_service_1 = require("../_Services/list.service");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                dashboard_routes_1.DashboardRoutesModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                addWork_component_1.AddWorkComponent,
                sideNav_component_1.SideNavComponent,
                profile_component_1.ProfileComponent,
                userLayout_component_1.UserLayoutComponent,
                editProfile_component_1.EditProfileComponent
            ],
            providers: [
                dashboard_service_1.DashboardService,
                list_service_1.ListService
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map