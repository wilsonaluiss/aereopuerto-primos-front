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



@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  

  displayedColumnsUsuarios: string[] = [
    'idUsuario',
    'nombreUsuario',
    'idAereopuerto',
    'telefonoUsuario',
    'direccionUsuario',
    'estadoUsuario',
    'puesto',
    'acciones'];
  dataSourceUsuarios: MatTableDataSource<Roles>;
  //hide = true;
  editting = false;

  id: number;

  puestos: Puesto[] = [
    { value: '1', viewValue: 'Administrador' },
    { value: '2', viewValue: 'Piloto' },
    { value: '3', viewValue: 'Azafata' },
  ];





  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  informacionCreacionFormGroup: FormGroup;

  rolesUsuario: Roles;

  //roles : any[] = [];
  /* roles: Roles[];
  usuarioRoles: Roles = new Roles(); */
  constructor(
    private service: ServiceService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
    this.informacionCreacionFormGroup = this.formBuilder.group({
      idUsuario: [''],
      nombreUsuario: [null, Validators.required],
      contrasena: [null, Validators.required],
      telefonoUsuario: [null, Validators.required],
      direccionUsuario: [null, Validators.required],
      estadoUsuario: [true, Validators.required],
    });
  }

  async ngOnInit() {
    this.spinner.show();
    this.service.getData<Roles[]>(this.service.BASE_URL_AEROPUERTO, 'obtenerUsuarios/todos').toPromise().then(data => {

      this.dataSourceUsuarios = new MatTableDataSource(data);
      this.dataSourceUsuarios.sort = this.sort;
      this.spinner.hide();
      console.log('data' + data);
      console.table(data);
    }
    )
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsuarios.filter = filterValue.trim().toLowerCase();
  }

  limpiar() {
    this.informacionCreacionFormGroup.reset();
  }

  
  guardarUsuario() {
    this.spinner.show();
    try {
      const nuevoRol: any = {
        nombreUsuario: this.informacionCreacionFormGroup.get('nombreUsuario').value,
        contrasena: this.informacionCreacionFormGroup.get('contrasena').value,
        telefonoUsuario: this.informacionCreacionFormGroup.get('telefonoUsuario').value,
        direccionUsuario: this.informacionCreacionFormGroup.get('direccionUsuario').value,
        estadoUsuario: this.informacionCreacionFormGroup.get('estadoUsuario').value ? 'Activo' : 'Inactivo',
        usuarioCrea: 'admin',
        usuarioModifica: 'admin',
        idAereopuerto: 1,
        idRol: 1,
      }
      console.log(nuevoRol);
      this.service.postData(this.service.BASE_URL_AEROPUERTO, 'creaRol',nuevoRol).toPromise().then(data => {
        console.log('datos a enviar',data);
        this.spinner.hide();
        this.limpiar();
        Swal.fire({
          titleText: `Se ha almacenado la información con éxito.`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false
        });
      }); 
    } catch (error) {
      console.log(error);
      this.spinner.hide();
      return Swal.fire({
        titleText: `Error al registrar datos, por favor intente en otro momento.`,
        icon: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
      
    }

  }

  


 /*  editarUsuario() {
      const datosEditar: any = {
        nombreUsuario: this.informacionCreacionFormGroup.get('nombreUsuario').value,
        contrasena: this.informacionCreacionFormGroup.get('contrasena').value,
        telefonoUsuario: this.informacionCreacionFormGroup.get('telefonoUsuario').value,
        direccionUsuario: this.informacionCreacionFormGroup.get('direccionUsuario').value,
        estadoUsuario: this.informacionCreacionFormGroup.get('estadoUsuario').value ? 'Activo' : 'Inactivo',
      }
      console.log('datos a actualizar',datosEditar);
      this.service.putData(this.service.BASE_URL_AEROPUERTO, 'actualizaRol',this.id,datosEditar).toPromise().then(data => {
        console.log('datos a enviar',data);
        this.spinner.hide();
        this.limpiar();
        Swal.fire({
          titleText: `Se ha almacenado la información con éxito.`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false
        });
      });
  } */

  /* Actualizar(roles: Roles) {
    console.log(roles);
    this.service.editarRol(roles,this.id)
      .subscribe(data => {
        
        Swal.fire({
          titleText: `Se actualizo el usuario con exito`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false,
          position: 'top',
        });
        this.router.navigate(['/dashboard']);
        
      })
  } */


  /* eliminarUsuario() {
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
  } */

}
