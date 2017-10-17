import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_Guards/auth.guard';
import { UserLayoutComponent } from '../dashboard/userLayout.component';
import { ProfileComponent } from '../dashboard/profile.component';
import { AddWorkComponent, EditProfileComponent } from '../dashboard/common/index';

//import { ViewWorkComponent } from '../dashboard/user/viewWorks.component';
//import { ReportIssueComponent } from '../dashboard/user/reportIssue.component';
import { ViewWorkComponent, ReportIssueComponent } from '../dashboard/user/index';

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

const routes: Routes = [
    {
    path: '',
    children: [
        //{ path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard]},
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'addWork', component: AddWorkComponent },
        { path: 'works', component: ViewWorkComponent },
        { path: 'profile', component: ProfileComponent},        
        //{ path: 'works', component: WorkComponent },        
        { path: 'reportIssue', component: ReportIssueComponent },       
        //{ path: 'changePassword', component: ChangePasswordComponent },
        //{ path: 'deleteAccount', component: DeleteAccountComponent },
        
    ]
    }     
 ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }