import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { boleto } from '../clases/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private baseURL = "http://localhost:8080/boleto";

constructor(private httpClient: HttpClient ) {

}

crearBoleto(Boleto:boleto[]): Observable<boleto>{
  return this.httpClient.post<boleto>(`${this.baseURL}/crearBoleto`, Boleto);
}




}
