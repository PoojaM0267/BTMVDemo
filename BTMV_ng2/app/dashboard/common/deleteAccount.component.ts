import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../../_Services/index';
@Component({
    selector: 'edit-Work',
    templateUrl: 'app/dashboard/common/deleteAccount.component.html',
    //styles: [`
    //    em{ float: right; color: #E05C65; padding-left: 10px}
    //   .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
    //   .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
    //   .modal-body {  min-height: 550px;}
    //`],
    providers: [AccountService]
})
export class DeleteAccountComponent {
    constructor(private accountService: AccountService, private router: Router) {
        console.log('Delete Account');
    }

    ngOnInit() {

    }
}