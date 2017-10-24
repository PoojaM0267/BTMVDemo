export class ChangePasswordModel {
    constructor(
        public userId: number,
        public currentPassword: string,
        public newPassword: string,
        public confirmNewPassword: string
    ) { }
}