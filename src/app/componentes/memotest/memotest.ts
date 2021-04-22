import { PaisesService } from "src/app/servicios/paises.service";

export class Memotest {

    cartas: any = {};
    intentos: number = 0;
    jugada1: string = "";
    jugada2: string = "";
    identificadorJ1: string = "";
    identificadorJ2: string = "";
    evento : any;
   // banderasMap = new Map();

    constructor() {
         this.cartas = new Array(
            { nombre: '1', seleccion: false }, { nombre: '2', seleccion: false },
            { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
            { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
            { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false },
            { nombre: '1', seleccion: false }, { nombre: '2', seleccion: false },
            { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
            { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
            { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false });
    }

    iniciarJuego() {
       // this.cargarBanderas();
        var dato = (<HTMLElement>document.getElementById("juego"));
        dato.style.opacity = "1";

        this.cartas.sort(function () { return Math.random() - 0.5 });
        for (var i = 0; i < 16; i++) {
            var carta = this.cartas[i].nombre;
            var dato = (<HTMLElement>document.getElementById(i.toString()));
            dato.dataset.valor = carta;
        }
    }

    vaciar() {
        this.jugada1 = "";
        this.jugada2 = "";

        this.identificadorJ1 = "";
        this.identificadorJ2 = "";
    }

    colorCambio(posicion : number, color : string, contenido: string) {
        (<HTMLElement>document.getElementById(posicion.toString())).style.backgroundColor = color;
        (<HTMLElement>document.getElementById(posicion.toString())).innerHTML = contenido;
    }

    comprobar() {
        var aciertos = 0;
        for (var i = 0; i < 16; i++) {
            if (this.cartas[i].seleccion == true) {
                aciertos++;
            }

        }

        if (aciertos == 16) {
            (<HTMLElement>document.getElementById("juego")).innerHTML = "GANASTE";
        }
    }

    girarCarta() {
        this.evento = window.event;
        this.jugada2 = this.evento.target.dataset.valor;
        this.identificadorJ2 = this.evento.target.id;

        if (this.jugada1 !== "") {

            if (this.jugada1 === this.jugada2 && this.identificadorJ1 !== this.identificadorJ2 && this.cartas[parseInt(this.identificadorJ2)].seleccion != true && this.cartas[parseInt(this.identificadorJ1)].seleccion != true) {

                this.cartas[parseInt(this.identificadorJ1)].seleccion = true;
                this.cartas[parseInt(this.identificadorJ2)].seleccion = true;

                this.colorCambio(parseInt(this.identificadorJ2), "blue", this.jugada2);
                this.vaciar();
                this.comprobar();
            } else if (this.identificadorJ1 !== this.identificadorJ2) {
                var self = this;
                setTimeout(function () {
                    self.colorCambio(parseInt(self.identificadorJ1), "black", "?")
                    self.colorCambio(parseInt(self.identificadorJ2), "black", "?")
                    self.vaciar()
                }, 200);

                this.colorCambio(parseInt(this.identificadorJ2), "blue", this.jugada2);
            }
        } else if (this.jugada2 !== "valor") {

            this.colorCambio(parseInt(this.identificadorJ2), "blue", this.jugada2);

            this.jugada1 = this.jugada2;
            this.identificadorJ1 = this.identificadorJ2;
        }
    }


 resetearJuego() {
    this.cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = this.cartas[i].nombre;
        var dato = (<HTMLElement>document.getElementById(i.toString()));
        dato.dataset.valor = carta;
        this.colorCambio(i, 'black', '?');
        }
    }    

/*     getBanderasMap(){
        return this.banderasMap;
    }

    setBanderasMap(key : any,value : any){
        this.banderasMap.set(key,value);
    }

    cargarBanderas(){
        this.cartas = new Array(
            { nombre: "src='this.banderasMap.get('Argentina')'", seleccion: false }, { nombre: this.banderasMap.get('Brasil'), seleccion: false },
            { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
            { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
            { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false },
            { nombre: this.banderasMap.get('Argentina'), seleccion: false }, { nombre: this.banderasMap.get('Brasil'), seleccion: false },
            { nombre: '3', seleccion: false }, { nombre: '4', seleccion: false },
            { nombre: '5', seleccion: false }, { nombre: '6', seleccion: false },
            { nombre: '7', seleccion: false }, { nombre: '8', seleccion: false });
    } */

}
