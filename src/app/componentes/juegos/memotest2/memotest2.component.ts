import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Carta } from './carta';
import { ReiniciarJuegoComponent } from './reiniciar-juego/reiniciar-juego.component';
import { TipoCarta } from './tipo-carta';

@Component({
  selector: 'app-memotest2',
  templateUrl: './memotest2.component.html',
  styleUrls: ['./memotest2.component.scss']
})
export class Memotest2Component implements OnInit {

  paises = [
    'Argentina',
    'Brasil',
    'España',
    'Venezuela',
    'Uruguay'
  ];

  banderas = Array<string>();

  listaCartas: Carta[] = [];

  flippedCartas: Carta[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog,private paisService : PaisesService) {
  }

  ngOnInit(): void {
    //this.setupCards();
    this.getData(this.paises);
  }

  setupCards(): void {
    if(this.banderas.length== this.paises.length){
      this.banderas.forEach((image) => {
        const cardData: Carta = {
          imagenID: image,
          estado: TipoCarta.default
        };
  
        this.listaCartas.push({ ...cardData });
        this.listaCartas.push({ ...cardData });
  
      });
  
      this.listaCartas = this.shuffleArray(this.listaCartas);
    }
  }

  cardClicked(index: number): void {
    const cardInfo = this.listaCartas[index];

    if (cardInfo.estado === TipoCarta.default && this.flippedCartas.length < 2) {
      cardInfo.estado = TipoCarta.flipped;
      this.flippedCartas.push(cardInfo);

      if (this.flippedCartas.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.estado === TipoCarta.flipped) {
      cardInfo.estado = TipoCarta.default;
      this.flippedCartas.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCartas[0];
      const cardTwo = this.flippedCartas[1];
      const nextestado = cardOne.imagenID === cardTwo.imagenID ? TipoCarta.matched : TipoCarta.default;
      cardOne.estado = cardTwo.estado = nextestado;

      this.flippedCartas = [];

      if (nextestado === TipoCarta.matched) {
        this.matchedCount++;

         if (this.matchedCount === this.paises.length) {
          const dialogRef = this.dialog.open(ReiniciarJuegoComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

   getData(pais : Array<string>){
    pais.forEach(element => {
        this.paisService.obtenerPaisPorNombre(element).subscribe( resp=>{
          var arreglo = Array<any>();
          arreglo.push(resp);
          this.banderas.push(arreglo[0][0].flag);
          this.setupCards();
        });
    });
  }

}
