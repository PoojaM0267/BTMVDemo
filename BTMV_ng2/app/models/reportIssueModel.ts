export interface IReportIssueModel {
    id: number;
    issueTitle: string;
    issueDetails: string;
    userId: number;
    departmentId?: number;
    stateId?: number;
    cityId?: number;
    departmentName?: string;
    cityName?: string;
    stateName?: string; 
    addedOn?: Date;
}