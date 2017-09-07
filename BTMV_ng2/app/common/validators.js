"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidation = (function () {
    function CustomValidation() {
    }
    CustomValidation.isFieldEmpty = function () {
        //return (control: FormControl): {[key: string]} => {
        //    if (control.value == ' ')
        //    {
        //        return true
        //    }
        //}
    };
    CustomValidation.matchPassword = function (abstractControl) {
        var password = abstractControl.get('password').value;
        var confirmPassword = abstractControl.get('confirmPassword').value;
        if (password != confirmPassword) {
            abstractControl.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return CustomValidation;
}());
exports.CustomValidation = CustomValidation;
//# sourceMappingURL=validators.js.map