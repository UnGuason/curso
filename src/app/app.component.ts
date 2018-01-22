import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

declare function init_plugins() ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private _settings: SettingsService) {
    this._settings.cargarAjustes();


  }
  
}
