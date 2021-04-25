import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup !: FormGroup;

  constructor(private authService : AuthService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required]
    });
  }

   login(){
     const email = this.formGroup.controls['email'].value;
     const contraseña = this.formGroup.controls['contraseña'].value;
    this.authService.iniciarSesion(email,contraseña).then((result) => {
    }).catch((error) => {
      alert("ERROR: datos incorrectos");
    });
  }

  accesoRapido(){
    this.formGroup.controls['email'].setValue("ejemplo@a.com");
    this.formGroup.controls['contraseña'].setValue("123456");
  }
  
}
