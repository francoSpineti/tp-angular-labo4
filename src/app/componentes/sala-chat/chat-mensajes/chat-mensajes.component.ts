import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-chat-mensajes',
  templateUrl: './chat-mensajes.component.html',
  styleUrls: ['./chat-mensajes.component.css']
})
export class ChatMensajesComponent implements OnInit {

  chat : any; //para mostrar la lista de mensajes en pantalla

  constructor(private chatService : ChatService) { 
    this.chatService.obtenerMensajes().subscribe(chat =>{
      this.chat=chat;
    });
  }

  ngOnInit(): void {
  }

}
