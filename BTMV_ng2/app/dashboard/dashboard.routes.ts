import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../_Guards/auth.guard';
import {AddWorkComponent } from '../dashboard/common/addWork.component';

const routes: Routes = [  
   // { path: '', component: DashboardComponent },
   // { path: '/:id', component: DashboardComponent } ,
    { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
    //{ path: 'addWork', component: AddWorkComponent },
    //{ path: '/dashboard/addWork', component: AddWorkComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }