"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var auth_guard_1 = require("../_Guards/auth.guard");
var profile_component_1 = require("../dashboard/profile.component");
var index_1 = require("../dashboard/common/index");
//import { ViewWorkComponent } from '../dashboard/user/viewWorks.component';
//import { ReportIssueComponent } from '../dashboard/user/reportIssue.component';
var index_2 = require("../dashboard/user/index");
// working
//const routes: Routes = [
//    {
//        path: 'dashboard/:id',
//        component: UserLayoutComponent,
//        canActivate: [AuthGuard]
//    },
//    {
//    path: 'trial',
//    children: [
//        { path: 'profile', component: ProfileComponent},
//        { path: 'profile', component: ProfileComponent, outlet: 'pooja'},
//        { path: 'addWork', component: AddWorkComponent, outlet: 'pooja'}
//    ]
//    }
//]
var routes = [
    {
        path: '',
        children: [
            //{ path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard]},
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'addWork', component: index_1.AddWorkComponent },
            { path: 'works', component: index_2.ViewWorkComponent },
            { path: 'profile', component: profile_component_1.ProfileComponent },
            //{ path: 'works', component: WorkComponent },        
            { path: 'reportIssue', component: index_2.ReportIssueComponent },
        ]
    }
];
var DashboardRoutesModule = /** @class */ (function () {
    function DashboardRoutesModule() {
    }
    DashboardRoutesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutesModule);
    return DashboardRoutesModule;
}());
exports.DashboardRoutesModule = DashboardRoutesModule;
//# sourceMappingURL=dashboard.routes.js.map