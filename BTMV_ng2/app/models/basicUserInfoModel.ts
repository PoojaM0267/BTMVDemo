export class BasicUserInfoModel {
    constructor(
        public userId: number,
        public username: string,
        public roleId: number,
        public roleName: string,
        public firstName: string,
        public lastName : string
    ) { }
}