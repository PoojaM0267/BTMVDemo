"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, firstName, lastName, email, dob, gender, phoneNumber, address, occupations, stateId, cityId, password, confirmPassword, altPhoneNumber, isSelected) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.occupations = occupations;
        this.stateId = stateId;
        this.cityId = cityId;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.altPhoneNumber = altPhoneNumber;
        this.isSelected = isSelected;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=userModel.js.map