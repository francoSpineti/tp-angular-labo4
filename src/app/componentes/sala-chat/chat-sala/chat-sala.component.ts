import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-sala',
  templateUrl: './chat-sala.component.html',
  styleUrls: ['./chat-sala.component.css']
})
export class ChatSalaComponent implements OnInit {

  @Input() chatActivo : boolean = true;
  
  constructor() {}

  ngOnInit(): void {
  }

}
