import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resultado } from 'src/app/clases/resultado';
import { ResultadoService } from 'src/app/servicios/resultado.service';
import { DialogoEncuestaComponent } from '../dialogo-encuesta/dialogo-encuesta.component';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  puntaje : number = 0;

  constructor(public dialog: MatDialog,private resultadoService : ResultadoService) { }

  ngOnInit(): void {
  }
   opciones = [0, 1, 2];
   eleccionMaquina : number = 0;

   aleatorio(minimo : number, maximo : number){
     var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
     return numero;
   }

   usuario(eleccionUsuario : number){
    this.eleccionMaquina = this.aleatorio(0,2);
    
    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(this.opciones[this.eleccionMaquina] == 1){//si la maquina eligio papel 
          this.puntaje = this.puntaje - 5;
          this.guardarResultado();
            this.dialog.open(DialogoComponent,{
              data: {
                titulo: 'PERDISTE',
                mensaje: 'Se te restaron 5 puntos.'
              }
            });
        }else{
            if(this.opciones[this.eleccionMaquina] == 2){
              this.puntaje = this.puntaje + 25;
              this.guardarResultado();
              this.dialog.open(DialogoComponent,{
                width: '250px',
                data: {
                  titulo: 'GANASTE',
                  mensaje: 'Sumaste 25 puntos.'
                }
              });
              this.mostrarEncuesta();
            }else{
                if(this.opciones[this.eleccionMaquina] == 0){
                  this.dialog.open(DialogoComponent,{
                    width: '250px',
                    data: {
                      titulo: 'EMPATE',
                      mensaje: 'No se suman puntos.'
                    }
                  });
                }
            }
        } 
    }

    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(this.opciones[this.eleccionMaquina] == 2){
          this.puntaje = this.puntaje - 5;
          this.guardarResultado();
          this.dialog.open(DialogoComponent,{
            data: {
              titulo: 'PERDISTE',
              mensaje: 'Se te restaron 5 puntos.'
            }
          });
        }else{
            if(this.opciones[this.eleccionMaquina] == 0){
              this.puntaje = this.puntaje + 25;
              this.guardarResultado();
              this.dialog.open(DialogoComponent,{
                width: '250px',
                data: {
                  titulo: 'GANASTE',
                  mensaje: 'Sumaste 25 puntos.'
                }
              });
              this.dialog.closeAll();
              this.mostrarEncuesta();
            }else{
                if(this.opciones[this.eleccionMaquina] == 1){
                  this.dialog.open(DialogoComponent,{
                    width: '250px',
                    data: {
                      titulo: 'EMPATE',
                      mensaje: 'No se suman puntos.'
                    }
                  });
                }
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(this.opciones[this.eleccionMaquina] == 1){
          this.puntaje = this.puntaje + 25;
          this.guardarResultado();
          this.dialog.open(DialogoComponent,{
            width: '250px',
            data: {
              titulo: 'GANASTE',
              mensaje: 'Sumaste 25 puntos.'
            }
          });
          this.dialog.closeAll();
          this.mostrarEncuesta();
        }else{
            if(this.opciones[this.eleccionMaquina] == 0){
              this.puntaje = this.puntaje - 5;
              this.guardarResultado();
              this.dialog.open(DialogoComponent,{
                data: {
                  titulo: 'PERDISTE',
                  mensaje: 'Se te restaron 5 puntos.'
                }
              });
            }else{
                if(this.opciones[this.eleccionMaquina] == 2) {
                  this.dialog.open(DialogoComponent,{
                    width: '250px',
                    data: {
                      titulo: 'EMPATE',
                      mensaje: 'No se suman puntos.'
                    }
                  });
                }
            }
        }
    }
}

  guardarResultado(){
    let date = new Date();
    let obj = localStorage.getItem('user');
    let cadena : any = obj?.split(":",6)[4];
    let email = cadena.split(",")[0];
    let email2 = email.split('"');
    let resultado = new Resultado("ppt",email2[1],date.toLocaleDateString(),this.puntaje);
    this.resultadoService.guardar(resultado.toJson());
  }

  mostrarEncuesta(){
    let numeroEncuesta = Math.round(Math.random()*100); //despues hacer random

    if(numeroEncuesta == 48){
      this.dialog.open(DialogoEncuestaComponent,{
        data: {
          titulo: 'Nos interesa tu opinión! Completas una encuesta?',
          mensaje: 'Ir a Encuesta!'
        }
      });
    }
  }

}
