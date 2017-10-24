import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private router: Router) { }

    handleError(error) {
        debugger;
        alert(error.statusText);

        //TODO: Handle errors here based on error codes   
        //if (error.status === 403)
        //{
        //    alert('Not authenticate User.');
        //    //todo: navigate user to home or login
        //    //this.router.navigate(['/home']);
        //}

          return Observable.throw(new Error(error.status));
    }

}