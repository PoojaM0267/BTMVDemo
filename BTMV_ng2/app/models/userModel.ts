export class User {
    constructor(
        //public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public dob?: Date,
        public gender?: string,
        public phoneNumber?: number,        
        public address?: string,
        public occupations?: string,
        public stateId?: string,
        public cityId?: string,
        public password?: string,
        public confirmPassword?: string,
        public altPhoneNumber?: number,
        public isSelected?: boolean
    ) { }
}
