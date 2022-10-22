import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { ServiceService } from 'src/app/services/service.service';
import { Vuelo } from 'src/app/clases/Vuelo';
import { PaseComponent } from './pase/pase.component';
import { AvionesService } from 'src/app/services/aviones.service';
import { nombreAereopuerto, nombreAvion } from 'src/app/clases/aviones';
declare var $: any;
@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @ViewChild('registroForm') registroForm?: PaseComponent | any;

  reserva = { sesion: {}, asientos: [] };

  listarAviones: nombreAvion[] = [];

  reservaFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  /* vueloFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    fechaRequisicion: ['', Validators.required],
  }); */

  pase: Vuelo;
  vueloFormGroup: FormGroup;
  AprobacionForm: FormGroup;
  asientoForm: FormGroup;

  asiento: boolean = false;

  isLinear = false;
  isEditable = true;

  columna: any[] = [];

  filas: any[] = [];

  asientos: any = 50;
  constructor(private _formBuilder: FormBuilder, private spinner: NgxSpinnerService, private service: ServiceService,
    private avionesServicio: AvionesService) { 
    this.vueloFormGroup = new FormGroup({
      origen: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      horaSalida: new FormControl(null, Validators.required),
      horaLlegada: new FormControl(null, Validators.required),
      /* costoAsientos: new FormControl('', [Validators.required]), */
    });

    this.reservaFormGroup = new FormGroup({
      id_avion: new FormControl('', [Validators.required]),
    });

    this.asientoForm = new FormGroup({
      ubicacionAsiento: new FormControl('', [Validators.required]),
      /* costoAsientos: new FormControl('', [Validators.required]), */
    });

    this.AprobacionForm = this._formBuilder.group({
      firstCtrl: [''],
    });
    

  }

  ngOnInit() {
    this.traerAvion();
    for (let index = 1; index < 7; index++) {

      this.columna.push(index);    

    }
    console.log(this.asientos/6)

    for (let index = 0; index <  this.asientos/6; index++) {

      this.filas.push(index);    

    }
    this.service.getData<any[]>(this.service.BASE_URL_AEROPUERTO, '/aviones/listarAviones').toPromise().then(data => {
      console.log('listar aviones',data);
    });
    
  }

  public limpiarForm(stepper: MatHorizontalStepper) {
    stepper.reset();
    this.onCancel.emit(null);
  }


  async GuardarDatos(value,stepper) {
    this.spinner.show();
    //const ubicacionAsiento = this.asientoForm.get("ubicacionAsiento").value;
    const asientos = JSON.stringify(this.reserva.asientos);
    try {
      const reserva: any = {
        origen:   this.vueloFormGroup.get('origen').value,
        destino: this.vueloFormGroup.get('destino').value,
        horaSalida:   moment(this.vueloFormGroup.get('horaSalida').value).add(1,'days').format('YYYY-MM-DD'),
        horaLlegada: moment(this.vueloFormGroup.get('horaLlegada').value).add(1,'days').format('YYYY-MM-DD'),
        costoAsientos:  1000,
        estadoVuelo: "Activo",
        usuarioCrea: "luis",
        usuarioModifica:  "luis",
        idAvion: this.reservaFormGroup.get('id_avion').value,
        idTripulacion: 3,
        ubicacionAsiento: this.reserva.asientos.map((item) => item.group + item.value),
        asientos: asientos,
        nombreAsiento: "Ejecutivo"
      }
      console.log('fecha sin hora',moment(this.vueloFormGroup.get('horaSalida').value).add(1,'days').format('YYYY-MM-DD HH:mm:ss'));
      console.log('fecha con hora',moment().add(1,'days').format('YYYY-MM-DD HH:mm:ss'));
      console.log(reserva);
      this.service.postData(this.service.BASE_URL_AEROPUERTO,'crearVuelo', reserva).toPromise().then((data: any) => {
        console.log(data);
        this.limpiarForm(stepper);
        this.spinner.hide();
        Swal.fire({
          title: 'Información',
          text: 'Se ha creado el vuelo correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.spinner.hide();
      });
      await this.generarPase();
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


  asientoStatus(event) {
    const group = event.path[1].id;
    const nodeSelected = $(`#${event.path[0].id}`);
    const value = nodeSelected[0].innerText;
    this.reserva.asientos.push({ group, value });

    nodeSelected.toggleClass('asientoLibre').toggleClass('asientoOcupado');
    if (nodeSelected.hasClass('asientoOcupado')) {

      if (this.asiento) {
        this.asiento = false;
      } else {
        this.asiento = true;
        this.asientoForm.get("ubicacionAsiento").setValue(group + value);
      }
    } else {
      if (!this.asiento) {
        this.asiento = true;

      } else {
        this.asiento = false;
      }
    }
    if (nodeSelected.hasClass('asientoLibre')) {
      this.reserva.asientos.forEach(element => {
        if (element.group === group && element.value === value) {
          this.reserva.asientos.splice(this.reserva.asientos.indexOf(element), 1);
          if (this.reserva.asientos.length <= 1) {
            this.reserva.asientos = [];
            this.asientoForm.get("ubicacionAsiento").setValue(null);
          }
        }
      });
    }
    console.log(this.reserva.asientos);
    console.log(group, nodeSelected, value);
    console.log(this.asientoForm.get("ubicacionAsiento").value);
  }


  async generarPase() {
    Swal.fire({
      title: "Generando Pase",
      allowEscapeKey: false,
      allowOutsideClick: false
    });
    Swal.showLoading();
    const pase = this.vueloFormGroup.value;
    const usuario = this.asientoForm.value;

    this.pase = await this.service.getData<any>(this.service.BASE_URL_AEROPUERTO, `/vuelo/info/${23}/${"'F3','F2'"}`).toPromise();

    /* this.pase.origen = boleto.nombrePasajero + " " + boleto.apellidoPasajero;
    this.pase.numeroVuelo = boleto.numeroVuelo;
    this.pase.numeroBoleto = "'N-'" + this.crearBoleto.idBoleto;
    this.pase.numeroBoleto2 = boleto.numeroVuelo;
    this.pase.horaAbordaje = moment(boleto.horaSalida).format('HH:mm');
    this.pase.fechaAbordaje = moment(boleto.horaSalida).format('DDMMMM');
    this.pase.horaAterrizaje = moment(boleto.horaLlegada).format('HH:mm');
    this.pase.origenVuelo = this.boleto2.origenVuelo;
    this.pase.destinoVuelo = this.boleto2.destinoVuelo;
    this.pase.numeroAsiento = usuario.numeroAsiento; */
    console.log('pase...',this.pase);

    setTimeout(() => {
      this.registroForm.onFinished(async () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: false,
          showLoaderOnConfirm: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: "success",
          iconHtml: '<span class="mat-icon notranslate material-icons mat-icon-no-color">upload</span>',
          title: 'Boleto Generado con exito'
        })

      });
      this.registroForm.generar();
    }, 1000)
  }

  traerAvion() {
    this.avionesServicio.traerAvion().subscribe(nombreAvion => {
      this.listarAviones = nombreAvion;
      console.log(this.listarAviones, "estos son los aviones: ")
    })
  }
}
