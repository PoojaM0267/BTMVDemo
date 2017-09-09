import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component'
import { appRoutes } from './routes'
import {
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    AccountService,
    LoginComponent
} from './home/index'

import {
    JQ_TOKEN,
    CommonModalTriggerDirective,
    CommonModalComponent,
    ListService,
   // CustomValidation
} from './common/index'

declare let jQuery: Object; 

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AboutUsComponent,
        CommonModalComponent,
        CommonModalTriggerDirective,
        RegisterComponent,
        LoginComponent
      //  CustomValidation      
    ],
    providers: [
        {
            provide: JQ_TOKEN, useValue: jQuery,
        },
        AccountService,
        ListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }