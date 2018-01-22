import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes } from "@angular/router/src/config";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { RouterModule } from '@angular/router';



const pagesRoutes:Routes=[
    {
        path :'',
        component:PagesComponent,
        children:[
            {path :'dashboard',component:DashboardComponent},
            {path :'progress',component:ProgressComponent},
            {path :'graficas1',component:Graficas1Component},
            {path :'settings',component:AccountSettingsComponent},

            {path :'',redirectTo:'/dashboard', pathMatch:'full'}

        ]
    }
];
export const PAGES_ROUTES= RouterModule.forChild(pagesRoutes);