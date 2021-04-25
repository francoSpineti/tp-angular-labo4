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
import { MemotestComponent } from '../app/componentes/juegos/memotest/memotest.component';
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

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    ErrorComponent,
    MenuComponent,
    MemotestComponent,
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
    IndexComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
