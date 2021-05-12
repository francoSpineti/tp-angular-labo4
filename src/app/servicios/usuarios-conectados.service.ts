import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosConectadosService {

  private dbPathUser = '/usuarioChat';
  dataUsuarios !: AngularFirestoreCollection<any>;
  usuariosEnLinea : Observable<any[]>;

  constructor(private db : AngularFirestore) { 
    this.dataUsuarios = db.collection<any>(this.dbPathUser,ref => ref.orderBy('hora'));
    this.usuariosEnLinea = this.dataUsuarios.valueChanges(this.dbPathUser);
  }

  obtenerUsuariosEnLinea(){
    return this.usuariosEnLinea;
  }
}
