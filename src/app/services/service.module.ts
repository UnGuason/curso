

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService , SettingsService, UsuarioService,LoginGuardGuard, UploadService} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
   
  ],
   providers: 
  [ 
      SettingsService,
      SharedService,
      SidebarService,
      UsuarioService,
      LoginGuardGuard,
      UploadService
      
      
  ],
  declarations: []
})
 
export class ServiceModule {


  }
