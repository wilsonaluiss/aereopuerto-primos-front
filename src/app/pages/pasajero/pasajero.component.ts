import { Component, OnInit } from '@angular/core';
import { asientos } from 'src/app/clases/asientos';
import { AsientosService } from 'src/app/services/asientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {
 asientosLista: asientos[];


 displayedColumns: string[]=  ['A', 'B'];;
  
 dataSource = new MatTableDataSource()
 informacionCreacionFormGroup: FormGroup;

 
  constructor(private asientoServicio:AsientosService,
    private formBuilder: FormBuilder) {
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
    this.hacerMatriz(1)
  }

  isLinear:false

  
  hacerMatriz(id:number){

    this.asientoServicio.obtenerListaAsientos(id).subscribe(Asientos => {
      this.asientosLista=Asientos;

      const sillas = []
      var iterador = 0;
      for (let f = 0; f < (this.asientosLista.length / 2); f++) {

        sillas[f] = {}
        for (let c = 0; c < 2; c++) {
          sillas[f][c] = this.asientosLista[iterador]
          iterador++;
        }
      }


      this.dataSource.data = sillas;
      
      console.log( this.dataSource.data)
    })
  }
  


  








}
