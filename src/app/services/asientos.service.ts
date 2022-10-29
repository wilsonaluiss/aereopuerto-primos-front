import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asientos } from '../clases/asientos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientosService {
  private baseURL = "http://localhost:8080/asientos";

constructor(private httpClient: HttpClient) { }


obtenerListaAsientos(idAvion:number): Observable<asientos[]> {
  return this.httpClient.get<asientos[]>(`${this.baseURL}/traerAsiento/${idAvion}`);
}

crearAsientos(cantidadAsientos:number, idAvion?:number, Asiento?:asientos): Observable<asientos> {
  return this.httpClient.post<asientos>(`${this.baseURL}/crearAsiento/${idAvion}/${cantidadAsientos}`,Asiento);
}






}
