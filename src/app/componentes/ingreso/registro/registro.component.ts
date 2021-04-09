import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  crearCuenta(email : string,contraseña :string ){
    this.authService.registrarse(email, contraseña)
        .then(result => {
            console.log('insert user');
          }).catch((error) => {
        alert(error);
      });
  }

}
