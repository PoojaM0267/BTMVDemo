import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, AboutUsComponent, GalleryComponent, ContactUsComponent, SuccessStoriesComponent } from './home/index';

export const appRoutes: Routes = [   
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutUs',
        component: AboutUsComponent
    },
    {
        path: 'successStories',
        component: SuccessStoriesComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'contactUs',
        component: ContactUsComponent
    },  
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    }, 
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },   // default route
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
