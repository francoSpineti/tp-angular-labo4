import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Memotest2Component } from './memotest2/memotest2.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { SnakeComponent } from './snake/snake.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
              {path: '', component:  IndexComponent},
              {path: 'tateti', component:  TatetiComponent},
              {path: 'ppt', component:  PiedraPapelTijeraComponent},
              {path: 'snake', component:  SnakeComponent},
              {path: 'memotest2', component:  Memotest2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
