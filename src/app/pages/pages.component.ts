import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  /* obtenerRol2: any;

  @Input('roles') roles?: any;

  @Inject('obtenerRol') GlobalVariable: any; */

  constructor() { }

  ngOnInit(): void {

    /* this.obtenerRol2 = (JSON.parse(localStorage.getItem('formDataFilter'))); */
  }

}
