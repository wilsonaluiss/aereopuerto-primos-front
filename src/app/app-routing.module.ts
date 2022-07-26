import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente-ingreso/login/login.component';
import { ReporteAereolineasComponent } from './componente-reportes/reporte-aereolineas/reporte-aereolineas.component';
import { ReporteAvionesAereolineaComponent } from './componente-reportes/reporte-aviones-aereolinea/reporte-aviones-aereolinea.component';
import { ReporteDestinosAutorizadoComponent } from './componente-reportes/reporte-destinos-autorizado/reporte-destinos-autorizado.component';
import { ReporteEquipajeComponent } from './componente-reportes/reporte-equipaje/reporte-equipaje.component';
import { ReporteListadoVuelosComponent } from './componente-reportes/reporte-listado-vuelos/reporte-listado-vuelos.component';

const routes: Routes = [

  {
    path: 'reporte-listado-vuelos',
    component: ReporteListadoVuelosComponent
  },
  {
    path: 'reporte-aerolineas',
    component: ReporteAereolineasComponent
  },
  {
    path: 'reporte-aviones-aereolinea',
    component: ReporteAvionesAereolineaComponent
  },
  {
    path: 'reporte-destinos-autorizado',
    component: ReporteDestinosAutorizadoComponent
  },
  {
    path: 'reporte-equipaje',
    component: ReporteEquipajeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
