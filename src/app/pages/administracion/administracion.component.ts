import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Roles } from 'src/app/clases/Roles';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

interface Puesto {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;

  displayedColumnsUsuarios: string[] = ['codigo_usuario', 'nombre_usuario', 'usuario', 'contrasena', 'rol', 'codigo_aereopuerto', 'puesto', 'estado', 'acciones'];
  dataSourceUsuarios: MatTableDataSource<Roles>;
  //hide = true;
  editting = false;

  id: number;

  puestos: Puesto[] = [
    {value: '1', viewValue: 'Administrador'},
    {value: '2', viewValue: 'Piloto'},
    {value: '3', viewValue: 'Azafata'},
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  informacionCreacionFormGroup: FormGroup;

  rolesUsuario: Roles;

  //roles : any[] = [];
  roles: Roles[];
  usuarioRoles: Roles = new Roles();
  constructor(
    private service: ServiceService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
    this.informacionCreacionFormGroup = this.formBuilder.group({
      codigo_usuario: [null, Validators.nullValidator],
      nombre_usuario: [null, Validators.required],
      usuario: [null, Validators.required],
      contrasena: [null, Validators.required],
      rol: [null, Validators.required],
      codigo_aereopuerto: [null, Validators.required],
      puesto: [null, Validators.required],
      estado: [true, Validators.required],
    });
  }

  ngOnInit() {
    this.spinner.show();
    this.service.getRoles().toPromise().then(data => {

      this.dataSourceUsuarios = new MatTableDataSource(data);
      this.dataSourceUsuarios.sort = this.sort;
      this.spinner.hide();
      console.table(data);
    }
    )
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsuarios.filter = filterValue.trim().toLowerCase();
  }

  guardarUsuario() {
    if (this.informacionCreacionFormGroup.invalid) return;
    const rol = this.informacionCreacionFormGroup.value;
    const nuevoRol: Roles = {
      codigo_usuario: rol.codigo_usuario,
      nombre_usuario: rol.nombre_usuario,
      usuario: rol.usuario,
      contrasena: rol.contrasena,
      rol: rol.rol,
      codigo_aereopuerto: rol.codigo_aereopuerto,
      puesto: rol.puesto,
      estado: (rol.estado === true ? 'Activo' : 'Inactivo')
    };

    this.service.crearRol(nuevoRol).subscribe(
      (data) => {
        Swal.fire({
          titleText: `Usuario creado con exito`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false,
          position: 'top',
        });
        this.router.navigate(['/dashboard']);
      }
    )


    console.log(nuevoRol);
  }


  editarUsuario(rol: Roles) {
    localStorage.setItem("codigo_usuario", rol.codigo_usuario.toString());
    let codigo_usuario = localStorage.getItem("codigo_usuario");
    this.id = (Number(codigo_usuario));
    console.log(codigo_usuario);
    this.service.obtnenerRol(Number(codigo_usuario))
      .subscribe(data => {
        this.informacionCreacionFormGroup.get('codigo_usuario')?.setValue(data.codigo_usuario);
        this.informacionCreacionFormGroup.get('nombre_usuario')?.setValue(data.nombre_usuario);
        this.informacionCreacionFormGroup.get('usuario')?.setValue(data.usuario);
        this.informacionCreacionFormGroup.get('contrasena')?.setValue(data.contrasena);
        this.informacionCreacionFormGroup.get('rol')?.setValue(data.rol);
        this.informacionCreacionFormGroup.get('codigo_aereopuerto')?.setValue(data.codigo_aereopuerto);
        this.informacionCreacionFormGroup.get('puesto')?.setValue(data.puesto);
        this.informacionCreacionFormGroup.get('estado')?.setValue(data.estado === 'Activo' ? true : false);
        console.log(data);
      })
  }

  Actualizar(roles: Roles) {
    console.log(roles);
    this.service.editarRol(roles,this.id)
      .subscribe(data => {
        
        alert("Se Actualizo con Exito...!!!");
        
      })
  }


  eliminarUsuario() {
    this.service.eliminarRol(this.id).subscribe(
      (data) => {
        Swal.fire({
          titleText: `Usuario eliminado con exito`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false,
          position: 'top',
        });
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
