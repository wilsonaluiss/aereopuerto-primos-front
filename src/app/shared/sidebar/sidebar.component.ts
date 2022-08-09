import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  MenuItems?: any[];

  constructor(private sideBarServices: SidebarService, private router: Router) { 
    this.MenuItems = this.sideBarServices.menu;
  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

}
