import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class SettingsService {

ajustes: Ajustes = {
temaUrl: 'assets/css/colors/default.css',
tema: 'default'
};

  constructor() {
   }

  guardarAjustes(ajustes: string) {
    //recibe el json string

    localStorage.setItem('ajustes', ajustes);

  }


  cargarAjustes() {
   let ajuste = localStorage.getItem('ajustes');
    if ( ajuste ) {
      this.ajustes = JSON.parse(ajuste);

    }
    this.aplicarTema(this.ajustes.tema);


  }

  aplicarTema( seleccion: string ) {
    let url = `assets/css/colors/${seleccion}.css`;
    document.getElementById('tema').setAttribute('href', url);
    let  aux = {
      tema: seleccion,
      urlTema: url
    };

    this.guardarAjustes(JSON.stringify(aux));
  }


}



interface Ajustes {
  temaUrl: string;
  tema: string;
}
