import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from 'src/app/auth/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  MenuItems: any[];
  AdminItems: any[];

  roles: any;

  constructor(private sideBarServices: SidebarService, private router: Router) {
    

    if(this.roles == undefined || this.roles == null || this.roles == 3){
      this.AdminItems = this.sideBarServices.administracion;
      this.MenuItems = this.sideBarServices.menu;
    } this.AdminItems = this.sideBarServices.administracion;


    /* if (this.roles == 8) {
      
      console.log('AdminItems',this.AdminItems)
    } */
  }

  ngOnInit() {
    $('[data-widget="treeview"]').Treeview('init');
    this.roles = (JSON.parse(localStorage.getItem('formDataFilter')));
    /* console.log('datos sidebar :', this.roles.BASE_ROL) */
  }

  logout() {
    GlobalVariable.BASE_ROL = '3';
    console.log('adios', GlobalVariable.BASE_ROL)
    localStorage.setItem('formDataFilter', JSON.stringify(GlobalVariable));
    this.router.navigateByUrl('/login');
  }

}
