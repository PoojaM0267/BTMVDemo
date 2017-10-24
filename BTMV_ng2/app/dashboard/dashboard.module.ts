import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardRoutesModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './sideNav.component';
import { ProfileComponent } from './profile.component';
import { UserLayoutComponent } from './userLayout.component';

import {
    AddWorkComponent,
    EditBasicInfoComponent,
    EditProfileComponent,
    EditContactInfoComponent,
    ChangePasswordComponent
} from './common/index';

import {
    ViewWorkComponent,
    ReportIssueComponent,
    EditWorkComponent
} from './user/index';

import {
    WorkRequestsComponent
} from './admin/index';

import {
    DashboardService,
    ListService,
    WorkService,
    ProfileService
} from '../_Services/index';

import {
    DataTableModule,
    SharedModule,
    PaginatorModule,
    ConfirmDialogModule,
    ConfirmationService,
    StepsModule
} from 'primeng/primeng';

//import { } from 'md-steppers';

@NgModule({
    imports: [
        FormsModule, 
        CommonModule,
        DashboardRoutesModule,
        HttpModule,
        ReactiveFormsModule,
        DataTableModule,
        SharedModule,
        PaginatorModule,
        ConfirmDialogModule,
        StepsModule,                           
    ],
    declarations: [
        DashboardComponent,
        AddWorkComponent,
        SideNavComponent,
        ProfileComponent,
        UserLayoutComponent,
        EditProfileComponent,
        ViewWorkComponent,
        ReportIssueComponent,
        EditBasicInfoComponent,
        EditContactInfoComponent,
        EditWorkComponent,
        ChangePasswordComponent,
        WorkRequestsComponent
    ],   
    providers: [
        DashboardService,
        ListService,
        WorkService,
        ProfileService,
        ConfirmationService
    ]
})
export class DashboardModule { }