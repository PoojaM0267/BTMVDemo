import { Component } from '@angular/core';

@Component({    
    selector: 'my-app',
    //template: 'My First Angular App - Demo'
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }