import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './tateti/tateti.component';

const routes: Routes = [
              {path: '', component:  IndexComponent},
              {path: 'tateti', component:  TatetiComponent},
              {path: 'ppt', component:  PiedraPapelTijeraComponent},
              {path: 'memotest', component:  MemotestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
