import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
usuario:Usuario;
token:string;
  constructor(public _usuario:UsuarioService) { 
    this.usuario= _usuario.usuario;
    this.token=_usuario.token;
  }

  ngOnInit() {
  }

  onSubmit(data:any){
    console.log(data);
    this.usuario.nombre=data.nombre;
    this.usuario.email= data.email;
    this._usuario.actualizarUsuario(this.usuario,this.token).subscribe
    (data=> console.log(data));
  }

}
