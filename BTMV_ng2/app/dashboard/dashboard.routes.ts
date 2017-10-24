import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_Guards/auth.guard';
import { UserLayoutComponent } from '../dashboard/userLayout.component';
import { ProfileComponent } from '../dashboard/profile.component';
import {
    AddWorkComponent,
    EditProfileComponent,
    ChangePasswordComponent
} from '../dashboard/common/index';

import {
    ViewWorkComponent,
    ReportIssueComponent
} from '../dashboard/user/index';

import {
    WorkRequestsComponent
} from '../dashboard/admin/index';

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
        { path: 'reportIssue', component: ReportIssueComponent },       
        { path: 'changePassword', component: ChangePasswordComponent },
        { path: 'workRequests', component: WorkRequestsComponent },
        //{ path: 'reportedIssues', component:  },
        //{ path: 'allWorks', component:  },
        //{ path: 'allUsers', component:  },
        ]
    }     
 ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }