import { Component, OnInit } from '@angular/core';
import { asientos } from 'src/app/clases/asientos';
import { AsientosService } from 'src/app/services/asientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Vuelo } from 'src/app/clases/Vuelo';
import { VueloService } from 'src/app/services/vuelo.service';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {
 asientosLista: asientos[];
listarVuelos: Vuelo[];

 displayedColumns: string[]=  ['A', 'B','C','D'];;
  
 dataSource = new MatTableDataSource()
 informacionCreacionFormGroup: FormGroup;

 
  constructor(private asientoServicio:AsientosService,
    private formBuilder: FormBuilder,
    private vueloSevicios: VueloService) {
      this.informacionCreacionFormGroup = this.formBuilder.group({

        idBoleto:[null, Validators.required],
        costoBoleto:[null, Validators.required],
        fechaHoraReserva:[null, Validators.required],
        cantidadEquipajes:[null, Validators.required],
          pesoEquipaje: [null, Validators.required],
          puertaEmbarque: [null, Validators.required],
          idAsiento:[null, Validators.required],
          idVuelo:[null, Validators.required],
          idCliente:[null, Validators.required],
      })

   }

  ngOnInit(): void {
   
    this.traerVuelos()
  }

  isLinear:false

  
  hacerMatriz(id:number){

    this.asientoServicio.obtenerListaAsientos(id).subscribe(Asientos => {
      this.asientosLista=Asientos;

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







}
