import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private dbPath = '/chatMensajes';
  dataMensajes !: AngularFirestoreCollection<any>;
  chatMensajes : Observable<any[]>;

  constructor(private db : AngularFirestore) { 
    this.dataMensajes = db.collection<any>(this.dbPath,ref => ref.orderBy('horaEnvio'));
    this.chatMensajes = this.dataMensajes.valueChanges(this.dbPath);
  }

  obtenerMensajes(){
    return this.chatMensajes;
  }

  enviarMensaje(mensaje : any) : any{
    return this.dataMensajes.add({ ...mensaje });
  }

}
