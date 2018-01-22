import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { forEach } from '@angular/router/src/utils/collection';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private _setings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();

  }


  seleccion(seleccion: string, ref: any) {
    this.aplicarCheck(ref);
    this._setings.aplicarTema(seleccion);
  

    // tslint:disable-next-line:no-trailing-whitespace
    
    // this._setings.guardarAjustes(JSON.stringify(aux));


  }
  aplicarCheck(link: any) {
 let selectores: any = document.getElementsByClassName('selector');
      for (let links of selectores) {
        links.classList.remove('working');
      }

      link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._setings.ajustes.tema;
    for (let links of selectores) {
      if ( links.getAttribute('data-theme') === tema ) {
        links.classList.add('working');


      }

   }
  }





}
