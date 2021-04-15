import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { IngresoRoutingModule } from './componentes/ingreso/ingreso-routing.module';
import { LoginComponent } from './componentes/ingreso/login/login.component';
import { RegistroComponent } from './componentes/ingreso/registro/registro.component';
import { ChatRoomComponent } from './componentes/chat/chat-room/chat-room.component';
import { ListadoComponent } from './componentes/chat/listado/listado.component';
import { ChatUsuarioComponent } from './componentes/chat/chat-usuario/chat-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    ErrorComponent,
    MenuComponent,
    MemotestComponent,
    TatetiComponent,
    PiedraPapelTijeraComponent,
    LoginComponent,
    RegistroComponent,
    ChatRoomComponent,
    ListadoComponent,
    ChatUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngresoRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
