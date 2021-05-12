import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  private dbPath = '/resultados';
  data !: AngularFirestoreCollection<any>;
  resultados : Observable<any[]>;

  constructor(private afs: AngularFirestore) {

    this.data = this.afs.collection<any>(this.dbPath,ref => ref.orderBy('hora'));
    this.resultados = this.data.valueChanges(this.dbPath);
   }

  guardar(resultado : any){
    const id = this.afs.createId();
    return this.afs.collection('/resultados').doc(id).set(resultado);
  }

  obtenerResultados(){
    return this.resultados;
  }
}
