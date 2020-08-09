export class Usuario {

    id: number;
    user: string;
    password: string;

    constructor(pId = 0, pUser = '', pPassword = '') {
        this.id = pId;
        this.user = pUser;
        this.password = pPassword;
    }

}