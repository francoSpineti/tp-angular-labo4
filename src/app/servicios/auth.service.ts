import { Injectable, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Log } from '../clases/log';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth : AngularFireAuth, public router: Router,private afs: AngularFirestore) { }

  async iniciarSesion(email : string, contraseña : string){
    let result = await this.firebaseAuth.signInWithEmailAndPassword(email, contraseña)  // aca verifica con firebase el email y pass si existe
    .then(res =>{
      localStorage.setItem('user',JSON.stringify(res.user));
      this.guardarLog(email,"logueo");
      this.router.navigate(['/home']);
    },
    error => alert()
    );
  }

  async registrarse(email : string, contraseña : string) {
    try {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(email, contraseña);
      localStorage.setItem('user',JSON.stringify(result.user));
      this.guardarLog(email,"registro");
      this.router.navigate(['/home']);
      return result;
    } catch (error) {
      throw error.message;
    }
  }

  async cerrarSesion() {
    await this.firebaseAuth.signOut();
    let obj = localStorage.getItem('user');
    let cadena : any = obj?.split(":",6)[4];
    let email = cadena.split(",")[0];
    this.guardarLog(email,"logout");
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  guardarLog(email:string,accion : string){
    let date = new Date();

    let user = new Usuario();
    user.email = email;

    let log = new Log(date.toLocaleDateString(),user,accion);

    const id = this.afs.createId();
    return this.afs.collection('/logs').doc(id).set(log.toJson());
  }

  //esto lo que hace es guardar en la base una coleccion llamada users 
  // y la const user lo toma como un obj json
/*   addUser(email: any) {
    const date = new Date();
    const user = {
      createdAt: date.toLocaleDateString(),
      id: Math.floor(Math.random() * Math.floor(500)),
      name: email.split('@')[0],
      mail: email
    };
    console.log(user);
    const id = this.afs.createId();
    return this.afs.collection('/users').doc(id).set(user);
  } */

}