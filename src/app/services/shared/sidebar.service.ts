import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

 public menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge' ,
      submenu: [
        {titulo: 'dashboard' , url: '/dashboard'},
        {titulo: 'ProgressBar' , url: '/progress'},
        {titulo: 'Graficas' , url: '/graficas1'}

      ]
    }


  ];

  constructor() { }

}
