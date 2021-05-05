import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private afs: AngularFirestore) { }

  guardar(resultado : any){
    const id = this.afs.createId();
    return this.afs.collection('/resultados').doc(id).set(resultado);
  }
}
