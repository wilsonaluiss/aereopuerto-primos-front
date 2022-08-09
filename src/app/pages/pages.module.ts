import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { VueloComponent } from './vuelo/vuelo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PasajeroComponent,
    PagesComponent,
    VueloComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    PasajeroComponent
  ]
})
export class PagesModule { }
