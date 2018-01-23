import { Component, OnInit } from '@angular/core';
import {  Router,ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  pagina: string = '';

  constructor(private route: Router , public title: Title) {
    
  
    this.getDataRoute()
    .subscribe((data) => {
      console.log(data);
      this.title.setTitle(data);
      this.pagina = data;
      

    });
   }

  ngOnInit() {
  }
  getDataRoute() {
    return this.route.events
    .filter(data =>  data instanceof ActivationEnd) 
    .filter((data: ActivationEnd) =>  data.snapshot.firstChild === null) 
    .map((data: ActivationEnd) =>{ return data.snapshot.data.titulo});

  }

}
