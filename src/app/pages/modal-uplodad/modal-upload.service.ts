import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable()
export class ModalUploadService {

  public tipo:string;
  public id:string;

  public oculto:string = 'oculto';

  public notificicacion = new EventEmitter<any>();


  constructor() {  
    console.log('modal upload');
    }
  oculatarModal(){
    this.oculto='oculto';
    this.tipo=null;
    this.id=null;

  }
  mostrarModal(id:string,tipo:string){
    this.oculto='';
    this.id=id;
    this.tipo=tipo;

  }

}
