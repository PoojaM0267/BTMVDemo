import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_Guards/auth.guard';
import { AddWorkComponent } from '../dashboard/common/addWork.component';
import { UserLayoutComponent } from '../dashboard/userLayout.component';
import { ProfileComponent } from '../dashboard/profile.component';
import { EditProfileComponent } from '../dashboard/common/editProfile.component';

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
        { path: 'profile', component: ProfileComponent},
        { path: 'addWork', component: AddWorkComponent },        
        //{ path: 'works', component: WorkComponent },        
        //{ path: 'reportIssue', component: ReportIssueComponent },
        { path: 'editProfile', component: EditProfileComponent },
        //{ path: 'changePassword', component: ChangePasswordComponent },
        //{ path: 'deleteAccount', component: DeleteAccountComponent }
    ]
    }     
 ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }