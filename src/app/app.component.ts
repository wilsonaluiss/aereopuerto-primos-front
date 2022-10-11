import { Component, Inject, Input, OnInit } from '@angular/core';

export let GlobalVariable = ({

  BASE_ROL: '',

  //... more of your variables

});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'aereopuerto-los-primos';

  obtenerRol2: any;

  @Input('roles') roles?: any;

  @Inject('obtenerRol') GlobalVariable: any;


  ngOnInit(): void {

    this.obtenerRol2 = (JSON.parse(localStorage.getItem('formDataFilter')));
    localStorage.setItem('formDataFilter', JSON.stringify(GlobalVariable));
  }
}
