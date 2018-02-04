import { URL_SERVICES } from './../../config/config';
import { Injectable } from '@angular/core';
@Injectable()
export class UploadService {

  constructor() { }

subirArchivo(archivo:File,tipo:string,id:string){


  return new Promise( (resolve,reject)=>{
    let formData= new FormData();
    let xhr = new XMLHttpRequest();
    formData.append('imagen',archivo, archivo.name);
   
    xhr.onreadystatechange= function(){
     if ( xhr.readyState ===4){
       if(xhr.status === 200){
        console.log('iamgen subida');
          resolve(JSON.parse(xhr.response));
       }else{
        console.log('reject');

         reject(xhr.response);
       }
  
     }
    };

    let url = URL_SERVICES +'/uploads/'+ tipo +"/"+ id;
    xhr.open('PUT',url,true);
    xhr.send(formData);

  });
  


}



}
