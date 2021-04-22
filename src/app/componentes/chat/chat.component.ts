import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChatMensaje } from 'src/app/clases/chat-mensaje';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() chatActivo : boolean = true;
  chat : any;
  usuarioEnSesion = localStorage.getItem('user');
  mensajeChat = new ChatMensaje;

  constructor(private chatService : ChatService) {
    this.chatService.obtenerMensajes().subscribe(chat =>{
      this.chat=chat;
    })
  }

  ngOnInit(): void {
  }

  ngOnChange(){
    this.usuarioEnSesion = localStorage.getItem('user');
  }

  enviar(){
    let obj = localStorage.getItem('user');
    let cadena : any = obj?.split(":",6)[4];
    let email = cadena.split(",")[0];

    this.mensajeChat.horaEnvio;
    this.mensajeChat.usuario = email;
    this.chatService.enviarMensaje(this.mensajeChat);
    this.mensajeChat.mensaje="";
  }


}

