import { Component, OnInit } from '@angular/core';
import { aviones, nombreAereoLinea, nombreAereopuerto, tablaAviones } from 'src/app/clases/aviones';
import { AvionesService } from 'src/app/services/aviones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { AsientosService } from 'src/app/services/asientos.service';
import { asientos } from 'src/app/clases/asientos';

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.css']

})
export class AvionesComponent implements OnInit {

  listarAviones: tablaAviones[];
  listarNombreAereopuerto: nombreAereopuerto[] = [];
  listarNombreAereolinea: nombreAereoLinea[] = [];  

  informacionCreacionFormGroup: FormGroup;

  constructor(private avionesServicio: AvionesService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private asientoServicio: AsientosService) {

    this.informacionCreacionFormGroup = this.formBuilder.group({

      noPlaca: [null, Validators.required],
      capacidadAsientos: [null, Validators.required],
      estadoAvion: [true, Validators.required],
      dimensiones: [null, Validators.required],
      idAereolinea: [null, Validators.required],
      idAereopuerto: [null, Validators.required],

    })

  }


  ngOnInit(): void {
    this.traerAviones();
    this.traerNombreAereopuerto();
    this.traernombreAereolinea();
  }

  traerAviones() {
    this.avionesServicio.obtenerListaAviones().subscribe(Aviones => {
      this.listarAviones = Aviones;
      console.log(this.listarAviones, "este es el dato: ", Aviones)
    }


    )
  }

limpiarFormulario() {
    this.informacionCreacionFormGroup.reset();
  } 

  guardarAviones() {


    const nuevoAvion: any = {
      no_placa: this.informacionCreacionFormGroup.get('noPlaca').value,
      capacidad_asientos: this.informacionCreacionFormGroup.get('capacidadAsientos').value,
      estado_avion: this.informacionCreacionFormGroup.get('estadoAvion').value ? 'Activo' : 'Inactivo',
      dimensiones: this.informacionCreacionFormGroup.get('dimensiones').value,
      id_aereolinea: this.informacionCreacionFormGroup.get('idAereolinea').value,
      id_aereopuerto: this.informacionCreacionFormGroup.get('idAereopuerto').value
    }
    console.log(nuevoAvion);
    this.limpiarFormulario();
    this.avionesServicio.crearAvion(nuevoAvion).toPromise().then(AVION => {
      console.log(AVION);
      
      const Asiento:any={
        
        nombre_asiento: '',
        id_avion: AVION.id_avion,
        id_estado: 1
      }
      this.asientoServicio.crearAsientos(AVION.capacidad_asientos,AVION.id_avion, Asiento).toPromise().then(dato =>{
        Swal.fire({
          titleText: `Se ha almacenado la información con éxito.`
        })
      })

      
      Swal.fire({
        titleText: `Se ha almacenado la información con éxito.`,
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false
      });
    }, error => Swal.fire({
      titleText: `Error al registrar datos, por favor intente en otro momento.`,
      icon: 'error',
      showCloseButton: true,
      showConfirmButton: false
    }));

  }

  traerNombreAereopuerto() {
    this.avionesServicio.traerNombreAereopuerto().subscribe(nombreAereopuertos => {
      this.listarNombreAereopuerto = nombreAereopuertos;
      console.log(this.listarNombreAereopuerto, "estos son los aereopuertos: ")
    })
  }

  traernombreAereolinea() {
    this.avionesServicio.traerNombreAereolinea().subscribe(nombreAereolinea => {
      this.listarNombreAereolinea = nombreAereolinea;
      console.log(this.listarNombreAereolinea, "estos son los aereolineas: ")
    })
  }


}
