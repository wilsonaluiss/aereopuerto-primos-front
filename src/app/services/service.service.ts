import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../clases/Roles';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  rol: Roles[];

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/usuarios";
  
  

  getRoles(){
    return this.http.get<Roles[]>(this.Url);
  }

  crearRol(rol: Roles){
    return this.http.post<Roles>(this.Url, rol);
  }

  obtnenerRol(codigo_usuario: number){
    return this.http.get<Roles>(this.Url + "/" + codigo_usuario);
  }


  editarRol(rol: Roles, id: number){
    return this.http.put<Roles>(this.Url + "/actualizar/" + id, rol);
  }

  eliminarRol(codigo_usuario: number){
    return this.http.put<any>(this.Url + "/eliminar/" + codigo_usuario ,null);
  }
  
}
