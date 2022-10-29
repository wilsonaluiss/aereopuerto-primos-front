import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AereolineasComponent } from './aereolineas/aereolineas.component';
import { AereopuertosComponent } from './aereopuertos/aereopuertos.component';
import { AvionesComponent } from './aviones/aviones.component';
import { TripulacionComponent } from './tripulacion/tripulacion.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'pasajero', component: PasajeroComponent, data: { titulo: 'Pasajero' } },
      { path: 'vuelo', component: VueloComponent, data: { titulo: 'Vuelo' } },
      { path: 'administracion', component: AdministracionComponent, data: { titulo: 'Usuarios' } },
      { path: 'aereolineas', component: AereolineasComponent, data: { titulo: 'Aereolineas' } },
      { path: 'aereopuertos', component: AereopuertosComponent, data: { titulo: 'Aereopuertos' } },
      { path: 'aviones', component: AvionesComponent, data: { titulo: 'Aviones' } },
      { path: 'tripulacion', component: TripulacionComponent, data: {titulo: 'Tripulacion'} },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
