import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private dbPath = '/chatMensajes';
  data !: AngularFirestoreCollection<any>;
  chatMensajes : Observable<any[]>;

  constructor(private db : AngularFirestore) { 
    this.data = db.collection<any>(this.dbPath,ref => ref.orderBy('horaEnvio'));
    this.chatMensajes = this.data.valueChanges(this.dbPath);
  }

  obtenerMensajes(){
    return this.chatMensajes;
  }

  enviarMensaje(mensaje : any) : any{
    return this.data.add({ ...mensaje });
  }

}
