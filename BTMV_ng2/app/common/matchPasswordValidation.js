"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
function matchPassword(formControl) {
    debugger;
    var password = formControl.parent.controls["password"].value;
    var confirmPassword = formControl.value;
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
            return Rx_1.Observable.of([]);
        }
    }
    else {
        //return Observable.empty();
        //return;
        // return null;
        return Rx_1.Observable.of([]);
    }
}
exports.matchPassword = matchPassword;
//# sourceMappingURL=matchPasswordValidation.js.map