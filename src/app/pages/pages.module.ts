import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AereopuertosComponent } from './aereopuertos/aereopuertos.component';
import { AereolineasComponent } from './aereolineas/aereolineas.component';
import { AvionesComponent } from './aviones/aviones.component';
import { MaterialModule } from '../comunes/material-module';



@NgModule({
  declarations: [
    DashboardComponent,
    PasajeroComponent,
    PagesComponent,
    VueloComponent,
    AdministracionComponent,
    AereopuertosComponent,
    AereolineasComponent,
    AvionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule

  ],
  exports: [
    DashboardComponent,
    PasajeroComponent,
    VueloComponent
  ]
})
export class PagesModule { }
