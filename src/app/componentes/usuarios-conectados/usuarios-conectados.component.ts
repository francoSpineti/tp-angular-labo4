import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { Observable } from 'rxjs';
import { isTemplateDiagnostic } from '@angular/compiler-cli/src/ngtsc/typecheck/diagnostics';

@Component({
  selector: 'app-usuarios-conectados',
  templateUrl: './usuarios-conectados.component.html',
  styleUrls: ['./usuarios-conectados.component.css']
})
export class UsuariosConectadosComponent implements OnInit {

  usuarioOnline !: Observable<Usuario[]>;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.usuarioOnline = this.authService.getAll().pipe();
  }

}
