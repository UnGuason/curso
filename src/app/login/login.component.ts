import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins() ;
declare const gapi:any;
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame:Boolean=false;
  correo:string='';
  auth2:any;

  constructor(private route: Router,
  private _usuario:UsuarioService) { }


  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.correo= localStorage.getItem('email') || '';
    if(this.correo.length > 1){
      this.recuerdame = true;
    }
  }
  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2= gapi.auth2.init({
        client_id:'272704363292-2ea12cdv2acqpbiou2ra8rn66u0ks7a8.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    

    });
  }
  attachSignin(elemente){
    this.auth2.attachClickHandler(elemente,{},(googleuser)=>{
      // let profile=googleuser.getBasicProfile();
      let token = googleuser.getAuthResponse().id_token;
       console.log(token);
       this._usuario.loginGoogle(token)
       .subscribe((data)=>window.location.href ='#/dashboard');
      
    });
  }


  onSubmit(form:NgForm) {

    if(form.invalid){
      return;
    }
    let usuario= new Usuario(
      'null',form.value.correo,
      form.value.password
      
    );


    this._usuario.login(usuario,form.value.recuerdame).subscribe(data=>{this.route.navigate(['/dashboard']);
  });
    console.log(form.valid);
    console.log(form.value);
    
    
  }

}
