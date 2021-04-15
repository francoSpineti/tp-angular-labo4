import { Component, OnInit, Input } from '@angular/core';
import { ChatMensaje } from 'src/app/clases/chat-mensaje';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  mensaje : string = "";
  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
  }

  enviar(){
    let obj = new ChatMensaje();
    obj.mensaje = this.mensaje;
    //obj.id= "";
    //obj.email = ""; este llenarlo con la info del localstorage
    //obj.estado = true; este ver con el otro componente de chat usuario para que se fije que este conectado/vigente
    //obj.usuario = ""; ver que hacer con este atributo
    this.chatService.enviarMensaje(obj);
  }

}
