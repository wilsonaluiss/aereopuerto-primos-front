import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  MenuItems?: any[];

  constructor(private sideBarServices: SidebarService, private router: Router,private authSvc: AuthService) { 
    this.MenuItems = this.sideBarServices.menu;
  }

  ngOnInit() {
    $('[data-widget="treeview"]').Treeview('init');

  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
