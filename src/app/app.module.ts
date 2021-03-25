import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuteandoComponent } from './ruteando/ruteando.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PipesComponent } from './pipes/pipes.component';
import { ClasesComponent } from './clases/clases.component';
import { ComponentesComponent } from './componentes/componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    RuteandoComponent,
    ServiciosComponent,
    PipesComponent,
    ClasesComponent,
    ComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
