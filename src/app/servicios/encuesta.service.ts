import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private afs: AngularFirestore) { }

  guardar(encuesta : any){
    const id = this.afs.createId();
    return this.afs.collection('/encuesta').doc(id).set(encuesta);
  }

}
