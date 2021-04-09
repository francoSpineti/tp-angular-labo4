import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {}

  /** Funcion para loguearse
   * 
   * Cuando ingresamos email y pass
   * viene a esta funcion, luego va al servicio
   * y verifica si es correcto lo que se ingreso.
   */
   login(email : string,contraseña :string){
    this.authService.iniciarSesion(email, contraseña).then((result) => {
    }).catch((error) => {
      alert("ERROR: datos incorrectos");
      console.info(error);
    });
  } 

}
