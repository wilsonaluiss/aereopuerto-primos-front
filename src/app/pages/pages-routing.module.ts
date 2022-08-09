import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { VueloComponent } from './vuelo/vuelo.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'pasajero', component: PasajeroComponent },
      { path: 'vuelo', component: VueloComponent },
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
