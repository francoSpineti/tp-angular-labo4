import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Carta } from '../carta';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-carta-juego',
  templateUrl: './carta-juego.component.html',
  styleUrls: ['./carta-juego.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
    ])
  ]
})
export class CartaJuegoComponent implements OnInit {

  @Input() data !: Carta;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
