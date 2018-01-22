import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  seleccion(seleccion: string, ref: any) {
    console.log(seleccion);
    this.aplicarCheck(ref);
    let url = `assets/css/colors/${seleccion}.css`;
    // this._document.getElementById('tema').setAttribute('href',url);
    document.getElementById('tema').setAttribute('href', url);

    console.log(ref);

  }
  aplicarCheck(link: any) {
 let selectores: any = document.getElementsByClassName('selector');
      for (let links of selectores) {
        links.classList.remove('working');
      }

      link.classList.add('working');
  }



}
