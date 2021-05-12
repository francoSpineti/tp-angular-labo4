import { Component, OnInit } from '@angular/core';
import { ChatMensaje } from 'src/app/clases/chat-mensaje';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-chat-boton-enviar',
  templateUrl: './chat-boton-enviar.component.html',
  styleUrls: ['./chat-boton-enviar.component.css']
})
export class ChatBotonEnviarComponent implements OnInit {

  mensajeChat = new ChatMensaje;

  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
  }

  enviar(){
    let obj = localStorage.getItem('user');
    let cadena : any = obj?.split(":",6)[4];
    let email = cadena.split(",")[0];
    let email2 = email.split('"');

    this.mensajeChat.horaEnvio;
    this.mensajeChat.usuario = email2[1];
    this.chatService.enviarMensaje(this.mensajeChat);
    this.mensajeChat.mensaje="";
  }

}
