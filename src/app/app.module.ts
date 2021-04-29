import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { TatetiComponent } from '../app/componentes/juegos/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from '../app/componentes/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { IngresoRoutingModule } from './componentes/ingreso/ingreso-routing.module';
import { LoginComponent } from './componentes/ingreso/login/login.component';
import { RegistroComponent } from './componentes/ingreso/registro/registro.component';
import { FooterMenuComponent } from './componentes/footer-menu/footer-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatSalaComponent } from './componentes/sala-chat/chat-sala/chat-sala.component';
import { ChatMensajesComponent } from './componentes/sala-chat/chat-mensajes/chat-mensajes.component';
import { ChatUsuariosConectadosComponent } from './componentes/sala-chat/chat-usuarios-conectados/chat-usuarios-conectados.component';
import { ChatBotonEnviarComponent } from './componentes/sala-chat/chat-boton-enviar/chat-boton-enviar.component';
import { SalaChatRoutingModule } from './componentes/sala-chat/sala-chat-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { IndexComponent } from './componentes/juegos/index/index.component';
import { SnakeComponent } from './componentes/juegos/snake/snake.component';
import { BestScoreManager } from './componentes/juegos/snake/best-score-manager';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Memotest2Component } from './componentes/juegos/memotest2/memotest2.component';
import { CartaJuegoComponent } from './componentes/juegos/memotest2/carta-juego/carta-juego.component';
import { ReiniciarJuegoComponent } from './componentes/juegos/memotest2/reiniciar-juego/reiniciar-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    ErrorComponent,
    MenuComponent,
    TatetiComponent,
    PiedraPapelTijeraComponent,
    LoginComponent,
    RegistroComponent,
    FooterMenuComponent,
    ChatSalaComponent,
    ChatMensajesComponent,
    ChatUsuariosConectadosComponent,
    ChatBotonEnviarComponent,
    NavbarComponent,
    IndexComponent,
    SnakeComponent,
    EncuestaComponent,
    Memotest2Component,
    CartaJuegoComponent,
    ReiniciarJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngresoRoutingModule,
    SalaChatRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [BestScoreManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
