"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Directive({
//    selector: '[validateEmail]' 
//})
function validateEmail(email) {
    debugger;
    var EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w + ([\.-]?\w +)*(\.\w{2, 3 })+$/;
    return EMAIL_REGEX.test(email.value) ? null : {
        validateEmail: { valid: false }
    };
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=emailValidator.js.map