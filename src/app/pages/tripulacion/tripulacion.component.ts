import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AvionesService } from 'src/app/services/aviones.service';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {

  tripulacionFormGroup: FormGroup;
  aereolineas: any = [];

  usuarios: any = [];
  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService,
  ) {
    this.tripulacionFormGroup = new FormGroup({
      usuario: new FormControl(''),
      aereolinea: new FormControl(''),
    })
  }

  ngOnInit() {
    this.obtenerAereolineas();
    this.obtenerUsuarios();
  }



  obtenerAereolineas() {
    this.service.getData<any>(this.service.BASE_URL_AEROPUERTO, `aereolineas/listarAereolinea`).subscribe(data => {
      this.aereolineas = data;
      console.log(data);
    })
  }

  obtenerUsuarios() {
    this.service.getData<any>(this.service.BASE_URL_AEROPUERTO, `/obtenerUsuarios/todos`).subscribe(data => {
      this.usuarios = data;
      console.log(data);
    })
  }

  limpiarFormulario() {
    this.tripulacionFormGroup.reset();
  }

  agregarTripulacion() {
    try {
      const tripulacion: any = {
        idUsuario: this.tripulacionFormGroup.get('usuario').value,
        idAereolinea: this.tripulacionFormGroup.get('aereolinea').value,
      }
      console.log(tripulacion);
      this.service.postData(this.service.BASE_URL_AEROPUERTO, 'creaTripulacion', tripulacion).subscribe((response: any) => {
        console.log('datos a enviar', response);
        this.limpiarFormulario();
        if (response !== false) {
          Swal.fire({
            icon: 'success',
            title: 'Tripulacion creada correctamente',
            showCloseButton: true,
            showConfirmButton: false
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al crear la tripulacion',
            showCloseButton: true,
            showConfirmButton: false
          })
        }
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        titleText: `Error al registrar datos, por favor intente en otro momento.`,
        icon: 'error',
        showCloseButton: true,
        showConfirmButton: false
      });
    }
  }
}
