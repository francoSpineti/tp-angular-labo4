import { Resultado } from "src/app/clases/resultado";
import { ResultadoService } from "src/app/servicios/resultado.service";

export class Tateti {

    IDS: any = [['ceroCero', 'ceroUno', 'ceroDos'], ['unoCero', 'unoUno', 'unoDos'], ['dosCero', 'dosUno', 'dosDos']];

    puntaje :number;
    empates: number = 0;
    ganadosComputadora: number = 0;
    ganadosHumano: number = 0;

    turno: string = "";
    fichaHumano: string = "";
    fichaComputadora: string = "";
    jugados: number = 0;
    tablero: Array<any>;    

    resultadoService !: ResultadoService;

    constructor(fichaHu: string, turno: string) {
        this.tablero = [
            [{ ocupada: false, ficha: "", posicion: [0, 0] }, { ocupada: false, ficha: "", posicion: [0, 1] }, { ocupada: false, ficha: "", posicion: [0, 2] }],
            [{ ocupada: false, ficha: "", posicion: [1, 0] }, { ocupada: false, ficha: "", posicion: [1, 1] }, { ocupada: false, ficha: "", posicion: [1, 2] }],
            [{ ocupada: false, ficha: "", posicion: [2, 0] }, { ocupada: false, ficha: "", posicion: [2, 1] }, { ocupada: false, ficha: "", posicion: [2, 2] }]];
        
        this.turno = turno, //h humano, c computadora
        this.jugados = 0;
        this.puntaje = 0;
    }

    setFichaHumano(ficha: string) {
        this.fichaHumano = ficha;
        this.fichaComputadora = (ficha == 'X') ? 'O' : 'X';
    }

    reset(fichaH: string, turno: string) {
        this.tablero = [
            [{ ocupada: false, ficha: "", posicion: [0, 0] }, { ocupada: false, ficha: "", posicion: [0, 1] }, { ocupada: false, ficha: "", posicion: [0, 2] }],
            [{ ocupada: false, ficha: "", posicion: [1, 0] }, { ocupada: false, ficha: "", posicion: [1, 1] }, { ocupada: false, ficha: "", posicion: [1, 2] }],
            [{ ocupada: false, ficha: "", posicion: [2, 0] }, { ocupada: false, ficha: "", posicion: [2, 1] }, { ocupada: false, ficha: "", posicion: [2, 2] }]];
        this.fichaHumano = fichaH;
        this.fichaComputadora = (fichaH == 'X') ? 'O' : 'X';
        this.turno = turno;
        this.jugados = 0;
    }

    agregarFicha(tipoFicha: string, fila: number, columna: number) {
        this.tablero[fila][columna].ocupada = true;
        this.tablero[fila][columna].ficha = tipoFicha;
    }

    estaOcupada(fila: number, columna: number) {
        return this.tablero[fila][columna].ocupada;
    }

    cambiarTurno() {
        if (this.turno == 'c') {
            this.turno = 'h';
        } else {
            this.turno = 'c';
        }
    }

    mostrarTablero() {
        console.log("------------------");
        for (var i = 0; i < this.tablero.length; i++) {
            var f = this.tablero[i];
            var c1 = f[0].ficha;
            var c2 = f[1].ficha;
            var c3 = f[2].ficha;
            var txt = "|  " + c1 + "  |  " + c2 + "  |  " + c3 + "  |";
            console.log(txt);
        }
        console.log("------------------");
    }

    diagonales() {
        let res : Array<any> = new Array;
        //let res: any = {};
        res.push([]);
        res.push([]);
        res[0].push(this.tablero[0][0]);
        res[0].push(this.tablero[1][1]);
        res[0].push(this.tablero[2][2]);
        res[1].push(this.tablero[0][2]);
        res[1].push(this.tablero[1][1]);
        res[1].push(this.tablero[2][0]);
        return res;
    }

    columna(n: number) {
        var res = [];
        for (var f of this.tablero) {
            res.push(f[n]);
        }
        return res;
    }

    columnas() {
        var res = [];
        res.push(this.columna(0));
        res.push(this.columna(1));
        res.push(this.columna(2));
        return res;
    }

    estaTerminado(): boolean {
        return this.estaLleno() || this.hay3EnLinea();
    }

    estaLleno() {
        return this.jugados >= 9;
    }

    hay3EnLinea() {
        var lineas = this.columnas().concat(this.tablero).concat(this.diagonales());
        for (var linea of lineas) {
            if (this.hay3Iguales(linea)) {
                return true;
            }
        }
        return false;
    }

    //devuelve una lista de posiciones de celdas vacías que están en líneas con dos celdas ocupadas
    celdasVaciasDeLineasConDosOcupadas(ficha: number) {
        var lineas = this.columnas().concat(this.tablero).concat(this.diagonales());
        var res = [];
        for (var linea of lineas) {
            var tiene = this.tieneUnaSolaDesocupada(linea, ficha); //espero un array vacío o uno no vacío con dos elementos correspondientes a una posición de celda del tablero
            if (tiene.length !== 0) {
                res.push(tiene);
            }
        }
        return res;
    }

    tieneUnaSolaDesocupada(linea: Array<any>, tipoFicha: number) {
        //revisar y reescribir
        var count = 0;
        var posicion: any = {};
        for (var celda of linea) {
            if (celda.ocupada) {
                if (celda.ficha === tipoFicha) {
                    count++;
                }
            } else {
                //guardar la celda desocupada
                posicion = celda.posicion;
            }
        }
        if (count === 2) {
            return posicion;
        } else {
            return [];
        }
    }

    hay3Iguales(linea: Array<any>) {
        //revisar y reescribir para mejor legibilidad
        var count = 0;
        var ficha = "";
        for (var celda of linea) {
            if (celda.ocupada) {
                if (ficha !== "") {
                    if (ficha === celda.ficha) {
                        count++;
                    } else {
                        return false;
                    }
                } else {
                    ficha = celda.ficha;
                    count++;
                }
            } else {
                return false;
            }
        }
        return count === 3;
    }

    desocupada(): number[]{
        //busca y devuelve una celda desocupada
        let posicion: number[] = [0,0];//un par ordenado de fila, columna
        for (var i = 0; i < this.tablero.length; i++) {
            var f = this.tablero[i];
            for (var j = 0; j < f.length; j++) {
                if (!this.estaOcupada(i, j)) {
                    posicion = [i, j]; //devuelve la primera que encuentra
                }
            }
        }
        return posicion;
    }

    jugadaHumano(celda: HTMLElement, fila: number, columna: number,resultadoService : ResultadoService) {
        //antes tenés que ver si no está terminado el juego y si es el turno del jugador
        //no chequeo si es el turno del jugador
        //si en algún momento chequeara de quién es el turno, si no fuera del jugador llamaría a la jugada de la computadora.
        //pero esto pasaría si se clickea una celda, no tiene mucho sentido...

        if (!this.estaTerminado()) {
            if (!this.estaOcupada(fila, columna)) {
                this.agregarFicha(this.fichaHumano, fila, columna);
                this.jugados += 1;
                this.mostrarCelda(celda, this.fichaHumano);
                this.mostrarTablero();

                if (this.estaTerminado()) {
                    //aca ganaste
                    this.puntaje++;
                    this.guardarResultado(resultadoService);
                    this.actualizarMarcador('h');
                    console.log("terminó Humano");
                    this.reset(this.fichaHumano, 'h');
                    //se mantiene la misma ficha que tenía al principio.
                    //podría haber una función que elija al azar a quién le toca el turno
                    this.limpiarCeldas();
                    this.mostrarTurno();
                    this.mostrarMarcador();
                    console.log("Humano: " + this.ganadosHumano + ". Computadora: " + this.ganadosComputadora + ". Empates: " + this.empates);
                } else {
                    this.cambiarTurno();
                    this.mostrarTurno();
                    console.log("turno: " + this.turno);
                    this.jugadaComputadora(this,resultadoService);
                }
            } else {
                console.log('ocupada');
            }
        }
    }

    jugadaComputadora(tateti : Tateti,resultadoService : ResultadoService) {
        //se podría modularizar un poco, encapsular y abstraer algunas partes de esta función...
        //se supone que es el turno de la computadora, no habría otra forma de llegar acá si no, del modo en que está escrito
        if (!tateti.estaTerminado()) {
            //toda esta parte debería estar encapsulada en una función, qué es lo que está haciendo la computadora, elegirCelda()

            //elegir una posicion al azar de entre 	celdasVaciasDeLineasConDosOcupadas(tateti.fichaComputadora); y si es vacío, si no hay ninguna
            // entonces de celdasVaciasDeLineasConDosOcupadas(tateti.fichaHumano);, es decir si no puede ganar entonces bloquear la posibilidad de ganar del contrario
            //y si no en la primera desocupada.
            var posicion = this.desocupada();

            var posiblesParaGanar = this.celdasVaciasDeLineasConDosOcupadas(parseInt(tateti.fichaComputadora));
            var posiblesParaBloquear = this.celdasVaciasDeLineasConDosOcupadas(parseInt(tateti.fichaHumano));

            if (posiblesParaGanar.length >= 1) {
                posicion = posiblesParaGanar[Math.floor(Math.random() * posiblesParaGanar.length)];//elijo al azar una de las celdas
            } else if (posiblesParaBloquear.length >= 1) {
                posicion = posiblesParaBloquear[Math.floor(Math.random() * posiblesParaBloquear.length)];//elijo al azar una de las celdas
            } else {
                //antes de dejar que elija cualquiera desocupada, ver si está libre la del medio, la (1,1)
                if (!this.estaOcupada(1, 1)) posicion = [1, 1];
            }

            //una vez que eligió, pone la ficha en el tablero.
            var fila = posicion![0];
            var columna = posicion![1];
            this.agregarFicha(tateti.fichaComputadora, fila, columna);
            this.jugados += 1; //esta acción tal vez tendría que hacerse dentro de agregar ficha 

            //una vez agregada, se muestra en la página
            var celda = (<HTMLElement>document.getElementById(tateti.IDS[fila][columna]));
            this.mostrarCelda(celda, tateti.fichaComputadora);

            this.mostrarTablero();

            //chequea si con esa jugada se terminó el partido
            if (tateti.estaTerminado()) {
                //aca perdiste
                this.puntaje--;
                this.guardarResultado(resultadoService);
                tateti.actualizarMarcador('c');
                console.log("terminó Computadora");
                tateti.reset(tateti.fichaHumano, 'h');
                tateti.limpiarCeldas();
                tateti.mostrarTurno();
                tateti.mostrarMarcador();
                console.log("Humano: " + tateti.ganadosHumano + ". Computadora: " + tateti.ganadosComputadora + ". Empates: " + tateti.empates);
            } else {
                tateti.cambiarTurno();
                tateti.mostrarTurno();
                console.log("turno: " + tateti.turno);
            }
        }
    }

    actualizarMarcador(quienTermino: string) {
        if (this.hay3EnLinea()) {
            (quienTermino == 'h') ? this.ganadosHumano++ : this.ganadosComputadora++;
        } else {
            //aca poner empate
            this.empates++;
        }
    }

    mostrarMarcador() {
        var ganadosH = (<HTMLElement>document.getElementById('ganadosH'));
        var ganadosC = (<HTMLElement>document.getElementById('ganadosC'));
        var empate = (<HTMLElement>document.getElementById('empate'));

        ganadosC.textContent = "Computadora: " + this.ganadosComputadora;
        ganadosH.textContent = "Humano: " + this.ganadosHumano;
        empate.textContent = "Empate: " + this.empates;
    }

    limpiarCeldas() {
        //recorrer los ids de las celdas, y para cada celda, ponerle un espacio como contenido o el número que le corresponde
        var celda;
        for (var fila of this.IDS) {
            for (var id of fila) {
                celda = (<HTMLElement>document.getElementById(id));
                celda.textContent = "";
            }
        }
    }

    mostrarCelda(celda: HTMLElement, ficha: string) {
        celda.textContent = ficha.toString();
    }

    mostrarTurno() {
        var display = (<HTMLElement>document.getElementById('turno'));
        display.textContent = 'Turno: ' + this.turno;
    }

    eligeFicha(tipoFicha: string) {

        //var tateti = new Tateti(tipoFicha, 'h');
        this.fichaHumano = tipoFicha;
        this.fichaComputadora = (tipoFicha == 'X') ? 'O' : 'X';

        //mostrar celdas

       let id1 = (<HTMLElement>document.getElementById("ceroCero")).style.display="inline-block";
       let id2 = (<HTMLElement>document.getElementById("ceroUno")).style.display="inline-block";
       let id3 = (<HTMLElement>document.getElementById("ceroDos")).style.display="inline-block";
       let id4 = (<HTMLElement>document.getElementById("unoCero")).style.display="inline-block";
       let id5 = (<HTMLElement>document.getElementById("unoUno")).style.display="inline-block";
       let id6 = (<HTMLElement>document.getElementById("unoDos")).style.display="inline-block";
       let id7 =(<HTMLElement>document.getElementById("dosCero")).style.display="inline-block";
       let id8 = (<HTMLElement>document.getElementById("dosUno")).style.display="inline-block";
       let id9 = (<HTMLElement>document.getElementById("dosDos")).style.display="inline-block";

        //ocultar selección de ficha
        var ficha = (<HTMLElement>document.getElementById("ficha"));
        ficha.style.display = "none";

        //mostrar jugadores, turno y marcador
        var hum = (<HTMLElement>document.getElementById("hum"));
        var comp = (<HTMLElement>document.getElementById("comp"));
        var turno = (<HTMLElement>document.getElementById("turno"));
        var marcador = (<HTMLElement>document.getElementsByClassName('marcador')[0]);

        hum.textContent = "Humano juega con " + this.fichaHumano;
        comp.textContent = "Computadora juega con " + this.fichaComputadora;
        turno.textContent = "Turno " + this.turno;

        //    jugadores.style.display = "block";
        turno.style.display = "block";
        marcador.style.display = "block";

        this.mostrarMarcador();
    }

    guardarResultado(resultadoService : ResultadoService){
        let date = new Date();
        let obj = localStorage.getItem('user');
        let cadena : any = obj?.split(":",6)[4];
        let email = cadena.split(",")[0];
        let email2 = email.split('"');
        let resultado = new Resultado("tateti",email2[1],date.toLocaleDateString(),this.puntaje);
        resultadoService.guardar(resultado.toJson());
      }
}
