export class WorkModel {
    constructor() { }

    public id: number;
    public workTitle: string;
    public aim: string;
    public departmentId?: number;
    public stateId?: number;
    public cityId?: number;
    public departmentName?: string;   
    public cityName?: string;
    public stateName?: string;
    public occupationName?: string;
    public fundRequired?: number;
    public addedOn?: Date;
}


export interface IWorkModel {
     id: number;
     workTitle: string;
     aim: string;
     departmentId?: number;
     stateId?: number;
     cityId?: number;
     departmentName?: string;
     cityName?: string;
     stateName?: string;
     occupationName?: string;
     fundRequired?: number;
     addedOn?: Date;
}