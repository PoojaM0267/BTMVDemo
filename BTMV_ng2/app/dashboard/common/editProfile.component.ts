import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { City, Occupation, State } from '../../models/index';
import { ListService, ProfileService } from '../../_Services/index';

@Component({
    //selector: 'editProfile',
    selector: 'edit-profile',
    templateUrl: 'app/dashboard/common/editProfile.component.html',
    styles: [`
        em{ float: right; color: #E05C65; padding-left: 10px}
       .error input, .error select, .error textarea { border-left: 5px solid #a94442; border-right : 1px solid #a94442; border-top : 1px solid #a94442; border-bottom : 1px solid #a94442; }
       .valid input, .valid select, .valid textarea { border-left: 5px solid #42A948; border-right: 1px solid #42A948;   border-top: 1px solid #42A948; border-bottom: 1px solid #42A948; }
       .modal-body {  min-height: 500px;}
    `],
    providers: [ListService]
})

export class EditProfileComponent {

    editProfileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    stateId: FormControl;
    cityId: FormControl;
    occupationId: FormControl;
    selectedState: State = new State(0, 'Select State');
    states: State[];
    cities: City[];
    occupations: Occupation[];

    isProfileEditSuccess: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string;

    constructor(private listService: ListService, private profileService: ProfileService) {
        console.log('Edit Profile');

        this.listService.getStates().subscribe(
            states => this.states = states
        );

        this.listService.getOccupations().subscribe(
            occupations => this.occupations = occupations
        ); 
    }

    ngOnInit() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.stateId = new FormControl('', Validators.required);
        this.cityId = new FormControl('', Validators.required);
        this.occupationId = new FormControl('', Validators.required);
        

        this.editProfileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            stateId: this.stateId,
            cityId: this.cityId,
            occupationId: this.occupationId
        });
    }

    onSelect(stateId) {
        this.listService.getCities(stateId).subscribe(cities => this.cities = cities);
    }

    editProfile(formValues)
    {
        let result = this.profileService.editProfile(formValues).subscribe(
            data => {
                // debugger;
                console.log(data);
                let isSuccess = data.isSuccess;
                let message = data.message;

                if (isSuccess) {
                    // debugger;
                    this.isProfileEditSuccess = true;
                    this.hasErrorMessage = false;
                }
                else {
                    // debugger;                    
                    this.isProfileEditSuccess = false;
                    this.hasErrorMessage = true;
                    this.errorMessage = message;
                }

            },
            error => {
                // show error msg
            });
    }

    // Reset form
    resetForm() {
        this.editProfileForm.reset();
        this.isProfileEditSuccess = false;
        this.hasErrorMessage = false;
    }
   
}