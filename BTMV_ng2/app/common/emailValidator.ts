import { Directive } from '@angular/core'
import { FormControl } from '@angular/forms'

//@Directive({
//    selector: '[validateEmail]' 
//})

export function validateEmail(email: FormControl) {
    debugger;
    let EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w + ([\.-]?\w +)*(\.\w{2, 3 })+$/

    return EMAIL_REGEX.test(email.value) ? null : {
        validateEmail: { valid: false }
    }
}