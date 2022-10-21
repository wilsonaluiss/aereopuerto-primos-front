import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Aviones } from 'src/app/clases/Aviones';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styles: [
  ]
})
export class AvionesComponent implements OnInit {

  displayedColumnsAviones: string[] = [
    'idAvion',
    'noPlaca',
    'capacidadAsientos',
    'dimensiones',
    'estadoAvion',
    'idAereolinea',
    'idAereopuerto',
    'acciones'];

  dataSourceAviones: MatTableDataSource<Aviones>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  avionesFormGroup: FormGroup;

  constructor(
    private service: ServiceService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) { 
    this.avionesFormGroup = new FormGroup({
      idAvion: this.formBuilder.control(''),
      noPlaca: this.formBuilder.control('', [Validators.required]),
      capacidadAsientos: this.formBuilder.control('', [Validators.required]),
      estadoAvion: this.formBuilder.control('', [Validators.required]),
      dimensiones: this.formBuilder.control('', [Validators.required]),
      idAereolinea: this.formBuilder.control('', [Validators.required]),
      idAereopuerto: this.formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit() {
    this.spinner.show();
    this.service.getData<Aviones[]>(this.service.BASE_URL_AEROPUERTO, '/obtenerAviones/todos').toPromise().then(data => {
      this.dataSourceAviones = new MatTableDataSource(data);
      this.dataSourceAviones.sort = this.sort;
      this.spinner.hide();
      console.log('data' + data);
      console.table(data);
    }
    )
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAviones.filter = filterValue.trim().toLowerCase();
  }

  limpiar() {
    this.avionesFormGroup.reset();
  }

  guardarAvion() {
    this.spinner.show();
    try {
      const nuevoAvion: any = {
        noPlaca: this.avionesFormGroup.get('noPlaca').value,
        capacidadAsientos: this.avionesFormGroup.get('capacidadAsientos').value,
        estadoAvion: this.avionesFormGroup.get('estadoAvion').value,
        dimensiones: this.avionesFormGroup.get('dimensiones').value,
        idAereolinea: 1,
        idAereopuerto: 1
      }
      console.log(nuevoAvion);
      this.service.postData(this.service.BASE_URL_AEROPUERTO, 'crearAvion', nuevoAvion).toPromise().then(data => {
        console.log('datos del avion',data);
        this.limpiar();
        this.spinner.hide();
        Swal.fire({
          icon: 'success',
          title: 'Guardado',
          text: 'Avion guardado correctamente',
          showCloseButton: true,
          showConfirmButton: false,
      });
      })
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
}
