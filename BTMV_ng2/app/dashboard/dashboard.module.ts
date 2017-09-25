import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutesModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../_Services/dashboard.service';
import { AddWorkComponent } from './common/addWork.component';
import { SideNavComponent } from './sideNav.component';
import { ProfileComponent } from './profile.component';
import { UserLayoutComponent } from './userLayout.component';
//import { DashboardService } from './dashboard.service'

@NgModule({
    imports: [
        FormsModule,
        DashboardRoutesModule
    ],
    declarations: [
        DashboardComponent,
        AddWorkComponent,
        SideNavComponent,
        ProfileComponent,
        UserLayoutComponent
    ],   
    providers: [
        DashboardService
    ]
})
export class DashboardModule { }