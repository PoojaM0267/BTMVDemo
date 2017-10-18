import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRegisterModel, Occupation } from '../../models/index';
import { ListService, ProfileService } from '../../_Services/index';

@Component({
    selector: 'edit-basicInfo',
    templateUrl: 'app/dashboard/common/editBasicInfo.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 550px;}
    `],
    providers: [ListService]
})

export class EditBasicInfoComponent {

    basicInfoEditForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    //email: FormControl;
    dob: FormControl;
    gender: FormControl;
    occupationId: FormControl;
    occupations: Occupation[];

    isBasicInfoEditSuccess: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;

    genders = [
        { value: 'Female', display: 'Female' },
        { value: 'Male', display: 'Male' }
    ];

    //@Input() userDetails: UserRegisterModel;
    
    constructor(private listService: ListService, private profileService: ProfileService, private router: Router) {
        console.log('Edit Basic Info');
        //console.log(this.userDetails);

        this.listService.getOccupations().subscribe(
            occupations => this.occupations = occupations
        );
    }

    ngOnInit() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        //this.email = new FormControl('', [Validators.required, Validators.email]);
        this.occupationId = new FormControl('', Validators.required);
        this.dob = new FormControl();
        this.gender = new FormControl();
        //this.gender = new FormControl(this.genders[0].value);


        this.basicInfoEditForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            //email: this.email,
            occupationId: this.occupationId,
            dob: this.dob,
            gender: this.gender
        });
    }

    editBasicInfo(formValues) {
        console.log(formValues);
        let result = this.profileService.editBasicInfo(formValues).subscribe(
            data => {
                // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                     debugger;
                    this.isBasicInfoEditSuccess = true;
                    this.hasErrorMessage = false;
                    this.successMessage = message;
                    this.router.navigate(['/profile']);
                }
                else {
                     debugger;                    
                    this.isBasicInfoEditSuccess = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }

            },
            error => {
                debugger; 
                alert('Something went wrong. Please try again later.');       
                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    // Reset form
    resetForm() {
        this.basicInfoEditForm.reset();
        this.isBasicInfoEditSuccess = false;
        this.hasErrorMessage = false;
    }
}