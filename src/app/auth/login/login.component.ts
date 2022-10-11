import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { AuthService } from 'src/app/services/auth.service';
import { ServiceService } from 'src/app/services/service.service';

export let GlobalVariable = ({

  BASE_ROL: '',

  //... more of your variables

});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCreacionFormGroup: FormGroup;
  @ViewChild('roles') roles?: AppComponent | any;



  constructor(private service: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.loginCreacionFormGroup = this.formBuilder.group({
      nombre_usuario: [null, Validators.required],
      contrasena: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }
  usuario: any = {}

  /* ogin(){

    let envio={
      password: this.loginCreacionFormGroup.get('contrasena')?.value,
      usuario: this.loginCreacionFormGroup.get('nombre_usuario')?.value
    }
    console.log(envio);

    this.service.getRol(envio).subscribe(res => {
      console.log('datos ..',res);
      this.usuario = res;
      this.roles = this.usuario.id_rol;
      console.log('id rol', this.usuario.id_rol)
      GlobalVariable.BASE_ROL = this.roles;
      localStorage.setItem('formDataFilter', JSON.stringify(GlobalVariable));
      this.router.navigateByUrl('dashboard');
    });
  } */

}

