import { Usuario } from './usuario';

export class Log {

    fecha : string = "";
    usuario : Usuario = new Usuario();
    accion : string = "";

    constructor(fecha : string, usuario : Usuario, accion : string){
        this.fecha = fecha;
        this.usuario = usuario;
        this.accion = accion;
    }

    toJson() : any{
        const user = {
            email : this.usuario.email
        };
        const json ={
            fecha : this.fecha,
            usuario : user,
            accion : this.accion
        };
        return json;
    }
}
