

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService , SettingsService, UsuarioService,LoginGuardGuard, UploadService} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../pages/modal-uplodad/modal-upload.service';

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
      UploadService,
      ModalUploadService
      
      
  ],
  declarations: []
})
 
export class ServiceModule {


  }
