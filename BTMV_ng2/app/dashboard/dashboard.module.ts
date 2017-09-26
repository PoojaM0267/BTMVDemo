import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardRoutesModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { AddWorkComponent } from './common/addWork.component';
import { SideNavComponent } from './sideNav.component';
import { ProfileComponent } from './profile.component';
import { UserLayoutComponent } from './userLayout.component';
import { EditProfileComponent } from './common/editProfile.component';
import { DashboardService } from '../_Services/dashboard.service';
import { ListService } from '../_Services/list.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DashboardRoutesModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        DashboardComponent,
        AddWorkComponent,
        SideNavComponent,
        ProfileComponent,
        UserLayoutComponent,
        EditProfileComponent
    ],   
    providers: [
        DashboardService,
        ListService
    ]
})
export class DashboardModule { }