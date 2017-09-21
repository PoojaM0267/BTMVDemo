export interface IUserProfile {
     id: number;
    firstName: string;
    lastName: string;
    email: string;
    dob?: Date;
    gender?: string;
    phoneNumber?: number;
    address?: string;
    occupations?: string;
    stateName?: string;
    cityName?: string;
    altPhoneNumber?: number;
    isSelected?: boolean;
}