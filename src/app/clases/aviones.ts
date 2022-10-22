export class aviones {
    id_avion: number;
    no_placa: string;
    capacidad_asientos: number;
    estado_avion: string;
    dimensiones: number;
    id_aereolinea: number;
    id_aereopuerto: number;

}

export interface tablaAviones {
    id_avion: number;
    no_placa: number;
    capacidad_asientos: number;
    estado_avion: string;
    dimensiones: number;
    nombre_aereolinea: string;
    nombre_aereopuerto: string;
}

export interface nombreAereopuerto {
    id_aereopuerto: number;
    nombre_aereopuerto: string;
}

export interface nombreAereoLinea {
    id_aereolinea: number;
    nombre_aereolinea: string;
}

export interface nombreAvion {
    id_avion: number;
    no_placa: string;
}