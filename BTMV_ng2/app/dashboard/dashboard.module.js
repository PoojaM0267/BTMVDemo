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
var sideNav_component_1 = require("./sideNav.component");
var profile_component_1 = require("./profile.component");
var userLayout_component_1 = require("./userLayout.component");
var index_1 = require("./common/index");
var index_2 = require("./user/index");
var index_3 = require("../_Services/index");
var primeng_1 = require("primeng/primeng");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                dashboard_routes_1.DashboardRoutesModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                primeng_1.DataTableModule,
                primeng_1.SharedModule,
                primeng_1.PaginatorModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                index_1.AddWorkComponent,
                sideNav_component_1.SideNavComponent,
                profile_component_1.ProfileComponent,
                userLayout_component_1.UserLayoutComponent,
                index_1.EditProfileComponent,
                index_2.ViewWorkComponent,
                index_2.ReportIssueComponent,
                index_1.EditBasicInfoComponent,
                index_1.EditContactInfoComponent
            ],
            providers: [
                index_3.DashboardService,
                index_3.ListService,
                index_3.WorkService,
                index_3.ProfileService
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map