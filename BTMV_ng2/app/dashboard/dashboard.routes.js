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
var auth_guard_1 = require("../_Guards/auth.guard");
var addWork_component_1 = require("../dashboard/common/addWork.component");
var userLayout_component_1 = require("../dashboard/userLayout.component");
var profile_component_1 = require("../dashboard/profile.component");
//const routes: Routes = [  
// { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
// { path: '', component: DashboardComponent },
// { path: '/:id', component: DashboardComponent } ,    
//{ path: 'addWork', component: AddWorkComponent },
//{ path: '/dashboard/addWork', component: AddWorkComponent }
//];
//const routes: Routes = [{
//    path: 'dashboard',
//    children: [
//        { path: '', component: DashboardComponent },
//        //{ path: 'dashboard', component: DashboardComponent },
//        { path: 'dashboard/:id', component: DashboardComponent },
//        { path: 'addWork', component: AddWorkComponent },
//    ]
//}];  
var routes = [{
        path: 'dashboard/:id',
        children: [
            { path: '', component: userLayout_component_1.UserLayoutComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'profile', component: profile_component_1.ProfileComponent, outlet: 'pooja' },
            { path: 'addWork', component: addWork_component_1.AddWorkComponent, outlet: 'pooja' },
        ]
    }];
//const routes: Routes = [
//{
//    path: 'dashboard/:id',
//    component: DashboardComponent,
//    canActivate: [AuthGuard],
//    outlet: 'pooja'
//},
//{
//    path: 'dashboard/:id',
//    component: UserLayoutComponent,
//    canActivate: [AuthGuard],
//    //outlet: 'pooja'
//},
//{
//    path: 'profile',
//    outlet: 'pooja',
//    component: ProfileComponent,
//    //canActivate: [AuthGuard],
//},
//{
//    path: 'addWork',
//    outlet: 'pooja',
//    component: AddWorkComponent,
//    //canActivate: [AuthGuard],
//},
//{
//    path: '',
//    component: UserLayoutComponent,
//    canActivate: [AuthGuard],
//   // outlet: 'pooja'
//}
//];
var DashboardRoutesModule = (function () {
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