import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componente-ingreso/login/login.component';
import { SignUpComponent } from './componente-ingreso/sign-up/sign-up.component';
import { HomeComponent } from './componente-ingreso/home/home.component';
import { MenuComponent } from './componentes-administrativos/menu/menu.component';
import { CreacionVueloComponent } from './componentes-administrativos/creacion-vuelo/creacion-vuelo.component';
import { CrearUsuarioPasajeroComponent } from './componentes-administrativos/crear-usuario-pasajero/crear-usuario-pasajero.component';
import { AgregarPasajeroComponent } from './componentes-administrativos/agregar-pasajero/agregar-pasajero.component';
import { CrearTripulacionComponent } from './componentes-administrativos/crear-tripulacion/crear-tripulacion.component';
import { AbordajeComponent } from './componentes-administrativos/abordaje/abordaje.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    MenuComponent,
    CreacionVueloComponent,
    CrearUsuarioPasajeroComponent,
    AgregarPasajeroComponent,
    CrearTripulacionComponent,
    AbordajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
