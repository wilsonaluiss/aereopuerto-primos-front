import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AereopuertosComponent } from './aereopuertos/aereopuertos.component';
import { AereolineasComponent } from './aereolineas/aereolineas.component';
import { AvionesComponent } from './aviones/aviones.component';
import { MaterialModule } from '../comunes/material-module';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VueloComponent } from './vuelo/vuelo.component'; 


import { TripulacionComponent } from './tripulacion/tripulacion.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PasajeroComponent,
    PagesComponent,
    AdministracionComponent,
    AereopuertosComponent,
    AereolineasComponent,
    AvionesComponent,
    VueloComponent,
    TripulacionComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,


  ],
  exports: [
    DashboardComponent,
    PasajeroComponent,
 
  ],
  providers: [ServiceService],
})
export class PagesModule { }
