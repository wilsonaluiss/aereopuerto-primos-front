import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/clases/Vuelo';
import { VueloService } from 'src/app/services/vuelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  informacionCreacionFormGroup: FormGroup;
  listarVuelos: Vuelo[];
  

  constructor(private vueloSevicios: VueloService,
    private formBuilder: FormBuilder,) {
      this.informacionCreacionFormGroup = this.formBuilder.group({

        destino: [null, Validators.required],
        fechaSalida: [null, Validators.required],
        fechaLlegada: [null, Validators.required],
        costoAsientos: [null, Validators.required],
        estadoVuelo: [null, Validators.required],
       usuarioCrea: [null, Validators.required],
       usuarioModifica: [null, Validators.required],
       idAvion: [null, Validators.required],
       idTripulacion: [null, Validators.required],
      })

     }

  ngOnInit() {
    this.taerVuelos()
  }


  limpiarFormulario() {
    this.informacionCreacionFormGroup.reset();
  } 

  taerVuelos(){
    this.vueloSevicios.obtenerListaVuelos().subscribe(Vuelos =>{
      this.listarVuelos=Vuelos;
      console.log(this.listarVuelos, "estos son los vuelos",Vuelos)
    })
  }


  crearVuelo(){
    const nuevoVuelo: any={
      destino:this.informacionCreacionFormGroup.get('destino').value,
      fechaSalida:this.informacionCreacionFormGroup.get('fechaSalida').value,
      fechaLlegada:this.informacionCreacionFormGroup.get('fechaLlegada').value,
      costoAsientos:this.informacionCreacionFormGroup.get('costoAsientos').value,
      estadoVuelo: this.informacionCreacionFormGroup.get('estadoVuelo').value,
      usuarioCrea:'luis',
      usuarioModifica:'luis',
      idAvion:this.informacionCreacionFormGroup.get('idAvion').value,
      idTripulacion: this.informacionCreacionFormGroup.get('idTripulacion').value

    }
    console.log(nuevoVuelo);
    this.limpiarFormulario();
    this.vueloSevicios.crearVuelo(nuevoVuelo).toPromise().then(VUELO =>{


      Swal.fire({
        titleText: `Se ha almacenado la información con éxito.`,
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false
      });
    }),error => Swal.fire({
      titleText: `Error al registrar datos, por favor intente en otro momento.`,
      icon: 'error',
      showCloseButton: true,
      showConfirmButton: false
    });



  }


}
