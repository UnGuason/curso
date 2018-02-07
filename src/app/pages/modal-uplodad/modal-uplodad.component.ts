import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload/upload.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-uplodad',
  templateUrl: './modal-uplodad.component.html',
  styles: []
})
export class ModalUplodadComponent implements OnInit {

  oculto:string='';

 imagenSubir:File;
imagenTemp:string;
  constructor(private _subirArchivo:UploadService,
              public _modalUpload:ModalUploadService) { 
    console.log('mdoal listo');
    
  }

  ngOnInit() {
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
  subirImagen(){
    console.log('subir imagen');
    this._subirArchivo.subirArchivo(this.imagenSubir,this._modalUpload.tipo,this._modalUpload.id).then(data=>{
      console.log(data);
      this._modalUpload.notificicacion.emit(data);
      this.cerrarModal();
      
    }).catch(error=>console.log(error));
    
  }
  cerrarModal(){
    this.imagenTemp=null;
    this.imagenSubir=null;
    this._modalUpload.oculatarModal();
  }

}
