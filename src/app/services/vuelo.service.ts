import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vuelo } from '../clases/Vuelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private baseURL = "http://localhost:8080/vuelo";
constructor(private httpClient: HttpClient) { }

crearVuelo(vuelo: Vuelo): Observable<Vuelo> {
  return this.httpClient.post<Vuelo>(`${this.baseURL}/crearVuelo`, vuelo);
}


obtenerListaVuelos(): Observable<Vuelo[]> {
  return this.httpClient.get<Vuelo[]>(`${this.baseURL}/listarVuelos`);
}




}
