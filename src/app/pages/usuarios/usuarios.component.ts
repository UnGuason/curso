import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ModalUploadService } from '../modal-uplodad/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
 private usuarios: Usuario []=[];
  desde:number=0;
  totalRegistros:number=0;
  cargando:boolean= true;

  constructor(private _usuario:UsuarioService,
              public _modalUpload:ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUpload.notificicacion.subscribe(data=>this.cargarUsuarios());
  }

  cargarUsuarios(){
    this.cargando=true;
    this._usuario.cargarUsuarios(this.desde).subscribe((data:any)=>{
      this.usuarios=data.usuarios;
      this.totalRegistros=data.total;
      this.cargando=false;

    });
  }

  mostrarModal(id:string)
  {
    this._modalUpload.mostrarModal(id,'usuarios');
  }
  cambiarDesde(valor:number){
    let aux = this.desde + valor;
    if(aux >= this.totalRegistros){
      return;
    }
    if(aux < 0){
      return;
    }

    this.desde +=valor;
    console.log(this.desde);

    this.cargarUsuarios();
  
  }

  buscarUsuario(valor:string){
    if(valor.length<=0){
      return;
    }
    this._usuario.buscarUsuario(valor).subscribe((data:any)=>{
      console.log(data);
      this.usuarios= data.usuario;
    });
    

  }
  borrarUsuario(usuario:Usuario){
    let id :string;
    id = localStorage.getItem(id);
     if(usuario._id === id){
       console.log('No se puede borrar ');
       return;
     }
     this._usuario.borrarUsuario(usuario).subscribe(data=>{
       console.log(data);
       this.cargarUsuarios();
       
      });
      
    }
    
    guardarUsuario(usuario:Usuario){
      this._usuario.actualizarUsuario(usuario).subscribe(data=> {console.log(data);
      this.cargarUsuarios();
    });

  }
  
}
