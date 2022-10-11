export class Roles {
   /*  codigo_usuario: number;
    nombre_usuario: string;
    usuario: string;
    contrasena: string;
    rol: string;
    codigo_aereopuerto: string;
    puesto: string;
    estado: string;
 */
    id_usuario: number;
	nombre_usuario: string;
	contrasena: string; 
	estado_usuario: string;
	usuario_crea?: string;
	usuario_modifica?: string;
	telefono_usuario: string;
	direccion_usuario: string;
	codigo_aereopuerto: number;
	puesto: string;

    constructor() {}
}