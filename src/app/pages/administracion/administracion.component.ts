import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styles: [
  ]
})
export class AdministracionComponent implements OnInit {


  roles : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
