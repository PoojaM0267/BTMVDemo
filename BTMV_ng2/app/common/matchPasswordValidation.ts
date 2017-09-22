import { FormControl, AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

export function matchPassword(formControl: FormControl) {
    //debugger;

    let password = formControl.parent.controls["password"].value;
    let confirmPassword = formControl.value; 

        if (password != '' && password != undefined) {
            if (password != confirmPassword) {
                formControl.setErrors({ matchPassword: true });
                //return Observable.of(formControl.setErrors({ matchPassword: true }));
                //return Observable.of([]);
                // return Observable.empty();
                // return;
                //return Observable.of(null);
            }
            else {
                // return Observable.empty();
                // return
                // return Observable.of(true);
              // return formControl.setErrors(null);
                return Observable.of([]);
            }
        }
        else {
            //return Observable.empty();
            //return;
           // return null;
            return Observable.of([]);
        }
    }

