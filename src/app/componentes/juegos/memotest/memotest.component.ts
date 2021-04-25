import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Memotest } from './memotest';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  memotest !: Memotest;
 // paises : Array<string> = ['Argentina','Brasil','España','Bolivia'];

  constructor(private service : PaisesService) { }

  ngOnInit(): void {
    this.memotest = new Memotest;
  //  this.getData(this.paises);
  }

  girarCarta(){
    this.memotest.girarCarta();
  }

  iniciarJuego(){
    this.memotest.iniciarJuego();
  }

  resetearJuego(){
    this.memotest.resetearJuego();
  }

/*   getData(pais : Array<string>){
    pais.forEach(element => {
        this.service.obtenerPaisPorNombre(element).subscribe( resp=>{
          var arreglo = Array<any>();
          arreglo.push(resp);
          this.memotest.setBanderasMap(element,arreglo[0][0].flag);
        });
    });
  } */

}
