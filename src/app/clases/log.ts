export class Log {

    fecha : string = "";
    email : string = "";
    accion : string = "";

    constructor(fecha : string, email : string, accion : string){
        this.fecha = fecha;
        this.email = email;
        this.accion = accion;
    }

    toJson() : any{
        const json ={
            fecha : this.fecha,
            email : this.email,
            accion : this.accion
        };
        return json;
    }
}
