import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    menu: any[] = [
        {
            titulo: 'Administración',
            icono: 'fa fa-plane',
            submenu: [
                { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' },
                { titulo: 'Pasajero', url: 'pasajero', icono: 'fab fa-creative-commons-by' },
                { titulo: 'Abordaje', url: 'abordaje', icono: 'fa fa-child' },
                { titulo: 'Vuelo', url: 'vuelo', icono: 'fa fa-rocket' },
                { titulo: 'Tripulación', url: 'tripulacion', icono: 'fas fa-user-friends' },
            ]
        }
    ];
}
