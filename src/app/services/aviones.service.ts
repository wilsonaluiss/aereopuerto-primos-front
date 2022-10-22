import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aviones, nombreAereoLinea, nombreAereopuerto, nombreAvion, tablaAviones } from '../clases/aviones';

@Injectable({
  providedIn: 'root'
})
export class AvionesService {

  private baseURL = "http://localhost:8080/aviones";


  constructor(private httpClient: HttpClient) { }

  obtenerListaAviones(): Observable<tablaAviones[]> {
    return this.httpClient.get<tablaAviones[]>(`${this.baseURL}/listarAviones`);
  }

  crearAvion(Avion: aviones): Observable<aviones> {
    return this.httpClient.post<aviones>(`${this.baseURL}/creaAvion`, Avion);
  }


  modificarAviones(Avion: aviones): Observable<aviones> {
    return this.httpClient.put<aviones>(`${this.baseURL}/modificar/{idAvion}`, Avion);
  }

  traerNombreAereopuerto(): Observable<nombreAereopuerto[]> {
    return this.httpClient.get<nombreAereopuerto[]>(`${this.baseURL}/obtenernombreAereopuerto`);
  }
  traerNombreAereolinea(): Observable<nombreAereoLinea[]> {
    return this.httpClient.get<nombreAereoLinea[]>(`${this.baseURL}/obtenernombreAereolinea`);
  }

  traerAvion(): Observable<nombreAvion[]> {
    return this.httpClient.get<nombreAvion[]>(`${this.baseURL}/obtenerAviones`);
  }

}