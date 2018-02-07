import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { EventEmitter } from '@angular/core/src/event_emitter';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
usuario:Usuario;
token:string;
imagenSubir:File;
imagenTemp:string;


  constructor(public _usuario:UsuarioService) { 
    this.usuario= _usuario.usuario;
    this.token=_usuario.token;

  }

  ngOnInit() {
  }

  onSubmit(data:any){
    console.log(data);
    this.usuario.nombre=data.nombre;
    if(!this.usuario.google){
      this.usuario.email= data.email;

    }
    this._usuario.actualizarUsuario(this.usuario).subscribe
    (datos=> console.log(datos));
  }
  seleccionImagen(archivo:File ) {
    if ( !archivo ){
      console.log(archivo);
      this.imagenSubir=undefined;
      return;
    }
    if(archivo.type.indexOf('image')<0){
      swal('solo imagenes', 'el archivo seleccionado no es una imagen');
      this.imagenSubir=null;
      return;
    }
    this.imagenSubir=archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend =()=>{
      this.imagenTemp= reader.result;
    }
  }

  cambiarImagen(){
    this._usuario.cambiarImagen(this.imagenSubir,this.usuario._id ) ;

  }

}
