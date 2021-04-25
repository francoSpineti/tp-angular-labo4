export class Usuario {
    email : string = "";
    status : boolean = false;
    hora : string = "";

    toJson() : any{
        const json ={
            email : this.email,
            status : this.status,
            hora : this.hora
        };
        return json;
    }
}
