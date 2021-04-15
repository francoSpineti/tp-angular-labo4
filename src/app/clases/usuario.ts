export class Usuario {

    uid?: string;
    email : string = "";
    contraseña ?: string;
    status ?: string;

    constructor(email ?: string){
        email = email;
    }
}
