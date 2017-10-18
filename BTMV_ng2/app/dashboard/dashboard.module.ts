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
    EditContactInfoComponent
} from './common/index';

import {
    ViewWorkComponent,
    ReportIssueComponent,
    EditWorkComponent
} from './user/index';

import {
    DashboardService,
    ListService,
    WorkService,
    ProfileService
} from '../_Services/index';

import {
    DataTableModule,
    SharedModule,
    PaginatorModule
} from 'primeng/primeng';

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
        ViewWorkComponent,
        ReportIssueComponent,
        EditBasicInfoComponent,
        EditContactInfoComponent,
        EditWorkComponent
    ],   
    providers: [
        DashboardService,
        ListService,
        WorkService,
        ProfileService
    ]
})
export class DashboardModule { }