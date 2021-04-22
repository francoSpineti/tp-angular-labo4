import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';

const routes: Routes = [
                        {path: '', loadChildren: () => import('./componentes/ingreso/ingreso.module').then(m => m.IngresoModule)},
                        {path:'home', component : HomeComponent},
                        {path:'tateti', component : TatetiComponent},
                        {path:'memotest', component : MemotestComponent},
                        {path:'ppt', component : PiedraPapelTijeraComponent},
                        {path:'quienSoy', component : QuienSoyComponent},
                        {path:'ppt', component : PiedraPapelTijeraComponent},
                        {path:'tateti', component : TatetiComponent},
                        {path:'chat', component : ChatComponent},                        
                        {path:'**', component : ErrorComponent} //siempre tiene que ir ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
