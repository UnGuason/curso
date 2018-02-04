import { URL_SERVICES } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string ='usuarios'): any {
let url = URL_SERVICES + '/imagenes';
if(!img){
  img='default';
}
if(img.indexOf('https') >=0 ){
  return img;
}
switch (tipo) {
  case 'usuarios':
  url += '/usuarios/' + img;
  break;
  case 'medicos':
  url += '/medicos/' + img;
  break;
  case 'hospitales':
  url += '/hospitales/' + img;
  break;
  
  default:
  console.log('tipo de imagen no existe');
  break;
}

return url;

   
  }

}
