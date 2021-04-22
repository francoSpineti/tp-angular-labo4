import { Component, Input, OnInit } from '@angular/core';
import { Tateti } from './tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

	objTateti : Tateti = new Tateti("","");
	obj ?: any;

	constructor() {
	}

	ngOnInit(): void {
	}

	eligeFicha(ficha : string){
		this.objTateti.eligeFicha(ficha);
	}

	jugadaHumano(obj: any, valor1 : number, valor2 : number){
		this.objTateti.jugadaHumano((<HTMLElement>document.getElementById(this.convertirEnTexto(valor1,valor2))),valor1,valor2);
	}

	convertirEnTexto(valor1 : number, valor2 : number){
		var texto = "";
		switch(valor1){
			case 0:{
				texto+= "cero";
				break;
			}
			case 1: {
				texto+= "uno";
				break;
			}
			case 2: {
				texto+= "dos";
				break;
			}
			default:{
				break;		
			}	
		}

		switch(valor2){
			case 0:{
				texto+= "Cero";
				break;
			}
			case 1: {
				texto+= "Uno";
				break;
			}
			case 2: {
				texto+= "Dos";
				break;
			}
			default:{
				break;		
			}	
		}
		return texto;
	}
};