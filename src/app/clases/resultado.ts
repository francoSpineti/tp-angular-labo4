export class Resultado {

    juego : string = "";
    usuario : string = "";
    hora : string = "";
    puntaje : number = 0;

    constructor(juego : string, usuario : string, hora : string, puntaje : number){
        this.juego = juego;
        this.usuario = usuario;
        this.hora = hora;
        this.puntaje = puntaje;
    }

    toJson() : any{
        const json ={
            juego : this.juego,
            usuario : this.usuario,
            hora : this.hora,
            puntaje : this.puntaje
        };
        return json;
    }

}
