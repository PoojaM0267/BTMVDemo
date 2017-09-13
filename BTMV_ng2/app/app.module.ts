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
    RegisterComponent,
    AccountService,
    LoginComponent,
    GalleryComponent,
    ContactUsComponent,
    SuccessStoriesComponent
} from './home/index';

import {
    JQ_TOKEN,
    CommonModalTriggerDirective,
    CommonModalComponent,
    ListService,
    BaseConfig
    // CustomValidation
} from './common/index';

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
        BaseConfig
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }