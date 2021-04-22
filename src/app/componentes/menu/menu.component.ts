import { Component, Input, OnInit } from '@angular/core';
import { Convert, Paises } from 'src/app/interfaces/paises';
import { AuthService } from 'src/app/servicios/auth.service';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() usuarioEnSesion : string = "";
  @Input() estaLogueado : boolean = false;

  constructor(public authService : AuthService, private paises : PaisesService) { }

  ngOnInit(): void {
    let obj = localStorage.getItem('user');
    if(obj != null){
      this.estaLogueado = true;
      let cadena : any = obj?.split(":",6)[4];
      let email = cadena.split(",")[0];
      this.usuarioEnSesion = email;
    }
  }

  logOut(){
    this.authService.cerrarSesion();
  }

}
