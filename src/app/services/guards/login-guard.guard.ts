import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private _usuario:UsuarioService,
              private router:Router){

  }
  canActivate( ): boolean {
    if( this._usuario.estaLogueado()){
      console.log('paso por el guard');

      return true;
    }else{
      console.log('NO paso por el guard');
      this.router.navigate(['/login']);
      return false;

    }
    
  }
}
