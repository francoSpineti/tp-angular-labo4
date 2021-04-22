import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   email : string = "";
   password : string = "";

  constructor(private authService : AuthService) { }

  ngOnInit(): void {}

   login(){
    this.authService.iniciarSesion(this.email,this.password).then((result) => {
    }).catch((error) => {
      alert("ERROR: datos incorrectos");
    });
  }

  accesoRapido(){
    this.email = "ejemplo@a.com";
    this.password = "123456";
  }

}
