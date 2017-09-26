import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    SuccessStoriesComponent
} from './home/index';

import {
    JQ_TOKEN,
    CommonModalTriggerDirective,
    CommonModalComponent,
    BaseConfig,
    GlobalErrorHandler
    // CustomValidation
} from './common/index';

import {
    RegisterComponent,
    LoginComponent,
} from './account/index';

import {
    AuthenticationService,
    AccountService,
    ListService,
} from './_Services/index';

import {
    AuthGuard
} from './_Guards/index';

/* Routing Module */
import { AppRoutesModule } from './routes';

declare let jQuery: Object; 

@NgModule({
    imports: [
        BrowserModule,
        AppRoutesModule,        
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
        LoginComponent,    
        GalleryComponent,
        ContactUsComponent,
        SuccessStoriesComponent
      //  CustomValidation      
    ],
    providers: [
        {
            provide: JQ_TOKEN, useValue: jQuery,
        },
        AccountService,
        ListService,
        BaseConfig,
        AuthenticationService,
        AuthGuard,
        GlobalErrorHandler
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }