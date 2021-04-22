import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  item$ ?: Observable<any[]> ;

  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
    this.item$ = this.chatService.obtenerMensajes();
  }

}
