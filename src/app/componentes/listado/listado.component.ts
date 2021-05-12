import { Component, Input, OnInit, Output } from '@angular/core';
import { Resultado } from 'src/app/clases/resultado';
import { ResultadoService } from 'src/app/servicios/resultado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mapMemotest = new Map();
  mapTateti = new Map();
  mapPPT = new Map();
  mapSnake = new Map();
  data: any;
  listAux = new Array<Resultado>();

  constructor(private resultadoService: ResultadoService) {
    this.resultadoService.obtenerResultados().subscribe(resul => {
      this.data = resul;
      for (let index = 0; index < this.data.length; index++) {
        
          if(this.data[index].juego == "memotest"){
                if(this.mapMemotest.size == 0){
                    this.mapMemotest.set(this.data[index].usuario,this.data[index].puntaje);
                }else{
                   if(this.mapMemotest.has(this.data[index].usuario)){
                      let puntaje = this.mapMemotest.get(this.data[index].usuario) + this.data[index].puntaje;
                      this.mapMemotest.delete(this.data[index].usuario);
                      this.mapMemotest.set(this.data[index].usuario,puntaje);
                   }else{
                    this.mapMemotest.set(this.data[index].usuario,this.data[index].puntaje);
                   }
                }
          }else if(this.data[index].juego == "tateti"){
            if(this.mapTateti.size == 0){
              this.mapTateti.set(this.data[index].usuario,this.data[index].puntaje);
            }else{
             if(this.mapTateti.has(this.data[index].usuario)){
                let puntaje = this.mapTateti.get(this.data[index].usuario) + this.data[index].puntaje;
                this.mapTateti.delete(this.data[index].usuario);
                this.mapTateti.set(this.data[index].usuario,puntaje);
             }else{
              this.mapTateti.set(this.data[index].usuario,this.data[index].puntaje);
             }
          }
          }else if(this.data[index].juego == "ppt"){
            if(this.mapPPT.size == 0){
              this.mapPPT.set(this.data[index].usuario,this.data[index].puntaje);
            }else{
             if(this.mapPPT.has(this.data[index].usuario)){
                let puntaje = this.mapPPT.get(this.data[index].usuario) + this.data[index].puntaje;
                this.mapPPT.delete(this.data[index].usuario);
                this.mapPPT.set(this.data[index].usuario,puntaje);
             }else{
              this.mapPPT.set(this.data[index].usuario,this.data[index].puntaje);
             }
          }

          }else{ //snake
            if(this.mapSnake.size == 0){
              this.mapSnake.set(this.data[index].usuario,this.data[index].puntaje);
            }else{
             if(this.mapSnake.has(this.data[index].usuario)){
                let puntaje = this.mapSnake.get(this.data[index].usuario) + this.data[index].puntaje;
                this.mapSnake.delete(this.data[index].usuario);
                this.mapSnake.set(this.data[index].usuario,puntaje);
             }else{
              this.mapSnake.set(this.data[index].usuario,this.data[index].puntaje);
             }
          }
          }
      }
    });
  }

  ngOnInit(): void {

  }


}
