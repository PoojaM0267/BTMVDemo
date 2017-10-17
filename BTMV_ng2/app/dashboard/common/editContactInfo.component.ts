import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { City, State } from '../../models/index';
import { ListService, ProfileService } from '../../_Services/index';

@Component({
    selector: 'edit-contactInfo',
    templateUrl: 'app/dashboard/common/editContactInfo.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 500px;}
    `],
    providers: [ListService]
})

export class EditContactInfoComponent {

    contactInfoEditForm: FormGroup;

    stateId: FormControl;
    cityId: FormControl;
    address: FormControl;
    phone: FormControl;
    selectedState: State = new State(0, 'Select State');
    states: State[];
    cities: City[];

    isContactInfoEditSuccess: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;
    successMessage: string;

    constructor(private listService: ListService, private profileService: ProfileService, private router: Router) {
        console.log('Edit Basic Info');

        this.listService.getStates().subscribe(
            states => this.states = states
        );
    }

    ngOnInit() {
        this.stateId = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);       
        this.address = new FormControl('');
        this.phone = new FormControl();


        this.contactInfoEditForm = new FormGroup({
            stateId: this.stateId,
            cityId: this.cityId,
            address: this.address,
            phone: this.phone
        });
    }

    onSelect(stateId) {
        this.listService.getCities(stateId).subscribe(cities => this.cities = cities);
    }

        
    editContactInfo(formValues) {
        console.log(formValues);
        let result = this.profileService.editContactInfo(formValues).subscribe(
            data => {
                // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                   // debugger;
                    this.isContactInfoEditSuccess = true;
                    this.hasErrorMessage = false;
                    this.successMessage = message;
                    this.router.navigate(['/profile']);
                }
                else {
                    //debugger;
                    this.isContactInfoEditSuccess = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }

            },
            error => {
               // debugger;
                alert('Something went wrong. Please try again later.');
                if (error.message === "403") {
                    alert('Not authenticate User.');
                    this.router.navigate(['/home']);
                }
            });
    }

    // Reset form
    resetForm() {
        this.contactInfoEditForm.reset();
        this.isContactInfoEditSuccess = false;
        this.hasErrorMessage = false;
    }
}
