import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    roles: any = (JSON.parse(localStorage.getItem('formDataFilter')));;

    constructor() {
        this.roles = (JSON.parse(localStorage.getItem('formDataFilter')));
       /*  console.log('datos sidebar :', this.roles.BASE_ROL) */
    }

    
    menuvacio: any[] = [];
    
    menu: any[] = [
        {
            titulo: 'Menu',
            icono: 'fa fa-plane',
            submenu: [
                { titulo: 'Reservar Vuelo', url: 'pasajero', icono: 'fab fa-creative-commons-by' },
                /* this.roles == 8?{ titulo: 'Abordaje', url: 'abordaje', icono: 'fa fa-child' } : {}, */
                { titulo: 'Abordaje', url: 'abordaje', icono: 'fa fa-child' } ,
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

