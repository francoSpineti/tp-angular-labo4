import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formGroupRegistro !: FormGroup;
  constructor(public authService : AuthService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formGroupRegistro = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required]
    });
  }

  crearCuenta(){
    const email = this.formGroupRegistro.controls['email'].value;
     const contraseña = this.formGroupRegistro.controls['contraseña'].value;
    this.authService.registrarse(email, contraseña)
        .then(result => {
            console.log('insert user');
          }).catch((error) => {
        alert(error);
      });
  }

}
