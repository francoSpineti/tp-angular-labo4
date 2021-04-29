import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Log } from '../clases/log';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data !: AngularFirestoreCollection<any>;
  usuariosEnLinea !: Observable<any[]>;

  constructor(public firebaseAuth : AngularFireAuth, public router: Router,private afs: AngularFirestore) {     
  }

  async iniciarSesion(email : string, contraseña : string){
    let result = await this.firebaseAuth.signInWithEmailAndPassword(email, contraseña)
    .then(res =>{
      localStorage.setItem('user',JSON.stringify(res.user));
      this.guardarLog(email,"logueo");
      this.guardarInfoChat(email,true);
      this.router.navigate(['/menu']);
    },
    error => alert()
    );
  }

  async registrarse(email : string, contraseña : string) {
    try {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(email, contraseña);
      localStorage.setItem('user',JSON.stringify(result.user));
      this.guardarLog(email,"registro");
      this.guardarInfoChat(email,true);
      this.router.navigate(['/menu']);
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
    let email2 = email.split('"');
    
    this.guardarLog(email2[1],"logout");
    this.guardarInfoChat(email2[1],false);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  guardarLog(email:string,accion : string){
    let date = new Date();
    let log = new Log(date.toLocaleDateString(),email,accion);
    const id = this.afs.createId();
    return this.afs.collection('/logs').doc(id).set(log.toJson());
  }

  guardarInfoChat(email:string,status : boolean){
    let usuario = new Usuario;
    let date = new Date();
    usuario.email = email;
    usuario.status = status;
    usuario.hora = date.toTimeString();
    const id = this.afs.createId();
    return this.afs.collection('/usuarioChat').doc(id).set(usuario.toJson());
  }

  async getCurrentUser(){
    return this.firebaseAuth.authState.pipe().toPromise();
  }

}