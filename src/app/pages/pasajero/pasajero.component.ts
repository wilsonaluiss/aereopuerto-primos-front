import { Component, OnInit } from '@angular/core';
import { asientos } from 'src/app/clases/asientos';
import { AsientosService } from 'src/app/services/asientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Vuelo } from 'src/app/clases/Vuelo';
import { VueloService } from 'src/app/services/vuelo.service';
import * as moment from 'moment';
import { MatStepper } from '@angular/material/stepper';
import { BoletoService } from 'src/app/services/boleto.service';
import Swal from 'sweetalert2';
import { MatButton } from '@angular/material/button';
import { boleto } from 'src/app/clases/boleto';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {
 asientosLista: asientos[];
listarVuelos: Vuelo[];
selectedSeats: any[]=[];

 displayedColumns: string[]=  ['A', 'B','C','D'];selectedFlight: any;
;
  
 dataSource = new MatTableDataSource()
 informacionCreacionFormGroup: FormGroup;

 
 
  constructor(private asientoServicio:AsientosService,
    private formBuilder: FormBuilder,
    private vueloSevicios: VueloService,
    private boletoServicio: BoletoService) {
      this.informacionCreacionFormGroup = this.formBuilder.group({

        idBoleto:[null, Validators.required],
        costoBoleto:[null, Validators.required],
        fechaHoraReserva:[null, Validators.required],
        cantidadEquipaje:[null, Validators.required],
          pesoEquipaje: [null, Validators.required],
          puertaEmbarque: [null, Validators.required],
          idAsiento:[null, Validators.required],
          idVuelo:[null, Validators.required],
          idCliente:[null, Validators.required],
      })

   }

  ngOnInit(): void {
   
    
  }

  isLinear:false

  

  limpiarFormulario() {
    this.informacionCreacionFormGroup.reset();
  } 


  hacerMatriz(id:any,stepper: MatStepper){
    this.selectedFlight= id.idVuelo
    this.asientoServicio.obtenerListaAsientos(id.idAvion).subscribe(Asientos => {
      this.asientosLista=Asientos;
      
      stepper.next();
      const sillas = []
      var iterador = 0;
      for (let f = 0; f < (this.asientosLista.length / 4); f++) {

        sillas[f] = {}
        for (let c = 0; c < 4; c++) {
          sillas[f][c] = this.asientosLista[iterador]
          iterador++;
        }
      }


      this.dataSource.data = sillas;
      
      console.log( this.dataSource.data)
    })
  }
  

traerVuelos(){
  this.vueloSevicios.obtenerListaVuelos().subscribe(Vuelos =>{
    this.listarVuelos=Vuelos;
    console.log(this.listarVuelos, "estos son los vuelos",Vuelos)
  })
}
  

seleccionarAvion(idAvion:number){
console.log(idAvion)
}


traerFecha(fechaSalida:Date){
  console.log(fechaSalida.getTime());
  console.log(moment(fechaSalida.getTime()).format('DD-MM-YYYY'));
  
  this.vueloSevicios.traerVueloFecha(moment(fechaSalida.getTime()).format('DD-MM-YYYY')).subscribe(data =>{
    this.listarVuelos=data;
    console.log(data);
    
  })
}

pruebita(e:any,a: MatButton){
console.log(e);
console.log(a);
a.disabled=true;

this.selectedSeats.push(e)


}


crearBoleto(){

  
const nuevoBoleto: boleto[]=this.selectedSeats.map( idAsiento => {
  const boleto:boleto={
    id_no_boleto:0,
    cantidad_equipaje: this.informacionCreacionFormGroup.get('cantidadEquipaje').value,
    peso_equipaje: this.informacionCreacionFormGroup.get('pesoEquipaje').value,
    puerta_embarque: 1,
    costo_boleto:1500,
    id_cliente:1,
    id_vuelo: this.selectedFlight,
    id_asiento: idAsiento,
    fecha_hora_reserva: new Date()
    }
    return boleto;
})

console.log(nuevoBoleto);
 this.limpiarFormulario(); 
 this.boletoServicio.crearBoleto(nuevoBoleto).toPromise().then(BOLETO =>{
  window.location.reload();
  Swal.fire({
    titleText: `Reserva realizada con exito.`,
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







