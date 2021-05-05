import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { DialogoComponent } from './dialogo/dialogo.component';
import { DialogoEncuestaComponent } from './dialogo-encuesta/dialogo-encuesta.component';

@NgModule({
  declarations: [DialogoComponent, DialogoEncuestaComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
