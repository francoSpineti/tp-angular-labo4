import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSalaComponent } from './chat-sala/chat-sala.component';

const routes: Routes = [
              { path: 'chat', component: ChatSalaComponent },
              { path : '', redirectTo : 'chat', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaChatRoutingModule { }
