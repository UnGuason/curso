import { stringify } from '@angular/core/src/util';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import * as swal from 'sweetalert';
import swal from 'sweetalert';

import { URL_SERVICES } from '../../config/config';
import { Router } from '@angular/router';



@Injectable()
export class UsuarioService {

usuario:Usuario;
token:string;
  constructor(public http:HttpClient,
              private router:Router) {
this.cargarStorage();
 }

 logOut(){
   this.usuario=null;
   this.token='';
   localStorage.removeItem('token');
   localStorage.removeItem('usuario');
   localStorage.removeItem('id');
   this.router.navigate(['/login']);


  }
  guardarStorage(id:string,token:string,usuario:Usuario){
    localStorage.setItem('id',id);
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('token',token);
    this.usuario=usuario;
    this.token=token;

  }
  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token=localStorage.getItem('token');
      this.usuario= JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token='';
      this.usuario=null;
    }
  }
  estaLogueado(){
    if(this.token.length > 1){
    return  true;
    }else{
     return false;
    }
    }
  

  loginGoogle(token:string){
    let url= URL_SERVICES + '/login/google';
    return this.http.post(url,{token})
    .map((res:any)=>{
      this.guardarStorage(res.id,res.token,res.usuario);
      return true;
    });

  }

  login(usuario:Usuario, recuerdame:Boolean=false){
    console.log(recuerdame);

    if (recuerdame) {
      
      localStorage.setItem('email',usuario.email);
      
    }else{
        localStorage.removeItem('email');
    }

    let url=URL_SERVICES+'/login';
    return this.http.post(url,usuario)
    .map((res:any)=>{
      console.log(res);
      this.guardarStorage(res.id,res.token,res.usuario);
   
        return true;

    });

  }

  crearUsurio(usuario:Usuario){
    let url = URL_SERVICES + '/usuario';
    return this.http.post(url,usuario)
    .map((resp:any)=>{
      swal('usaurio creado', usuario.email,'success');
      console.log(resp.usuario);

      return resp.usuario;
    });
  }
  actualizarUsuario(usuario:Usuario,token){
    let url = URL_SERVICES + '/usuario/';
    url +=usuario._id;
    url+='?token='+ this.token;
    console.log(url);

   return this.http.put(url,usuario)
   .map((data:any)=>{
     console.log(data.usuarios);
     this.usuario.nombre=data.usuarios.nombre;
     this.usuario.email=data.usuarios.email;
     this.usuario._id= data.usuarios._id;

     this.guardarStorage(this.usuario._id,this.token,this.usuario);
     swal('usaurio actualizado', usuario.email,'success');

     return data;
  });
}
}