export class Resultado {

    juego : string = "";
    usuario : string = "";
    hora = new Date();
    puntaje : number = 0;

    constructor(juego : string, usuario : string, puntaje : number){
        this.juego = juego;
        this.usuario = usuario;
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
