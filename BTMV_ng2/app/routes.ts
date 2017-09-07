import { Routes } from '@angular/router'
import { HomeComponent, AboutUsComponent } from './home/index'

export const appRoutes: Routes = [   
    { path: 'home', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },   // default route
]
