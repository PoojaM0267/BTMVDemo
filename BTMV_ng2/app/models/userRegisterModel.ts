export class UserRegisterModel {
    constructor() { }

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public dob?: Date;
    public gender?: string;
    public phoneNumber?: number;        
    public address?: string;
    public occupations?: string;
    public stateId?: number;
    public cityId?: number;
    public roleId?: string;
    public password?: string;
    public confirmPassword?: string;
    public altPhoneNumber?: number;
    public isSelected?: boolean;
    public roleName?: string;
    public cityName?: string;
    public stateName?: string;
    public occupationName?: string;
}
