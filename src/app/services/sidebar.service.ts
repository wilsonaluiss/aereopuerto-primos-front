import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    menu: any[] = [
        {
            titulo: 'Menu',
            icono: 'fa fa-plane',
            submenu: [
                { titulo: 'Pasajero', url: 'pasajero', icono: 'fab fa-creative-commons-by' },
                { titulo: 'Abordaje', url: 'abordaje', icono: 'fa fa-child' },
                { titulo: 'Consultas', url: 'consultas', icono: 'fa fa-search' },
                { titulo: 'Vuelo', url: 'vuelo', icono: 'far fa-paper-plane' },
                { titulo: 'Tripulación', url: 'tripulacion', icono: 'fas fa-user-friends' },
                
            ]
        }
    ];

    administracion: any[] = [
        {
            titulo: 'Administración',
            icono: 'fas fa-user-cog',
            submenu: [
                { titulo: 'Usuarios', url: 'administracion', icono: 'fas fa-users-cog' },
                { titulo: 'Aereopuertos', url: 'aereopuertos', icono: 'fab fa-creative-commons-by' },
                { titulo: 'Aereolineas', url: 'aereolineas', icono: 'fa fa-child' },
                { titulo: 'Aviones', url: 'aviones', icono: 'fa fa-search' },
                
            ]
        }
    ];
}
