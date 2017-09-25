import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_Guards/auth.guard';
import { AddWorkComponent } from '../dashboard/common/addWork.component';
import { UserLayoutComponent } from '../dashboard/userLayout.component';
import { ProfileComponent} from '../dashboard/profile.component';

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


const routes: Routes = [{
    path: 'dashboard/:id',
    children: [
        { path: '', component: UserLayoutComponent, canActivate: [AuthGuard] },
        { path: 'profile', component: ProfileComponent, outlet: 'pooja'},
        { path: 'addWork', component: AddWorkComponent, outlet: 'pooja' },
       // { path: '', component: UserLayoutComponent, canActivate: [AuthGuard]},
    ]
}]

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

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }