import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [
                        {path: '', loadChildren: () => import('./componentes/ingreso/ingreso.module').then(m => m.IngresoModule)},
                        {path: 'menu', component : MenuComponent},
                        {path: 'quienSoy', component : QuienSoyComponent},
                        {path: 'chat', loadChildren: () => import('./componentes/sala-chat/sala-chat.module').then(m => m.SalaChatModule) },
                        {path: 'juegos', loadChildren: () => import('./componentes/juegos/juegos.module').then(m => m.JuegosModule) },                        
                        {path: '**', component : ErrorComponent} //siempre tiene que ir ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
