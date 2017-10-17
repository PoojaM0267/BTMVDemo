export interface IUserProfile {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    dob?: Date;
    gender?: string;
    phone?: number;
    address?: string;
    occupations?: string;
    stateName?: string;
    cityName?: string;
    altPhoneNumber?: number;
    isSelected?: boolean;
}