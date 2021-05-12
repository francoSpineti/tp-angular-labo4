import { Component, OnChanges, OnInit } from '@angular/core';
import { UsuariosConectadosService } from 'src/app/servicios/usuarios-conectados.service';

@Component({
  selector: 'app-chat-usuarios-conectados',
  templateUrl: './chat-usuarios-conectados.component.html',
  styleUrls: ['./chat-usuarios-conectados.component.css']
})
export class ChatUsuariosConectadosComponent implements OnInit {

  usuarios = new Map();
  arreglo : any;

  constructor(private usuariosConectadosService : UsuariosConectadosService) {
    this.usuariosConectadosService.obtenerUsuariosEnLinea().subscribe(user =>{
      this.arreglo = user;

      for (let index = 0; index < this.arreglo.length; index++) {

            if(this.arreglo[index].status){
                if(this.usuarios.size == 0){
                    this.setMap(this.arreglo[index].email,true);
                }else{
                    if(this.usuarios.get(this.arreglo[index-1].email.toLowerCase()) !== this.arreglo[index].email.toLowerCase()){
                      this.setMap(this.arreglo[index].email,true);
                    }
                }
            }else{ //si se desconecto
              if(this.usuarios.has(this.arreglo[index].email)){
                  this.usuarios.delete(this.arreglo[index].email);
              }
            }
      }
    });
   }

  ngOnInit(): void {
    this.usuarios;
  }

  actualizar(){
    return this.usuarios;
  }

  getMap(){
     return this.usuarios;
  }

  setMap(key : any,value : any){
     this.usuarios.set(key,value);
  }

}
