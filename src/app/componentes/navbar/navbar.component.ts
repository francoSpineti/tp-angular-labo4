import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usuarioEnSesion : string = "";
  @Input() estaLogueado : boolean = false;

  constructor(public authService : AuthService) { }

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
