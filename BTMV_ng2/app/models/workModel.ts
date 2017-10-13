//export class WorkModel {
//    constructor() { }

//    public id: number;
//    public workTitle: string;
//    public aim: string;
//    public departmentId?: number;
//    public stateId?: number;
//    public cityId?: number;
//    public departmentName?: string;   
//    public cityName?: string;
//    public stateName?: string;
//    public occupationName?: string;
//    public fundRequired?: number;
//    public addedOn?: Date;
//}


export interface IWorkModel {
     id: number;
     workTitle: string;
     aim: string;
     userId: number;
     departmentId?: number;
     stateId?: number;
     cityId?: number;
     departmentName?: string;
     cityName?: string;
     stateName?: string;
     occupationName?: string;
     fundRequired?: number;
     fundUsed?: number;
     fundGranted?: number;
     addedOn?: Date;  
     workStatus?: string   
}

//export class WorkModel implements IWorkModel {
//    id: number;
//    workTitle: string;
//    aim: string;
//    userId: number;
//}