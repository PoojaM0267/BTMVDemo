"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchPassword(formControl) {
    debugger;
    var password = formControl.parent.controls["password"].value;
    var confirmPassword = formControl.value;
    if (password != '' && password != undefined) {
        if (password != confirmPassword) {
            //formControl.setErrors({ matchPassword: true });
            return formControl.setErrors({ matchPassword: true });
            //return Observable.of([]);
            // return Observable.empty();
            // return;
            //return Observable.of(null);
        }
        else {
            // return Observable.empty();
            //return;
            // return Observable.of(true);
            return formControl.setErrors(null);
        }
    }
    else {
        //return Observable.empty();
        //return;
        return null;
    }
}
exports.matchPassword = matchPassword;
//# sourceMappingURL=customValidators.js.map