import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ChatMensaje } from '../clases/chat-mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private dbPath = '/mensajesFire';
  chatMensajes : AngularFirestoreCollection<ChatMensaje>;

  constructor(private db : AngularFirestore) { 
    this.chatMensajes = db.collection(this.dbPath);
  }

  obtenerMensajes(): AngularFirestoreCollection<ChatMensaje>{
    return this.chatMensajes;
  }

  enviarMensaje(mensaje : ChatMensaje) : any{
    return this.chatMensajes.add({ ...mensaje });
  }

  actualizarMensaje(id : string, data : any) : Promise<void>{
    return this.chatMensajes.doc(id).update(data);
  }

  borrar(id : string) : Promise<void>{
    return this.chatMensajes.doc(id).delete();
  }

}
