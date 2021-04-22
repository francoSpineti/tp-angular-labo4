import { Injectable, NgModule } from '@angular/core';
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

  private dbpath='/usuarios';
  users : Observable<Usuario[]>;
  mensajes !: AngularFirestoreCollection<any>;

  constructor(public firebaseAuth : AngularFireAuth, public router: Router,private afs: AngularFirestore) { 
    this.mensajes = afs.collection<any>(this.dbpath);
    this.users = this.mensajes.valueChanges();
  }

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
    let log = new Log(date.toLocaleDateString(),email,accion);
    const id = this.afs.createId();
    return this.afs.collection('/logs').doc(id).set(log.toJson());
  }

  async getCurrentUser(){
    return this.firebaseAuth.authState.pipe().toPromise();
  }

  getAll(){
    return this.users;
  }

  create(mensaje:any):any{
    return this.mensajes.add({...mensaje});

  }


}