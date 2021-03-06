import { PipesModule } from './../pipes/pipes.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs.component/rxjs.component.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUplodadComponent } from './modal-uplodad/modal-uplodad.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
         IncrementadorComponent,
         GraficoDonaComponent,
         AccountSettingsComponent,
         PromesasComponent,
         RxjsComponent,
         ProfileComponent,
         UsuariosComponent,
         ModalUplodadComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        SharedModule,
        ChartsModule,
        PipesModule,
        CommonModule

    ]

})

export class PagesModule {


}