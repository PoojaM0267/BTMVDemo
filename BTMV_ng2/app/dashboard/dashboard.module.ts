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
import { ViewWorkComponent } from './user/viewWorks.component';
import {
    DashboardService,
    ListService,
    WorkService
} from '../_Services/index';

import { DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';

@NgModule({
    imports: [
        FormsModule, 
        CommonModule,
        DashboardRoutesModule,
        HttpModule,
        ReactiveFormsModule,
        DataTableModule,
        SharedModule,
        PaginatorModule           
    ],
    declarations: [
        DashboardComponent,
        AddWorkComponent,
        SideNavComponent,
        ProfileComponent,
        UserLayoutComponent,
        EditProfileComponent,
        ViewWorkComponent
    ],   
    providers: [
        DashboardService,
        ListService,
        WorkService
    ]
})
export class DashboardModule { }