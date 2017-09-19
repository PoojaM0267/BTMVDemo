import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutesModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../_Services/dashboard.service'

//import { DashboardService } from './dashboard.service'

@NgModule({
    imports: [
        FormsModule,
        DashboardRoutesModule
    ],
    declarations: [
        DashboardComponent
    ],   
    providers: [
        DashboardService
    ]
})
export class DashboardModule { }