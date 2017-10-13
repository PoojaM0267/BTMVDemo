"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var index_1 = require("./home/index");
var index_2 = require("./common/index");
var index_3 = require("./account/index");
var index_4 = require("./_Services/index");
var index_5 = require("./_Guards/index");
/* Routing Module */
var routes_1 = require("./routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routes_1.AppRoutesModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                index_1.HomeComponent,
                index_1.AboutUsComponent,
                index_2.CommonModalComponent,
                index_2.CommonModalTriggerDirective,
                index_3.RegisterComponent,
                index_3.LoginComponent,
                index_1.GalleryComponent,
                index_1.ContactUsComponent,
                index_1.SuccessStoriesComponent
                //  CustomValidation      
            ],
            providers: [
                {
                    provide: index_2.JQ_TOKEN, useValue: jQuery,
                },
                index_4.AccountService,
                index_4.ListService,
                index_2.BaseConfig,
                index_4.AuthenticationService,
                index_5.AuthGuard,
                index_2.GlobalErrorHandler
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map