import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';

declare function init_plugins() ;
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }


  ngOnInit() {
    init_plugins();
  }
  onSubmit() {
    this.route.navigate(['/dashboard']);
  }

}
